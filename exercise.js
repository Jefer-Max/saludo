var morningHour = [0, 12];
var afternoonHour = [12, 18];
var eveningHour = [18, 24];

function saludo(morningHour, afternoonHour, eveningHour) {
  var nombre = document.getElementById("nombre");
  var username = nombre.value;
  var hora = new Date().getHours();
  var text = "";

  if (hora >= morningHour[0] && hora < morningHour[1]) {
    text = "Good Morning";
  } else if (hora >= afternoonHour[0] && hora < afternoonHour[1]) {
    text = "Good afternoon";
  } else if (hora >= eveningHour[0] && hora < eveningHour[1]) {
    text = "Good Evening";
  }

  document.getElementById("greeting").innerHTML =
    "Hola " + username + " " + text + "!";
}

document.querySelector(".js-greet").addEventListener("click", function (e) {
  e.preventDefault();
  saludo(morningHour, afternoonHour, eveningHour);
});

var buttonSave = document.querySelectorAll(".js-save");

function settingHour(type) {
  var inputSince = document.querySelector(`input[name='${type}TimeSince']`)
    .value;
  var inputTo = document.querySelector(`input[name='${type}TimeTo']`).value;

  return [parseInt(inputSince), parseInt(inputTo)];
}

buttonSave.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var dayHour = e.target.classList[1];
    var data = settingHour(dayHour);
    if (dayHour === "morning") {
      morningHour = data;
    } else if (dayHour === "afternoon") {
      afternoonHour = data;
    } else if (dayHour === "evening") {
      eveninHour = data;
    }
  });
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
