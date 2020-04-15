'use strict'

const store = require('./store')
const useListsHandlerTemplate = require('./templates/lists-handler.handlebars')
const useListHandlerTemplate = require('./templates/list-handler.handlebars')

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
  // Update UI Login views
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  // Show UI List Views
  $('#user-lists').removeClass('hidden')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#auth-message').text('Error signing in: please try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  // console.log('signInFailure data is: ', error)
}

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
  $('#user-lists').addClass('hidden')
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
  const viewListsHtml = useListsHandlerTemplate({ lists: data.lists })
  $('#list-viewer').html(viewListsHtml)
  $('#list-viewer').removeClass()
  // console.log('SOURCE: ui.js')
}

const viewAllListsFailure = function () {
  $('#list-viewer-message').text('Failed to retrieve your lists.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('failure')
  $('#list-viewer').empty()
}

const createNewListSuccess = function (data) {
  const createNewListHtml = useListHandlerTemplate({ list: data.list })
  $('#list-viewer').html(createNewListHtml)
  $('#list-viewer-message').text('List successfully created.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('success')
  // console.log('SOURCE: ui.js')
}

const createNewListFailure = function () {
  $('#list-viewer-message').text('Failed to create new list.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('failure')
}

const viewListByIdSuccess = function (data) {
  const viewListByIdHtml = useListHandlerTemplate({ list: data.list })
  $('#list-viewer').html(viewListByIdHtml)
  $('#list-viewer-message').empty()
  // console.log('SOURCE: ui.js')
}

const viewListByIdFailure = function () {
  $('#list-viewer-message').text('Failed to retrieve your list.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('failure')
  $('#list-viewer').empty()
}

const deleteListByIdSuccess = function (data) {
  $('#list-viewer-message').text('List successfully deleted.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('success')
  $('#list-viewer').empty()
  // console.log('SOURCE: ui.js')
}

const deleteListByIdFailure = function () {
  $('#list-viewer-message').text('Failed to delete your list.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('failure')
}

const updateListByIdSuccess = function (data) {
  const viewUpdatedListById = useListHandlerTemplate({ list: data.list })
  $('#list-viewer').html(viewUpdatedListById)
  $('#list-viewer-message').text('List successfully updated')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('success')
  console.log('SOURCE: ui.js - success')
}

const updateListByIdFailure = function (data) {
  $('#list-viewer-message').text('Failed to update your list.')
  $('#list-viewer-message').removeClass()
  $('#list-viewer-message').addClass('failure')
  console.log(data)
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
  updateListByIdSuccess,
  updateListByIdFailure
}
