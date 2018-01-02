class Stats extends React.Component {
  static propTypes = {
    totalAmount: PropTypes.number,
    match: PropTypes.shape({average: PropTypes.number, high: PropTypes.number, low: PropTypes.number}),
    foreign: PropTypes.shape({buy: PropTypes.number, sell: PropTypes.number})
  }

  render() {
    return (
      <div style={{color: '#00f'}}>
        <StatTotalAmount amount={this.props.totalAmount}/>
        <StatMatchPrice {...this.props.match}/>
        <StatForeignAmount {...this.props.foreign}/>
      </div>
    )
  }
}

class StatTotalAmount extends React.Component {
  static propTypes = {
    amount: PropTypes.number
  }

  render() {
    return (
      <div>{this.props.amount}</div>
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
        <PriceCell price={this.props.high}/>
        <PriceCell price={this.props.average}/>
        <PriceCell price={this.props.low}/>
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