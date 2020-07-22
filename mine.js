var h = window.innerHeight;
var w = window.innerWidth;


var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d")

var img = new Image();
img.src ="images/4.jpg";


img.onload = function(){
ctx.drawImage(img , 0,0)
    
}

var circleCont= [];
canvas.width = w
canvas.height = h
for(var i=0;i<400;i++)
    {
    var circle = 
    {
        x:Math.random()*w,
        y:Math.random()*h,
        r:Math.random()*10
    }
    circleCont.push(circle)
    }
function drawCircle()
{
   ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    for(var i=0;i<circleCont.length;i++)
    {
    ctx.moveTo(circleCont[i].x,circleCont[i].y)          
ctx.arc(circleCont[i].x,circleCont[i].y,circleCont[i].r,0,2*Math.PI)
    }
ctx.fillStyle="white"
ctx.fill();

    moveCircle();
}
function moveCircle()
{
        for(var i=0;i<circleCont.length;i++)
        {

        circleCont[i].y+=1;
        circleCont[i].x+=1;

        if( circleCont[i].y > h)
            {
                 circleCont[i].y  = 0;
            }
            if( circleCont[i].x > w)
            {
                 circleCont[i].x  = 0;
            }                  
        }   
}
setInterval(drawCircle,20)





var body = document.getElementById("all");
var game = document.getElementById("game");
var bullet = document.getElementById("bullet");
var aud = document.getElementById("bulletAudio");
 var x = 0;
var y=0;
 body.addEventListener("keydown",function(e){
    
    if(e.keyCode == 39)
        {
        x+=50
         if(x>w-180) 
            {
               x=w-180; 
            }
        game.style.left = x
       
        }
    if(e.keyCode == 37)
        {
            x-=100
        if(x < 0)
            {
                x=0;
            }
            
        game.style.left = x
        }
    if(e.keyCode == 32)
        {
            y+=500
    bullet.style.bottom =y ;
            aud.play();
        }
     
})      



 body.addEventListener("keyup",function(e){
 
     if(e.keyCode == 32)
        {
    bullet.style.bottom =-100; 
        aud.pause();    
        aud.currentTime = 0;
        }
     
 })





