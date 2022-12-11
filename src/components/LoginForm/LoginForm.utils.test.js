import { onEmailValidation, onPasswordValidation } from "./LoginForm.utils";

it('should return "false" if email is empty', () => {
  const email = "";
  const result = onEmailValidation(email);
  expect(result).toEqual(false);
});

it('should return "false" if email is undefined', () => {
  const email = undefined;
  const result = onEmailValidation(email);
  expect(result).toEqual(false);
});

it('should return "false" when email has not email format', () => {
  const email = "hugomartingmailcom";
  const result = onEmailValidation(email);
  expect(result).toEqual(false);
});

it('should return "true" when email IS email format', () => {
  const email = "hugomartin@gmailcom";
  const result = onEmailValidation(email);
  expect(result).toEqual(false);
});

it('should return "false" if password is empty', () => {
  const password = "";
  const result = onPasswordValidation(password);
  expect(result).toEqual(false);
});

it('should return "false" if password is undefined', () => {
  const password = undefined;
  const result = onPasswordValidation(password);
  expect(result).toEqual(false);
});

it('should return "false" if password does NOT contain Uppercase', () => {
  const password = "hhhh4444****";
  const result = onPasswordValidation(password);
  expect(result).toEqual(false);
});

it('should return "false" if password does NOT contain lowercase', () => {
  const password = "HHHH4444****";
  const result = onPasswordValidation(password);
  expect(result).toEqual(false);
});

it('should return "false" if password does NOT contain characters', () => {
  const password = "HHHH4444mmmm";
  const result = onPasswordValidation(password);
  expect(result).toEqual(false);
});

it('should return "true" if password has atleast 1 uppercase 1 lowercase 1character 1number and min length 8', () => {
  const password = "hhMM12**";
  const result = onPasswordValidation(password);
  expect(result).toEqual(true);
});
