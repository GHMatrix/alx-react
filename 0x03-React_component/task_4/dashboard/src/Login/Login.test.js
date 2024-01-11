import React from "react";
import Login from "./Login";
import { render, screen } from '@testing-library/react';

describe("Login", () => {
  it("should render without crashing", () => {
    render(<Login />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it("should have 2 input tags and 2 label tags", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
