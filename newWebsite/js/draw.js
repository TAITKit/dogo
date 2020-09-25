// // wait for the content of the window element 
// // to load, then performs the operations. 
// // This is considered best practice. 
// window.addEventListener('load', ()=>{ 
//     resize(); // Resizes the canvas once the window loads 
//     document.addEventListener('mousedown', startPainting); 
//     document.addEventListener('mouseup', stopPainting); 
//     document.addEventListener('mousemove', sketch); 
//     window.addEventListener('resize', resize); 
// }); 
    
// const canvas = document.querySelector('#canvas'); 
   
// // Context for the canvas for 2 dimensional operations 
// const ctx = canvas.getContext('2d'); 

// // Resizes the canvas to the available size of the window. 
// function resize(){ 
//   ctx.canvas.width = 400; 
//   ctx.canvas.height = 400; 
// } 
    
// // Stores the initial position of the cursor 
// let coord = {x:0, y:0};  
   
// // This is the flag that we are going to use to  
// // trigger drawing 
// let paint = false; 
    
// // Updates the coordianates of the cursor when  
// // an event e is triggered to the coordinates where  
// // the said event is triggered. 
// function getPosition(event){ 
//   coord.x = event.clientX - 0// - canvas.offsetLeft; 
//   coord.y = event.clientY - 30// - canvas.offsetTop; 

//   console.log("Client", event.clientX, event.clientY)
//   console.log("Canvas", canvas.offsetLeft, canvas.offsetTop)
//   console.log("Coord", coord.x, coord.y)
//   console.log("-------")
// } 
  
// // The following functions toggle the flag to start 
// // and stop drawing 
// function startPainting(event){ 
//   paint = true; 
//   getPosition(event); 
// } 
// function stopPainting(){ 
//   paint = false; 
// } 
    
// function sketch(event){ 
//   if (!paint) return; 
//   ctx.beginPath(); 
    
//   ctx.lineWidth = 5; 
   
//   // Sets the end of the lines drawn 
//   // to a round shape. 
//   ctx.lineCap = 'round'; 
    
//   ctx.strokeStyle = 'black'; 
      
//   // The cursor to start drawing 
//   // moves to this coordinate 
//   ctx.moveTo(coord.x, coord.y); 
   
//   // The position of the cursor 
//   // gets updated as we move the 
//   // mouse around. 
//   getPosition(event); 
   
//   // A line is traced from start 
//   // coordinate to this coordinate 
//   ctx.lineTo(coord.x , coord.y); 
    
//   // Draws the line. 
  
//   ctx.stroke(); 
// } 


var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx = document.getElementById('myCanvas').getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}