import React from "react";
import Footer from "./Footer";
import { getFooterCopy, getFullYear } from "../Utils/utils";
import { render, screen } from "@testing-library/react";
import { AppContext } from '../App/AppContext';

describe("Footer test", () => {
  it("should render without crashing", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it("should render the text Copyright", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(`Copyright ${getFullYear()} - ${getFooterCopy()}`)).toBeInTheDocument();
  });

  it("should not display the link when the user is logged out", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.queryByText("Contact us")).toBeNull();
  });

  it("should display the link when the user is logged in", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText("Contact us")).toBeInTheDocument();
  });
});
