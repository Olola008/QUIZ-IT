//Spørsmålene
let question = [
  "Hva er RAM?",
  "Hva er Apache?",
  "Hva brukes Git til?",
  "Hva er Linux?",
  "Hva er en IP-adresse?",
  "Hva er DNS?",
];

//Svar
let answers = [
  ["Minne", "Skjerm", "Mus", "Tastatur"],
  ["Spill", "Webserver", "Virus", "Nettleser"],
  ["Film", "Gaming", "Musikk", "Versjonskontroll"],
  ["Skjerm", "Kabel", "Operativsystem", "Tastatur"],
  ["Passord", "Nettverksadresse", "Spill", "Fil"],
  ["Oversetter domenenavn", "Lagrer bilder", "Et spill", "Antivirus"],
];

//Riktige svar
let correct = [0, 1, 3, 2, 1, 0];

//Styr på spørsmål
let number = 0;
//Styr på poeng
let points = 0;

//Finner html elementer
const questionText = document.getElementById("question");
const answerBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const poeng = document.getElementById("poeng");

//Viser spørsmålene
function showQ() {
  //Spørsmålet vi er på
  questionText.textContent = question[number];

  //Fjerner gamle svar
  answerBox.textContent = "";

  //Fjerner gamle feedback
  feedback.textContent = "";

  //Går gjennom alle svarene
  for (let i = 0; i < answers[number].length; i++) {
    //Lager en ny knapp
    let button = document.createElement("button");

    //Skriver svaret på knappen
    button.textContent = answers[number][i];

    //Gjør at knappen reagere når vi klikker
    button.addEventListener("click", function () {
      //Skjekker om svaret er riktig
      checkAnswer(i);
    });

    //Legger knappen inn på nettsiden
    answerBox.appendChild(button);
  }

  //Skjuler neste knapp
  nextButton.style.display = "none";
}

//Skjekker svaret
function checkAnswer(answer) {
  //Skjekker om svaret brukeren valgte er riktig
  if (answer == correct[number]) {
    //Gir ett poeng
    points = points + 1;

    //Viser riktig melding
    feedback.textContent = "Riktig! +1 Poeng";

    //Gjør teksten grønn
    feedback.style.color = "green";
  } else {
    //Viser feil melding
    feedback.textContent = "Feil Svar!";

    //Gjør teksten rød
    feedback.style.color = "red";
  }

  //Oppdaterer poengsummen
  poeng.textContent = "Poeng: " + points;

  //Viser neste knapp
  nextButton.style.display = "block";

  //Finner alle svar knappene
  let buttons = answerBox.getElementsByTagName("button");

  //Går gjennom alle knappene
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

//Går til neste spørsnål
function nextQ() {
  //Går til neste spørsmål
  number = number + 1;

  //Skjekker om det finner flere spørsmål
  if (number < question.length) {
    //Viser neste spørsmål
    showQ();
  } else {
    //Viser at quizen er ferdig
    questionText.textContent = "Quizen er ferdig!";

    //Fjerner svar knappene
    answerBox.textContent = "";

    //Viser resultat
    feedback.textContent =
      "Du fikk " + points + " av " + question.length + " poeng.";

    //Endrer knappen til prøv igjen
    nextButton.textContent = "Prøv igjen";
  }
}

//Starter quizen på nytt

function restartQuiz() {
  //Starter spørsmål 1 igjen
  number = 0;

  //Setter poeng tilbake til 0
  points = 0;

  //Endrer knappen tilvake til neste
  nextButton.textContent = "Neste";

  //Viser 0 poeng
  poeng.textContent = "Poeng: 0";

  //Viser første spørsmål
  showQ();
}

//Når vi trykker på neste
nextButton.addEventListener("click", function () {
  //Hvis quizen er ferdig
  if (number >= question.length) {
    //Start quizen på nytt
    restartQuiz();
  } else {
    //Gå til neste spørsmåk
    nextQ();
  }
});

showQ();
