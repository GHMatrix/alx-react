import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render an img and h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("should not render logoutSection with default context value", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("#logoutSection")).toEqual(false);
  });

  it("should render logoutSection with user-defined context (isLoggedIn: true)", () => {
    const user = {
      isLoggedIn: true,
      email: "test@example.com",
    };

    const wrapper = shallow(<Header />, { context: { user } });
    expect(wrapper.exists("#logoutSection")).toEqual(true);
    expect(wrapper.text()).toContain(`Welcome ${user.email} (logout)`);
  });

  it("should call logOut function when the logout link is clicked", () => {
    const user = {
      isLoggedIn: true,
      email: "test@example.com",
    };

    const logOutSpy = jest.fn();
    const wrapper = shallow(<Header />, { context: { user, logOut: logOutSpy } });

    wrapper.find("#logoutSection span").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});
