5. Create actions for the notification list
mandatory
Copy dashboard from the task_4 directory into task_5

Create the action types
In src/actions/notificationActionTypes.js, create two action types:

MARK_AS_READ
SET_TYPE_FILTER
Create the filter states
In src/actions/notificationActionTypes.js, create a constant named NotificationTypeFilters, that will contain the two filter states:

DEFAULT
URGENT
They will be used when the user interacts with the notification drawer

Create the action creator
Import the action types you just created in src/actions/notificationActionTypes.js

In a file named notificationActionCreators.js, create two action creators that will send the two action types we previously created:

The function markAsAread will accept index as argument
The function setNotificationFilter will accept filter as argument
Test the action creators
Import the action types, NotificationTypeFilters, and the action creators into src/actions/notificationActionCreators.test.js

In this file, write a test for the markAsAread action. Calling the creator with 1 as an argument should return:

{
  type: MARK_AS_READ,
  index: 1
}

Write a test for the setNotificationFilter action. Calling the creator with one of the filters from NotificationTypeFilters as an argument should return:

{
  type: SET_TYPE_FILTER,
  filter: "DEFAULT"
}
Repo:

GitHub repository: alx-react
Directory: 0x07-react_redux_action_creator_normalizr
File: task_5/dashboard/src/actions/notificationActionTypes.js, task_5/dashboard/src/actions/notificationActionCreators.js, task_5/dashboard/src/actions/notificationActionCreators.test.js
