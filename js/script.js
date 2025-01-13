let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonGrid = document.querySelector(".pokemon-grid");
    let gridItem = document.createElement("div");
    gridItem.classList.add("pokemon-card");

    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", "placeholder.png"); // Placeholder until details are loaded
    pokemonImage.classList.add("pokemon-image");

    let pokemonName = document.createElement("h5");
    pokemonName.innerText = pokemon.name;

    gridItem.appendChild(pokemonImage);
    gridItem.appendChild(pokemonName);
    pokemonGrid.appendChild(gridItem);

    // Load details to update the placeholder image
    loadDetails(pokemon).then(() => {
      pokemonImage.setAttribute("src", pokemon.imageUrl);
    });

    // Add click event to show modal
    gridItem.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(title, text, img) {
    let modalTitle = document.querySelector("#PokemonModalLabel");
    let modalBody = document.querySelector(".modal-body");
    let pokemonHeight = document.querySelector("#pokemonHeight");
    let pokemonImage = document.querySelector("#pokemonImage");

    modalTitle.innerText = title;
    pokemonHeight.innerText = text;
    pokemonImage.setAttribute("src", img);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, "Height: " + pokemon.height, pokemon.imageUrl);
      $("#pokemonModal").modal("show");
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Initialize the Pokémon grid
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
