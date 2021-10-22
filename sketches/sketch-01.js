const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'red';

    for(let i = 0; i <= 1000; i++) {
      context.lineWidth = 0.5;
      context.beginPath();
      if(Math.random() > 0.7) {
        context.rect(i * Math.random(), i * Math.random(), i * Math.random() * 80 / i, i * Math.random() * 80 / i);
      }
      context.stroke();
    }

  };
};

canvasSketch(sketch, settings);
