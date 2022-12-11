import { render, screen } from "@testing-library/react";
import LoginForm from ".";
import { onEmailValidation, onPasswordValidation } from "./LoginForm.utils";

test("renders sign in page", () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Tested utils functions in "LoginForm.utils.test.js"
