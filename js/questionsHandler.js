const questions = {
  ask: "Para empezar, por favor dinos cómo te llamas.",
  direction: "",
  behavior: "",
  icon: "",
  type: "input",
  nextQuestions: [
    {
      ask: "¿Cual es tu dirección de correo?",
      direction: "",
      behavior: "",
      icon: "",
      type: "input",
      nextQuestions: [
        {
          ask: "¿En que país vives?",
          direction: "",
          behavior: "autocomplete",
          icon: "",
          type: "input",
          nextQuestions: [
            {
              ask: "¿Y en qué ciudad o provincia?",
              direction: "",
              behavior: "",
              icon: "",
              type: "input",
              nextQuestions: [
                {
                  ask: "¿Cuántos años tienes?",
                  direction: "",
                  behavior: "",
                  icon: "",
                  type: "input",
                  nextQuestions: [
                    {
                      ask: "Estoy embarazada",
                      direction: "column",
                      behavior: "",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      icon: "fas fa-baby",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Si.",
                          direction: "",
                          behavior: "",
                          label: "¿Estás tomando Vitaminas Prentales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              direction: "",
                              behavior: "",
                              icon: "",
                              label:
                                "Felicidades!!! has terminado el formulario",
                              type: "end",
                              nextQuestions: [],
                            },
                          ],
                        },
                        {
                          ask: "No.",
                          direction: "",
                          behavior: "",
                          label: "¿Estás tomando Vitaminas Prentales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              direction: "",
                              behavior: "",
                              icon: "",
                              label:
                                "Felicidades!!! has terminado el formulario",
                              type: "end",
                              nextQuestions: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      ask: "Quiero quedarme embarazada",
                      direction: "column",
                      behavior: "",
                      icon: "fas fa-baby-carriage",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Si las he tomado",
                          direction: "",
                          behavior: "",
                          label:
                            "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Si, lo he hecho",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                              icon: "",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Si, he estado intentando",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Claro",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Si.  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Si.   ",
                                              direction: "",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Felicidades!!! has terminado el formulario",
                                                  type: "end",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No.   ",
                                              direction: "",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Felicidades!!! has terminado el formulario",
                                                  type: "end",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No.  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Formulario finalizado",
                                              direction: "",
                                              behavior: "",
                                              icon: "fas fa-shish-kebab",
                                              label:
                                                "Felicidades!!! has terminado el formulario",
                                              type: "end",
                                              nextQuestions: [],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No lo sé.  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Formulario finalizado",
                                              direction: "",
                                              behavior: "",
                                              icon: "fas fa-shish-kebab",
                                              label:
                                                "Felicidades!!! has terminado el formulario",
                                              type: "end",
                                              nextQuestions: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      ask: "Por el momento no",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Formulario finalizado",
                                          direction: "",
                                          behavior: "",
                                          icon: "fas fa-shish-kebab",
                                          label:
                                            "Felicidades!!! has terminado el formulario",
                                          type: "end",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  ask: "No. ",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Formulario finalizado",
                                      direction: "",
                                      behavior: "",
                                      icon: "fas fa-shish-kebab",
                                      label:
                                        "Felicidades!!! has terminado el formulario",
                                      type: "end",
                                      nextQuestions: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              ask: "No.",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                              icon: "",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Si, lo he estado intentando",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?",
                                  icon: "",
                                  type: "select",
                                  nextQuestions: [],
                                },
                                {
                                  ask: "No lo he estado intentando",
                                  direction: "",
                                  behavior: "",
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
                          direction: "",
                          behavior: "",
                          label:
                            "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                          icon: "",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              direction: "",
                              behavior: "",
                              icon: "fas fa-shish-kebab",
                              label:
                                "Felicidades!!! has terminado el formulario",
                              type: "end",
                              nextQuestions: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      ask: "No estoy segura de estar embarazada",
                      direction: "column",
                      behavior: "",
                      icon: "fas fa-shish-kebab",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Formulario finalizado",
                          direction: "",
                          behavior: "",
                          icon: "",
                          label: "Felicidades!!! has terminado el formulario",
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
      "Hola " +
      name +
      ", te haremos unas breves preguntas para conocer más a fondo tu caso";
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
  questionsToRender.map(({ ask, type, label, icon, direction, behavior }) => {
    createBlock(ask, type, label, icon, direction, behavior);
  });
  entryAnimation();
}

function createBlock(questionString, type, label, icon, direction, behavior) {
  if (type === "select") {
    createSelect(questionString, label, icon, direction);
  } else if (type === "input") {
    createInput(questionString, behavior);
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

function createSelect(questionString, label, icon, direction) {
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
    iconElement.style.flexBasis = "20%";
    question.style.flexBasis = "80%";
    mainBlock.append(iconElement);
  }

  mainBlock.append(question);
  console.log(direction);
  localMainInput.style.flexDirection = direction != "column" ? "row" : "column";
  localMainInput.style.flexWrap = "nowrap";
  if (direction == "column") {
    mainBlock.style.marginTop = "5px";
    mainBlock.style.width = "50%";
    mainBlock.style.textAlign = "left";
  } else {
    mainBlock.style.marginRight = "3%";
  }
  localMainInput.style.width = "100%";
  localMainInput.style.height = "100%";
  localMainInput.appendChild(mainBlock);
  mainBlock.addEventListener("click", function (e) {
    const answer = e.target.innerHTML.includes("-->")
      ? e.target.innerHTML
          .split("-->")[1]
          .replace("<p>", "")
          .replace("</p>", "")
      : e.target.innerHTML.replace("<p>", "").replace("</p>", "");
    console.log(answer);
    saveAnswer(answer);
  });
}

function createInput(questionString, behavior) {
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

  var s = document.createElement("script");

  if (behavior && behavior === "autocomplete") {
    document.getElementById("actualAnswer").id = "actualAnswer" + behavior;

    s.innerHTML =
      "autocomplete(document.getElementById(" +
      "actualAnswerautocomplete" +
      "), countries);";
    document.body.appendChild(s);
  }

  document.getElementById("button").onclick = function () {
    var writeAnswer = "";
    if (behavior) {
      var actualAnswer = document.getElementById("actualAnswer" + behavior);
      writeAnswer = actualAnswer.value;
      actualAnswer.id = "actualAnswer";
      var actualAnswerClone = actualAnswer.cloneNode(true);
      actualAnswer.parentNode.replaceChild(actualAnswerClone, actualAnswer);
      s.innerHTML = "";
    } else {
      writeAnswer = document.getElementById("actualAnswer").value;
    }

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

  // document.getElementById("button").onclick = function () {
  //   console.log("pressed");
  // };
  response();
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
        console.log(2, obj);
        if (obj.ask == answer) {
          return obj.nextQuestions;
        } else {
          let posibleQuestions = this.nextQuestionsFinder(
            obj.nextQuestions,
            answer
          );
          if (posibleQuestions) {
            auxiliarQuestion = posibleQuestions;
            console.log(3, posibleQuestions);
          }
        }
      });
      return findResponseArr(auxiliarQuestion);
    }
  }
}

function findResponseArr(arr) {
  console.log(4, arr);
  if (arr[0] && arr[0].ask) {
    return arr;
  } else {
    return findResponseArr(arr[0]);
  }
}

function response() {
  //aqui has lo que tengas que hacer para el form o como sea que quieras manejar las respuestas
  console.log(answers);
}
