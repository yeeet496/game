class SlingShot{
    constructor(bodyA, pointB){
        
        
        
        
        
           var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 6
        }
      this.sling1= loadImage("sprites/sling1.png")
      this.sling2= loadImage("sprites/sling2.png")
      this.sling3= loadImage("sprites/sling3.png")
      



        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke(48,22,8)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-7);
          image(this.sling1, 200,20)
          image(this.sling2, 170,20)
          pop();
        }
    }
    
}