class SlingShort {
    constructor(bodyA,pointB){
        var option={
        bodyA: bodyA,
        pointB: pointB,
        length: 10,
        stiffness: 0.04}
        this.pointB=pointB;
this.sling=Constraint.create(option);
World.add(world,this.sling)

    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
       line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    };
}