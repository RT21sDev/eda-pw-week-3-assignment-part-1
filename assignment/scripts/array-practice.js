console.log('****** Array Practice *******');

// Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Creating an array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1. TODO: Make an array `favoriteFoods` with some favorite foods.
//    Be sure to console.log your array of foods to the console with
//    a message, similar to the example above.

let favFoods = ['soup', 'cheeses', 'steak', 'pasta']
console.log('Food are: ', favFoods);

// Array.length: A property that tells you how many items are in a given array.
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
let numberOfAnimals = animalArray.length // 👈 Using the .length property!
console.log('Number of animals:', numberOfAnimals);

// 2. TODO: Create a variable `numberOfFoods` and use the .length property
//    to assign it the number value of how many items are inside `favoriteFoods`.
//    Don't forget to console.log `numberOfFoods` to make sure your code worked!

let numberOfFoods = numberOfFoods.length //<-took me abit i thought i would use favfoods
console.log('number Of Foods:', numberOfFoods);

// Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using its array index
let firstAnimal = animalArray[0];
console.log('First animal is', firstAnimal);

// 3.a. TODO: Create a variable `secondAnimal` and assign it the value
//      of the second item from the `animalArray`.
//      Be sure to console.log this new variable to make sure your code
//      worked as expected.

let firstFood = numberOfFoods[1];
console.log('First Food is', firstFood);

let secondFood = numberOfFoods[2]; //<- eh why not and below
console.log('Second Food is', secondFood);

let thirdFood = numberOfFoods[3];  
console.log('Third Food is', thirdFood);

// 3.b. TODO: Create a variable `lastAnimal` and assign it the value of
//      the "last" item in `animalArray`, using its array index.
//      You'll need to console.log `animalArray` and `lastAnimal` to make
//      sure that your code does what you want. (Never trust your code until
//      you have proof that it works!)
let lastFood = numberOfFoods[4];  //<- the "forth food"
console.log('Last Food is', LastFood);
// 3.c. (STRETCH) TODO: Refactor 3.b to use the `animalArray` variable's .length 
//       property, rather than the exact (hardcoded) index number of the last item.

//<-? 

// Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end of an array using the Array.push method.
let animalToPush = 'penguin';
animalArray.push(animalToPush);
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Create a variable `dessert` and assign it a string value of
//      a dessert that you love.
//      Similar to above, add the `dessert` to the end of your `favoriteFoods`
//      array. (How can you be 100% certain this worked? 🤔)

let dessert=('ice', 'cream', 'sprinkles') //<-making this easier for myself
console.log ('Dessert are: ', dessert) //<- not 100% if this is correct i think it fine to me 

// Example: Add to the beginning of an array using the Array.unshift method.
let animalToUnshift = 'walrus';
animalArray.unshift(animalToUnshift);
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.b. TODO: Create a variable `entree` and assign it a string value of
//      an entree that you enjoy.
//      Add the `entree` to the beginning of your `favoriteFoods` array. //<- data:image/jpeg;base64,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

let FoodToUnshift = 'yum?'; //<- all to do with unshift is an random spark of idea of what to do
favFoods.unshift(FoodToUnshift);
console.log(`Added an Entree to beginning: ${favFoods}`);//<- end of spark of idea

let entree=('spiniach dip', 'prezel', 'wings')
console.log ('Entree are: ', entree)

// Example: Remove the last animal by using the Array.pop method.
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// NOTE: Use the `colors` array for 4.c and 4.d.
let colors = ['orange', 'yellow', 'green', 'teal'];

// 4.c. TODO: The last value inside the `colors` array was added by mistake.
//      Remove it from the array and store it inside a new variable called
//      `lastColor`.
//      Don't forget! Use console.log to verify that the `colors`
//      array only contains three items now, AND to verify that `lastColor`
//      contains the value "teal".)


// Example: Remove the first animal using the Array.shift method.
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d. TODO: Remove the first value from the `colors` array and store it
//      inside a new variable called `firstColor`.
//      To verify that your code worked, console.log `firstColor`!  




// STRETCH GOALS:

let gems = ['Topaz', 'Citrine', 'Diamond', 'Emerald', 'Iolite', 'Tanzanite'];

// 5.a (STRETCH) TODO: Replace the second gem with 'Tourmaline'.
//      Remember to console.log the updated array.


// 5.b (STRETCH) TODO: Sort your gems array in reverse alphabetical order.
//     Please console.log the sorted array.


// 5.c (STRETCH) TODO: Create a variable `gemString` and assign it a string value
//     that's made up of each value from the `gems` array, but separated by the
//     word "and".
//     It should look something like:
//       "Emerald and Diamond and Tourmaline and Topaz"
//     🔥 You'll need to research the .join Array method. 🔥
//     Don't forget to console.log `gemString`...


// 5.d (STRETCH) TODO: Make a new array `colorfulGems` that combines 
//     the gems array with the colors array.
//     It should look something like:
//       ['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond', 'yellow', 'green']
//     Now, console.log the new array.




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    favoriteFoods: typeof favoriteFoods !== 'undefined' ? favoriteFoods : undefined,
    numberOfFoods: typeof numberOfFoods !== 'undefined' ? numberOfFoods : undefined,
    secondAnimal: typeof secondAnimal !== 'undefined' ? secondAnimal : undefined,
    lastAnimal: typeof lastAnimal !== 'undefined' ? lastAnimal : undefined,
    dessert: typeof dessert !== 'undefined' ? dessert : undefined,
    entree: typeof entree !== 'undefined' ? entree : undefined,
    lastColor: typeof lastColor !== 'undefined' ? lastColor : undefined,
    firstColor: typeof firstColor !== 'undefined' ? firstColor : undefined,
    gems: typeof gems !== 'undefined' ? gems : undefined,
    gemString: typeof gemString !== 'undefined' ? gemString : undefined,
    colorfulGems: typeof colorfulGems !== 'undefined' ? colorfulGems : undefined,
    colors: typeof colors !== 'undefined' ? colors : undefined,
  };
} catch (e) {
  // Do nothing
}
