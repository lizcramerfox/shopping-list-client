'use strict'

const store = require('./store')
// const authEvents = require('./auth-events')

/////////////////////////////
//   USER AUTHENTICATION   //
/////////////////////////////

const signUpSuccess = function (data) {
  // Success-Failure Messages
  $('#auth-message').text('Signed up successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
}

const signUpFailure = function () {
  // Success-Failure Messages
  $('#auth-message').text('Error signing up: please try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  // console.log('signUpFailure data is: ', error)
}

const signInSuccess = function (data) {
  // Success-Failure Messages
  $('#auth-message').text('Signed in successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI login views
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#auth-message').text('Error signing in: please try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  // console.log('signInFailure data is: ', error)
}
//
const changePwSuccess = function (data) {
  $('#auth-message').text('Password changed successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
}

const changePwFailure = function () {
  $('#auth-message').text('Error changing password: please try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
}

const signOutSuccess = function (data) {
  $('#auth-message').text('Signed out successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI login views
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  // console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function () {
  $('#auth-message').text('Error signing out: please try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  // console.log('signOutFailure data is: ', error)
}

////////////////////////////
//  LIST VIEWER HANDLING  //
////////////////////////////

const viewAllListsSuccess = function (data) {
  $('#list-viewer').text('view-all-lists data is: ' + data)
  console.log(data)
}

const viewAllListsFailure = function () {
  $('#list-viewer').text('failed to retrieve list data')
}

const createNewListSuccess = function (data) {
  $('#list-viewer').text('new list data is: ' + data)
  console.log(data)
}

const createNewListFailure = function () {
  $('#list-viewer').text('failed to create new list')
}

const viewListByIdSuccess = function (data) {
  $('#list-viewer').text('List ID #' + data.list.id)
  console.log(data)
}

const viewListByIdFailure = function () {
  $('#list-viewer').text('failed to retrieve your list')
}

const deleteListByIdSuccess = function (data) {
  $('#list-viewer').text('List has been deleted')
  console.log(data)
}

const deleteListByIdFailure = function () {
  $('#list-viewer').text('failed to delete your list')
}

const updateListbyIdSuccess = function (data) {
  $('#list-viewer').text('list updated. new list data is: ' + data)
  console.log(data)
}

const updateListbyIdFailure = function () {
  $('#list-viewer').text('failed to update your list')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  viewAllListsSuccess,
  viewAllListsFailure,
  createNewListSuccess,
  createNewListFailure,
  viewListByIdSuccess,
  viewListByIdFailure,
  deleteListByIdSuccess,
  deleteListByIdFailure,
  updateListbyIdSuccess,
  updateListbyIdFailure
}
