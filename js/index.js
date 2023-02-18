var ball = document.getElementById("ball");
var dx = 3;
var dy = -3;
var x = 140;
var y = 140;
var paddle = document.getElementById("paddle");
var board = document.getElementById("gameboard");
var paddleWidth = paddle.offsetWidth;
function movePaddle(event) {
    const key = event.key;
    if (key === "ArrowLeft") {
      let paddleLeft = paddle.offsetLeft;
      if (paddleLeft > 0) {
        paddle.style.left = paddleLeft - 50 + "px";
      }
    } else if (key === "ArrowRight") {
      let paddleLeft = paddle.offsetLeft;
      if (paddleLeft < board.offsetWidth - paddleWidth) {
        paddle.style.left = paddleLeft + 50 + "px";
      }
    }
  }
  
document.addEventListener("keydown", movePaddle);

setInterval(moveBall, 15);

function moveBall() {
    x += dx;
    y += dy;

    if (x > 280 || x < 0) {
        dx = -dx;
        if (x < 0) {
          x = 0;
        } else {
          x = 280;
        }
    }

    if (y > 280 || y < 0) {
        dy = -dy;
        if (y < 0) {
            y = 0;
        } else {
            y = 280;
        }
    }
    

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}