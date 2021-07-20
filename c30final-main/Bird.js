class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png")
    this.birdtrajectory=[]
  }

  display() {
   // this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>1 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      console.log(this.smokeimage)
      this.birdtrajectory.push(position);
    }
   
    for(var i=0;i<this.birdtrajectory.length;i++){
image(this.smokeimage,this.birdtrajectory[i][0],[i][1]);
    }
  }
}
