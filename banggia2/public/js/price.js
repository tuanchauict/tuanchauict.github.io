class MatchPriceGroup extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    amount: PropTypes.number
  };

  render() {
    return (
      <div>
        <ChangeCell/>
        <PriceGroup {...this.props}/>
      </div>
    )
  }
}

class BuyPriceGroup extends React.Component {
  static propTypes = {
    one: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
    two: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
    three: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
  };

  render() {
    return (
      <div>
        <PriceGroup {...this.props.three}/>
        <PriceGroup {...this.props.two}/>
        <PriceGroup {...this.props.one}/>
      </div>
    )
  }
}

class SellPriceGroup extends React.Component {
  static propTypes = {
    one: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
    two: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
    three: PropTypes.shape({price: PropTypes.number, amount: PropTypes.number}),
  };

  render() {
    return (
      <div>
        <PriceGroup {...this.props.one}/>
        <PriceGroup {...this.props.two}/>
        <PriceGroup {...this.props.three}/>
      </div>
    );
  }
}

class PriceGroup extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    amount: PropTypes.number
  };

  render() { < div > <PriceCell price={this.props.price}/> < AmountCell {
      ...this.props
    } /> </div>
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
    const change = this.context.price - this.context.oldPrice;
    return (
      <div>{change}</div>
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
      <div>{this.props.price}</div>
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
      <div>{this.props.amount}</div>
    )
  }
}
