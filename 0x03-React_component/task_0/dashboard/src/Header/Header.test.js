import React from "react";
import Header from "./Header";
import { render, screen } from '@testing-library/react';

describe("Header", () => {
    it("renders without crashing", () => {
        render(<Header />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it("should render a h1", () => {
        render(<Header />);
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByText('School dashboard')).toBeInTheDocument();
    });
});
