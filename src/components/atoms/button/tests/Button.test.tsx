import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps } from "../Button";

describe("Button", () => {
  const mockOnClick = jest.fn();

  const defaultProps: ButtonProps = {
    label: "Click me!",
    onClick: mockOnClick,
  };

  it("renders with default props", () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-test", "DesignSystem-AI-Button");
  });

  it("renders with a `primary` appearance", () => {
    const { getByTestId } = render(
      <Button {...defaultProps} appearance="primary" />
    );
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toHaveClass("Button--primary");
  });

  it("renders with a `basic` appearance by default", () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toHaveClass("Button--basic");
  });

  it("renders a custom className", () => {
    const customClassName = "my-custom-class";
    const { getByTestId } = render(
      <Button {...defaultProps} className={customClassName} />
    );
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toHaveClass(customClassName);
  });

  it("is disabled when `disabled` prop is true", () => {
    const { getByTestId } = render(<Button {...defaultProps} disabled />);
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toBeDisabled();
  });

  it("calls the onClick function when clicked", () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId("DesignSystem-AI-Button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not calls the onClick function when disabled", () => {
    const { getByTestId } = render(<Button {...defaultProps} disabled />);
    const button = getByTestId("DesignSystem-AI-Button");
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("renders the button with an icon", () => {
    const { getByTestId } = render(
      <Button {...defaultProps} appearance="primary" />
    );
    const icon = getByTestId("DesignSystem-AI-Button-Icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders button with children", () => {
    const customLabel = "Test Button Label";
    const { getByTestId } = render(
      <Button>{customLabel}</Button>
    );
    const button = getByTestId("DesignSystem-AI-Button");
    expect(button).toHaveTextContent(customLabel);
  });
});
