var canvas=document.getElementById('canvas');
var ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var x = [];
var y = [];
var numbers=300;
for(let i=0;i<numbers;i++){
	x[i]=Math.floor(Math.random()*(canvas.width-20+1)+10);
	y[i]=Math.floor(Math.random()*(canvas.height-20+1)+10);
}
var dx = [];
var dy = [];
for(let i=0;i<numbers;i++){
	dx[i]=(Math.random() - 2)*3;
	dy[i]=(Math.random() - 2)*3;
}
var radius = 10;
function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(let i=0;i<numbers;i++){
		ctx.beginPath();
		ctx.arc(x[i],y[i],radius,0,Math.PI * 2,true);
		ctx.strokeStyle = "green";
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.stroke();
		if(x[i]+radius>canvas.width || x[i]-radius<0){
			dx[i]=-dx[i];
		}
		if(y[i]+radius>canvas.height || y[i]-radius<0){
			dy[i]=-dy[i];
		}
		x[i] += dx[i];
		y[i] += dy[i];

	}



}
animate();