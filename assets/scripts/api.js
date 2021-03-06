'use strict'

const config = require('./config')
const store = require('./store')

/// /////////////////////// ///
//    USER AUTHENTICATION    //
/// /////////////////////// ///

const signUp = function (data) {
  // console.log('You are now in: api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log('You are now in: api.js - signIn')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log('You are now in: api.js - changePassword')
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
  // console.log('You are now in: api.js - signOut')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

/// /////////////////////// ///
//    SHOPPING LIST ROUTES   //
/// /////////////////////// ///

const viewAllLists = function (data) {
  // console.log('SOURCE: api.js')
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNewList = function (data) {
  // console.log('SOURCE: api.js')
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

const viewListById = function (id) {
  // console.log('SOURCE: api.js')
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteListById = function (id) {
  // console.log(id)
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateListById = function (data) {
  // console.log('api.js data is: ' + data)
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      list: {
        id: data.id,
        title: data.title,
        list_type: data.listType,
        content: data.content
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
