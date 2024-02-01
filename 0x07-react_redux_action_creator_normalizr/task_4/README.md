4. Create actions for the UI
mandatory
Copy the dashboard folder from task_3 into a directory labeled task_4

In src/actions/uiActionTypes.js, create four action types:

e.g . export const LOGIN = "LOGIN"

Create the action types:
LOGIN
LOGOUT
DISPLAY_NOTIFICATION_DRAWER
HIDE_NOTIFICATION_DRAWER
They will be used to define when a user is logging in, logging out, and display / hide the notifications drawer

Create the action creator:
In a file named uiActionCreators.js, the goal of this section is to create four action creators that will send the four types we previously created. Remember to import all the types from uiActionTypes in this file.

The function login will accept email and password as arguments. It will return the action with LOGIN as a type and the user object:
{ user : { email, password } }
The function logout will create the action with the type LOGOUT
The function displayNotificationDrawer will create the action with the type DISPLAY_NOTIFICATION_DRAWER
The function hideNotificationDrawer will create the action with the type HIDE_NOTIFICATION_DRAWER
Test the action creators:
In a file named uiActionCreators.test.js, write a test for each of the action creator you wrote previously.

Repo:

GitHub repository: alx-react
Directory: 0x07-react_redux_action_creator_normalizr
File: task_4/dashboard/src/actions/uiActionTypes.js, task_4/dashboard/src/actions/uiActionCreators.js, task_4/dashboard/src/actions/uiActionCreators.test.js
