import * as firebase from 'firebase'

export default class Firebase {
  constructor(config) {
    firebase.initializeApp(config)
    this.database = firebase.database()
    this.listeners = []
  }

  setProperties = (owner, group) => {
    this.writeEnabled = false
    if (this.fbListener) {
      this.database.ref('stocks/' + this._owner + '/' + this._group).off(this.fbListener)
    }
    this._owner = owner
    this._group = group
    this.fbListener = this.database.ref('stocks/' + this._owner + '/' + this._group).on('value', snapshot => {
      const codes = snapshot.val()
      if (codes) {
        this.listeners.forEach(l => l(codes))
      }
      this.writeEnabled = true
    })
  }

  writeCodes = (codes) => {
    if (!this.writeEnabled) {
      return
    }
    const o = {}
    codes.forEach((value, index) => o[index] = value)
    this.database.ref().child('stocks').child(this._owner).child(this._group)
        .set(o)
      
  }

  addListener = (listener) => {
    this.listeners.push(listener)
  }
}
