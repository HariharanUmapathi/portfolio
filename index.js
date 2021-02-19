//actions js
navbar.className="hide";
function menu()
	{
		
	if(navbar.className=="show")
	navbar.className="hide";
	else
	navbar.className="show";
	
	}

 window.onloadend=load();
            var time=0;
            
            function load()
            {
            var time=0;
            var timer=setInterval(function(){
            time++;
            if(time==10)
            clearInterval(timer);
            change('c',Math.round(86*time/10));
            change('java',Math.round(56*time/10));
            change('cpp',Math.round(65*time/10));
            change('python',Math.round(37*time/10));
            change('javaScript',Math.round(50*time/10));
            },60);
            }
            function rotate(canvasid,angle)
            {
            var canvas=document.getElementById(canvasid);
            var context=canvas.getContext('2d');
            
            }
            function change(canvasid,value)
            {
            var canvas=document.getElementById(canvasid);
            var context=canvas.getContext('2d');
            context.clearRect(0,0,canvas.width,canvas.height,false);
            var x=canvas.width/2;
            var y=canvas.height/2;
            var radius=70;
            var startAngle=0;
            var endAngle=Math.PI*2*(value/100);
            document.getElementById(canvasid+"lab").innerHTML=value+"%";
            var counterClockwise=false;
            context.beginPath();
            context.arc(x,y,radius-5,0,Math.PI*2,counterClockwise);
            context.strokeStyle='gray';
            context.lineWidth=20;
            context.stroke();
            context.closePath();
            context.beginPath();
            context.arc(x,y,radius,startAngle,endAngle,counterClockwise);
            context.strokeStyle='crimson';
            context.lineWidth=15;
            context.stroke();
            context.closePath();
            }
var yr=document.getElementById("year"); 
if(yr!=null)
	yr.innerHTML=new Date().getYear()+1900;
console.log("Script Loaded");
var ar=document.querySelectorAll(".lab");
ar.forEach((e)=>{e.style.padding="10px";e.style.position="absolute"})