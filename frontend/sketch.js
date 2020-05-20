const socket = io();

socket.on("connected", () => {
  console.log("Socket ID" + socket.id);
});

function setup() {
  createCanvas(1500, 1000);
}
var rang = "black";
var lineWidth = 10;
socket.on("draw", function (data) {
  //ellipse(data.x, data.y, 80, 80);
  stroke(data.rang);
  strokeWeight(lineWidth);
  fill(color(15, 172, 7));
  line(data.x, data.y, data.px, data.py);
});

function mouseDragged() {
  // Make a little object with mouseX and mouseY
  let data = {
    lineWidth: lineWidth,
    rang: rang,
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
  };
  // Send that object to the socket
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

$("#marker").click(function () {
  console.log("Clicked");
  rang = $("#color3").css("background-color");
  lineWidth = 30;
});
$("#pen").click(function () {
  console.log("Clicked");
  rang = $("#color4").css("background-color");
  lineWidth = 15;
});
$("#pencil").click(function () {
  console.log("Clicked");
  rang = $("#color5").css("background-color");
  lineWidth = 5;
});

$("#line1").click(function () {
  console.log("Clicked");
  lineWidth = 1;
  console.log(lineWidth);
});
$("#line2").click(function () {
  console.log("Clicked");
  lineWidth = 2;
  console.log(lineWidth);
});
$("#line3").click(function () {
  console.log("Clicked");
  lineWidth = 3;
  console.log(lineWidth);
});
$("#line4").click(function () {
  console.log("Clicked");
  lineWidth = 4;
  console.log(lineWidth);
});
