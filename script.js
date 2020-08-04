let menu = document.getElementById("menu");
let button = document.querySelector('button');
let screenIMage = document.querySelector("img");
let pokemonInfoDiv = document.getElementById("pokemon_info");

button.onclick = function(event){
    event.preventDefault();

    //get user selection
    let userChoice = menu.value;

    if(userChoice == 'pika'){
        screenIMage.src = "images/pikachu.png";
        //pokemonInfoDiv.innerHTML = "A yellow mouse";
        a.href = "A yellow mouse"
    }
    else if (userChoice == "bulba"){
        screenIMage.src = "images/bulbasaur.png";
        pokemonInfoDiv.innerHTML = 'A green seed';
    }
    else if (userChoice == "char"){
        screenIMage.src = "images/charmander.png";
        pokemonInfoDiv.innerHTML = 'An orange lizard';
    }
    else{
        screenIMage.src = "images/squirtle.png";
        pokemonInfoDiv.innerHTML = 'A blue turtle';
    }
}