const elementAnswer = document.querySelector("#answer");
const inputQuestion = document.querySelector("#inputQuestion");
const buttonAsk = document.querySelector("#buttonAsk");
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

// click "ask question"
function askQuestion() {
  if (inputQuestion.value == "") {
    alert("Digite sua pergunta");
    return;
  }

  buttonAsk.setAttribute("disabled", true);

  const question = "<div>" + inputQuestion.value + "</div>";

  // random number
  const totalAnswers = answers.length;
  const numRandom = Math.floor(Math.random() * totalAnswers);

  elementAnswer.innerHTML = question + answers[numRandom];

  elementAnswer.style.opacity = 1;

  // answer vanishes after 3 sec
  setTimeout(function () {
    elementAnswer.style.opacity = 0;
    buttonAsk.removeAttribute("disabled");
  }, 3000);
}
