const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')

// VIEW ALL LISTS (See all lists for current user)
const onViewAllLists = function () {
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
  api.viewListById(data)
    .then(ui.viewListByIdSuccess)
    .catch(ui.viewListByIdFailure)
}

// VIEW LIST BY ID (View a user's list individually by ID)
const onDeleteListById = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteListById(data)
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

module.exports = {
  onViewAllLists,
  onCreateNewList,
  onViewListById,
  onDeleteListById,
  onUpdateListById
}
