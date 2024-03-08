const name = "Marcos";
const password = "CalleFalsa123";
const passwordConfirmation = "CalleFalsa123";
const age = 29;

const nameCheck = name.length >= 5;
const passwordNumbersCheck = password.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
const passwordLengthCheck = password.length >= 8;
const passwordMatchCheck = password === passwordConfirmation;
const ageCheck = age >= 18;

console.log(`El nombre de usuario es válido : ${nameCheck}`);

console.log(
  `La contraseña es válida: ${passwordNumbersCheck}${passwordLengthCheck}`
);

console.log(`La repetición de contraseña es válida: ${passwordMatchCheck}`);

console.log(`Es mayor de edad: ${ageCheck}`);
