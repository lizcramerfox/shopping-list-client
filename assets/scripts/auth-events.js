const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')

// SIGN-UP (New User)
const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // document.getElementById('sign-up').reset()
}

// SIGN-IN (Existing User, NOT Currently Logged-In)
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // document.getElementById('sign-in').reset()
}
// CHANGE-PASSWORD (Currently Logged-In User)
const onChangePw = function (event) {
  event.preventDefault()
  // console.log('Changing Password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
  // document.getElementById('change-pw').reset()
}

// SIGN-OUT (Currently Logged-In User)
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Logging Out')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
