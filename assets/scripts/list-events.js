'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')

// VIEW ALL LISTS (See all lists for current user)
const onViewAllLists = function (event) {
  event.preventDefault()
  api.viewAllLists()
    .then(ui.viewAllListsSuccess)
    .catch(ui.viewAllListsFailure)
}

// NEW LIST (Create a new list)
const onCreateNewList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewList(data.list)
    .then(ui.createNewListSuccess)
    .catch(ui.createNewListFailure)
}

// VIEW LIST BY ID (View a user's list individually by ID)
const onViewListById = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('here is', data.list)
  api.viewListById(data.list.id)
    .then(ui.viewListByIdSuccess)
    .catch(ui.viewListByIdFailure)
}

// DELETE LIST BY ID (View a user's list individually by ID)
const onDeleteListById = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('here is', data.list.id)
  api.deleteListById(data.list.id)
    .then(ui.deleteListByIdSuccess)
    .catch(ui.deleteListByIdFailure)
}

const onUpdateListById = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateListById(data)
    .then(ui.updateListByIdSuccess)
    .catch(ui.updateListByIdFailure)
}

// Handlebars Formatting
const addHandlers = function () {
  $('#view-all-lists').on('submit', onViewAllLists)
  $('#create-new-list').on('submit', onCreateNewList)
  $('#view-list-by-id').on('submit', onViewListById)
  $('#delete-list-by-id').on('submit', onDeleteListById)
  $('#update-list-by-id').on('submit', onUpdateListById)
}

module.exports = {
  onViewAllLists,
  onCreateNewList,
  onViewListById,
  onDeleteListById,
  onUpdateListById,
  addHandlers
}
