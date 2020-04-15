'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth-events')
const listEvents = require('./list-events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#view-all-lists').on('submit', listEvents.onViewAllLists)
  $('#create-new-list').on('submit', listEvents.onCreateNewList)
  $('#view-list-by-id').on('submit', listEvents.onViewListById)
  $('#delete-list-by-id').on('submit', listEvents.onDeleteListById)
  $('#update-list-by-id').on('submit', listEvents.onUpdateListById)
})
