var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var eventoMouse = "";
var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;

canvas.addEventListener("mousedown", mouseEvent);
canvas.addEventListener("mouseup", mouseEvent);
canvas.addEventListener("mouseleave", mouseEvent);
// vai nos dizer o que está acontecendo e mostrar no console
function mouseEvent (e) {
    eventoMouse = e.type;
    console.log(eventoMouse);
}
// quando o mouse se move
canvas.addEventListener("mousemove", mousemove);
function mousemove (e) {
    posicaoX = e.offsetX;
    posicaoY = e.offsetY;

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("cor").value;
        ctx.lineWidth = document.getElementById("traco").value;
        ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);
        //ctx.lineTo(posicaoX, posicaoY);
        ctx.arc(posicaoX,posicaoY, 10,0,2*Math.PI); //projeto
        ctx.stroke();
    }

    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}


function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

