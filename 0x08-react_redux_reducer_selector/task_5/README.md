5. Selectors

Selectors are an efficient way to access the data from the state because a selector is not recomputed unless one of its arguments change.

Let’s create a few selectors for the Notifications reducer in src/selectors/notificationSelector.js

Create a first selector for the filter named filterTypeSelected, that will return the value of the filter
Create another selector for the notifications named getNotifications, that will return the list of notifications in a Map format
Create another selector for the notifications named getUnreadNotifications, that will return the list of unread notifications in a Map format
Create a test suite for your selectors in a file named src/selectors/notificationSelector.test.js:

test that filterTypeSelected works as expected
test that getNotifications returns a list of the message entities within the reducer
test that getUnreadNotifications return a list of the message entities within the reducer
Tips:

To write your tests, you can have a state variable using the reducer you created. And pass the state to the selector functions
You can also look into using Reselect for your own projects when you have advanced needs for filtering, reducing and merging data from the state
Requirements:

All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x08-react_redux_reducer_selector
File: task_5/dashboard/src/selectors/notificationSelector.js, task_5/dashboard/src/selectors/notificationSelector.test.js
