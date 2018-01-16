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


import {parseStockData, parseSingleStockData} from './parser/vndirect'

const convertObjectToWSMessage = (obj) => (JSON.stringify(JSON.stringify(obj)))

export default class StockRepository {
  constructor(webSocketUrl, codes = []) {
    console.log(codes);
    this._codes = new Set(codes)
    this._codesString = codes.join(',')
    this.listeners = []
    this._ws = this._initWS(webSocketUrl)
    this._fetchStockData()
    // this.interval = setInterval(this._fetchStockData, 800)
  }
  
  addListener = (listener) => {
    this.listeners.push(listener);
  }

  _fetchStockData = () => {
    fetch('http://banggia.cafef.vn/stockhandler.ashx?userlist=' + this._codesString)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }
  
  updateStockCodes = (codes) => {
    if (this._codes === undefined || !isSetsEqual(this._codes, new Set(codes))) {
      this._codes = new Set(codes)
      this._codesString = codes.join(',')
      console.log(codes, codes.join(','));
      this._sendNewCodes(codes)
      this._fetchStockData()
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
          const data = parseStockData(json.data.data)
          this._spreadStockData(data)
        } else if (json.data.name === RES_DATA_TYPE_CEILING_FLOOR_COUNT){
          //TODO
        }
        
      } else if (json.type === RES_DATA_TYPE_STOCK) {
        const data = parseSingleStockData(json.data)
        this._spreadStockData(data)
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
  
  _spreadStockData = (data) => {
    this.listeners.forEach(l => l(data))
  }
}
