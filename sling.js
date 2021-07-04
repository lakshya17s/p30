class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04,

        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.a = bodyA;
        this.b = pointB;

    }

    fly(){
        this.sling.bodyA = null
    }
    attach(){
     this.sling.bodyA = this.a;   
    }

    display(){
        if(this.sling.bodyA){
        var posA = this.a.position;
        var posB = this.b;
        push()
        
        fill("#AB0501");
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
}