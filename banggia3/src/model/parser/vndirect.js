import {PRICE_ATC, PRICE_ATO, PRICE_UNDEFINED} from '../../constants/prices'
import {getStockInfo} from '../../reducers/store'

export function parseStockData(data) {
  const stockData = {}
  for (let k in data) {
    if (!data.hasOwnProperty(k)){
      continue
    }
    const stock = mapDataToModel(data[k])
    stockData[stock.code] = stock
  }
  return stockData
}

export function parseSingleStockData(data) {
  const stock = mapDataToModel(data)
  const stockData = {}
  stockData[stock.code] = stock
  return stockData
}

function mapDataToModel(raw) {
  const arr = raw.split('|')
  const code = arr[3]
  const value = {
    code: code,
    name: getStockInfo(code).companyName,
    oldPrice: {
      ceiling: parseFloat(arr[15]),
      floor: parseFloat(arr[16]),
      price: parseFloat(arr[8]),
    },
    stats: {
      totalAmount: parseInt(arr[36], 10),
      match: {
        average: arr[0] === '10' ? parseFloat(arr[39]) : parseFloat(arr[22]),
        high: parseFloat(arr[13]),
        low: parseFloat(arr[14]),  
      },
      foreign: {
        buy: parseInt(arr[37], 10),
        sell: parseInt(arr[38], 10)
      }
    },
    match: {
      price: parseFloat(arr[19]),
      amount: parseInt(arr[20], 10)
    },
    buy: {
      one: {
        price: parseFloat(arr[23]),
        amount: parseInt(arr[24], 10)
      },
      two: {
        price: parseFloat(arr[25]),
        amount: parseInt(arr[26], 10)
      },
      three: {
        price: parseFloat(arr[27]),
        amount: parseInt(arr[28], 10)
      }
    },
    sell: {
      one: {
        price: parseFloat(arr[29]),
        amount: parseInt(arr[30], 10)
      },
      two: {
        price: parseFloat(arr[31]),
        amount: parseInt(arr[32], 10)
      },
      three: {
        price: parseFloat(arr[33]),
        amount: parseInt(arr[34], 10)
      }
    }
  }
  
  const buyOne = value.buy.one
  const sellOne = value.sell.one
  const now = new Date()
  const isATO = now.getHours() === 9 && now.getMinutes() < 15;
  const isATC = now.getHours() === 14 && now.getMinutes() > 30;
  if (isNaN(buyOne.price) && buyOne.amount > 0) {
    if (isATO) {
      buyOne.price = PRICE_ATO
    } else if (isATC) {
      buyOne.price = PRICE_ATC
    } else {
      buyOne.price = PRICE_UNDEFINED
    }
  }
  if (isNaN(sellOne.price) && sellOne.amount > 0) {
    if (isATO) {
      sellOne.price = PRICE_ATO
    } else if (isATC) {
      sellOne.price = PRICE_ATC
    } else {
      sellOne.price = PRICE_UNDEFINED
    }
  }
  
  return value;
}