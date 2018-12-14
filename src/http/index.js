import {post, fetch} from './config'

export const queryIdListAPI = function (params) {
  return post('/user', params)
}

export const addUserAPI = function (params) {
  return http('/user/addUser', params)
}
