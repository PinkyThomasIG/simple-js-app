let pokemonList=[
{
    pname:'Bulbasaur',
    height:1.7,
    types:['grass', 'poison']
},
{
    pname:'Eve',
    height:0.8,
    types:['grass', 'poison']
},
{
    pname:'Ivy',
    height:1,
    types:['grass', 'poison']
}
];
//for loop that iterates over each item in pokemonList

/* for(let i= 0; i < pokemonList.length; i++){
         document.write(
             `${pokemonList[i].pname} (height: ${pokemonList[i].height})
            <br>`
        );
     }
*/


let message = "";

for(let i= 0; i < pokemonList.length; i++){
    if(pokemonList[i].height > 1.5){
        message = "- Wow, that's big!";
    } else {
        message = "";
    }
    document.write(
        `${pokemonList[i].pname} (height: ${pokemonList[i].height}) 
        ${message} 
        <br>`
    );
}
