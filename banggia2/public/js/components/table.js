class PTable extends React.Component {
  render() {
    return (
      <table>
        <PHead></PHead>
        <PBody></PBody>
      </table>
    )
  }
}

class PHead extends React.Component {
  render() {
    return (
      <thead></thead>
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
        
        <PriceCell price={buy.three.price}/>
        <AmountCell {...buy.three}/>
        <PriceCell price={buy.two.price}/>
        <AmountCell {...buy.two}/>
        <PriceCell price={buy.one.price}/>
        <AmountCell {...buy.one}/>
        
        <ChangeCell />
        <PriceCell price={match.price} />
        <AmountCell {...match} />
        
        <PriceCell price={sell.one.price}/>
        <AmountCell {...sell.one}/>
        <PriceCell price={sell.two.price}/>
        <AmountCell {...sell.two}/>
        <PriceCell price={sell.three.price}/>
        <AmountCell {...sell.three}/>
        
        <StatTotalAmount amount={stats.totalAmount}/>
        <PriceCell price={stats.match.high} />
        <PriceCell price={stats.match.average} />
        <PriceCell price={stats.match.low} />
        
        <ForeignAmount amount={stats.foreign.buy} />
        <ForeignAmount amount={stats.foreign.sell} />
      </tr>
    )
  }
}

class NameCell extends React.Component {
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.props.code}</td>
    );
  }
}

class CeilingCell extends React.Component {
  static contextTypes = {
    ceiling: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.context.ceiling}</td>
    );
  }
}

class FloorCell extends React.Component {
  static contextTypes = {
    floor: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.context.floor}</td>
    );
  }
}

class OldPriceCell extends React.Component {
  static contextTypes = {
    oldPrice: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.context.oldPrice}</td>
    );
  }
}

class PriceCell extends React.Component {
  static propTypes = {
    price: PropTypes.number
  };
  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.props.price}</td>
    );
  }
}

class AmountCell extends React.Component {
  static propTypes = {
    amount: PropTypes.number,
    price: PropTypes.number
  };

  static contextTypes = {
    oldPrice: PropTypes.number,
    ceiling: PropTypes.number,
    floor: PropTypes.number,
    currentPrice: PropTypes.number
  };

  render() {
    return (
      <td className="column">{this.props.amount}</td>
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
    const change = this.context.currentPrice - this.context.oldPrice;
    return (
      <td className="column">{change}</td>
    );
  }
}

class ForeignAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td>{this.props.amount}</td>
    )
  }
}

class StatTotalAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <td>{this.props.amount}</td>
    )
  }
}