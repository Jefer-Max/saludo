var morningHour = [0, 12];
var afternoonHour = [12, 18];
var eveningHour = [18, 24];

//funcion saludo
function saludo(morningHour, afternoonHour, eveningHour) {
  var nombre = document.getElementById("nombre");
  var username = nombre.value;
  var hora = new Date().getHours();
  var text = "";
  //condiciones de saludo
  if (hora >= morningHour[0] && hora < morningHour[1]) {
    text = "Good Morning";
  } else if (hora >= afternoonHour[0] && hora < afternoonHour[1]) {
    text = "Good afternoon";
  } else if (hora >= eveningHour[0] && hora < eveningHour[1]) {
    text = "Good Evening";
  }
  //mostramos saludo
  document.getElementById("greeting").innerHTML =
    "Hola " + username + " " + text + "!";
}

document.querySelector(".js-greet").addEventListener("click", function (e) {
  e.preventDefault();
  saludo(morningHour, afternoonHour, eveningHour);
  //console.log(morningHour);
  //console.log(afternoonHour);
  //console.log(eveningHour);
});

var buttonSave = document.querySelector(".js-save");

function settingHour() {
  var morningSince =
    document.querySelector(`input[name='morningTimeSince']`).value !== ""
      ? document.querySelector(`input[name='morningTimeSince']`).value
      : "00";
  var morningTo =
    document.querySelector(`input[name='morningTimeTo']`).value !== ""
      ? document.querySelector(`input[name='morningTimeTo']`).value
      : "12";
  var afternoonSince =
    document.querySelector(`input[name='afternoonTimeSince']`).value !== ""
      ? document.querySelector(`input[name='afternoonTimeSince']`).value
      : "12";
  var afternoonTo =
    document.querySelector(`input[name='afternoonTimeTo']`).value !== ""
      ? document.querySelector(`input[name='afternoonTimeTo']`).value
      : "18";
  var eveningSince =
    document.querySelector(`input[name='eveningTimeSince']`).value !== ""
      ? document.querySelector(`input[name='eveningTimeSince']`).value
      : "18";
  var eveningTo =
    document.querySelector(`input[name='eveningTimeTo']`).value !== ""
      ? document.querySelector(`input[name='eveningTimeTo']`).value
      : "24";

  return {
    morning: [parseInt(morningSince), parseInt(morningTo)],
    afternoon: [parseInt(afternoonSince), parseInt(afternoonTo)],
    evening: [parseInt(eveningSince), parseInt(eveningTo)],
  };
}

buttonSave.addEventListener("click", function (e) {
  e.preventDefault();
  var data = settingHour();
  morningHour = data.morning;
  afternoonHour = data.afternoon;
  eveningHour = data.evening;

  saludo(morningHour, afternoonHour, eveningHour);
});

//abrir configuracion
if (document.getElementById("btn-setting")) {
  var time = document.getElementById("verTime");
  var btn = document.getElementById("btn-setting");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    time.classList.add("active");
  };
  span.onclick = function () {
    time.classList.remove("active");
  };
}
