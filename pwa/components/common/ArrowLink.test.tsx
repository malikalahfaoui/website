import React from "react";
import { render, screen } from "@testing-library/react";
import ArrowLink from "./ArrowLink";

describe("ArrowLink", () => {
  it("renders the link with text", () => {
    const href = "https://example.com";
    const text = "Click me";
    render(<ArrowLink href={href} text={text} />);

    const linkElement = screen.getByRole("link", { name: text });
    expect(linkElement).toBeTruthy();
  });

  it("renders the link with the correct size class", () => {
    const href = "https://example.com";
    const text = "Click me";
    const { rerender } = render(
      <ArrowLink href={href} text={text} size="small" />
    );

    const linkElement = screen.getByRole("link", { name: text });
    expect(linkElement.className.includes("text-xs")).toBe(true);

    rerender(<ArrowLink href={href} text={text} size="large" />);
    expect(linkElement.className.includes("text-base")).toBe(true);
  });
});
