const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=[]{}|:;'<>,.?/~`";

export default function generatePassword(config: string[]) {
  const length = Number(
    document.getElementById("characterLength")?.textContent,
  );
  if (length == 0 || config.length == 0) {
    return "P4$5W0rD!";
  }
  let dataUse = "";
  if (config.includes("lowercase")) dataUse = dataUse.concat(lettersLower);
  if (config.includes("uppercase")) dataUse = dataUse.concat(lettersUpper);
  if (config.includes("numbers")) dataUse = dataUse.concat(numbers);
  if (config.includes("symbols")) dataUse = dataUse.concat(symbols);

  let randomNum;
  let password = "";
  for (let i = 0; i < length; i++) {
    randomNum = Math.floor(Math.random() * dataUse.length);
    password = password.concat(dataUse[randomNum]);
  }
  return password;
}
