class Chain{
constructor(bodyA,bodyB){
var options ={bodyA:bodyA,bodyB:bodyB,length:10,stiffness:0.04};this.chain = Constraint.create(Options);World.add(world,this.chain);
}
display(){var pointA = this.chain.bodyA.position; var pointB = this.chain.bodyB.position  ;line(pointA.x,pointB.x,pointA.y,pointB.y)           }}