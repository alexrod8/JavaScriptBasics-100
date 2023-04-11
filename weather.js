let weather = ["sunny", "rainy", "snowy"];

let i = Math.floor(Math.random() * 5);
console.log(i);

switch (weather[i]) {
  case "sunny":
    console.log("its a nice day outside");
    break;
  case "rainy":
    console.log("bring an umbrealla");
    break;
  case "snowy":
    console.log("lets go back inside");
    break;
  default:
    console.log("I dont know what this is!");
}
