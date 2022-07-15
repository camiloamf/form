granero = {
  frutas: {
    manzanas: "2",
    peras: "7",
    granadas: "4",
  },
};

questions = {
  ask: "Queremos conocerte un poco más, dinos tu nombre",
  nextQuestions: {
    ask: "Que edad tienes",
    nextQuestions: {
      ask1: "estas segura que estas embarazada",
      ask2: "tengo mis dudas",
    },
  },
};

function actualQuestion() {
  console.log(questions.ask);
  document.getElementById("actualQuestion").innerHTML = questions.ask;
}

function saveName() {
  var name = document.getElementById("actualAnswer").value;

  document.getElementById("father").style.justifyContent = "flex-start";
  document.getElementById("father").style.marginRight = "50vw";
  document.getElementById("animation").style.animation = "none";
  setTimeout(function () {
    document.getElementById("animation").style.animation =
      "moveToRight 3s ease-in-out";
  }, 10);

  document.getElementById("actualQuestion").innerHTML = "Hola " + name;
  document.getElementById("father").style.justifyContent = "center";
  document.getElementById("father").style.marginRight = "0vw";
  document.getElementById("animation").style.animation = "none";
  setTimeout(function () {
    document.getElementById("animation").style.animation =
      "moveToRight 1.7s ease-in-out";
  }, 10);
  document.getElementById("button").style.display = "none";
  document.getElementById("actualAnswer").style.display = "none";
}
function imprimirFrutas() {
  fruticas = granero.frutas;
  console.log(
    Object.keys(fruticas).map((key) => console.log(key, fruticas[key]))
  );
}
