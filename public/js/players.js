function player(x, y){
  this.x = x;
  this.y = y;
  this.speed = 0;
  this.frame = 0;
  this.changeframe = ()=>{
                        this.frame++;
                        if(this.speed != 0){
                        setTimeout(this.changeframe, 1000/this.speed);  
                        }
                      }
}
