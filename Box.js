class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic: false,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed < 5) {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      this.Visiblity -= 1
      tint(255, this.Visiblity)
    }
    
    
  }

  score() {
    if (this.Visiblity < 100 && this.Visiblity > 0) {
       score ++
    }
  }
 
};