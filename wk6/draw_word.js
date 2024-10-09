let canvas=document.querySelector('#canvas');
let context=canvas.getContext('2d');

let input=document.querySelector('#image-text');
input.disabled=true;

let image =new Image();
image.src='rankovic-grobgaard-unsplash.jpg'

image.addEventListener('load',function(){
    context.drawImage(image, 0, 0);
    input.disabled=false;
})
input.addEventListener('input', function(){
    let text= this.value
    context.fillStyle='blue'
    context.font='40px Courier'
    context.drawImage(image, 0, 0);// redrawing the image again
    context.fillText(text, 50, 200)
})
