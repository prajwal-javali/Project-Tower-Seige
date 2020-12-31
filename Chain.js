class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB;
    }

    detatch() {
        this.chain.bodyA =  null;
    }

    display(){
        if (this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
        
    }
    
}