let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d');

context.fillStyle = 'blue';

for(let i = 0; i <= 1000; i++) {
    context.lineWidth = 0.2;
    context.beginPath();
    context.rect(i * Math.random(), i * Math.random(), i * Math.random() * 80/i, i * Math.random() * 80/i);
    context.stroke();
}