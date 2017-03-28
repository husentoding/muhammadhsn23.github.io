function simbol(x,y,speed){
    this.value;
    this.counter=1;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.switchTime=round(random(7,20));
    this.switchColor=1;
    
    this.randomSimbol= function(){
        if(frameCount % this.switchTime==0)
            this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }
    this.show= function(){
        textSize(ukuran);
        if(this.switchColor==round(random(0,99))){
            fill(192,192,192);
        }else{
            fill(0,255,70);
        }
        text(this.value,this.x,this.y);
    }
    this.falls= function(){
        this.counter++;
        this.y=this.y+this.speed;
        if(this.y>innerHeight){
            this.y=this.y/this.counter;
        }
    }
    

}