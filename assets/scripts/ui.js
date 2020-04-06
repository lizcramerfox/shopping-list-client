'use strict'

const store = require('./store')
// const authEvents = require('./auth-events')

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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
