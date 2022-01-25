// ----- Page Prénom -------
var input = document.getElementById('send');


input.addEventListener('click', () => {

  var Vs = document.querySelector('.Vs');
  var form = document.querySelector('.start');
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
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var cut = document.getElementById('cut');

var box = document.querySelector('.case')

rock.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('test')
})

paper.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('test')
})

cut.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('test')
})

box.addEventListener('drop', (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
})

box.addEventListener('dragover', (ev) =>{
    ev.preventDefault();
})
