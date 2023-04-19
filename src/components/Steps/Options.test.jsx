import React from "react";
import { render, screen } from "@testing-library/react";
import Options from "./Options";

describe("Options Component", () => {
  test("renders the Options component", () => {
    render(<Options />);
    expect(screen.getByTestId("options")).toBeInTheDocument();
  });

  test("displays 'Options' text", () => {
    render(<Options />);
    expect(screen.getByText("Options")).toBeInTheDocument();
  });
});
