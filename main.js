const canvas = document.getElementById("myCanvas");

canvas.width = 400;

const ctx = canvas.getContext("2d");//context to drow with all methods 
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(100,100,30,50);//car obj
car.draw(ctx);//draw


animate();

function animate(){
car.update();
canvas.height = window.innerHeight;
road.draw(ctx); 
//then redrow car with context
car.draw(ctx);
requestAnimationFrame(animate);//calles animate method so many time it gives elusion 

}