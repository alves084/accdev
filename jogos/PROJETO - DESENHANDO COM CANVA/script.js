//Initial Data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

// Mouse
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

// Touch
screen.addEventListener('touchstart', touchStartEvent);
screen.addEventListener('touchmove', touchMoveEvent);
screen.addEventListener('touchend', touchEndEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);

// Função para pegar posição exata dentro do canvas com escala correta
function getCanvasPosition(x, y) {
    let rect = screen.getBoundingClientRect();
    return {
        x: (x - rect.left) * (screen.width / rect.width),
        y: (y - rect.top) * (screen.height / rect.height)
    };
}

//Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

// Mouse
function mouseDownEvent(e){
    canDraw = true;
    let pos = getCanvasPosition(e.clientX, e.clientY);
    mouseX = pos.x;
    mouseY = pos.y;
}
function mouseMoveEvent(e){
    if(canDraw){
        let pos = getCanvasPosition(e.clientX, e.clientY);
        draw(pos.x, pos.y);
    }
}
function mouseUpEvent(){
    canDraw = false;
}

// Touch
function touchStartEvent(e){
    e.preventDefault(); // evita scroll
    canDraw = true;
    let touch = e.touches[0];
    let pos = getCanvasPosition(touch.clientX, touch.clientY);
    mouseX = pos.x;
    mouseY = pos.y;
}
function touchMoveEvent(e){
    e.preventDefault();
    if(canDraw){
        let touch = e.touches[0];
        let pos = getCanvasPosition(touch.clientX, touch.clientY);
        draw(pos.x, pos.y);
    }
}
function touchEndEvent(){
    canDraw = false;
}

// Draw
function draw(x, y){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = x;
    mouseY = y;
}

// Clear
function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
