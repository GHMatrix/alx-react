Copy the dashboard folder from the task_2 directory into a directory named task_3

Create a new folder named actions

Create the action types:
In a file named courseActionTypes.js, create two action types:

SELECT_COURSE
UNSELECT_COURSE
They will be used to define if a user selected or unselected a specific course

Create the action creators:
In a file named courseActionCreators.js, create two action creators that will send the two types we previously created:

The function selectCourse will accept index as argument
The function unSelectCourse will accept index as argument
Test the action creators:
In a file named courseActionCreators.test.js, write a test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }

Write a test for the unSelectCourse action. Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }

Repo:

GitHub repository: alx-react
Directory: 0x07-react_redux_action_creator_normalizr
File: task_3/dashboard/src/actions/courseActionCreators.js, task_3/dashboard/src/actions/courseActionCreators.test.js, task_3/dashboard/src/actions/courseActionTypes.js
