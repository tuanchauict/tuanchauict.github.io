import React, {} from 'react';
import {roundAmount, formatNumber} from '../Utils'

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
  amount,
  volume,
}) => {
  const cls = change === 0 ? 'e' : change > 0 ? 'i' : 'd'
  const char = change === 0 ? '≈' : change > 0 ? '▲' : '▼'
  return (
    <div className='index'>
      <div >
        <b className='name' >{code}</b>
        <span className={cls}>{index}  &nbsp;{char}{change} ({changeRate}%)</span>
      </div>
      <div className='volume' >{roundAmount(amount)} cp • {formatNumber(volume/1000, 3)} tỷ</div>
    </div>
  )
}

