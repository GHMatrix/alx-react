import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("default state for displayDrawer is false", () => {
    const component = shallow(<App />);
    expect(component.state("displayDrawer")).toBe(false);
  });

  it("handleDisplayDrawer sets displayDrawer to true", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    expect(component.state("displayDrawer")).toBe(true);
  });

  it("handleHideDrawer sets displayDrawer to false", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    component.instance().handleHideDrawer();
    expect(component.state("displayDrawer")).toBe(false);
  });

  it("logIn function updates state correctly", () => {
    const component = shallow(<App />);
    const email = "test@example.com";
    const password = "testPassword";
    component.instance().logIn(email, password);
    expect(component.state("user")).toEqual({
      isLoggedIn: true,
      email: "test@example.com",
    });
  });

  it("logOut function updates state correctly", () => {
    const component = shallow(<App />);
    component.instance().logOut();
    expect(component.state("user")).toEqual({
      isLoggedIn: false,
      email: "",
    });
  });

  it("markNotificationAsRead function updates state correctly", () => {
    const component = shallow(<App />);
    const mockNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: "<p>Mock notification</p>" },
    ];

    component.setState({ listNotifications: mockNotifications });
    component.instance().markNotificationAsRead(2);

    expect(component.state("listNotifications")).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 3, type: "urgent", html: "<p>Mock notification</p>" },
    ]);
  });
});
