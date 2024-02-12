7. Async actions & Thunk middleware
mandatory
Let’s implement the LoginRequest / logout actions creators accross the entire application. LoginRequest is calling an API and is Async. Therefore, Redux will not support it. We will need to use a middleware

Install redux-thunk within your project. And in the index.js file, apply the middleware to your store

Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_2/dashboard/src/index.js
