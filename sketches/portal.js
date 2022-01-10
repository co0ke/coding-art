const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.3;
    let x, y;

    // const num = 100000;
    const num = 150;
    const radius = width * 0.7;


    // Circle
    //
    // context.beginPath();
    // context.arc(cx,cy,100,0, Math.PI * 2);
    // context.fill();

    for(let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(0.1, 4);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();

      //context.strokeRect(random.range(1, 1000), random.range(1, 1000), random.range(1, 100), random.range(1, 100));


      // const slice = math.degToRad(360 / num);
      // const angle = slice * i;
      //
      // x = cx + radius * Math.sin(angle);
      // y = cy + radius * Math.cos(angle);
      //
      //
      //
      // context.save();
      // context.translate(x,y);
      // context.rotate(-angle);
      // context.scale(random.range(0, 0.99), random.range(0, 0.99));
      //
      // context.fillStyle = '#000000';
      //
      // context.beginPath();
      // context.arc(random.range(cx, w), random.range(cy, h), 5,0, Math.PI * random.range(0.1, 0.5));
      //
      // // context.fillStyle = 'red';
      // // context.rect(x, y, random.range(1, 1),500);
      //
      // context.fill();
      // context.restore();
      //
      // context.fillStyle = 'red';
      // context.beginPath();
      //
      // context.rect(random.range(0.1, width), random.range(0.1, height), 1, 1);
      // context.fill();
      // context.restore();

      // context.save();
      // context.translate(cx, cy);
      // context.rotate(-angle);
      //
      // context.lineWidth = random.range(1, 5);
      //
      // context.beginPath();
      // context.arc(0,0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 3));
      // context.stroke();
      // context.restore();
    }

    // Random Colour
    //
    // let randomColor = Math.floor(Math.random()*16777215).toString(16);
    // context.fillStyle = '#' + randomColor;

    // Circle
    //
    // context.beginPath();
    // context.arc(0,0,50,0, Math.PI * 2);
    // context.fill();
  };
};

canvasSketch(sketch, settings);
