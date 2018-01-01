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
    oldPrice: PropTypes.object,
    match: PropTypes.object,
    buy: PropTypes.arrayOf(PropTypes.object),
    sell: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.object
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
