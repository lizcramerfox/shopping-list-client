'use strict'

const config = require('./config')
const store = require('./store')

/////////////////////////////
//   USER AUTHENTICATION   //
/////////////////////////////
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

/////////////////////////////
//  SHOPPING LIST ROUTES   //
/////////////////////////////

const viewAllLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNewList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      list: {
        title: data.title,
        list_type: data.listType,
        content: data.content
      }
    }
  })
}

const viewListById = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteListById = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateListById = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      list: {
        id: data.list.id,
        title: data.list.title,
        list_type: data.list.listType,
        content: data.list.content
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  viewAllLists,
  createNewList,
  viewListById,
  deleteListById,
  updateListById
}
