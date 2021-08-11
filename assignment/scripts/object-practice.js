console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
favThreeFoods = [];
const me = {
  // TODO - add properties here
  firstName: 'Danny',
  lastName: 'Mussie',
  hasSiblings: true,
  shoeCount: 13,
  favThreeFoods: ['lasagna', 'injera', 'sushi']
};

// console.log('A little about me:', me);


/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
const fullName = me.firstName + ' ' + me.lastName;
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('first favorite food:', me.favThreeFoods[0]);
console.log('last favorite food:', me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log('Current shoe count:', me.shoeCount);
me.shoeCount = 13 +1; // updated shoeCount
console.log('Updated shoe count:', me.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue'; // new property
console.log('Updated object:', me);
