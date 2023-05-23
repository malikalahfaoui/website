import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReferenceFilterDropdown from "./Dropdown";

describe("ReferenceFilterDropdown", () => {
  test("renders the component with initial value", () => {
    const values = ["Option 1", "Option 2", "Option 3"];
    const handleChange = jest.fn();

    render(
      <ReferenceFilterDropdown
        value="Option 2"
        onChange={handleChange}
        label="Filter"
        values={values}
      />
    );

    // Render label
    expect(screen.getByText("Filter:")).toBeTruthy();

    // Render the value
    expect(screen.getAllByText("Option 2")).toBeTruthy();

    // open the Dropdown menu
    expect(screen.getByRole("list")).toBeTruthy();

    // the Options is rendring correctly
    values.forEach((option) => {
      expect(screen.getAllByText(option)).toBeTruthy();
    });
  });

  test("calls the onChange function when an option is selected", () => {
    const values = ["Option 1", "Option 2", "Option 3"];
    const handleChange = jest.fn();

    render(
      <ReferenceFilterDropdown
        value="Option 2"
        onChange={handleChange}
        values={values}
      />
    );

    // Click an option in the dropdown menu
    fireEvent.click(screen.getByText("Option 3"));

    // OnChange function is called with the selected value

    expect(handleChange).toHaveBeenCalledWith("Option 3");
  });
});
