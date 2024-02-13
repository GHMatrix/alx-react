12. Modify the test suites

Modify the test suites of the different components you modified:

In the App.test.js, Footer.test.js, and Header.test.js to import the Stateless components instead of the connected component
Remove any use of the mount function, and convert everything to use the shallow function
You should remove any use of setState within the tests and pass directly the props to the stateless components
Remove any test linked to the login, logout function within App, and Header
Add a test in uiReducer to support the new action you just created
Tips:

At this point your app should be functional and able to display/hide the drawer, login/logout using the Redux state
Remember that the state of uiReducer is using Map from Immutable
You can now see that your components logic is simplified. They only respond to props change. The logic is happening within the action creators
Requirements:

Do not forget to add defaultProps and PropTypes to any component receiving props
No error should be displayed within the console
All the tests in the project should pass
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_2/dashboard/src/App/App.test.js, task_2/dashboard/src/Footer/Footer.test.js, task_2/dashboard/src/Header/Header.test.js, task_2/dashboard/src/reducers/uiReducer.test.js
