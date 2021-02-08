var engine, world
var drops=[]
var umbrella
var thunder, thunder1,thunder2,thunder3,thunder4;

var thunderCreatedFrame=0;
function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(600,800)
    engine = Matter.Engine.create()
    world = engine.world
    umbrella = new Umbrella(200,500)

    if(frameCount % 100 === 0){ 
        for(var i=0; i< 100; i++){
            drops.push(new Drop(random(0,400), random(0,400)))
        }
    }

}

function draw(){
    background("black")

   Matter.Engine.update(engine)
   
    for(var i=0; i< drops.length; i++){
    drops[i].display()
    drops[i].update()
    }

    rand = Math.round(random(1,4));
    if(frameCount%50===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display()
    drawSprites();
}   

