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

let message = "";

pokemonList.forEach(function(list) {
    if(list.height>1.5) {
        message = " Wow you are big";
    } else {
        message = "";
    }
    document.write('<p>' + list.name+ ' '+ ': height(' + list.height + ')' + message + '</p>');
}

);