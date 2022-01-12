const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: false
};

// const animate = () => {
//   console.log('rah');
//   requestAnimationFrame(animate);
// }
//
// animate();

const sketch = ({ context, width, height }) => {

  const agents = [];

  for (let i = 0; i < 300; i++) {
    // const x = random.range(width*0.15, width*0.85);
    // const y = random.range(height*0.15, height * 0.85);
    const x = random.range(0, width);
    const y = random.range(0, height);
    const radius = random.range(1, 5);
    agents.push(new Agent(x, y, radius));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'rgba(255,0,0, 0)'; // transparent background
    // context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 0.02;
    context.strokeStyle = 'grey';

    // let gradient = context.createLinearGradient(0, 0, width, 0);
    // gradient.addColorStop("0", "magenta");
    // gradient.addColorStop("0.5" ,"blue");
    // gradient.addColorStop("1", "#9f5555");
    // context.strokeStyle = gradient;

    for(let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for(let j = 0; j < agents.length; j++) {
        const other = agents[j];

        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
    })
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent{
  constructor(x, y, radius) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = radius;
  }

  bounce(width, height) {
    if(this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x *= -1;
    }
    if(this.pos.y <= 0 || this.pos.y >= height) {
      this.vel.y *= -1;
    }
  }

  update(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {

    // let gradient = context.createLinearGradient(0, 0, 170, 0);
    // gradient.addColorStop("0", "magenta");
    // gradient.addColorStop("0.5" ,"blue");
    // gradient.addColorStop("1.0", "red");

    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.beginPath();
    //context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.strokeStyle = 'grey';
    context.fill();
    context.stroke();

    context.restore();

    // context.beginPath();
    // context.bezierCurveTo(0, 0, random.range(0, 1080), random.range(0,1080), 540, 540);
    // context.lineWidth = 0.66;
    // context.strokeStyle = 'grey';
    // context.stroke();
  }
}