// http://reference.sdp.nd/appfactory/userguide/light/js-sdk/uc.html
//
// 2.1 getMACContent
// 2.2 getUserById
// 2.3 getCurrentUser
// 2.4 getCurrentUserId
import Sha from 'jssha'
// import md5s from 'nd-md5s'
import request from 'plato-request'
// import { GET, POST, PATCH } from 'utils/ajax'

// const base = 'https://ucbetapi.101.com/v0.93'
// const base = 'https://aqapi.101.com/v0.93'

// 缓存数据
let cache
let userCache
let userInfo = {}
// 自动登录除去下面两行
var mock = require('../mock/uc')
userInfo = mock.teacher_ndtest

// if(localstorage.get('token'))
// userInfo = localstorage.get('token')

let APIs = {
  baseUrl: 'https://ucbetapi.101.com/v0.93',

  // [GET]/organizations/{org_id} 获取组织信息
  getOrg ({ orgId }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // TODO: 最多只取500条
  getDeepOrgNodeChilds ({ orgId, nodeId = 0, dataList = [] }) {
    return new Promise((resolve, reject) => {
      var promises = []
      APIs.getOrgNodeChilds({ orgId, nodeId }).then(nodeChilds => {
        nodeChilds.items.forEach(node => {
          dataList.push(node)
          promises.push(APIs.getDeepOrgNodeChilds({ orgId: node.org_id, nodeId: node.node_id, dataList }))
        })
        Promise.all(promises).then(() => {
          resolve({ items: dataList })
        })
      })
    })
  },

  // [GET] /organizations/{org_id}/orgnodes/{node_id}/childnodes?$offset=偏移量&$limit=数量 分页获取下一级节点列表
  getOrgNodeChilds ({ orgId, nodeId = 0, query = { $offset: 0, $limit: 500 } }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/orgnodes/${nodeId}/childnodes`, {
      query,
      method: 'GET',
      mutate: authorize
    })
  },

  getOrgNodeChildAll ({ orgId, nodeId = 0 }) {
    var query = { $offset: 0, $limit: 500 }
    return new Promise((resolve, reject) => {
      var result = []
      function getData ({ orgId, nodeId, query }) {
        APIs.getOrgNodeChilds({ orgId, nodeId, query }).then(data => {
          result = result.concat(data.items)
          if (data.items.length === query.$limit) {
            query.$offset += query.$limit
            getData({ orgId, nodeId, query })
          } else {
            resolve({ items: result })
          }
        }).catch(e => reject(e))
      }
      getData({ orgId, nodeId, query })
    })
  },

  // 4.6.1 [GET]/server/time 获取服务器时间
  getServerTime () {
    return request(`${APIs.baseUrl}/server/time`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 根节点返回 org_id 非根节点返回 node_id
  // 如: "ids":[org_id,parent_node_id,……,node_id] --按节点层级返回
  // [GET]/organizations/{org_id}/orgnodes/{node_id}/parents 获取节点的所有父节点
  getParentsNodes ({ orgId, nodeId = 0 }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/orgnodes/${nodeId}/parents`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.2.11 [GET] /organizations/{org_id}/orgnodes/{node_id} 获取节点信息
  getOrgNode ({ orgId, nodeId = 0 }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/orgnodes/${nodeId}`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.2.6 [GET]/organizations/{org_id}/users?$offset=偏移量&$limit=数量 全量或增量获取组织下用户(分页)
  getOrgUsers ({ orgId, query }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/users`, {
      query,
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.2.13 [GET] /organizations/{org_id}/orgnodes/{node_id}/users?$offset=偏移量&$limit=数量 分页获取节点下一级用户列表
  getOrgNodeUsers ({ orgId, nodeId, query = { $limit: 250, $offset: 0 } }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/orgnodes/${nodeId}/users`, {
      query,
      method: 'GET',
      mutate: authorize
    })
  },

  // [GET]/users/{user_id} 获取用户信息
  getCurrentUser ({ force } = { force: false }) {
    if (userCache) {
      return Promise.resolve(userCache)
    }
    var id = userInfo.user_id

    return request(`${APIs.baseUrl}/users/${id}`, {
      method: 'GET',
      mutate: authorize
    }).then(data => {
      userCache = data
      return Promise.resolve(userCache)
    })
  },

  // 4.1.9 [GET]/users/{user_id}?realm=xxx 获取用户信息
  getUser ({ id }) {
    console.log(request)
    return request(`${APIs.baseUrl}/users/${id}`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.2.20 [GET]/organizations/{org_id}/orgnodes/{node_id}/users/actions/count 统计某个节点下的所有用户数
  getOrgNodeUserCount ({ orgId, nodeId }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/orgnodes/${nodeId}/users/actions/count`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.2.18 [GET]/organizations/{org_id}/users/actions/count 统计组织下的所有用户数
  getOrgUserCount ({ orgId }) {
    return request(`${APIs.baseUrl}/organizations/${orgId}/users/actions/count`, {
      method: 'GET',
      mutate: authorize
    })
  },

  // 4.1.17 [POST]/users/actions/query?realm=xxx 批量获取用户信息
  getUsersByIds ({ body }) {
    return request(`${APIs.baseUrl}/users/actions/query`, {
      body,
      method: 'POST',
      mutate: authorize
    })
  },
  login (userInfo) {
    return request(`${APIs.baseUrl}/tokens`, {
      body: {
        login_name: userInfo.login_name, // 'admin',
        org_name: userInfo.org_name, // 'ndtest',
        password: userInfo.password // md5s('123456', '\xa3\xac\xa1\xa3fdjf,jkgfkl')
      },
      method: 'POST'
    })
  },
  // TODO: 将 mock 独立文件
  // mocking getMACContent
  getMACContent ({ url, method }) {
    /* eslint max-params: [2, 5] */
    function getMac (nonce, method, url, host, key) {
      const sha = new Sha('SHA-256', 'TEXT')
      sha.setHMACKey(key, 'TEXT')
      sha.update([nonce, method, url, host, ''].join('\n'))
      return sha.getHMAC('B64')
    }

    // TODO: diff
    function rnd (min, max) {
      const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

      const range = max ? max - min : min
      const length = arr.length - 1

      let str = ''

      for (let i = 0; i < range; i++) {
        str += arr[Math.round(Math.random() * length)]
      }

      return str
    }

    function response (data) {
      const { mac_key } = cache = data
      const nonce = new Date().getTime() + ':' + rnd(8)

      const matched = url.match(/^(https?:\/\/)([^\/]+)(.+)$/)
      return {
        returnMessage: [
          // 'MAC id="' + access_token + '"',
          'MAC id="' + data['access_token'] + '"',
          'nonce="' + nonce + '"',
          'mac="' + getMac(nonce, method, matched[3], matched[2], mac_key) + '"'
        ].join(',')
      }
    }

    if (cache) {
      return Promise.resolve(response(cache))
    }
    return request(`${APIs.baseUrl}/tokens`, {
      body: {
        login_name: userInfo.login_name, // 'admin',
        org_name: userInfo.org_name, // 'ndtest',
        password: userInfo.password // md5s('123456', '\xa3\xac\xa1\xa3fdjf,jkgfkl')
      },
      method: 'POST'
    }).then(response)
  }
}

export const authorize = function (options) {
  return APIs.getMACContent({
    url: options.url,
    method: options.method || 'GET'
  }).then(({ returnMessage }) => {
    options.headers['Authorization'] = returnMessage.replace(/\\"/g, '"')
    return options
  })
}

if (window.Bridge) {
  var bridgeAPIs = window.Bridge.require('sdp.uc').promise()
  Object.keys(APIs).forEach(key => {
    bridgeAPIs[key] || (bridgeAPIs[key] = APIs[key])
  })
  APIs = bridgeAPIs
}

export default APIs

// export default Object.assign(APIs, {
//   // 全量或增量获取组织下用户(分页)
//   getUsers ({ query } = {}) {
//     return APIs.getCurrentUser().then(res => {
//       return GET(`${base}/organizations/${res.org_exinfo.org_id}/users`, {
//         query,
//         authorize
//       })
//     })
//   },
//
//   setUserInfo (id, body) {
//     return PATCH(`${base}/users/${id}`, {
//       body,
//       authorize
//     })
//   }
// })
