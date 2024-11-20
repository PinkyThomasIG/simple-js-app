let pokemonRepository = (function () {
let pokemonList=[
{
    name:'Bulbasaur',
    height:1.7,
    types:['grass', 'poison']
},
{
    name:'Eve',
    height:0.8,
    types:['grass', 'poison']
},
{
    name:'Ivy',
    height:1,
    types:['grass', 'poison']
}
];
//for loop that iterates over each item in pokemonList

/* for(let i= 0; i < pokemonList.length; i++){
         document.write(
             `${pokemonList[i].name} (height: ${pokemonList[i].height})
            <br>`
        );
     }
*/


// for loop with if statement 

/*  let message = "";

for(let i= 0; i < pokemonList.length; i++){
    if(pokemonList[i].height > 1.5){
        message = "- Wow, that's big!";
    } else {
        message = "";
    }
    document.write(
        `<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}) 
        ${message} 
        </p>`
    );
} */

// replacing for loop with forEach loop to iterate array elements 

/* pokemonList.forEach(function(list){
    document.write('<p>' + list.name + ' ' +':height(' + list.height + ')' + '</p>');
}

); */

// replacing for loop with forEach loop and if statement to iterate array elements 
// adding IIFE Task: 1.5 plus getAll and add functions

function getAll(){
    return pokemonList;
}

function add(pokemon){
    pokemonList.push(pokemon);
}

return {
    add:add,
    getAll:getAll
};

}) ();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Picassu'});
console.log(pokemonRepository.getAll());

let pokemons = pokemonRepository.getAll();
let message = "";
pokemons.forEach(function(list) {
    if(list.height > 1.5) {
        message = " - Wow! That's big!";
    } else {
        message = "";
    }
    document.write(
        '<p>' + list.name + ' : height (' + list.height + ')' + message
    );
}

);