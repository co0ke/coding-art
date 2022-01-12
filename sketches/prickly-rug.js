const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: false
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'rgba(255,0,0, 0)'; // transparent background
    context.fillRect(0, 0, width, height);

    const cols = 20;
    const rows = 20;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw/cols;
    const cellh = gridh/rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridw) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = 0.8 * cellw;
      const h = 0.8 * cellh;

      var test = random.noise2D(1, 1, 0.001)
      console.log("random: " + test);

      const n = random.noise2D(x + frame * 10, y, 0.001,);
      //const n = 0.5;
      const angle = n * Math.PI * 0.2;

      const z = random.noise2D(x + frame * 10, y, 0.001,);

      const scale = math.mapRange(z, -1, 5, 0.2, 40);


      for(let i = 0; i < 200; i++) {
        context.save();
        context.translate(x, y);
        context.translate(margx, margy);
        context.translate(cellw * 0.5, cellh * 0.5);
        context.rotate(90 * Math.PI * 180);

        context.lineWidth = 0.1;
        //context.lineWidth = scale;

        // if(z > 0.4) {
        //   context.strokeStyle = 'grey';
        // }

        context.beginPath();
        context.moveTo(0, 0);
        // context.lineTo(w, 0);
        context.stroke();
        context.rotate(random.range(1, 180) * Math.PI * 180 * i);
        context.lineTo(random.range(1, cellw), random.range(1, cellh));
        context.stroke();
        context.restore();
      }
    }

  };
};



canvasSketch(sketch, settings);
