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
  $('#sign-up').addClass('success')
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
  // console.log(data)
  const viewListsHtml = useListsHandlerTemplate({ lists: data.lists })
  $('#list-viewer').html(viewListsHtml)
  $('#list-viewer').removeClass()
}

const viewAllListsFailure = function () {
  $('#list-viewer').text('Failed to retrieve your lists')
  $('#list-viewer').removeClass()
  $('#list-viewer').addClass('failure')
}

const createNewListSuccess = function (data) {
  // console.log(data)
  const createNewListHtml = useListHandlerTemplate({ list: data.list })
  $('#list-viewer').html(createNewListHtml)
}

const createNewListFailure = function () {
  $('#list-viewer').text('failed to create new list')
  $('#list-viewer').removeClass()
  $('#list-viewer').addClass('failure')
}

const viewListByIdSuccess = function (data) {
  // console.log(data)
  const viewListByIdHtml = useListHandlerTemplate({ list: data.list })
  $('#list-viewer').html(viewListByIdHtml)
}

const viewListByIdFailure = function () {
  $('#list-viewer').text('failed to retrieve your list')
  $('#list-viewer').removeClass()
  $('#list-viewer').addClass('failure')
}

const deleteListByIdSuccess = function (data) {
  // console.log(data)

  $('#list-viewer').text('List successfully deleted.')
  $('#list-viewer').removeClass()
  $('#list-viewer').addClass('success')
}

const deleteListByIdFailure = function () {
  $('#list-viewer').text('Failed to delete your list')
  $('#list-viewer').removeClass()
  $('#list-viewer').addClass('failure')
}

const updateListbyIdSuccess = function (data) {
  $('#list-viewer').text('list updated. new list data is: ' + data)
  // console.log(data)
}

const updateListbyIdFailure = function (data) {
  $('#list-viewer').text('failed to update your list')
  // console.log(data)
}

const clearListsViewer = () => {
  $('#list-viewer').empty()
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
  updateListbyIdFailure,
  clearListsViewer
}
