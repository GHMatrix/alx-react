import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { render, screen } from '@testing-library/react';


describe("App tests", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });


  it("should render Notifications component", () => {
    render(<App />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });


  it("should render Header component", () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it("should render Login Component", () => {
    render(<App />);
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
