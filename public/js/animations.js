var i = 0;

function draw(){
  var canvas = document.getElementById('main');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgb("+i+",0,0)";
  ctx.fillRect(0,0,200,200);
  i++;

}

setInterval(draw,16);
