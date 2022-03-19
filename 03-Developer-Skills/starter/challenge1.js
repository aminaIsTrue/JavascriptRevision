const forcast = function printForcast(arr) {
  let finalText = "... ";
  for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);
    if (typeof arr[i] !== "number") continue;
    finalText += `${arr[i]}° in ${i + 1} days ... `;
  }

  return finalText;
};
console.log(forcast([17, 21, 23]));
console.log(forcast([12, 5, -5, 0, 4]));
