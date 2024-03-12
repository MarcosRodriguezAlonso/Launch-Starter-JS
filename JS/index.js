const name = "Pep";
const password = "CÁñamo123";
const passwordConfirmation = "CÁñamo123";
const age = 17;

const hasNameRequiredLength = name.length >= 5;
const hasPasswordRequirements =
  password.length >= 8 &&
  /(\d)/.test(password) &&
  password.toLowerCase() !== password;
const areBothPasswordsEqual = password === passwordConfirmation;
const isAdult = age >= 18;

console.log(`
El nombre de usuario es válido: ${hasNameRequiredLength}
La contraseña es válida: ${hasPasswordRequirements}
La repetición de contraseña es válida: ${areBothPasswordsEqual}
Es mayor de edad: ${isAdult}
`);
