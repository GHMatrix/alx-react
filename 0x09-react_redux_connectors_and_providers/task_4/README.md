14. Combine store: Root reducer


Since you have more than one reducer for your application, you will need to combine them into the store.

Create a new file reducers/rootReducer.js, in this file, export a rootReducer:

the root should contain every reducer
courses maps to courseReducer
notifications maps to notificationReducer
ui maps to uiReducer
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_4/dashboard/src/reducers/rootReducer.js
