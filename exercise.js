var morningHour = [0, 12];
var afternoonHour = [12, 18];
var eveningHour = [18, 24];

//function greeting
function greeting(morningHour, afternoonHour, eveningHour) {
  var name = document.getElementById("name");
  var username = name.value;
  var hour = new Date().getHours();
  var text = "";
  //conditions greeting
  if (hour >= morningHour[0] && hour < morningHour[1]) {
    text = "Good Morning";
  } else if (hour >= afternoonHour[0] && hour < afternoonHour[1]) {
    text = "Good afternoon";
  } else if (hour >= eveningHour[0] && hour < eveningHour[1]) {
    text = "Good Evening";
  }
  //show greeting
  document.getElementById("greeting").innerHTML =
    "Hello " + username + " " + text + "!";
}

document.querySelector(".js-greet").addEventListener("click", function (e) {
  e.preventDefault();
  greeting(morningHour, afternoonHour, eveningHour);
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

  greeting(morningHour, afternoonHour, eveningHour);
});

//open setting
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
