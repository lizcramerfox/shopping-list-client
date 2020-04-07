const api = require('./api')
const ui = require('./ui')
const store = require('./store')
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

module.exports = {
  onViewAllLists,
  onCreateNewList
}
