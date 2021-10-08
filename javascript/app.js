document.addEventListener("DOMContentLoaded", function () {
  var options = {
    data: {
      homero: "../img/homeromini.png",
      marge: "../img/margemini.png",
      lisa: "../img/lisamini.png",
      bart: null,
      maggie: null,
      abuelo: null,
      abe: null,
      abuela: null,
      mona: null,
      "capitulo 1": "../img/televisor.png",
      "Temporada 1": null,
    },

    onAutocomplete: function (personaje) {
      respuesta.innerHTML = `${personaje}`;
    },
  };

  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, options);
});

const respuesta = document.getElementById("respuesta");

//

const simpson = [
  { nombre: "homero" },
  { nombre: "marge" },
  { nombre: "lisa" },
  { nombre: "bart" },
  { nombre: "maggie" },
];

const buscador = document.querySelector("#buscador");
const btnbuscar = document.querySelector("#btnbuscar");
const resultadobusqueda = document.querySelector("#resultadobusqueda");
const filtrado = () => {
  resultadobusqueda.innerHTML = "";

  const busqueda = buscador.ariaValueMax.toLowerCase();
  for (let personaje of simpson) {
    let nombre = simpson.nombre.toLowerCase();
    if (nombre.indexOf(busqueda) !== -1) {
      resultadobusqueda.innerHTML += `<li>${personajes.nombre}</li>`;
    }
  }

  if (resultadobusqueda.innerHTML === "") {
    resultadobusqueda.innerHTML += `
    <li> Personaje no encontrado ...</li>`;
  }
};



buscador.addEventListener('keyup', filtrado);

filtrado ();
