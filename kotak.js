function kotak(x,y){
    this.x=x;
    this.y=y;
    this.sides=[true,true,true,true];
    this.visited=false;
    

    
//    this.show= function(){
//        
//        if (this.visited){
//            noStroke();
//            fill(120,100,200);
//            rect(this.x*sizeBox,this.y*sizeBox,sizeBox,sizeBox);
//        }
//                
//        
//        //atas
//        color(255,0,0);
//        stroke(255);
//        if(this.sides[0]){
//            line(this.x*sizeBox,
//                 this.y*sizeBox,(this.x*sizeBox)+sizeBox,
//                 this.y*sizeBox);
//        }
//        //kanan
//        if(this.sides[1]){
//            line((this.x*sizeBox)+sizeBox,
//                  this.y*sizeBox,
//                  (this.x*sizeBox)+30,
//                  (this.y*sizeBox)+30
//            
//            );
//        }
//        //bawah
//        if(this.sides[2]){
//            line(this.x*sizeBox,
//                 (this.y*sizeBox)+30,
//                 (this.x*sizeBox)+30,
//                 (this.y*sizeBox)+30
//            );
//        }
//            
//        //kiri
//        if(this.sides[3]){
//            line(this.x*sizeBox,
//                 this.y*sizeBox,
//                 this.x*sizeBox,
//                 (this.y*sizeBox)+30
//            );
//        }
//
//
//        if (this.visited){
//            noStroke();
//            fill(120,100,200);
//            rect(this.x*sizeBox,this.y*sizeBox,sizeBox,sizeBox);
//        }
//                
//        
//        
//    }
    
    
    
  this.highlight= function(){
      noStroke();
      fill(0, 0, 255, 100);
      rect(x*sizeBox, y*sizeBox, sizeBox, sizeBox);
  }
    
    
  this.show = function() {
    var x = this.x*sizeBox;
    var y = this.y*sizeBox;
    stroke(255);
    if (this.sides[0]) {
      line(x    , y    , x + sizeBox, y);
    }
    if (this.sides[1]) {
      line(x + sizeBox, y    , x + sizeBox, y + sizeBox);
    }
    if (this.sides[2]) {
      line(x + sizeBox, y + sizeBox, x    , y + sizeBox);
    }
    if (this.sides[3]) {
      line(x    , y + sizeBox, x    , y);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, sizeBox, sizeBox);
    }
  }
    
    this.cekTetangga= function(){
        var top;
        var right;
        var bottom;
        var left;
        var tetangga=[];
        
        if (this.x==0 && this.y==0){
            top=undefined;
            right=field[this.x+1][this.y];
            bottom=field[this.x][this.y+1];
            left=undefined;
        }else if(this.x==cols-1 && y==0){
            top=undefined;
            right=undefined
            bottom=field[this.x][this.y+1];
            left=field[this.x-1][this.y];
        }else if(this.x==cols-1 && this.y==rows-1){
            top=field[this.x][this.y-1];
            right=undefined;
            bottom=undefined;
            left=field[this.x-1][this.y];
        }else if(this.x==0 && this.y==rows-1){
            top=field[this.x][this.y-1];
            right=field[this.x+1][this.y];
            bottom=undefined;
            left=undefined;
        }else if(this.x>0 && this.y==0){
            top=undefined;
            right=field[this.x+1][this.y];
            bottom=field[this.x][this.y+1];
            left=field[this.x-1][this.y];
        }else if(this.x==cols-1){
            top=field[this.x][this.y-1];
            right=undefined;
            bottom=field[this.x][this.y+1];
            left=field[this.x-1][this.y];
        }else if(this.y==rows-1){
            top=field[this.x][this.y-1];
            right=field[this.x+1][this.y];
            bottom=undefined;
            left=field[this.x-1][this.y];
        }else if(this.x==0){
            top=field[this.x][this.y-1];
            right=field[this.x+1][this.y];
            bottom=field[this.x][this.y+1];
            left=undefined;
        }else{
            top=field[this.x][this.y-1];
            right=field[this.x+1][this.y];
            bottom=field[this.x][this.y+1];
            left=field[this.x-1][this.y];
        }
        
        //check unvisited neighbors
        
        if (top && !top.visited)
            tetangga.push(top);
        if (right &&!right.visited)
            tetangga.push(right);
        if (bottom && !bottom.visited)
            tetangga.push(bottom);
        if (left && !left.visited)
            tetangga.push(left);

        if (tetangga.length>0)
            var r= floor(random(0,tetangga.length));
        return tetangga[r];
        
    }  
    


}
    
