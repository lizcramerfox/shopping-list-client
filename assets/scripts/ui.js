'use strict'

const store = require('./store')
// const authEvents = require('./auth-events')

const signUpSuccess = function (data) {
  $('#sign-up-message').text('Signed up successfully')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('success')
  $('#auth-message').text('Signed up successfully')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('success')
  // console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error signing up: please try again')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('failure')
  // console.log('signUpFailure data is: ', error)
}

const signInSuccess = function (data) {
  $('#sign-in-message').text('Signed in Successfully')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#sign-in-message').text('Error signing in: please try again')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  // console.log('signInFailure data is: ', error)
}
//
const changePwSuccess = function (data) {
  $('#change-pw-message').text('Password Changed Successfully')
  $('#change-pw-message').removeClass()
  $('#change-pw-message').addClass('success')
}

const changePwFailure = function () {
  $('#change-pw-message').text('Error on Change Password')
  $('#change-pw-message').removeClass()
  $('#change-pw-message').addClass('failure')
}

const signOutSuccess = function (data) {
  $('#sign-out-message').text('Signed Out Successfully')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('success')

  // console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function () {
  $('#sign-out-message').text('Error on Sign Out')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('failure')
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
