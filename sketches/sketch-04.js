const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const Tweakpane = require('tweakpane');

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true
};

const params = {
	cols: 6,
	rows: 76,
	scaleMin: 1,
	scaleMax: 1,
	freq: 0.003,
	amp: 0.6,
	frame: 0,
	animate: false,
	lineCap: 'butt',
	lineGap: 1
};

const sketch = () => {
	return ({ context, width, height, frame }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		const cols = params.cols;
		const rows = params.rows;
		const numCells = cols * rows;

		const gridw = width  * 0.8;
		const gridh = height * 0.8;
		const cellw = gridw / cols;
		const cellh = gridh / rows;
		const margx = (width  - gridw) * 0.5;
		const margy = (height - gridh) * 0.5;

		for (let i = 0; i < numCells; i++) {
			const col = i % cols;
			const row = Math.floor(i / cols);

			const x = col * cellw;
			const y = row * cellh;
			const w = cellw * 0.8;
			const h = cellh * 0.8;

			const f = params.animate ? frame : params.frame;

			// const n = random.noise2D(x + frame * 10, y, params.freq);
			const n = random.noise3D(x, y, f * 10, params.freq);


			const angle = n * Math.PI * params.amp;

			// const scale = (n + 1) / 2 * 30;
			// const scale = (n * 0.5 + 0.5) * 30;
			const scale = math.mapRange(n, -1, 2, params.scaleMin, params.scaleMax);

			context.save();
			context.translate(x, y);
			context.translate(margx, margy);
			context.translate(cellw * 0.5, cellh * 0.5);
			context.scale(angle, angle);

			context.lineWidth = 1;
			context.lineCap = params.lineCap;

			let start = scale * n * 200;

			context.beginPath();
			context.moveTo(-(start), 0);
			context.lineTo(start, 0);
			context.setLineDash([1, params.lineGap]);
			context.stroke();

			context.restore();
		}

	};
};

const createPane = () => {
	const pane = new Tweakpane.Pane();
	let folder;

	folder = pane.addFolder({ title: 'Grid '});
	folder.addInput(params, 'lineCap', { options: { butt: 'butt', round: 'round', square: 'square' }});
	folder.addInput(params, 'cols', { min: 1, max: 50, step: 1 });
	folder.addInput(params, 'rows', { min: 1, max: 500, step: 1 });
	folder.addInput(params, 'scaleMin', { min: 1, max: 100 });
	folder.addInput(params, 'scaleMax', { min: 1, max: 100 });
	folder.addInput(params, 'lineGap', { min: 1, max: 100 });

	folder = pane.addFolder({ title: 'Noise' });
	folder.addInput(params, 'freq', { min: -0.01, max: 0.01 });
	folder.addInput(params, 'amp', { min: 0, max: 1, step: 0.1 });
	folder.addInput(params, 'animate');
	folder.addInput(params, 'frame', { min: 0, max: 999 });
};

createPane();
canvasSketch(sketch, settings);
