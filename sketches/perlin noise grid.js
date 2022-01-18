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

    const cols = 500;
    const rows = 500;
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

      // if(random.range(0,1) > 0.8) {
      //   continue;
      // }

      const x = col * cellw;
      const y = row * cellh;
      const w = 0.8 * cellw;
      const h = 0.8 * cellh;

      const n = random.noise2D(x + frame * 0.5, y * frame * 0.5, 0.004, 0.6);
      const angle = n * Math.PI * 0.2;

      //const scale = (n + 1) / 2 * 30;
      const scale = math.mapRange(n, -1, 1, 2, 40);

      context.save();
      context.translate(x,y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate((n * scale) / 15);
      //context.scale((n * scale), n * 30);

     context.translate(random.range(scale * 4.1, scale * 4.5), scale * -20);
    // context.translate(0, -margy);

      context.lineWidth = 0.1;

      context.fillStyle = '#ccc';
      // context.setLineDash([3,6]);
      if(n > 0.05)
      {
        //context.fillStyle = '#ccc';
        // context.strokeRect(0, 0,w,h);
      }
      else
      {
      }
      context.strokeRect(0, 0,w,h);

      //context.fillRect(0, 0,w,h);
      //context.moveTo(75, 50);

      // context.beginPath();
      // context.lineTo(0, cellh);
      // context.lineTo(0, cellh);

      context.fill();
      // context.stroke();

      // context.beginPath();
      // context.moveTo(w * -0.5, 0);
      // context.lineTo(w * 0.5, 0);
      // context.stroke();

      // let arcAngle = random.range(Math.PI * 1.25, Math.PI * 2);
      // let arcAngle = n + 5 * (Math.PI / 2) / 2;
      //
      // context.beginPath();
      // context.arc(0,0,random.range(20,50),0, arcAngle);
      //
      // context.lineWidth = random.range(0.05, 1);
      // context.stroke();

      context.restore();
    }

  };
};

canvasSketch(sketch, settings);
