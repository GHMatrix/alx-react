3. Create the reducer for notifications

Create a load action

In the notificationActionTypes file, create a new action corresponding to when the API returns the list of notifications. You can name it FETCH_NOTIFICATIONS_SUCCESS

Create the notifications reducer and default state

In a file notificationReducer.js, write a reducer function. The default state should be an object with:

notifications, which will store the list of notifications
filter, which will be the attribute storing which filter is selected
Define the FETCH_NOTIFICATIONS_SUCCESS action

When the action creator sends the action FETCH_NOTIFICATIONS_SUCCESS, it also sends the list of notifications in a data attribute. The action would look like:

{
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available"
    }
  ]
}
When updating the state of the reducer, you should also set the attribute isRead to false for every item in the list. The expected data from the reducer should be:

{
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
}
Define the MARK_AS_READ action

When the action creator sends the action MARK_AS_READ, it also sends an index corresponding to the id of the notification to update. The action would look like:

{
  type: MARK_AS_READ,
  index: 2
}
The expected data from the reducer should be:

{
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
}
Define the SET_TYPE_FILTER action

When the action creator sends the action SET_TYPE_FILTER, it also sends a filter attribute with either DEFAULT or URGENT. The action would look like:

{
  type: SET_TYPE_FILTER,
  filter: "URGENT"
}
The expected data from the reducer should be:

{
  filter: "URGENT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
}
Tips:

Use ES6 for this reducer, we can look at Immutable later
Requirements:

Try to make the update of object as efficient as possible, for example you can use ES6 Map
All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x08-react_redux_reducer_selector
File: task_3/dashboard/src/actions/notificationActionTypes.js, task_3/dashboard/src/reducers/notificationReducer.js, task_3/dashboard/src/reducers/notificationReducer.test.js
