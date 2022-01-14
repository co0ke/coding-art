const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'rgba(255,0,0, 0)'; // transparent background
    context.fillRect(0, 0, width, height);
    //context.strokeStyle = 'red';
    context.strokeWidth = 10;

    // const colCount = 10;
    // var colWidth = width / colCount;
    // var colHeight = height / colCount;

    for(let i = 0; i < 24; i++) {
      const angle = math.degToRad(15 * i)
      const radius = 150;
      let x,y;
      const cx = width * 0.5;
      const cy = height * 0.5;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(angle);
      let sun = new Sun(context);
      sun.draw();
      context.restore();
    }

    // for(let i = 0; i < 24; i++) {
    //
    //  const angle = math.degToRad(15 * i);
    //
    //
    //   context.save();
    //   // context.translate((width/2) - (colWidth/2) + i, (height/2) - (colHeight/2) + i);
    //   // context.rotate((10+i)/180 * Math.PI);
    //   // context.strokeRect(0, 0, width / colCount, height / colCount)
    //   context.translate(width/2, height/2);
    //   context.rotate(angle);
    //   //context.translate(50 + i, 50 + i);
    //   context.strokeRect(0, 0, 80, 80);
    //   context.restore();
    // }
  };
};

class Sun {


  constructor(context) {
    this.context = context;
  }

  draw() {
    for(let i = 0; i < 24; i++) {

      const angle = math.degToRad(15 * i);


      this.context.save();
      //this.context.translate((width/2) - (colWidth/2) + i, (height/2) - (colHeight/2) + i);
      // context.rotate((10+i)/180 * Math.PI);
      // this.context.strokeStyle = 'red';
      // this.context.strokeRect(0, 0, width, height);
      //this.context.translate(width, height);
      this.context.rotate(angle);
      this.context.translate(14, 14);
      //context.translate(50 + i, 50 + i);
      // this.context.strokeRect(width, height, 120, 120);

      this.context.beginPath();
      this.context.arc(0,0,70,0, Math.PI * 2);

      this.context.lineWidth = 0.66;
      this.context.stroke();

      this.context.restore();
    }
  }
}

canvasSketch(sketch, settings);
