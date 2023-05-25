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

    const chipElement = container.firstChild as Element;
    const expectedClass = "text-xs px-1.5 py-1";

    const classNames = chipElement.getAttribute("class");
    expect(classNames).toContain(expectedClass);
  });
});
