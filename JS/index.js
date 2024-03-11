const name = "Pep";
const password = "Cáñamo123";
const passwordConfirmation = "Cáñamo123";
const age = 17;

const hasNameRequiredLength = name.length >= 5;
const hasPasswordRequirements =
  password.length >= 8 &&
  /([A-Z])/.test(password) &&
  /(\d)/.test(password) &&
  /([a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ])/.test(password);
const IsBothPasswordsEqual = password === passwordConfirmation;
const IsAdult = age >= 18;

console.log(`
El nombre de usuario es válido : ${hasNameRequiredLength}
La contraseña es válida: ${hasPasswordRequirements}
La repetición de contraseña es válida: ${IsBothPasswordsEqual}
Es mayor de edad: ${IsAdult}
`);
