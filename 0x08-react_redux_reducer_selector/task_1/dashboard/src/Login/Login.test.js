import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 label tags and 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should have initial state values", () => {
    const wrapper = shallow(<Login />);
    const initialState = wrapper.state();

    expect(initialState.email).toEqual('');
    expect(initialState.password).toEqual('');
    expect(initialState.isLoggedIn).toEqual(false);
    expect(initialState.enableSubmit).toEqual(false);
  });

  it("should update state on email input change", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");

    emailInput.simulate("change", { target: { value: "test@example.com" } });

    expect(wrapper.state().email).toEqual("test@example.com");
  });

  it("should update state on password input change", () => {
    const wrapper = shallow(<Login />);
    const passwordInput = wrapper.find("#password");

    passwordInput.simulate("change", { target: { value: "password123" } });

    expect(wrapper.state().password).toEqual("password123");
  });

  it("should enable submit button when both email and password are filled", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");
    const submitButton = wrapper.find("input[type='submit']");

    emailInput.simulate("change", { target: { value: "test@example.com" } });
    passwordInput.simulate("change", { target: { value: "password123" } });

    expect(wrapper.state().enableSubmit).toEqual(true);
    expect(submitButton.prop("disabled")).toEqual(false);
  });

  it("should disable submit button when either email or password is empty", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");
    const submitButton = wrapper.find("input[type='submit']");

    emailInput.simulate("change", { target: { value: "test@example.com" } });
    passwordInput.simulate("change", { target: { value: "" } });

    expect(wrapper.state().enableSubmit).toEqual(false);
    expect(submitButton.prop("disabled")).toEqual(true);
  });
});
