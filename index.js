
document.getElementById("load").addEventListener("click", () => {
  document.querySelector(".register_screen").style.display = "none";
  document.querySelector(".question_screen").style.display = "block";
  pseudo();
});
document.getElementById("next").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "none";
  document.querySelector(".answer_screen").style.display = "block";
});
document.getElementById("notok").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "block";
  document.querySelector(".answer_screen").style.display = "none";
  nextPseudo();
  moins();
});
document.getElementById("ok").addEventListener("click", () => {
  document.querySelector(".question_screen").style.display = "block";
  document.querySelector(".answer_screen").style.display = "none";
  nextPseudo();
  plus();
});
document.getElementById("reload").addEventListener("click", () => {
  location.reload();
});

//PSEUDO

var pseudoList = document.getElementById('pseudoList');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','pseudoText[]');
  newField.setAttribute('class','pseudo');
  pseudoList.appendChild(newField);
}

remove_fields.onclick = function(){
  var input_tags = pseudoList.getElementsByTagName('input');
  if(input_tags.length > 1) {
    pseudoList.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

var pseudoData = document.getElementsByName('pseudoText[]');

let index = 0;

function pseudo() {
  const indexPseudoData = pseudoData[index];
  document.getElementById("player").innerText = indexPseudoData.value;
  loadGame()
}

function nextPseudo() {
  index++;
  if (index < pseudoData.length) {
    pseudo();
  } else {
    index = 0;
    pseudo();
  }
}

function final() {
  document.querySelector(".question_screen").style.display = "none";
  document.querySelector(".final_screen").style.display = "block";
  if (index > 0) {
    index--;
    finalScreen();
  } else {
    index = pseudoData.length - 1;
    finalScreen();
  }
}

function finalScreen() {
  const indexPseudoData = pseudoData[index];
  document.getElementById("winner").innerText = indexPseudoData.value;
}

//SCORE

function fillNumber(n) {
  return Array(n).fill(0);
}
const score = fillNumber(12);

function plus() {
  if (score[index] < 4) {
    score[index]++;
  } else {
    final();
  }
  console.log(score);
}

function moins() {
  if (score[index] > 0) {
    score[index]--;
  } else {
    score[index] = 0;
  }
  console.log(score);
}

//LOAD GAME

const initial_values = [

    {
      level: "facile",
      question: "De quelle ville les Beatles sont-ils originaires ?",
      answer: "Liverpool",
    },
    {
      level: "facile",
      question: "Quelle est la capitale de la France ?",
      answer: "Paris",
    },
    {
      level: "moyen",
      question: "Que s’est-il passé le 20 juillet 1969 ?",
      answer: "Neil Armstrong pose le pied sur la Lune",
    },
    {
      level: "moyen",
      question: "Comment s'appelle le colocataire de Sheldon dans la série The Big Bang Theory ?",
      answer: "Leonard Hofstadter",
    },
    {
      level: "moyen",
      question: "Qui a réalisé le film Les Dents de la mer ?",
      answer: "Steven Spielberg",
    },
    {
      level: "moyen",
      question: "En quelle année a eu lieu la chute du mur de Berlin ?",
      answer: "1989",
    },
    {
      level: "moyen",
      question: "Qui était le premier président des États-Unis ?",
      answer: "George Washington",
    },
    {
      level: "moyen",
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi",
    },
    {
      level: "moyen",
      question: "Dans quel pays se trouve la ville de Cancún ?",
      answer: "Mexique",
    },
    {
      level: "moyen",
      question: "Quel est le prénom de Squeezie ?",
      answer: "Lucas",
    },
    {
      level: "difficile",
      question: "Quelle est la capitale de la Turquie ?",
      answer: "Ankara",
    }

]

const gameData = [];
gameData.push(...initial_values);

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const levelEl = document.getElementById('level')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')

function loadGame() {

    const result = getRandomItem(gameData);
    levelEl.innerText = result.level;
    questionEl.innerText = result.question;
    answerEl.innerText = result.answer;

    const suppr = gameData.indexOf(result);
    gameData.splice(suppr, 1);
    console.log(gameData);
    
    if (gameData.length === 0) {
      gameData.push(...initial_values);
    }
}

// problème répétition de question