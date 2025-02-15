var c = document.getElementById("c");
var ctx = c.getContext("2d");

var cw = (c.width = window.innerWidth),
  cx = cw / 2;
var ch = (c.height = window.innerHeight),
  cy = ch / 2;

var rad = Math.PI / 180;
var stopped = true;
var howMany = 100;
var Circles = [];
ctx.strokeStyle = "red";
ctx.fillStyle = "rgba(255, 234, 234, 0.59)";
ctx.globalAlpha = 0.75;

function Circle() {
  this.R = randomIntFromInterval(50, 200);
  this.X = randomIntFromInterval(this.R, cw - this.R);
  this.Y = randomIntFromInterval(this.R, ch - this.R);
  this.iX = 2 * Math.random() * (Math.random() < 0.5 ? -1 : 1); //positive or negative
  this.iY = 2 * Math.random() * (Math.random() < 0.5 ? -1 : 1); //positive or negative

  this.r = randomIntFromInterval(5, 50);
  this.r1 = randomIntFromInterval(this.R / 2, this.R);

  this.a = ~~(Math.random() * 360) + 1;
  this.x = this.X + this.r1 * Math.cos(this.a * rad);
  this.y = this.Y + this.r1 * Math.sin(this.a * rad);
  this.l = randomIntFromInterval(50, 80);
}

for (var i = 0; i < howMany; i++) {
  var circle = new Circle();
  Circles.push(circle);
}

function Draw() {
  ctx.fillRect(0, 0, cw, ch);

  for (var i = 0; i < Circles.length; i++) {
    var p = Circles[i];
    if (p.X < p.R || p.X > cw - p.R || p.Y < p.R || p.Y > ch - p.R) {
      p.iX *= -1;
      p.iY *= -1;
    }

    p.X += p.iX;
    p.Y += p.iY;
    p.a += 1;
    p.x = p.X + p.r1 * Math.cos(p.a * rad);
    p.y = p.Y + p.r1 * Math.sin(p.a * rad);
    p.gx = p.x + p.r * Math.cos(p.a * rad);
    p.gy = p.y + p.r * Math.sin(p.a * rad);

    ctx.save();

    ctx.fillStyle = Grd(p.gx, p.gy, p.r, p.l);

    heart(p.x, p.y, p.r, p.a);
    ctx.restore();
  }
  requestId = window.requestAnimationFrame(Draw);
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}

function Grd(x, y, r, l) {
  grd = ctx.createRadialGradient(x, y, 0, x, y, r);
  grd.addColorStop(0, "hsla(0, 99%," + l + "%,.9)");
  grd.addColorStop(1, "hsla(0, 99%," + l + "%, 0.1)");
  return grd;
}

function heart(x, y, r, a) {
  ctx.beginPath();
  var x1 = x + r * Math.cos(a * rad);
  var y1 = y + r * Math.sin(a * rad);
  var cx1 = x + r * Math.cos((a + 22.5) * rad);
  var cy1 = y + r * Math.sin((a + 22.5) * rad);

  var cx2 = x + r * Math.cos((a - 22.5) * rad);
  var cy2 = y + r * Math.sin((a - 22.5) * rad);
  var chord = 2 * r * Math.sin((22.5 * rad) / 2);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.arc(cx1, cy1, chord, (270 + a) * rad, (270 + a + 225) * rad);
  ctx.lineTo(x, y);
  ctx.moveTo(x1, y1);
  ctx.arc(cx2, cy2, chord, (90 + a) * rad, (90 + a + 135) * rad, true);
  ctx.lineTo(x, y);
  ctx.fill();
}

function start() {
  requestId = window.requestAnimationFrame(Draw);
  stopped = false;
}

function stopAnim() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  stopped = true;
}

window.addEventListener("load", start(), false);
c.addEventListener(
  "click",
  function () {
    stopped == true ? start() : stopAnim();
  },
  false
);


function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}


const yourDate = new Date("2024-12-06T00:00:00");

document.addEventListener("DOMContentLoaded", function () {
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");
  var dateElement = document.querySelector("date");

  var endDay = new Date("2025-02-12T00:00:00");


  dateElement.textContent = Math.floor(
    Math.floor((endDay - yourDate) / 1000) / 60 / 60 / 24
    // Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24
  );


  function updateClock() {
    var now = new Date();
    var diff = now - yourDate;

    var hrs = Math.floor(diff / 1000 / 60 / 60) % 24;
    var mins = Math.floor(diff / 1000 / 60) % 60;
    var secs = Math.floor(diff / 1000) % 60;

    hoursElement.textContent = hrs < 10 ? "0" + hrs : hrs;
    minutesElement.textContent = mins < 10 ? "0" + mins : mins;
    secondsElement.textContent = secs < 10 ? "0" + secs : secs;
  }

  updateClock();
  setInterval(updateClock, 1000);
});

