import {
  GET_USER,
  GET_LIST
 } from '../types/uc'
import UC from '../../libs/uc'
import request from 'plato-request'

export default {
  getUser ({ dispatch }, payload) {
    console.log(payload)
    dispatch(GET_USER, UC.getUser(payload))
  },
  getList ({ dispatch }) {
    request('/static/aa.json', {
      method: 'GET'
    }).then(datas => {
      dispatch(GET_LIST, { datas })
    })
  }
}
