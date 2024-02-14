17. Connect notifications: New Action Creator

We now know how to connect a simple component to a reducer. Let’s work on connecting a more complex component to the the entire API.

Add the following three action creators to notificationActionCreators.js

setLoadingState whose parameter is a boolean. It will send the SET_LOADING_STATE action and the boolean.
setNotifications whose parameter is an array. It will send the FETCH_NOTIFICATIONS_SUCCESS action with the data.
fetchNotifications (which does not have a parameter). Calling it will dispatch setLoadingState with the boolean set to true
It fetches /notifications.json
Once the fetch is realized, it will dispatch setNotifications with the data
At the end of the query it sets the loading state to false again
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_5/dashboard/src/actions/notificationActionCreators.js
