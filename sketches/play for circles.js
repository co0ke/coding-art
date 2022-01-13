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

    // const colCount = 10;
    // var colWidth = width / colCount;
    // var colHeight = height / colCount;

    for(let i = 0; i < 12; i++) {
      const angle = math.degToRad(30 * i)
      const radius = 170;
      let x,y;
      const cx = width * 0.5;
      const cy = height * 0.5;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(angle);
      let sun = new Sun(context);
      sun.draw(width/20, height/20);
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

  draw(width, height) {
    for(let i = 0; i < 24; i++) {

      const angle = math.degToRad(15 * i);


      this.context.save();
      // context.translate((width/2) - (colWidth/2) + i, (height/2) - (colHeight/2) + i);
      // context.rotate((10+i)/180 * Math.PI);
      // context.strokeRect(0, 0, width / colCount, height / colCount)
      //this.context.translate(width, height);
      this.context.rotate(angle);
      //context.translate(50 + i, 50 + i);
      this.context.strokeRect(width, height, 120, 120);
      this.context.restore();
    }
  }
}

canvasSketch(sketch, settings);
