import React, {Component} from 'react';

export default class MarketInfo extends Component {
  state = {
    indexes: []
  }

  componentDidMount() {
    fetch('http://banggia.cafef.vn/stockhandler.ashx?index=true')
    .then(res => res.json())
    .then(indexes => {
      indexes = [indexes[1], indexes[4], indexes[0], indexes[2], indexes[3]]
      this.setState({
        indexes
      })
    })
    this.interval = setInterval(() => {
      const date = new Date()
      if (date.getHours() >= 15 || date.getHours() < 9)
        return
      fetch('http://banggia.cafef.vn/stockhandler.ashx?index=true')
        .then(res => res.json())
        .then(indexes => {
          indexes = [indexes[1], indexes[4], indexes[0], indexes[2], indexes[3]]
          this.setState({
            indexes
          })
        })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='indexBlock'>
        {this.state.indexes.map(index => <IndexInfo key={index.name} {...index}/>)}
      </div>
    )
  }

}

const IndexInfo = ({
  name,
  index,
  change,
  percent,
  volume,
  value
}) => {
  const cls = change === 0 ? 'e' : change > 0 ? 'i' : 'd'
  const char = change === 0 ? '≈' : change > 0 ? '▲' : '▼'
  return (
    <div className='index'>
      <div >
        <b className='name' >{name}</b>
        <span className={cls}>{index}  &nbsp;{char}{change} ({percent}%)</span>
      </div>
      <div className='volume' >{volume} cp • {value} tỷ</div>
    </div>
  )
}
