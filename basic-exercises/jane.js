let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function greet(str) {
 console.log('Hej, ' + str + '!');
  }
};

jane.greet('Bobby'); // Hej, Bobby!

