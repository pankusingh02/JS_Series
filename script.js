'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



// <<<<<<<<<<<<<<<<<<---------Looping  arrays     FOR OF loop---------------------->>>>>>>>>>>>>>>>>>>>>>>>

const menu =[...restaurant.starterMenu,...restaurant.mainMenu ]
console.log() 
for(const items of menu) console.log(items); //Focaccia Bruschetta Garlic BreadCaprese Salad  Pizza Pasta Risotto

   // <<<------- for getting index values ------->>>>
   for(const items of menu.entries()){
     console.log(items)
     console.log(`${items[0]}`)

     /*(2) [0, "Focaccia"]
.js:42 0
.js:41 (2) [1, "Bruschetta"]
script.js:42 1
script.js:41 (2) [2, "Garlic Bread"]
script.js:42 2
script.js:41 (2) [3, "Caprese Salad"]
script.js:42 3
script.js:41 (2) [4, "Pizza"]
script.js:42 4
script.js:41 (2) [5, "Pasta"]
script.js:42 5
script.js:41 (2) [6, "Risotto"]
script.js:42 6 */
   }

///<<<<<------by using spread operator ---->>>>>
for( const [ln,el] of menu.entries()){
  console.log(`${ln} : ${el}`) 
  /*0 : Focaccia
 1 : Bruschetta
 2 : Garlic Bread
 3 : Caprese Salad
 4 : Pizza
 5 : Pasta
 6 : Risotto */

   }


//<<<<<<<<<<<<<<<<-----------------   Enhanced object literals --------->>>>>>>>>>>>>>


let  opening={
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
},

 hotel = {
 opening
};

console.log(hotel) //{opening: {…}} opening: {sat: {…}} __proto__: Object
// methods 
// maya:funtion(){

// }
//        or
//        maya(){

//        }










    


// <<<<<<<<============                      OPTIONAL CHAINING                ==============>>>>>>>>>>>>>>>
// if opening hours.monday properties doesnt exist

// # without optional chaining
console.log(restaurant.openingHours.mon.open) // gives an error of Cannot read property 'open' of undefined

// # with optional chaining
console.log(restaurant.openingHours.mon?.open)// if mo property is there then the open property will be read otherwise it will return null or undefined


// Real world example
const days =['mon','tue','wed','thu','fri','sat']

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';// nullish collasing operator (?? => also consider the false value(like 0)
console.log(` we open on ${days} at ${open}`) }

// also works on methods
const open = restaurant.order?.(0,1) ?? 'closed'
 
// works on array to
let users =[{name:'pankaj', email:'ghagjhgaa'}]
console.log(users[0]?.name ?? 'users are empty')