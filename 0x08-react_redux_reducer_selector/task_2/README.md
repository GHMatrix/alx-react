2. Create a reducer for Courses

Create a load action

In the courseActionTypes file, create a new action corresponding to when the API returns the list of courses. You can name it FETCH_COURSE_SUCCESS

Create the course reducer and default state

In a file courseReducer.js, write a reducer function. The default state should be an empty array.

Define the FETCH_COURSE_SUCCESS action

When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute. The action would look like:

{
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ]
}

When updating the state of the reducer, you should also set the attribute isSelected to false for every item in the list. The expected data from the reducer should be:

[
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
]

Define the SELECT_COURSE and UNSELECT_COURSE actions

When the action creator sends the action SELECT_COURSE, it also sends an index corresponding to the id of the course to update. The action would look like:

{
  type: SELECT_COURSE,
  index: 2
}
The expected data from the reducer should be:

[
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
]

When the action creator sends the action UNSELECT_COURSE, it also sends an index corresponding to the id of the course to update. The action would look like:

{
  type: UNSELECT_COURSE,
  index: 2
}
The expected data from the reducer should be:

[
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
]

Write the tests

In a courseReducer.test.js, write a test suite for the new reducer. Define the following tests:

Test that the default state returns an empty array
Test that FETCH_COURSE_SUCCESS returns the data passed
Test that SELECT_COURSE returns the data with the right item updated
Test that UNSELECT_COURSE returns the data with the right item updated
Tips:

Use ES6 for this reducer, we can look at Immutable later
Requirements:

Try to make the update of object as efficient as possible, for example you can use ES6 Map
All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x08-react_redux_reducer_selector
File: task_2/dashboard/src/actions/courseActionTypes.js, task_2/dashboard/src/reducers/courseReducer.js, task_2/dashboard/src/reducers/courseReducer.test.js
