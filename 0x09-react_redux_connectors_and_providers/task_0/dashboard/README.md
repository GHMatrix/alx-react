0. Write a basic reducer

Reuse the latest dashboard project you worked on in the React course 0x08-React_Redux_action_creator+normalizr
Create the basic state

In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:

It should have one boolean property isNotificationDrawerVisible
It should have one boolean property isUserLoggedIn
It should have one empty object user
Create the reducer function

In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:

DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
LOGIN_SUCCESS should set isUserLoggedIn to true
LOGIN_FAILURE should set isUserLoggedIn to false
LOGOUT should set isUserLoggedIn to false
Write the tests

In a file named reducers/uiReducer.test.js, define the test suite for our simple reducer:

Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property
Tips:

Don’t forget to set up the default case in your switch function
Requirements:

You should not mutate the state within the reducer
You must use the spread operator to change the state
All the tests in the project should pass
