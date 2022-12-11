export const onPasswordValidation = (pass) => {
  const lowerCaseLetter = /[a-z]/g;
  const upperCaseLetter = /[A-Z]/g;
  const numberType = /[0-9]/g;
  const character = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (pass === undefined) {
    return false;
  }

  const conditionValid =
    (pass.length >= 8 && // Minimum of 8 characters
      !!pass.match(upperCaseLetter) && // Should contains uppercase
      !!pass.match(lowerCaseLetter) && // Should contains lowercase
      !!pass.match(numberType) && // Minimum of 1 numerical digit (0-9)
      !!pass.match(character)) === // Minimum of 1 special character (!@#$%^&*, etc)
    true
      ? true
      : false;

  console.log(`onPasswordValidation -- password: ${pass} -- valid? -- ${conditionValid}`);

  return conditionValid;
};

export const onEmailValidation = (email) => {
  const EmailValidator = require("email-validator");

  console.log(`onEmailValidation -- email: ${email} -- valid? -- ${EmailValidator.validate(email)}`);

  return EmailValidator.validate(email);
};

export const generateAlertText = (valEmail, valPass) => {
  if (!valEmail && !valPass) {
    return "email and password wrong";
  } else if (valEmail && !valPass) {
    return "password wrong";
  } else if (!valEmail && valPass) {
    return "Please enter a valid email address.";
  } else {
    return "login successful";
  }
};
