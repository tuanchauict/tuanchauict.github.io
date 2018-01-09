import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ColGroup, PHead} from './TableHeader'
import {getPriceColor, roundAmount, roundPrice} from '../Utils'

export default class PTable extends Component {
  static propTypes = {
    priceTable: PropTypes.array
  }

  render() {
    return (
      <table className="listStock" cellPadding="0" cellSpacing="0">
        <ColGroup/>
        <PHead/>
        <Rows priceTable={this.props.priceTable}/>
      </table>
    )
  }
}

class Rows extends Component {
  static propTypes = {
    priceTable: PropTypes.array
  }

  render() {
    const data = this.props.priceTable;
    const rows = data.map((row) => {
      return <Row key={row.code} {...row}/>
    }); //TODO

    return (
      <tbody >
        {rows}
      </tbody>
    )
  }
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

const BuySellGroup = props => (
  <React.Fragment>
    <PriceAmountGroup type={props.type} {...props.three} />
    <PriceAmountGroup type={props.type} {...props.two} />
    <PriceAmountGroup type={props.type} {...props.one} />
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
    const change = this.context.currentPrice - this.context.oldPrice;
    return (
      <td className={cls}>{roundPrice(change)}</td>
    );
  }
}

const Stat = props => (
  <React.Fragment>
    <StatTotalAmount amount={props.totalAmount}/>
    <StatPrices {...props.match}/>
    <ForeignGroup {...props.foreign}/>
  </React.Fragment>
)

const StatPrices = props => (
  <React.Fragment>
    <PriceCell price={props.high}/>
    <PriceCell price={props.average}/>
    <PriceCell price={props.low}/>
  </React.Fragment>
)

const ForeignGroup = props => (
  <React.Fragment>
    <ForeignAmount amount={props.buy}/>
    <ForeignAmount amount={props.sell}/>
  </React.Fragment>
)

class ForeignAmount extends Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td>{roundAmount(this.props.amount)}</td>
    )
  }
}

class StatTotalAmount extends Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td className="group0 e">{roundAmount(this.props.amount)}</td>
    )
  }
}