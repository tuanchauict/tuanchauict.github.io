class PTable extends React.Component {
  render() {
    return (
      <table className="listStock" cellPadding="0" cellSpacing="0">
        <ColGroup/>
        <PHead/>
        <PBody/>
      </table>
    )
  }
}

class PBody extends React.Component {
  render() {
    const data = priceTable;
    const rows = data.map((row) => {
      return <BRow key={row.code} {...row}/>
    }); //TODO

    return (
      <tbody >
        {rows}
      </tbody>
    )
  }
}

class BRow extends React.Component {
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
    const match = this.props.match;
    const sell = this.props.sell;
    const stats = this.props.stats;

    return (
      <tr className="row">
        <NameCell code={this.props.code}/>
        <CeilingCell key="ceiling"/>
        <OldPriceCell key="oldprice"/>
        <FloorCell key="floor"/>

        <PriceCell type="b" price={buy.three.price}/>
        <AmountCell type="b" {...buy.three}/>
        <PriceCell type="b" price={buy.two.price}/>
        <AmountCell type="b" {...buy.two}/>
        <PriceCell type="b" price={buy.one.price}/>
        <AmountCell type="b" {...buy.one}/>

        <PriceCell type="group0" price={match.price}/>
        <AmountCell type="group0" {...match}/>
        <ChangeCell/>
        

        <PriceCell type="s" price={sell.one.price}/>
        <AmountCell type="s" {...sell.one}/>
        <PriceCell type="s" price={sell.two.price}/>
        <AmountCell type="s" {...sell.two}/>
        <PriceCell type="s" price={sell.three.price}/>
        <AmountCell type="s" {...sell.three}/>

        <StatTotalAmount amount={stats.totalAmount}/>
        <PriceCell price={stats.match.high}/>
        <PriceCell price={stats.match.average}/>
        <PriceCell price={stats.match.low}/>

        <ForeignAmount amount={stats.foreign.buy}/>
        <ForeignAmount amount={stats.foreign.sell}/>
      </tr>
    )
  }
}

class NameCell extends React.Component {
  static propTypes = {
    code: PropTypes.string,
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
    
    return (
      <td className="group0 text movable" className={changeColor}>
        <span className="text link">{this.props.code}</span>
        <i className="close" title="Remove"></i>
      </td>
    );
  }
}

class CeilingCell extends React.Component {
  static contextTypes = {
    ceiling: PropTypes.number
  };

  render() {
    return (
      <td className="group0 c">{roundPrice(this.context.ceiling)}</td>
    );
  }
}

class FloorCell extends React.Component {
  static contextTypes = {
    floor: PropTypes.number
  };

  render() {
    return (
      <td className="group0 f">{roundPrice(this.context.floor)}</td>
    );
  }
}

class OldPriceCell extends React.Component {
  static contextTypes = {
    oldPrice: PropTypes.number
  };

  render() {
    return (
      <td className="group0 e">{roundPrice(this.context.oldPrice)}</td>
    );
  }
}

class PriceCell extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    type: PropTypes.string,
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
    
    return (
      <td 
        className={this.props.type}
        className={changeColor}
      >
        {roundPrice(this.props.price)}
      </td>
    );
  }
}

class AmountCell extends React.Component {
  static propTypes = {
    amount: PropTypes.number,
    price: PropTypes.number,
    type: PropTypes.string,
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
    
    return (
      <td className={this.props.type} className={changeColor}>{roundAmount(this.props.amount)}</td>
    )
  }
}

class ChangeCell extends React.Component {
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    const ctx = this.context;
    const changeColor = getPriceColor(ctx.ceiling, ctx.floor, ctx.oldPrice, ctx.currentPrice)
    
    const change = this.context.currentPrice - this.context.oldPrice;
    return (
      <td className="group0 text" className={changeColor} >{roundPrice(change)}</td>
    );
  }
}

class ForeignAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td>{roundAmount(this.props.amount)}</td>
    )
  }
}

class StatTotalAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td className="group0 e">{roundAmount(this.props.amount)}</td>
    )
  }
}