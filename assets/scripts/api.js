'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('You are now in: api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log('You are now in: api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log('token is ' + store.user.token)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}