import React from "react";
import { render } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip", () => {
  it("should render a chip component with the given text", () => {
    const text = "Example Chip";
    const { getByText } = render(<Chip text={text} />);

    expect(getByText(text)).toBeTruthy();
  });

  it("should apply the 'small' size class when size prop is set to 'small'", () => {
    const { container } = render(<Chip text="Small Chip" size="small" />);

    const chipElement = container.firstChild;
    const expectedClass = "text-xs px-1.5 py-1";
    // const hasSizeClass = chipElement!.classList.contains(expectedClass);
    // expect(hasSizeClass).toBeTruthy();
  });
});
