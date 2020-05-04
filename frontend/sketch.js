const socket = io();

socket.on("connected", () => {
  console.log("Socket ID" + socket.id);
});

function setup() {
  createCanvas(1500, 1000);
}
var rang = "black";
socket.on("draw", function (data) {
  //ellipse(data.x, data.y, 80, 80);
  stroke(data.rang);
  strokeWeight(10);
  fill(color(15, 172, 7));
  line(data.x, data.y, data.px, data.py);
});

function mouseDragged() {
  // Make a little object with mouseX and mouseY
  let data = {
    rang: rang,
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
  };
  // Send that object to the socket
  console.log("First " + pmouseY + pmouseX);
  socket.emit("mouse", data);
}

$("#color1").click(function () {
  console.log("Clicked");
  console.log($("#color1").css("background-color"));
  rang = $("#color1").css("background-color");
});
$("#color2").click(function () {
  console.log("Clicked");
  console.log($("#color2").css("background-color"));
  rang = $("#color2").css("background-color");
});
$("#color3").click(function () {
  console.log("Clicked");
  console.log($("#color3").css("background-color"));
  rang = $("#color3").css("background-color");
});
$("#color4").click(function () {
  console.log("Clicked");
  console.log($("#color4").css("background-color"));
  rang = $("#color4").css("background-color");
});
$("#color5").click(function () {
  console.log("Clicked");
  console.log($("#color5").css("background-color"));
  rang = $("#color5").css("background-color");
});
