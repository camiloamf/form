const questions = {
  ask: "Empecemos por el principio, ¿como te llamas?",
  icon: "",
  type: "input",
  nextQuestions: [
    {
      ask: "¿Cual es tu dirección de correo?",
      icon: "",
      type: "input",
      nextQuestions: [
        {
          ask: "¿En que país vives?",
          icon: "",
          type: "input",
          nextQuestions: [
            {
              ask: "¿Y en qué ciudad o provincia?",
              icon: "",
              type: "input",
              nextQuestions: [
                {
                  ask: "¿Cuántos años tienes?",
                  icon: "",
                  type: "input",
                  nextQuestions: [
                    {
                      ask: "Estoy embarazada",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      icon: "fas fa-baby",
                      type: "select",
                      nextQuestions: [],
                    },
                    {
                      ask: "Quiero quedarme embarazada",
                      icon: "fas fa-baby-carriage",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Si las he tomado",
                          label:
                            "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Si, lo he hecho",
                              label:
                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                              icon: "",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Si, lo he estado intentando",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Claro",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      type: "select",
                                      nextQuestions: [],
                                    },
                                    {
                                      ask: "Por el momento no",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      type: "select",
                                      nextQuestions: [],
                                    },
                                  ],
                                },
                                {
                                  ask: "No.",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Formulario finalizado",
                                      icon: "fas fa-shish-kebab",
                                      label:
                                        "Felizidades!!! has terminado el formulario",
                                      type: "end",
                                      nextQuestions: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              ask: "No.",
                              label:
                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                              icon: "",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Si, lo he estado intentando",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [],
                                },
                                {
                                  ask: "No lo he estado intentando",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          ask: "No las he tomado",
                          label:
                            "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              icon: "fas fa-shish-kebab",
                              label:
                                "Felizidades!!! has terminado el formulario",
                              type: "end",
                              nextQuestions: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      ask: "No estoy segura de estar embarazada",
                      icon: "fas fa-shish-kebab",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Formulario finalizado",
                          icon: "",
                          label: "Felizidades!!! has terminado el formulario",
                          type: "end",
                          nextQuestions: [],
                        },
                      ],
                    },
                  ],
                },
              ],
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
  questionsToRender.map(({ ask, type, label, icon }) => {
    createBlock(ask, type, label, icon);
  });
  entryAnimation();
}

function createBlock(questionString, type, label, icon) {
  if (type === "select") {
    createSelect(questionString, label, icon);
  } else if (type === "input") {
    createInput(questionString);
  } else {
    createEnd(questionString, label);
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

function createSelect(questionString, label, icon) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  var localActualQuestion = document.getElementById("actualQuestion");

  var actualAnswer = document.getElementById("actualAnswer");
  var button = document.getElementById("button");
  if (actualAnswer && button) {
    button.remove();
    actualAnswer.remove();
  }
  if (label != "" && localActualQuestion.innerHTML != label) {
    localActualQuestion.innerHTML = label;
  }

  const mainBlock = document.createElement("div");
  mainBlock.className = "block";
  const question = document.createElement("p");
  question.innerHTML = questionString;
  if (icon != "") {
    const iconElement = document.createElement("i");
    iconElement.style.marginRight = "5px";
    iconElement.style.marginLeft = "5px";
    iconElement.className = icon;
    iconElement.style.width = "30px";
    iconElement.style.height = "30px";

    mainBlock.append(iconElement);
  }

  mainBlock.append(question);

  localMainInput.style.flexDirection = "row";
  localMainInput.style.flexWrap = "wrap";
  localMainInput.style.width = "100%";
  localMainInput.style.height = "100%";
  localMainInput.appendChild(mainBlock);
  mainBlock.addEventListener("click", function (e) {
    const answer = e.target.innerHTML.replace("<p>", "").replace("</p>", "");
    saveAnswer(answer);
  });
}

function createInput(questionString) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
  }
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);
  document.getElementById("actualAnswer").value = "";

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

function createEnd(finishMessage, FinishTitle) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
  }
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);

  // document.getElementById("button").style.display = "none";
  // document.getElementById("actualAnswer").style.display = "none";
  // document.getElementsByClassName("container")[0].style.flexDirection =
  //   "column";

  document.getElementById("actualQuestion").innerHTML = FinishTitle;

  document.getElementById("button").onclick = function () {
    console.log("pressed");
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
      //aqui esta el problema de que se repita **arreglar urgentemente
      questionObject.forEach((obj) => {
        if (obj.ask == answer) {
          return obj.nextQuestions;
        } else {
          let posibleQuestions = this.nextQuestionsFinder(
            obj.nextQuestions,
            answer
          );
          if (posibleQuestions) {
            auxiliarQuestion = posibleQuestions;
          }
        }
      });
      return findResponseArr(auxiliarQuestion);
    }
  }
}

function findResponseArr(arr) {
  if (arr[0] && arr[0].ask) {
    return arr;
  } else {
    return findResponseArr(arr[0]);
  }
}
