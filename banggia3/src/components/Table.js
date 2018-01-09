import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getPriceColor, roundAmount, roundPrice} from '../Utils'

const PTable = ({rows}) => (
  <table className="listStock" cellPadding="0" cellSpacing="0">
    <Header />
    <Rows rows={rows}/>
  </table>
)

export default PTable

const Rows = ({rows}) => {
  return (
    <tbody >
      {
        rows.map(row => (
          <Row key={row.code} {...row}/>
        ))
      }
    </tbody>
  )
}

class Row extends Component {
  static propTypes = {
    code: PropTypes.string,
    name: PropTypes.string,
    oldPrice: PropTypes.shape({oldPrice: PropTypes.number, ceiling: PropTypes.number, floor: PropTypes.number}),
    match: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
    buy: PropTypes
      .PropTypes
      .shape({
        one: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
        two: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
        three: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number})
      }),
    sell: PropTypes
      .PropTypes
      .shape({
        one: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
        two: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
        three: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number})
      }),
    stats: PropTypes.shape({
      totalAmount: PropTypes.number,
      match: PropTypes.shape({average: PropTypes.number, high: PropTypes.number, low: PropTypes.number}),
      foreign: PropTypes.shape({buy: PropTypes.number, sell: PropTypes.number})
    })
  };

  static childContextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  getChildContext() {
    const old = this.props.oldPrice;
    const price = this.props.match.price;
    return {oldPrice: old.price, ceiling: old.ceiling, floor: old.floor, currentPrice: price}
  }

  render() {
    const buy = this.props.buy;
    const sell = this.props.sell;

    return (
      <tr className="row">
        <NameCell code={this.props.code}/>
        <OldPriceGroup />
        <BuySellGroup type="b" one={buy.one} two={buy.two} three={buy.three} />
        <MatchGroup {...this.props.match} />
        <BuySellGroup type="s" one={sell.three} two={sell.two} three={sell.one} />
        <Stat {...this.props.stats} />
      </tr>
    )
  }
}

class NameCell extends Component {
  static propTypes = {
    code: PropTypes.string
  }
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, ctx.currentPrice)
    const cls = ["group0", "text", "movable", changeColor].join(' ');
    return (
      <td className={cls}>
        <span className="text link">{this.props.code}</span>
        <i className="close" title="Remove"></i>
      </td>
    );
  }
}

const OldPriceGroup = props => (
  <React.Fragment>
    <CeilingCell />
    <OldPriceCell />
    <FloorCell />
  </React.Fragment>
)

class CeilingCell extends Component {
  static contextTypes = {
    ceiling: PropTypes.number
  };

  render() {
    return (
      <td className="group0 c">{roundPrice(this.context.ceiling)}</td>
    );
  }
}

class FloorCell extends Component {
  static contextTypes = {
    floor: PropTypes.number
  };

  render() {
    return (
      <td className="group0 f">{roundPrice(this.context.floor)}</td>
    );
  }
}

class OldPriceCell extends Component {
  static contextTypes = {
    oldPrice: PropTypes.number
  };

  render() {
    return (
      <td className="group0 e">{roundPrice(this.context.oldPrice)}</td>
    );
  }
}

const MatchGroup = props => (
  <React.Fragment>
    <PriceAmountGroup type="group0" {...props} />
    <ChangeCell/>
  </React.Fragment>
)

const BuySellGroup = ({type, one, two, three}) => (
  <React.Fragment>
    <PriceAmountGroup type={type} {...three} />
    <PriceAmountGroup type={type} {...two} />
    <PriceAmountGroup type={type} {...one} />
  </React.Fragment>
)

const PriceAmountGroup = props => (
  <React.Fragment>
    <PriceCell {...props}/>
    <AmountCell {...props}/>
  </React.Fragment>
)

class PriceCell extends Component {
  static propTypes = {
    price: PropTypes.number,
    type: PropTypes.string
  };
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, this.props.price)
    const cls = [this.props.type, changeColor].join(' ');
    return (
      <td className={cls}>
        {roundPrice(this.props.price)}
      </td>
    );
  }
}

