document.addEventListener("DOMContentLoaded", function () {
  var options = {
    data: {
      "homero": null,
    },
    onAutocomplete: function (etiquetas) {
      respuesta.innerHTML = `${etiquetas}`;
    },
  };

  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, options);
});

const respuesta = document.getElementById("respuesta");


//


var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
        