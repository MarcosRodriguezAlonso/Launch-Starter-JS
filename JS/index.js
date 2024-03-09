const name = "Pep";
const password = "CalleFalsa123";
const passwordConfirmation = "CalleFalsa123";
const age = 17;

const nameCheck = name.length >= 5;
const passwordCheck =
  /.{8,}/.test(password) &&
  /(?:[A-Z])/.test(password) &&
  /(?:\d)/.test(password);
const passwordMatchCheck = password === passwordConfirmation;
const ageCheck = age >= 18;

console.log(`El nombre de usuario es válido : ${nameCheck}`);

console.log(`La contraseña es válida: ${passwordCheck}`);

console.log(`La repetición de contraseña es válida: ${passwordMatchCheck}`);

console.log(`Es mayor de edad: ${ageCheck}`);
