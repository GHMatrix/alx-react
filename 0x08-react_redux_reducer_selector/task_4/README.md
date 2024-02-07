4. Normalizr & Immutable

As you can see, updating a specific item in a collection is rather complicated and error prone. Using Normalizr is a good opportunity to simplify mutation

Course schema

Create a new file schema/courses.js. In the file define a schema entity for courses. Create a function coursesNormalizer that would take data as argument and normalize the data with the schema you created.

In the course reducer function:

Update the initial state to use an Immutable.js Map
When FETCH_COURSE_SUCCESS action is called, normalize the data with the function you created and merge it with the state
When SELECT_COURSE or UNSELECT_COURSE is called, use the setIn function from Immutable to update the value of the item
Update the notification schema

In the file schema/notifications.js, create a function notificationsNormalizer that would take data as argument and normalize it with the notification schema you created in the previous course.

Update the notification reducer

In the notification reducer function:

Update the initial state to use an Immutable.js Map
When FETCH_NOTIFICATIONS_SUCCESS action is called, normalize the data with the function notificationsNormalizer you created and merge it with the state
When SET_TYPE_FILTER, use the set function from Immutable to update the value of the state
When MARK_AS_READ, use the setIn function from Immutable to update the value of the item in the state
Update the test files/suites:

Update the course reducer test file to match the new reducer
Tips:

You can use the fromJS function from Immutable.js to easily create the initial state from an object
You can use the toJS function from Immutable.js to easily compare the expected data
Selecting an unselecting a course item should only take one line now
Marking a notification item as read should only take one line now
Requirements:

All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x08-react_redux_reducer_selector
File: task_4/dashboard/src/schema/courses.js, task_4/dashboard/src/reducers/courseReducer.js, task_4/dashboard/src/schema/notifications.js, task_4/dashboard/src/reducers/notificationReducer.js, task_4/dashboard/src/reducers/courseReducer.test.js, task_4/dashboard/src/reducers/notificationReducer.test.js
