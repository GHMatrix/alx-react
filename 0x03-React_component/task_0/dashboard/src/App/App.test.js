import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from "../Notifications/Notifications";


describe("App tests", () => {
  it("renders without crashing", () => {
    render(<App  isLoggedIn={true}/>);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });


  it("should render Notifications component", () => {
    render(<Notifications  displayDrawer={true} listNotifications={[{type: "default", value: "dummy notification"}]} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });


  it("should render Header component", () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it("should render Login Component", () => {
    render(<Login />);
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
