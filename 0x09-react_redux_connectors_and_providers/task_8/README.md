26. Memoized selectors: Redux Reselect


Our current selectors are useful but they are not really performant. Imagine a very long list of notifications with multiple filters on the type and on the read status. This would require a lot of resources to compute. Memoized selectors are very powerful in this sense.

Install Redux Reselect and create a new selector named getUnreadNotificationsByType in notificationSelector.js:

This selector should combine the state of the filter, and the list of notifications
When the filter is set to default, it should return all the unread notifications
When the filter is set to urgent, it should return all the unread and urgent notifications
Delete getUnreadNotifications
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_8/dashboard/src/selectors/notificationSelector.js
