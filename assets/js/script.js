// ----- Page Prénom -------
var input = document.getElementById('send');


input.addEventListener('click', () => {
  console.log('test')
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
var userChoice;
var computerChoice;
var userArea = document.querySelector('.case');



var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var cut = document.getElementById('cut');

var user_icon = document.querySelector('.case');
var computer_icon = document.querySelector('.computer');

var putUserScore = document.querySelector('.user-score');
var putCpuScore = document.querySelector('.cpu-score');

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

    computerChoice = cpu();

    whowins(computerChoice, userChoice);
    setTimeout(function(){
      reset();
    }, 1000);
  });
})();



var cpu = function () {
  choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  } else if (choice <= 0.67) {
    return "paper";
  } else {
    return "cut";
  }
}

function whowins(cpu, user) {

  if (cpu == "rock") {
    if (user == "paper") {
      userScore++;
      changeColor('case');
    } else if (user == "cut") {
      computerScore++;
      changeColor('computer')
    }
  } else if (cpu == "paper") {
    if (user == "rock") {
      computerScore++;
      changeColor('computer')
    } else if (user == "cut") {
      userScore++;
      changeColor('case')
    }
  } else if (cpu == "cut") {
    if (user == "rock") {
      userScore++;
      changeColor('case')
    } else if (user == "paper") {
      computerScore++;
      changeColor('computer')
    }
  }

  function changeColor(entitiy) {
    var enty = entitiy;
    document.querySelector('.' + entitiy).style.borderColor = "green"
    setTimeout(function () {
      document.querySelector('.' + entitiy).style.borderColor = "black"
    }, 1000);
  }

  putUserScore.innerHTML = userScore;
  putCpuScore.innerHTML = computerScore;

}

function reset(){
  userArea.innerHTML = '';
  console.log('fin')
}