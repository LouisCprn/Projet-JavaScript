var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var cut = document.getElementById('cut');

var box = document.querySelector('.case');

box.addEventListener('dragover', (ev)=> {
    ev.preventDefault();
})

box.addEventListener('dragstart', (ev)=> {
    ev.dataTransfer.setData("text", ev.target.id);
})

rock.addEventListener('drop', (ev)=> {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
})