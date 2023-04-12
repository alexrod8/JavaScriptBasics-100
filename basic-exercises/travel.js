let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

function contains(value, arr) {
  for (let i = 0; i < destinations.length; i++) {
    if (arr[i] === value) {
      return true;
    } else {
    }
  }
  return false;
}

console.log(contains("Barcelona", destinations));
