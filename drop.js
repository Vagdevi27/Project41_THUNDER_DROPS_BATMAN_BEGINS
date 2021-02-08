class Drop{

    constructor(x,y){
      var options = {
          isStatic : false,
          friction : 0.001,
          restitution:0.1           
      }
      this.body = Matter.Bodies.circle(x,y,5, options)
       Matter.World.add(world,this.body)
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 3,3)
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y:random(0,400)})
        }
    }
}