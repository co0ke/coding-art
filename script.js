let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d');

context.fillStyle = 'red';

for(let i = 0; i <= 1000; i++) {
    context.lineWidth = 0.5;
    context.beginPath();
    if(Math.random() > 0.7) {
        context.rect(i * Math.random(), i * Math.random(), i * Math.random() * 80 / i, i * Math.random() * 80 / i);
    }
    context.stroke();
}