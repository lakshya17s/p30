class Ground{
    constructor(){
     this.ground = Bodies.rectangle(400,600,1600,25,{isStatic:true,});
     World.add(world, this.ground);
    }

    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,1600,25);
    }


}