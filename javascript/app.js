document.addEventListener("DOMContentLoaded", function () {
  var options = {
    data: {
      homero: null,
      marge: null,
      lisa: null,
      bart: null,
      maggie: null,
      abuelo: null,
      abe: null,
      abuela: null,
      mona: null,
    },

onAutocomplete: function(personaje){
respuesta.innerHTML = `${personaje}`;
}

}

  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, options);
});

const respuesta = document.getElementById('respuesta')

