let question = [
    "Hva er RAM?",
    "Hva er Apache?",
    "Hva brukes Git til?",
    "Hva er Linux?",
    "Hva er en IP-adresse?",
    "Hva er DNS?"
];

let answers = [
    ["Minne", "Skjerm", "Mus", "Tastatur"],
    ["Spill", "Webserver", "Virus", "Nettleser"],
    ["Film", "Gaming", "Musikk", "Versjonskontroll"],
    ["Skjerm", "Kabel", "Operativsystem", "Tastatur"],
    ["Passord", "Nettverksadresse", "Spill", "Fil"],
    ["Oversetter domenenavn", "Lagrer bilder", "Et spill", "Antivirus"]
    
];

let correct = [0, 1, 3, 2, 1, 0];

let number = 0;
let points = 0;

function showQ(){
    document.getElementById("question").textContent = question[number];
    
    document.getElementById("answer0").textContent = answers[number][0];
    document.getElementById("answer1").textContent = answers[number][1];
    document.getElementById("answer2").textContent = answers[number][2];
    document.getElementById("answer3").textContent = answers[number][3];
    
    document.getElementById("feedback").textContent = "";
}
