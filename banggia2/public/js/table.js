class PTable extends React.Component {
  render() {
    return (
      <div>
        <PHead></PHead>
        <PBody></PBody>
      </div>
    )
  }
}

class PHead extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

class PBody extends React.Component {
  render() {
    const rows = []; //TODO
    return (
      <div>
        {rows}
      </div>
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
    return {oldPrice: old.price, ceiling: old.ceiling, floor: old.floor, price}
  }

  render() {
    return (
      <div>
        <NameCell code={this.props.code}/>
        <OldPriceGroup/>
        <BuyPriceGroup {...this.props.buy}/>
        <MatchPriceGroup {...this.props.match}/>
        <SellPriceGroup {...this.props.sell}/>
        <Stats {...this.props.stats}/>
      </div>
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
      <div>{this.props.code}</div>
    );
  }
}
