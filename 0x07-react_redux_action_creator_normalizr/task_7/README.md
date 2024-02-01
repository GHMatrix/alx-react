7. Async Action Creators
mandatory
Set up Redux and Redux Thunk

Install redux and redux-thunk in your project

Simulate an API

Copy the file login-success.json into the dist folder. You can do the same with the notifications.json file as well now

These files will be available on the web server and will be your own API

Create the first Async Action Creator

Modify the file named uiActionTypes.js, add two action types:

LOGIN_SUCCESS
LOGIN_FAILURE
Modify the uiActionCreators file:

Create a loginSuccess action creator, that will return the previously created type
Create a loginFailure action creator, that will return the previously created type
Create a loginRequest function that takes into argument the email and password of the user:

the function should dispatch the login action using the action creator previously created
the function should fetch the API /login-success.json and if it succeeds, dispatch the loginSuccess action
if the API fails, dispatch the loginFailure action
Write the tests

In the file uiActionCreators.test.js, write a test suite for the loginRequest action:

the first test should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS
the first test should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE

Tips:

You can use node-fetch to query an API
You can install redux-mock-store and fetch-mock to simular the API and simulate the store
With fetch-mock, you can use getOnce and get to simulate success and failures
Requirements:

All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x07-react_redux_action_creator_normalizr
File: task_7/dashboard/src/actions/uiActionTypes.js, task_7/dashboard/src/actions/uiActionCreators.js, task_7/dashboard/src/actions/uiActionCreators.test.js
