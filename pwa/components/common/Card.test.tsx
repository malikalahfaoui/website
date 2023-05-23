import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders without errors", () => {
    render(<Card />);
    expect(screen.getByTestId("card")).toBeTruthy();
  });

  it("applies additional className when provided", () => {
    render(<Card className="custom-class" />);
    const cardElement = screen.getByTestId("card");
    const classNames = Array.from(cardElement.classList);
    expect(classNames).toContain("custom-class");
  });
  it("renders children correctly", () => {
    render(<Card>Hello, World!</Card>);
    expect(screen.getByText("Hello, World!")).toBeTruthy();
  });
});
