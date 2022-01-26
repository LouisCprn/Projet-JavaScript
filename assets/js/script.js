// ----- Page Prénom -------
var input = document.getElementById('send');


input.addEventListener('click', () => {
  var Vs = document.querySelector('.Vs');
  var form = document.querySelector('.form');
  var table = document.querySelector('.imgTable');
  var score = document.querySelector('.stat');
  var carte = document.querySelector('.carte');
  var player = document.querySelector('.case');
  var computer = document.querySelector('.computer');

  log.textContent += `${prenom.value}`;
  form.style.display = 'none';
  Vs.style.display = 'flex';
  table.style.display = 'block';
  score.style.display = 'block';
  carte.style.display = 'flex';
  player.style.display = 'flex';
  computer.style.display = 'block';
})

// Modale règles

var modal = document.getElementById("myModal");
var btn = document.querySelector(".information");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Jeu du Shifumi
var userArea = document.querySelector('.case');

var cpuArea = document.querySelector('.computer');

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var cut = document.getElementById('cut');

var UserScore = document.querySelector('.user-score');
var CpuScore = document.querySelector('.cpu-score');

var hand = document.querySelectorAll('.carte div img');

var userScore = 0;
var computerScore = 0;

(function user() {

  for (var i = 0; i < hand.length; i++) {
    hand[i].ondragstart = dragStart;
  }

  function dragStart() {
    userChoice = this.getAttribute("data-hand");
  }

  rock.addEventListener('dragstart', (ev)=>{
    ev.dataTransfer.setData("text", ev.target.id);
  })

  paper.addEventListener('dragstart', (ev)=>{
    ev.dataTransfer.setData("text", ev.target.id);
  })

  cut.addEventListener('dragstart', (ev)=>{
    ev.dataTransfer.setData("text", ev.target.id);
  })

  userArea.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  userArea.addEventListener('drop', function (e) {
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    e.target.innerHTML = document.getElementById(data).outerHTML;

    switch (data) {
      case 'paper':
        paper.value = "feuille";
        userChoice = paper.value;
        computerChoice = randomComputer();
  
        switch (computerChoice) {
          case "feuille":
            break;
          case "ciseaux":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            // pourcentage()
            break;
          case "pierre":
         
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            // pourcentage()
            break;
        }
  
        break;
  
      case 'rock':
        rock.value = "pierre";
        userChoice = rock.value;
        computerChoice = randomComputer();
  
        switch (computerChoice) {
          case "pierre":
            break;
          case "feuille":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            // pourcentage()
            break;
          case "ciseaux":
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            // pourcentage()
            break;
        }
  
        break;
  
      case 'cut':
        cut.value = "ciseaux";
        userChoice = cut.value;
        computerChoice = randomComputer();
  
        switch (computerChoice) {
          case "ciseaux":
            break;
          case "pierre":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            // pourcentage()
            break;
          case "feuille":
           
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            // pourcentage()
            break;
        }
  
        break;
    }
    switch(computerChoice){
      case 'pierre':
        if(computerChoice == 'pierre'){
          document.querySelector('.computer').innerHTML = '<img src="assets/img/pierre.png" alt="Pierre" class="imgShifumi" id="rock" draggable="true" data-hand="rock">' ;
        };
        break;
      case 'feuille':
        if(computerChoice == 'feuille'){
           document.querySelector('.computer').innerHTML = '<img src="assets/img/feuille.png" alt="Papier" class="imgShifumi" id="paper" draggable="true" data-hand="paper">' ;
        };
        break;
      case 'ciseaux':
        if(computerChoice == 'ciseaux'){
           document.querySelector('.computer').innerHTML = '<img src="assets/img/cut.png" alt="Ciseaux" class="imgShifumi" id="cut" draggable="true" data-hand="cut">' ;
        };
        break;
    }

    setTimeout(function(){
      reset();
    }, 1000);
  });
})();

let result = ['pierre', 'feuille', 'ciseaux'] 
var computerChoice = "";

function randomComputer() {
  var random = Math.floor(Math.random() * result.length);

  if (random == 0) {
    computerChoice = "pierre";
  }

  if (random == 1) {
    computerChoice = "feuille";
  }

  if (random == 2) {
    computerChoice = "ciseaux";
  }
  return computerChoice;
}

function reset(){
  userArea.innerHTML = '';
  cpuArea.innerHTML = '';
}

function pourcentage() {
  var scorePlayer = parseInt(document.querySelector('.scorePlayer').textContent);
  var scoreComputer = parseInt(document.querySelector('.scoreComputer').textContent);

  var pourcentagePlayer = document.querySelector('.pourcentagePlayer');
  var pourcentageComputer = document.querySelector('.pourcentageComputer');

  pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';
  pourcentageComputer.innerHTML = Math.round(scoreComputer / (scorePlayer + scoreComputer) * 100) + '%';
}