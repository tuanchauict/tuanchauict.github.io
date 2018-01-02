class Stats extends React.Component {
  static propTypes = {
    totalAmount: PropTypes.number,
    match: PropTypes.shape({average: PropTypes.number, high: PropTypes.number, low: PropTypes.number}),
    foreign: PropTypes.shape({buy: PropTypes.number, sell: PropTypes.number})
  }

  render() {
    return (
      <div>
        <StatTotalAmount amount={this.props.totalAmount}/>
        <StatMatchPrice {...this.props.match}/>
        <StatForeignAmount {...this.props.foreign}/>
      </div>
    )
  }
}

class StatTotalAmount extends React.Component {
  static propTypes = {
    totalAmount: PropTypes.number
  }

  render() {
    return (
      <div>{this.props.totalAmount}</div>
    )
  }
}

class StatMatchPrice extends React.Component {
  static propTypes = {
    average: PropTypes.number,
    high: PropTypes.number,
    low: PropTypes.number
  }

  render() {
    return (
      <div>
        <PriceCell price={this.high}/>
        <PriceCell price={this.average}/>
        <PriceCell price={this.low}/>
      </div>
    )

  }
}

class StatForeignAmount extends React.Component {
  static propTypes = {
    buy: PropTypes.number,
    sell: PropTypes.number
  }

  render() {
    return (
      <div>
        <ForeignAmount amount={this.props.buy}/>
        <ForeignAmount amount={this.props.sell}/>
      </div>
    )
  }
}

class ForeignAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <div>{this.props.amount}</div>
    )
  }
}