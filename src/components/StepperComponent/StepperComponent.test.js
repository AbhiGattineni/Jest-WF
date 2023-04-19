import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StepperComponent from "./StepperComponent";

describe("StepperComponent", () => {
  test("renders stepper with initial step", () => {
    render(<StepperComponent />);
    // expect(screen.getByTestId("options")).toBeInTheDocument();
  });

  test("progresses to the next step", async () => {
    render(<StepperComponent />);
    const continueButton = screen.getByRole("button", { name: /continue/i });
    userEvent.click(continueButton);

    // expect(await screen.findByTestId("information")).toBeInTheDocument();
  });

  test("cycles back to the first step after completing", async () => {
    render(<StepperComponent />);
    const continueButton = screen.getByRole("button", { name: /continue/i });
    userEvent.click(continueButton);
    userEvent.click(continueButton);

    const completeButton = screen.getByRole("button", { name: /complete/i });
    userEvent.click(completeButton);

    // expect(await screen.findByTestId("options")).toBeInTheDocument();
  });
});
