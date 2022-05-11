let celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
]; 


// //step 1
// function MakeLegend(name){
// return (name +' is now a legend.')
// }
// MakeLegend('Nafiso')

// //step 2 
// // function legendaryCelebs (){
// //   for (let i=0; i<celebs.length; i++){
// //     console.log(celebs[i] + ' is now a legend. ')
// //   }
// // }

//  legendaryCelebs()

// let legendaryCeleb = [];
// for  (let i = 0; i < celebs.length; i++){
// legendaryCeleb2.push(`${celebs[i]} is now a lengend`);
// }


// let vowels = ["A","E","I","O","U"]

//  creatVowelsCelebs (){
//    vowelCelebs = []
//    for (let i=0; i<celebs.length; i++){
//     console.log(celebs[i] + ' is now a legend. ')
//   }
//   if(celebs[i].startWith(vowels[0]))
 

//  }
//recap work with hamza
//str- is the array
function makelegend(str) {
  return `${str} is now a legend`;
}
legendaryCelebs = [];

for(let i = 0; i < celebs.length; i++){
  legendaryCelebs.push(makelegend(Celebs[i]))
}
let vowelCelebs = [];
for (let i= 0; i<celebs.length; i++){
  const vowels = ['a','e','i','o','u'];
  if(vowels.includes(celebs[i][0].toLowerCase())) {
    vowelCelebs.push(celebs[i]);
  }

  }
console.log(vowelCelebs);
//toLowecase()))  to check if its a captial letter
//[0] means first charater with in the string