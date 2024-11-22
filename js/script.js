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
function getAll() {
    return pokemonList; 
}

function addListItem(pokemon){
    let pokemon_List = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');  
    let button = document.createElement('button'); 
    button.innerText = pokemon.name; 
    button.classList.add('button-class');
    button.addEventListener('click', function () {
        showDetails(pokemon);
    });
    listpokemon.appendChild(button); 
    pokemon_List.appendChild(listpokemon);
}

function showDetails(pokemon){
console.log(pokemon.name); 
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

return {
    add: add,
    getAll:getAll,
    addListItem: addListItem,
    
}

}) ();

console.log(pokemonRepository.getAll()); 
pokemonRepository.add({name: 'Picassu'}); 
console.log(pokemonRepository.getAll()); 

// using for loop to iterate the array elements 

/* message ="";
  for (let i=0; i<pokemonList.length; i++){

    if(pokemonList[i].height> 2) {
        message = " - Wow, you are big!";
    } else {
        message = "";
    }
    document.write(
        `<p> ${pokemonList[i].name} - height (${pokemonList[i].height}) ${message} </p>`
    )
  } */ 




// using forEach loop to ieterate the array elements 

pokemonRepository.getAll().forEach(function(pokemon) { 
    pokemonRepository.addListItem(pokemon); 
  } ); 
