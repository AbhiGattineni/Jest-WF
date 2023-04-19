import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, StepButton } from "@mui/material";
import Options from "../Steps/Options";
import Information from "../Steps/Information";
import Results from "../Steps/Results";

const steps = [<Options />, <Information />, <Results />];

function StepperComponent() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleClick = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <div>
      <Stepper nonLinear activeStep={currentStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <label>{steps[currentStep]}</label>
      <Button variant="contained" onClick={handleClick}>
        {currentStep <= 1 ? "continue" : "Complete"}
      </Button>
    </div>
  );
}

export default StepperComponent;
