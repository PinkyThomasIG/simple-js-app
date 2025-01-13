let pokemonRepository = (function () {
  let e = [];
  function t(t) {
    e.push(t);
  }
  function n() {
    return e;
  }
  function o(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function i(e) {
    o(e).then(function () {
      var t, n, o;
      let i, r, l;
      (t = e.name),
        (n = "Height: " + e.height),
        (o = e.imageUrl),
        (i = document.querySelector("#PokemonModalLabel")),
        document.querySelector(".modal-body"),
        (r = document.querySelector("#pokemonHeight")),
        (l = document.querySelector("#pokemonImage")),
        (i.innerText = t),
        (r.innerText = n),
        l.setAttribute("src", o),
        $("#pokemonModal").modal("show");
    });
  }
  return {
    add: t,
    getAll: n,
    addListItem: function e(t) {
      let n = document.querySelector(".pokemon-grid"),
        r = document.createElement("div");
      r.classList.add("pokemon-card");
      let l = document.createElement("img");
      l.setAttribute("src", "placeholder.png"),
        l.classList.add("pokemon-image");
      let a = document.createElement("h5");
      (a.innerText = t.name),
        r.appendChild(l),
        r.appendChild(a),
        n.appendChild(r),
        o(t).then(() => {
          l.setAttribute("src", t.imageUrl);
        }),
        r.addEventListener("click", function () {
          i(t);
        });
    },
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            t({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: o,
    showDetails: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
