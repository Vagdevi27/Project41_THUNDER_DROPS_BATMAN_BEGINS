class Umbrella{

    constructor(x,y){
      var options = {
          isStatic : true
      }
      this.body = Matter.Bodies.circle(x,y, 50, options)
       Matter.World.add(world,this.body)

       this.image = loadImage("Walking Frame/walking_1.png");
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y + 70,300,300)
    }

}