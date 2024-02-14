22. Selectors

To improve performance in your connector, you should always use selectors when you can. Let’s modify the Notifications connector to reuse the selector we built in the previous project:

Update Notifications.js to use getUnreadNotifications
Map the markAsAread action creator to the component, and use it for markNotificationAsRead
Tips:

At this point, when you load the page, you should be able to see the list of notifications. Clicking on one notification should make it disappear from the list
Requirements:

Make sure to update the selector to use the same valueSeq you created previously
Make sure to update the tests to work as expected
Make sure to create the new actions that the action creators are using
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_6/dashboard/src/Notifications/Notifications.js, task_6/dashboard/src/Notifications/Notifications.test.js

