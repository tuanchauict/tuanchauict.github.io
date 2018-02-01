import React, {} from 'react';

const MarketInfo = ({indexes}) => {
  return (
    <div className='indexBlock'>
        {indexes.map(index => <IndexInfo key={index.code} {...index}/>)}
      </div>
  )
}

export default MarketInfo

const IndexInfo = ({
  code,
  index,
  change,
  changeRate,
  volume,
  value
}) => {
  const cls = change === 0 ? 'e' : change > 0 ? 'i' : 'd'
  const char = change === 0 ? '≈' : change > 0 ? '▲' : '▼'
  return (
    <div className='index'>
      <div >
        <b className='name' >{code}</b>
        <span className={cls}>{index}  &nbsp;{char}{change} ({changeRate}%)</span>
      </div>
      <div className='volume' >{volume} cp • {value} tỷ</div>
    </div>
  )
}

