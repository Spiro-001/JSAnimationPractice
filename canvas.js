let x = 0;

function circle(){
  this.initialize = function(){
    const canvas = document.getElementById("canvasOne");
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext('2d');
    circleLoadAnimate(canvas, context);
  };
}

function circleLoadAnimate(circle, context){
  if (x === 720) x = 0;
  context.clearRect(0, 0, 200, 200);
  context.beginPath();
  context.strokeStyle = `rgb(${(x / 5) % 255}, 50, 0)`;
  context.lineWidth = 5;
  context.arc(75, 75, 50, (x / 360) * Math.PI, 2 * Math.PI, true);
  context.stroke();
  x += 5;

  requestAnimationFrame(function(){
    circleLoadAnimate(circle, context);
  });
}

const test = new circle();
document.addEventListener("DOMContentLoaded", test.initialize);

  // document.addEventListener("DOMContentLoaded", function(){ //addEventListener will wait for document to load first.
  //   const canvasElement = document.getElementById("canvasOne");
  //   canvasElement.width = 800;
  //   canvasElement.height = 800;

  //   let context = canvasElement.getContext('2d');
  //   context.fillStyle = "black";
  //   context.fillRect(20, 20, 200, 200);
    
  //   context.beginPath();
  //   context.strokeStyle = "white";
  //   context.lineWidth = 1;
  //   for (let i = 0; i < 360; i++){
  //     context.arc(120, 120, 100, (i/180) * Math.PI, (360/180) * Math.PI, true);
  //     context.stroke();
  //     setTimeout(1000);
  //   }
  //   // context.fillStyle = "blue";
  //   context.fill();
  // });