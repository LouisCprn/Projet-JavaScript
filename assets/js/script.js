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
  var pourcentagePlayer = document.querySelector('.pourcentagePlayer');

  log.textContent += `${prenom.value}`;
  form.style.display = 'none';
  Vs.style.display = 'flex';
  table.style.display = 'grid';
  score.style.display = 'grid';
  carte.style.display = 'flex';
  player.style.display = 'flex';
  computer.style.display = 'flex';
  pourcentagePlayer.style.display = 'flex';
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

  rock.addEventListener('dragstart' , (ev)=>{
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
            break;
          case "pierre":
         
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
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
            break;
          case "ciseaux":
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
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
            break;
          case "feuille":
           
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
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
      showresult();
    }, 2000);


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
  var scorePlayer = parseInt(document.querySelector('.user-score').textContent);
  var scoreComputer = parseInt(document.querySelector('.cpu-score').textContent);

  var pourcentagePlayer = document.querySelector('.pourcentagePlayer');

  pourcentagePlayer.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComputer) * 100) + '%';
}

function showresult() {
  var Vs = document.querySelector('.Vs');
  var table = document.querySelector('.imgTable');
  var score = document.querySelector('.stat');
  var carte = document.querySelector('.carte');
  var player = document.querySelector('.case');
  var computer = document.querySelector('.computer');
  var pourcentagePlayer = document.querySelector('.pourcentagePlayer');
  var thumbsdown = document.querySelector('.thumbsdown')
  var thumbsup = document.querySelector('.thumbsup');
  var slash = document.getElementById('slashbg');

  var userscore = document.querySelector('.user-score').textContent;
    if (userscore == 5){
      thumbsup.style.display = 'flex';
      Vs.style.display = 'none';
      table.style.display = 'none';
      score.style.display = 'none';
      carte.style.display = 'none';
      player.style.display = 'none';
      computer.style.display = 'none';
      pourcentagePlayer.style.display = 'none';
      document.body.style.background = "#FAF0E6";
      slash.style.display = 'none';
      restart.style.display = 'grid';
    };
  var cpscore = document.querySelector('.cpu-score').textContent;
    if (cpscore == 5){
      thumbsdown.style.display = 'flex';
      Vs.style.display = 'none';
      table.style.display = 'none';
      score.style.display = 'none';
      carte.style.display = 'none';
      player.style.display = 'none';
      computer.style.display = 'none';
      pourcentagePlayer.style.display = 'none';
      document.body.style.background = "#828489";
      restart.style.display = 'grid';
    }
    
  }

var restart = document.querySelector('.restart');

restart.addEventListener('click', ()=>{
  window.location.reload();
})

const mq = window.matchMedia("(max-width: 1200px)");

if (mq.matches) {
  var allCardsPlayer = document.querySelectorAll('.cards')

allCardsPlayer.forEach(function(Player) {
  Player.addEventListener('click', function() {
    Player = this.id;
    console.log('1',Player);
    switch (Player) {
      case 'paper':
        paper.value = "feuille";
        userChoice = paper.value;
        computerChoice = randomComputer();
        document.querySelector('.case').innerHTML = '<img src="assets/img/feuille.png" alt="Papier" class="imgShifumi" id="paper" draggable="true" data-hand="paper">' ;

        switch (computerChoice) {
          case "feuille":
            break;
          case "ciseaux":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            break;
          case "pierre":
         
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
            break;
        }
  
        break;
  
      case 'rock':
        rock.value = "pierre";
        userChoice = rock.value;
        computerChoice = randomComputer();
        document.querySelector('.case').innerHTML = '<img src="assets/img/pierre.png" alt="Pierre" class="imgShifumi" id="rock" draggable="true" data-hand="rock">' ;

        switch (computerChoice) {
          case "pierre":
            break;
          case "feuille":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            break;
          case "ciseaux":
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
            break;
        }
  
        break;
  
      case 'cut':
        cut.value = "ciseaux";
        userChoice = cut.value;
        computerChoice = randomComputer();
        document.querySelector('.case').innerHTML = '<img src="assets/img/cut.png" alt="Ciseaux" class="imgShifumi" id="cut" draggable="true" data-hand="cut">' ;

        switch (computerChoice) {
          case "ciseaux":
            break;
          case "pierre":
            document.querySelector('.cpu-score').textContent = parseInt(document.querySelector('.cpu-score').textContent) + 1;
            break;
          case "feuille":
           
            document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
            pourcentage()
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
      showresult();
    }, 2000);

  })
})
}