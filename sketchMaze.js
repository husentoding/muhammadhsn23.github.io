
var sizeBox=30;
var cols;
var rows;
var pointer;
var next;
var stack=[];

var field=[];

function setup() {
    createCanvas(innerWidth,innerHeight);

    cols=floor(width/sizeBox);
    rows=floor(height/sizeBox);
    for(var i=0;i<cols;i++){
        field[i]=[cols];
        for(var j=0;j<rows;j++){
            field[i][j]= new kotak(i,j);
            
        }
    } 
    pointer= field[0][0];


}

function draw() { 

    background(128,128,128);
    frameRate(60);

    for(var i=0;i<cols;i++){
        for(var j=0;j<rows;j++){
            field[i][j].show();
        }
    } 
    pointer.visited= true;
    var next= pointer.cekTetangga();
    var c=0;
    var index;

//    if(next==undefined){
//        if(stack.length>0){
//            index=stack.length-c;
//            c++;
//            next=stack[index];
//            console.log(c);
//        }
//    }
    if (next){
        next.visited=true;
        //2 push current cell to stack
        stack.push(pointer);
        hapusDinding(pointer,next);
        pointer.show();
        
        
        //delete wall
        
        
        pointer=next;
    }else if(stack.length>0){
        pointer= stack.pop();
    }
        pointer.highlight();
    
}


function hapusDinding(pointer,next){
    var x= pointer.x - next.x;
    var y= pointer.y - next.y;
    console.log(pointer);
    if( x==1){
        pointer.sides[3] = false;
        next.sides[1]= false;
    }else if(x==-1){
        pointer.sides[1] =false;
        next.sides[3] =false;
    }

    if( y==1){
        pointer.sides[0] = false;
        next.sides[2]= false;
    }else if(y==-1){
        pointer.sides[2] =false;
        next.sides[0] =false;
    }
    
    
}







    