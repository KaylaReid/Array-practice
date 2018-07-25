const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]


const body = document.querySelector("body");
const script = document.querySelector("script");
const mainContent = document.createElement("div");
body.insertBefore(mainContent, script);
mainContent.setAttribute("id", "planets");

const planetEl = document.getElementById("planets");
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// planets.forEach((string) => {
//     planetEl.innerHTML +=
//     `<h2>${string}</h2>`
// })

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
*/

let planetsUpper = planets.map((str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});

// planetEl.innerHTML += 
// `<h2>${planetsUpper}</h2>`
// console.log(planetsUpper);




// alternative
//     planetsUpper = planets.map(function(str){
//     let upperCase = str.charAt(0).toUpperCase();
//     let restOfWord = str.slice(1);
//     return upperCase  + restOfWord;
// });

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let planetsFiltered = planetsUpper.filter((thing) =>{
    return thing.includes ("E") + thing.includes ("e") 

});

console.log(planetsFiltered);

function addArrayToDOM(array){
    array.forEach(function(index){
        planetEl.innerHTML +=
            `<h2>${index}</h2>`
    })
}

addArrayToDOM(planets);
addArrayToDOM(planetsUpper);
addArrayToDOM(planetsFiltered);




// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

words.push(".")

const reducedWords = words.reduce(
    function (accumulator, value) {
        return accumulator + " " + value
    }
 )
//  console.log(reducedWords)

 planetEl.innerHTML += reducedWords;