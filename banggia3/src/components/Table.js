import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getPriceColor, roundAmount, roundPrice} from '../Utils'
import {store} from '../reducers/store'
import {deleteStocks, swapStocks} from '../actions/actions'
import {DragDropContext, DragSource, DropTarget} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const PTable = ({rows}) => (
  <table className="listStock" cellPadding="0" cellSpacing="0">
    <Header/>
    <DraggableRows rows={rows}/>
  </table>
)

export default PTable

class Rows extends Component {
  
  
  moveRow = (dragCode, hoverCode) => {
    store.dispatch(swapStocks(dragCode, hoverCode))
  }
  
  render() {
    const rows = this.props.rows
    return (
      <tbody >
        {
          rows.map(row => (<DraggbleRow key={row.code} {...row} moveRow={this.moveRow}/>))
        }
      </tbody>
    )
  }
  
}

const DraggableRows = DragDropContext(HTML5Backend)(Rows)

const rowSource = {
  beginDrag(props) {
    return {code: props.code}
  },
}

const rowTarget = {
  hover(props, monitor) {
    const draggedCode = monitor.getItem().code
    if (draggedCode !== props.code) {
      props.moveRow(draggedCode, props.code)
    }
  }
}

const sourceCollect = (connect, monitor) => (
  {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
)

const targetCollect = (connect) => ({
  connectDropTarget: connect.dropTarget()
})



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
    code: PropTypes.string,
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  getChildContext() {
    const old = this.props.oldPrice;
    const price = this.props.match.price;
    return {code: this.props.code, oldPrice: old.price, ceiling: old.ceiling, floor: old.floor, currentPrice: price}
  }

  render() {
    const {
      code,
      buy,
      sell,
      match,
      stats,
      connectDragSource,
      connectDropTarget,
      isDragging,
    } = this.props
    
    const opacity = isDragging ? 0.3 : 1
  
    return connectDragSource(connectDropTarget(
      <tr className="row" style={{opacity}}>
        <NameCell code={code}/>
        <OldPriceGroup/>
        <BuySellGroup type="b" one={buy.one} two={buy.two} three={buy.three}/>
        <MatchGroup {...match}/>
        <BuySellGroup type="s" one={sell.three} two={sell.two} three={sell.one}/>
        <Stat {...stats}/>
      </tr>
    ))
  }
}

const DraggbleRow = DropTarget('row', rowTarget, targetCollect)(DragSource('row', rowSource, sourceCollect)(Row))

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
  
  handleCloseClick = () => {
    store.dispatch(deleteStocks([this.props.code]))
  }
  
  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, ctx.currentPrice)
    const cls = ["group0", "text", "movable", changeColor].join(' ');
    
    return (
      <td className={cls} style={{position: 'relative'}}>
        <span className="text link">{this.props.code}</span>
        <i className="close" title="Remove" onClick={this.handleCloseClick}>&times;</i>
      </td>
    );
  }
}

const OldPriceGroup = props => (
  <React.Fragment>
    <CeilingCell/>
    <OldPriceCell/>
    <FloorCell/>
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
    <PriceAmountGroup type="group0" {...props}/>
    <ChangeCell/>
  </React.Fragment>
)

const BuySellGroup = ({type, one, two, three}) => (
  <React.Fragment>
    <PriceAmountGroup type={type} {...three}/>
    <PriceAmountGroup type={type} {...two}/>
    <PriceAmountGroup type={type} {...one}/>
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
  
  lastChange = {
    value: -1,
    time: Date.now()
  }
  
  componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
  }
  
  render() {
    const ctx = this.context
    const price = this.props.price
    if (isNaN(price) || price === undefined) {
      return (
        <td></td>
      )
    }
      
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, price)
    const cls = [this.props.type, changeColor]
    if (this.lastChange.value !== price) {
      cls.push('change')
      this.lastChange = {
        value: price,
        time: Date.now()
      }
      
      this._timeout = setTimeout(this.rerender, 1000)
    } else if(Date.now() - this.lastChange.time < 1000){
      cls.push('change')
    }
    return (
      <td className={cls.join(' ')}>
        {roundPrice(price)}
      </td>
    );
  }
  
  rerender = () => {
    try{
      this.forceUpdate()
    } catch(e){
      
    }
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

  lastChange = {
    value: -1,
    time: Date.now()
  }
  
  componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
  }
  
  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, this.props.price)
    const cls = [this.props.type, changeColor]
    const amount = this.props.amount
    
    if (isNaN(amount) || amount === undefined) {
      return (
        <td></td>
      )
    }
    
    if (amount !== this.lastChange.value) {
      cls.push('change')
      this.lastChange = {
        value: amount,
        time: Date.now(),
      }
      this._timeout = setTimeout(this.rerender, 1000)
    } else if(Date.now() - this.lastChange.time < 1000) {
      cls.push('change')
    }
    
    return (
      <td className={cls.join(' ')}>{roundAmount(amount)}</td>
    )
  }
  
  rerender = () => {
    this.forceUpdate()
  }
}

class ChangeCell extends Component {
  static contextTypes = {
    code: PropTypes.string,
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;    
    const change = ctx.currentPrice === undefined || ctx.oldPrice === undefined || isNaN(ctx.currentPrice)
      ? undefined
      : ctx.currentPrice - ctx.oldPrice;
      
    if (change === undefined || change === 0 || isNaN(change)){
      return <td className='group0 text e'><span style={{fontFamily: 'monospace'}}>{ctx.code}</span></td>
    } 
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, ctx.currentPrice)
    const cls = ["group0", "text", changeColor].join(' ')
    const symbol = change > 0 ?'▲' : '▼'
    const percent = Math.round(Math.abs(change) * 10000 / ctx.oldPrice)/100
    return (
      <td className={cls}><span style={{fontFamily: 'monospace'}}>{ctx.code}</span> {roundPrice(change)}{symbol}{percent}%</td>
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

const ForeignAmount = ({amount}) => (
  <td className="q">{roundAmount(amount)}</td>
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
