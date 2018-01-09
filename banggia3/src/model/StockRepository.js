import {store, getStockCodes, subscribe} from '../store/Store'
import {isSetsEqual, cloneObject} from '../Utils'
import {
  MSG_REGISTER_STOCK_CODES,
  MSG_HEART_BEAT,
  RES_MSG_OPEN,
  RES_TYPE_INFO,
  RES_TYPE_RETURN_DATA,
  RES_DATA_TYPE_STOCK,
} from '../constants/vndmessage'

const convertObjectToWSMessage = (obj) => (
  JSON.stringify(JSON.stringify(obj))
)





export default class StockRepository {
  constructor(webSocketUrl) {
    this._codes = undefined
    this._ws = this._initWS(webSocketUrl)
    this.listeners = []
  }
  
  _initWS(webSocketUrl) {
    const ws = new WebSocket(webSocketUrl);
    ws.onopen = this._onOpen
    ws.onmessage = this._onMessage
    ws.onclose = this._onClose
    ws.onerror = this._onError
    return ws;
  }
  
  _onOpen(evt) {}
  
  _onClose(evt){}

  _onMessage(evt) {
    const text = evt.data
    console.log(text);
  }
  
  _send(message) {
    this._ws.send(message)
  }
  
  sendNewCodes(codes) {
    const obj = cloneObject(MSG_REGISTER_STOCK_CODES)
    obj.data.params.codes = codes
    this._send(convertObjectToWSMessage(obj))
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
  }
  
  updateStockCodes(codes) {
    if (this.codes === undefined || !isSetsEqual(this.codes, codes)) {
      this.codes = new Set(codes)
      this.sendNewCodes(codes)
    }
  }

  closeSocket() {
    this.ws.close()
  }
}