export const MSG_REGISTER_STOCK_CODES = {
  type: 'registConsumer',
  data: {
    sequence: 0,
    params: {
      name: 'STOCK',
      codes: []
    }
  }
}
export const MSG_HEART_BEAT = 'heartbeat'
export const MSG_INFO_TIME = {
  type: "info",
  data: {
    time: 1515540466895
  }
}

export const RES_MSG_OPEN = 'o'
export const RES_MSG_HEART_BEAT = 'h'

export const RES_TYPE_INFO = 'infoResult'
export const RES_TYPE_RETURN_DATA = 'returnData'

export const RES_DATA_TYPE_STOCK = 'STOCK'
export const RES_DATA_TYPE_CEILING_FLOOR_COUNT = 'CEILING_FLOOR_COUNT'
