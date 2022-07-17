const questions = {
  ask: "Queremos conocerte un poco más, dinos tu nombre:",
  icon: "",
  type: "input",
  nextQuestions: [
    {
      ask: "Que edad tienes",
      icon: "",
      type: "input",
      nextQuestions: [
        {
          ask: "Estas segura que estas embarazada",
          icon: "",
          type: "select",
          nextQuestions: [
            {
              ask: "Cuantos meses tienes",
              icon: "",
              type: "input",
              nextQuestions: [
                {
                  ask: "Si me he cuidado",
                  icon: "",
                  type: "select",
                  nextQuestions: [],
                },
                {
                  ask: "No me he cuodado",
                  icon: "",
                  type: "select",
                  nextQuestions: [],
                },
              ],
            },
          ],
        },
        {
          ask: "Tengo dudas",
          icon: "",
          type: "select",
          nextQuestions: [
            {
              ask: "bah",
              icon: "",
              type: "select",
              nextQuestions: [],
            },
            {
              ask: "bah x2",
              icon: "",
              type: "select",
              nextQuestions: [],
            },
          ],
        },
      ],
    },
  ],
};
let answers = [];

let mainInputTag;
let actualQuestionTag;
let auxiliarQuestion = [];
function actualQuestion() {
  mainInputTag = document.getElementsByClassName("mainInput")[0];
  actualQuestionTag = document.getElementById("actualQuestion");
  setTimeout(function () {
    exitAnimation();
    setTimeout(function () {
      document.getElementById("actualQuestion").innerHTML = questions.ask;
      document.getElementsByClassName("mainInput")[0].style.display = "flex";

      entryAnimation();
    }, 1000);
  }, 3000);
}

function entryAnimation() {
  document.getElementById("animation").style.animation =
    "entryAnimation 1.9s ease-in-out";
}

function exitAnimation() {
  document.getElementById("animation").style.animation =
    "exitAnimation 1.2s ease-in-out";
}

function saveName() {
  var answer = document.getElementById("actualQuestion").innerHTML;
  exitAnimation();
  setTimeout(function () {
    var name = document.getElementById("actualAnswer").value;
    document.getElementById("actualAnswer").value = "";
    document.getElementById("actualQuestion").innerHTML =
      "Hola " + name + ", estamos aquí para resolver tus dudas...";
    document.getElementById("animation").style.animation = "none";
    entryAnimation();
    document.getElementById("button").style.display = "none";
    document.getElementById("actualAnswer").style.display = "none";

    setTimeout(function () {
      saveAnswer(answer, name);
    }, 3000);
  }, 1000);
}

function saveAnswer(answer, writeAnswer) {
  exitAnimation();
  setTimeout(function () {
    writeAnswer ? answers.push(writeAnswer) : answers.push(answer);
    deleteAllBlocks();
    const nextQuestionsToRenderize = nextQuestionsFinder(questions, answer);
    renderizeNextQuestions(nextQuestionsToRenderize);
  }, 1000);
}

function renderizeNextQuestions(questionsToRender) {
  questionsToRender.map(({ ask, type }) => {
    createBlock(ask, type);
  });
  entryAnimation();
}

function createBlock(questionString, type) {
  if (type === "select") {
    createSelect(questionString);
  } else {
    createInput(questionString);
  }
}

function deleteAllBlocks() {
  const arr = Array(document.getElementsByClassName("block").length ?? 0).fill(
    0
  );
  var blocks = document.getElementsByClassName("block");
  if (arr.length > 0) {
    arr.map(() => {
      blocks[0].remove();
    });
  }
}

function createSelect(questionString) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  var localActualQuestion = document.getElementById("actualQuestion");
  if (localMainInput && localActualQuestion) {
    document.getElementsByClassName("mainInput")[0].remove();
    document.getElementById("actualQuestion").remove();
  }

  const mainBlock = document.createElement("div");
  mainBlock.className = "block";
  const question = (document.createElement("p").innerHTML = questionString);

  mainBlock.append(question);
  document.getElementsByClassName("container")[0].style.flexDirection = "row";
  document.getElementsByClassName("container")[0].appendChild(mainBlock);
  mainBlock.addEventListener("click", function (e) {
    const answer = e.target.innerHTML;
    saveAnswer(answer);
  });
}

function createInput(questionString) {
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);

  document.getElementById("button").style.display = "block";
  document.getElementById("actualAnswer").style.display = "block";
  document.getElementsByClassName("container")[0].style.flexDirection =
    "column";

  document.getElementById("actualQuestion").innerHTML = questionString;

  document.getElementById("button").onclick = function () {
    var writeAnswer = document.getElementById("actualAnswer").value;
    var answer = document.getElementById("actualQuestion").innerHTML;
    saveAnswer(answer, writeAnswer);
  };
}

function nextQuestionsFinder(questionObject, answer) {
  const answerFinded = !Array.isArray(questionObject)
    ? questionObject
    : questionObject.find(({ ask }) => ask == answer);

  if (answerFinded && answerFinded.ask == answer) {
    return answerFinded.nextQuestions;
  } else {
    const nextNode = questionObject ? questionObject.nextQuestions : undefined;
    if (nextNode) {
      return nextQuestionsFinder(nextNode, answer);
    } else {
      questionObject.forEach(({ nextQuestions }) => {
        let posibleQuestions = this.nextQuestionsFinder(nextQuestions, answer);
        if (posibleQuestions) {
          auxiliarQuestion = posibleQuestions;
        }
      });
      return findResponseArr(auxiliarQuestion);
    }
  }
}

function findResponseArr(arr) {
  console.log(2, arr);
  if (arr[0] && arr[0].ask) {
    return arr;
  } else {
    return findResponseArr(arr[0]);
  }
}
