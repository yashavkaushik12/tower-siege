class Block {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        restitution:0,
        'friction':0,
        'density':1.0
    }
    this.width = width;
    this.height = height;
    this.Visiblity = 0;
    this.body = Bodies.rectangle(x, y, width, height, options);
    
    
    World.add(world, this.body);
    
  }
  display(){
    if(this.body.speed<5){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(128, 203, 239);
    strokeWeight(2.5);
    stroke(0)
    rect(0, 0, this.width, this.height);
    
    pop();
    //console.log(this.body.speed)
    }
    else{
      World.remove(world,this.body);
      this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
  }
  
  score(){
    console.log(this.Visiblity);
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
      console.log(score);
    }
  }
};