import {isSetsEqual, cloneObject} from '../Utils'
import {
  MSG_INFO_TIME,
  MSG_REGISTER_STOCK_CODES,
  MSG_HEART_BEAT,
  RES_MSG_OPEN,
  // RES_TYPE_INFO,
  RES_MSG_HEART_BEAT,
  RES_TYPE_RETURN_DATA,
  RES_DATA_TYPE_STOCK,
  RES_DATA_TYPE_CEILING_FLOOR_COUNT,
} from '../constants/vndmessage'
import {PRICE_ATC, PRICE_ATO, PRICE_UNDEFINED} from '../constants/prices'
import {getStockInfo} from '../reducers/store'

const convertObjectToWSMessage = (obj) => (JSON.stringify(JSON.stringify(obj)))

export default class StockRepository {
  constructor(webSocketUrl, codes = []) {
    console.log(codes);
    this._codes = codes
    this._ws = this._initWS(webSocketUrl)
    this.listeners = []
  }
  
  addListener = (listener) => {
    this.listeners.push(listener);
  }

  updateStockCodes = (codes) => {
    if (this._codes === undefined || !isSetsEqual(this._codes, new Set(codes))) {
      this._codes = new Set(codes)
      this._sendNewCodes(codes)
    }
  }

  closeSocket() {
    this.ws.close()
  }

  _initWS(webSocketUrl) {
    const ws = new WebSocket(webSocketUrl);
    ws.onopen = this._onOpen
    ws.onmessage = this._onMessage
    ws.onclose = this._onClose
    ws.onerror = this._onError
    return ws;
  }

  _onOpen = (evt) => {
    // this.heartBeatInterval = setInterval(this._sendHeartBeat, 30000)
  }

  _onClose = (evt) => {
    clearInterval(this.heartBeatInterval)
  }

  _onMessage = (evt) => {
    const text = evt.data
    if (text === RES_MSG_OPEN) {
      this._sendInfoTime()
      this._sendNewCodes(this._codes)
    } else if (text === RES_MSG_HEART_BEAT) {
      this._sendHeartBeat()
    } else if (text[0] === 'a') {
      const json = JSON.parse(JSON.parse(text.substr(1))[0])
      if (json.type === RES_TYPE_RETURN_DATA) {
        if (json.data.name === RES_DATA_TYPE_STOCK) {
          this._parseStockData(json.data.data)
        } else if (json.data.name === RES_DATA_TYPE_CEILING_FLOOR_COUNT){
          //TODO
        }
        
      } else if (json.type === RES_DATA_TYPE_STOCK) {
        this._parseStockDataSingle(json.data)
      } 
    }
  }
  
  _onError = (evt) => {
    console.error(evt);
  }

  _send(message) {
    try {
      this._ws.send(message)
    } catch (e) {}
  }

  _sendObject = (obj) => {
    this._send([convertObjectToWSMessage(obj)])
  }

  _sendInfoTime() {
    const obj = cloneObject(MSG_INFO_TIME)
    obj.data.time = Date.now()
    this._sendObject(obj)
  }

  _sendHeartBeat = () => {
    this._sendObject(MSG_HEART_BEAT)
  }

  _sendNewCodes = (codes) => {
    const obj = cloneObject(MSG_REGISTER_STOCK_CODES)
    obj.data.params.codes = codes
    this._sendObject(obj)
  }
  
  
  _mapStockRawToModel = (raw) => {
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
          average: arr[0] === '10' ? parseFloat(arr[39]) : parseFloat(arr[9]),
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
  
  _parseStockData = (data) => {
    const stockData = {}
    for (let k in data) {
      if (!data.hasOwnProperty(k)){
        continue
      }
      const stock = this._mapStockRawToModel(data[k])
      stockData[stock.code] = stock
    }
    this._spreadStockData(stockData)
  }
  
  _parseStockDataSingle = data => {
    const stock = this._mapStockRawToModel(data)
    const stockData = {}
    stockData[stock.code] = stock
    this._spreadStockData(stockData)
  }
  
  _spreadStockData = (data) => {
    this.listeners.forEach(l => l(data))
  }
}