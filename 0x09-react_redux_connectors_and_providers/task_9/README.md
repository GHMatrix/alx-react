29. Container/Component


Our components can become very verbose when we start adding connectors and actions. It is also becoming harder to tests what is supposed to be our React component, and the interations of the application. To simplify our architecture, we can use the concept of containers and components:

Create a new file NotificationsContainer.js. This component will take care of connecting to the state, and fetching the notifications on mount
The component should render the Notifications components and pass the required props to it
Modify the file Notifications.js. It should now become a functional component
Create a new test file for NotificationsContainer.js. It should make sure the fetching is happening on mount
Modify Notifications.test.js file to only support the new behavior of the file
Tips:

No need to repeat every single prop, you can use the spread operator
Repo:

GitHub repository: alx-react
Directory: 0x09-react_redux_connectors_and_providers
File: task_9/dashboard/src/Notifications/Notifications.js, task_9/dashboard/src/Notifications/Notifications.test.js, task_9/dashboard/src/Notifications/NotificationsContainer.js, task_9/dashboard/src/Notifications/NotificationsContainer.test.js
