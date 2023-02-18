var ball = document.getElementById("ball");
var dx = 3;
var dy = -3;
var x = 140;
var y = 140;

var board = document.getElementById("gameboard");
board.addEventListener("keydown", moveBallHandler);
board.focus();

function moveBallHandler(event) {
  if (event.keyCode === 37) {
    // 왼쪽 화살표
    x -= 10;
  } else if (event.keyCode === 39) {
    // 오른쪽 화살표
    x += 10;
  }
  ball.style.left = x + "px";
}
setInterval(moveBall, 15);

function moveBall() {
    x += dx;
    y += dy;

    if (x > 280 || x < 0) dx = -dx;
    if (y > 280 || y < 0) dy = -dy;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}