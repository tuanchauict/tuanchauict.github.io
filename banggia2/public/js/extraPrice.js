class BuyPriceGroup extends React.Component {
  static propTypes = {
    one: PropTypes.object,
    two: PropTypes.object,
    three: propTypes.object,
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
    one: PropTypes.object,
    two: PropTypes.object,
    three: propTypes.object,
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
    amount: PropTypes.number,
  };
  
  render() {
    <div>
      <PriceCell price={this.props.price}/>
      <AmountCell {...this.props}/>
    </div>
  }
}