const developControl = document.querySelector(".js-develop-button");
const resetControl = document.querySelector(".js-reset-button");
const polaroidPhoto = document.querySelector(".js-photo");


// Danh sách các ảnh có thể hiển thị
// const images = [
//   "img/nm/nm1.gif",
//   "img/nm/nm2.jpg",
//   "img/nm/nm3.jpg",
//   "img/nm/nm4.jpg",
//   "img/nm/nm5.jpg",
//   "img/nm/nm6.jpg",
//   "img/nm/nm7.jpg",
//   "img/nm/nm8.jpg",
//   "img/nm/nm9.jpg",
//   "img/nm/nm10.jpg",
//   "img/nm/nm11.jpg",
//   "img/nm/nm12.jpg",
//   "img/nm/nm13.jpg",
//   "img/nm/nm14.jpg",
//   "img/nm/nm15.jpg",
//   "img/nm/nm16.jpg"
// ];
const images = [
  "img/NM/0069c09ada9664c83d87101.jpg",
  "img/NM/006ae3b0f8bc46e21fad46.jpg",
  "img/NM/0095f867e26b5c35057a105.jpg",
  "img/NM/02a211820a8eb4d0ed9f22.jpg",
  "img/NM/02bbe1cffac3449d1dd283.jpg",
  "img/NM/02fbde8fc5837bdd229257.jpg",
  "img/NM/0349306f2b63953dcc7233.jpg",
  "img/NM/051cb8c6a3ca1d9444db32.jpg",
  "img/NM/0876eeacf5a04bfe12b12.jpg",
  "img/NM/0a8cea63f26f4c31157e.jpg",
  "img/NM/11b2e4fbfff741a918e678.jpg",
  "img/NM/1236fb11e01d5e43070c23.jpg",
  "img/NM/1243cf99d4956acb338424.jpg",
  "img/NM/1263172a0c26b278eb3777.jpg",
  "img/NM/1503814c9a40241e7d5181.jpg",
  "img/NM/16a1127c0970b72eee614.jpg",
  "img/NM/1755407e5b72e52cbc6344.jpg",
  "img/NM/194a27013c0d8253db1c76.jpg",
  "img/NM/194b880993052d5b741462.jpg",
  "img/NM/1c29227b39778729de6697.jpg",
  "img/NM/1fc53310281c9642cf0d16.jpg",
  "img/NM/21ad04861f8aa1d4f89b47.jpg",
  "img/NM/2387dcd3c7df798120ce56.jpg",
  "img/NM/250fd2d0c9dc77822ecd6.jpg",
  "img/NM/265e6b1d7011ce4f970058.jpg",
  "img/NM/276d2d16361a8844d10b84.jpg",
  "img/NM/28d588f293fe2da074ef27.jpg",
  "img/NM/29511a8b0187bfd9e69625.jpg",
  "img/NM/295bc421df2d6173383c70.jpg",
  "img/NM/2a25f9fee2f25cac05e319.jpg",
  "img/NM/2b71150c0e00b05ee91151.jpg",
  "img/NM/2dfc52da49d6f788aec734.jpg",
  "img/NM/2e5a04801f8ca1d2f89d30.jpg",
  "img/NM/2e9c3fde24d29a8cc3c363.jpg",
  "img/NM/38f5acd1b7dd098350cc42.jpg",
  "img/NM/3c136d5d7651c80f914087.jpg",
  "img/NM/3e0e3efd24f19aafc3e0103.jpg",
  "img/NM/41a19288898437da6e9526.jpg",
  "img/NM/42fca8bbb3b70de954a666.jpg",
  "img/NM/4457537d4871f62faf6040.jpg",
  "img/NM/45c63cb827b499eac0a549.jpg",
  "img/NM/475d4c26572ae974b03b85.jpg",
  "img/NM/47ff3c0e2602985cc113107.jpg",
  "img/NM/4c1e383b23379d69c42637.jpg",
  "img/NM/4c7664537f5fc101984e35.jpg",
  "img/NM/4ded4da356afe8f1b1be86.jpg",
  "img/NM/4e0d1a4b0147bf19e65671.jpg",
  "img/NM/4ef6dbdcc0d07e8e27c148.jpg",
  "img/NM/512b30612b6d9533cc7c75.jpg",
  "img/NM/591182cd99c1279f7ed011.jpg",
  "img/NM/5a6c7eb665badbe482ab20.jpg",
  "img/NM/5bf08fd394df2a8173ce13.jpg",
  "img/NM/5cb8adc2b6ce089051df98.jpg",
  "img/NM/5dd1819c9a9024ce7d8189.jpg",
  "img/NM/62cc9c8d878139df609064.jpg",
  "img/NM/63047847634bdd15845a59.jpg",
  "img/NM/666ecb4bd0476e19375639.jpg",
  "img/NM/67104ae050eceeb2b7fd100.jpg",
  "img/NM/67580c791775a92bf0643.jpg",
  "img/NM/68996fe274eecab093ff82.jpg",
  "img/NM/69deb4fcaff011ae48e114.jpg",
  "img/NM/6a03df22c42e7a70233f1.jpg",
  "img/NM/6ace13ea08e6b6b8eff743.jpg",
  "img/NM/6b440c6d1761a93ff07012.jpg",
  "img/NM/6f2b430c5800e65ebf1128.jpg",
  "img/NM/723b156f0e63b03de97252.jpg",
  "img/NM/728426733c7f8221db6e99.jpg",
  "img/NM/74d544a95fa5e1fbb8b454.jpg",
  "img/NM/7a3a2c7d3771892fd06072.jpg",
  "img/NM/7ba9e9e9f2e54cbb15f465.jpg",
  "img/NM/7e589c2c8720397e603167.jpg",
  "img/NM/7f301e63056fbb31e27e94.jpg",
  "img/NM/8be0f817e21b5c45050a108.jpg",
  "img/NM/8e324ae951e5efbbb6f415.jpg",
  "img/NM/9004064d1d41a31ffa5079.jpg",
  "img/NM/94b5459c5e90e0ceb98136.jpg",
  "img/NM/953dc41cdf10614e380121.jpg",
  "img/NM/9fb050f34bfff5a1acee60.jpg",
  "img/NM/a8bad3f1c8fd76a32fec74.jpg",
  "img/NM/aa4cc604dd0863563a1980.jpg",
  "img/NM/aba5997f82733c2d656241.jpg",
  "img/NM/aca221553b598507dc48109.jpg",
  "img/NM/acc027333d3f8361da2e106.jpg",
  "img/NM/b24bc930d23c6c62352d93.jpg",
  "img/NM/b27ed2a1c9ad77f32ebc10.jpg",
  "img/NM/b2b63ece25c29b9cc2d355.jpg",
  "img/NM/b7eca1c4bac804965dd97.jpg",
  "img/NM/bb18694a7246cc18955795.jpg",
  "img/NM/bc8d90c08bcc35926cdd90.jpg",
  "img/NM/bee05bc540c9fe97a7d838.jpg",
  "img/NM/c1db0cfd17f1a9aff0e031.jpg",
  "img/NM/c651098a1286acd8f5978.jpg",
  "img/NM/c6514c2c5720e97eb03150.jpg",
  "img/NM/cbab16df0dd3b38deac288.jpg",
  "img/NM/d05d0b87108baed5f79a18.jpg",
  "img/NM/d07d71016a0dd4538d1c53.jpg",
  "img/NM/d1f571d76adbd4858dca17.jpg",
  "img/NM/d215506e4b62f53cac7361.jpg",
  "img/NM/d85b1881038dbdd3e49c29.jpg",
  "img/NM/db3151634a6ff431ad7e96.jpg",
  "img/NM/ddd2a820b22c0c72553d102.jpg",
  "img/NM/dec23f1f24139a4dc3025.jpg",
  "img/NM/e6cf21153a198447dd0845.jpg",
  "img/NM/e754c418df14614a380591.jpg",
  "img/NM/e7a172e669ead7b48efb68.jpg",
  "img/NM/ed200ffa14f6aaa8f3e79.jpg",
  "img/NM/ee1a6d5f7653c80d914273.jpg",
  "img/NM/f4fa220d3801865fdf10104.jpg",
  "img/NM/fab924cd3fc1819fd8d069.jpg",
  "img/NM/fb39234d3841861fdf5092.jpg"
];

developControl.addEventListener("click", () => {

  // Chọn một ảnh ngẫu nhiên từ danh sách
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  console.log(randomImage)
  // Đổi ảnh
  polaroidPhoto.src = randomImage;

  polaroidPhoto.classList.add("is-developed");
});

resetControl.addEventListener("click", () => {
  polaroidPhoto.classList.remove("is-developed");
});
