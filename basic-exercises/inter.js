function greetCode(greet) {
  switch (greet) {
    case "en":
      return "Hi!";
    case "fr":
      return "salut!";
    case "pt":
      return "ola!";
  }
}

console.log(greetCode("en")); //
console.log(greetCode("fr")); //
console.log(greetCode("pt")); //
