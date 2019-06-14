var canvas,ctx;

window.onload=function init()
{
    canvas=document.querySelector("#myCanvas");

    ctx=canvas.getContext('2d');

    ctx.fillStyle='blue';

    ctx.fillRect(50,50,60,50);

    ctx.strokeStyle = 'green';
    ctx.lineWidth=2;
    ctx.strokeRect(120,50,100,200);

    ctx.beginPath();
    ctx.arc(160,180,50,0,2*Math.PI);
    ctx.fill();

    ctx.fillStyle="maroon";
    ctx.font="20px Arial";
    ctx.fillText("canvas drawing in JavaScript!!!",60, 20);


}