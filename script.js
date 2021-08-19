var startBtn = document.getElementById("start");

startBtn.addEventListener("click", initiate);

var stopBtn = document.getElementById("stop");

stopBtn .addEventListener("click", terminate);


function initiate() {
  halt = setInterval(draw,30);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

function terminate() {
  clearInterval(halt);
  startBtn.disabled = false;
  stopBtn.disabled = true
};


var x = 0;
var y = 0;
var d = "M 0 0";

function draw() {
 
  var r = Math.floor((Math.random() * 4) + 1);
    
  switch (r) {
    case 1:
      x = x + 5;
      d = d + ` H ${x}`;
    break;
    case 2:
      x = x - 5;
      d = d + ` H ${x}`;
    break;
    case 3:
      y = y + 5;
      d = d + ` V ${y}`;
    break;
    case 4:
      y = y - 5;
      d = d + ` V ${y}`;
    break;
  };

  document.getElementById("dot").setAttribute("cx", x);
  document.getElementById("dot").setAttribute("cy", y);
  document.getElementById("dot").setAttribute("r", "1");
  document.getElementById("dot").setAttribute("fill", "blue");
  document.getElementById("dot").setAttribute("stroke", "black");
  document.getElementById("dot").setAttribute("stroke-width", "0.5");
  document.getElementById("path").setAttribute("d", d);

};