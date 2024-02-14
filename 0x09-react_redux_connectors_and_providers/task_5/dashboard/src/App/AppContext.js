import React, { createContext, useContext, useState } from "react";

// Define a default user object
const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => {};

// Create a React context with default values
const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

// Create a provider component to wrap your app with
export const AppProvider = ({ children }) => {
  // State to manage the user object
  const [user, setUser] = useState(defaultUser);

  // Function to handle logout
  const logOut = () => {
    // Implement your logout logic here
    // For simplicity, we will reset the user to the default values
    setUser(defaultUser);
  };

  // Create the context value object
  const contextValue = {
    user,
    logOut,
  };

  // Provide the context value to the children components
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Create a custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
