const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = ({ context, width, height }) => {

  const agents = [];

  for (let i= 0; i < 5000; i++) {
    const x = random.range(0, width * 2);
    const y = random.range(0, height * 2);
    const radius = random.range(0, 200);
    agents.push(new Agent(x, y, radius));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
      agent.draw(context);
    })
  };
};

canvasSketch(sketch, settings);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent{
  constructor(x, y, radius) {
    this.pos = new Point(x, y);
    this.radius = radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.strokeStyle = 'grey';
    context.stroke();
  }
}