class AmountCell extends Component {
  static propTypes = {
    amount: PropTypes.number,
    price: PropTypes.number,
    type: PropTypes.string
  };

  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, this.props.price)
    const cls = [this.props.type, changeColor].join(' ')
    return (
      <td className={cls}>{roundAmount(this.props.amount)}</td>
    )
  }
}

class ChangeCell extends Component {
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, ctx.currentPrice)
    const cls = ["group0", "text", changeColor].join(' ')
    
    const change = this.context.currentPrice === undefined || this.context.oldPrice === undefined ? undefined : this.context.currentPrice - this.context.oldPrice;
    return (
      <td className={cls}>{roundPrice(change)}</td>
    );
  }
}

const Stat = ({totalAmount, match, foreign}) => (
  <React.Fragment>
    <StatTotalAmount amount={totalAmount}/>
    <StatPrices {...match}/>
    <ForeignGroup {...foreign}/>
  </React.Fragment>
)

const StatPrices = ({high, average, low}) => (
  <React.Fragment>
    <PriceCell price={high}/>
    <PriceCell price={average}/>
    <PriceCell price={low}/>
  </React.Fragment>
)

const ForeignGroup = ({buy, sell}) => (
  <React.Fragment>
    <ForeignAmount amount={buy}/>
    <ForeignAmount amount={sell}/>
  </React.Fragment>
)

const ForeignAmount = (amount) => (
  <td>{roundAmount(amount)}</td>
)

const StatTotalAmount = ({amount}) => (
  <td className="group0 e">{roundAmount(amount)}</td>
)

const Header = () => (
  <React.Fragment>
    <colgroup>
      <col className="col1"/>
      <col className="col2"/>
      <col className="col3"/>
      <col className="col4"/>
      <col className="col5"/>
      <col className="col6"/>
      <col className="col7"/>
      <col className="col8"/>
      <col className="col9"/>
      <col className="col10"/>
      <col className="col11"/>
      <col className="col12"/>
      <col className="col13"/>
      <col className="col14"/>
      <col className="col15"/>
      <col className="col16"/>
      <col className="col17"/>
      <col className="col18"/>
      <col className="col19"/>
      <col className="col20"/>
      <col className="col21"/>
      <col className="col22"/>
      <col className="col23"/>
      <col className="col24"/>
      <col className="col25"/>
      <col className="col26"/>
    </colgroup>
    <thead>
      <tr className="header">
        <td className="group0" nowrap="" rowSpan="2">Mã<br/>CK</td>
        <td className="group0" nowrap="" rowSpan="2">Trần</td>
        <td className="group0" rowSpan="2">TC</td>
        <td className="group0" nowrap="" rowSpan="2">Sàn</td>
        <td colSpan="6">Dư mua</td>
        <td colSpan="3" className="group0">Khớp lệnh</td>
        <td colSpan="6">Dư bán</td>
        <td className="group0" rowSpan="2">Tổng<br/>KL</td>
        <td className="group0" colSpan="3">Giá khớp</td>
        <td rowSpan="2">NN<br/>mua</td>
        <td rowSpan="2">NN<br/>bán</td>
      </tr>
      <tr className="header">
          <td>Giá3</td>
          <td>KL 3</td>
          <td>Giá2</td>
          <td>KL 2</td>
          <td>Giá1</td>
          <td>KL 1</td>
          <td className="group0">Giá</td>
          <td className="group0">KL</td>
          <td className="group0">Thay đổi</td>
          <td>Giá1</td>
          <td>KL 1</td>
          <td>Giá2</td>
          <td>KL 2</td>
          <td>Giá3</td>
          <td>KL 3</td>
          <td className="group0">Cao</td>
          <td className="group0">TB</td>
          <td className="group0">Thấp</td>
      </tr>
    </thead>
  </React.Fragment>
)