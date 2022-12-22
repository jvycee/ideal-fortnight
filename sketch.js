let gridTopX;
const gridTopY = 100;
const sideLength = 25;

function setup() {
  createCanvas(400, 400);
  gridTopX = width / 2;
}

function draw() {
  background(220);

  drawCube(0, 0);
  drawCube(0, 1);
  drawCube(1, 0);
}

function drawCube(c, r) {
  const x = gridTopX + ((c - r) * sideLength * sqrt(3)) / 2;
  const y = gridTopY + ((c + r) * sideLength) / 2;

  const points = [];

  for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
    points.push(
      createVector(x + cos(angle) * sideLength, y + sin(angle) * sideLength)
    );
  }

  line(x, y, points[0].x, points[0].y);
  line(x, y, points[1].x, points[1].y);
  line(x, y, points[2].x, points[2].y);
  line(x, y, points[3].x, points[3].y);
  line(x, y, points[4].x, points[4].y);
  line(x, y, points[5].x, points[5].y);

  quad(
    x,
    y,
    points[5].x,
    points[5].y,
    points[0].x,
    points[0].y,
    points[1].x,
    points[1].y
  );

  quad(
    x,
    y,
    points[1].x,
    points[1].y,
    points[2].x,
    points[2].y,
    points[3].x,
    points[3].y
  );

  quad(
    x,
    y,
    points[3].x,
    points[3].y,
    points[4].x,
    points[4].y,
    points[5].x,
    points[5].y
  );
}
