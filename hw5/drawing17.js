function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	stroke(0)
	strokeWeight(.5)




	

for (var i = 20; i <= 380; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = i;
  var endY = 20;
  line(startX, startY, endX, endY);
}
	
for (var i = 380; i >= 30; i = i - 10) {
  var startX = 380;
  var startY = i;
  var endX = i;
  var endY = 380;
  line(startX, startY, endX, endY);
}

	
}

