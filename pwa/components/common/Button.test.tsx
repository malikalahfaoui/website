import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button.render'", () => {
  it("Renders without throwing an error", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeTruthy();
  });

  it("Handle a click event when the button is clicked", () => {
    const handleClick = jest.fn();
    const container = render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = container.queryByText("Click me");
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
