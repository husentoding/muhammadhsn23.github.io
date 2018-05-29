var s;
var rain;
var sentence1;
var ukuran=22;
var collections;
var num;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0,0,0,0);
//    num=round(window.innerWidth/ukuran);
    num=52;
 

    collections= new Array(num);
    var x=0;
    var y=floor(random(0,20));
    console.log(num);
    for (var i=0;i<collections.length;i++){
        var r =floor(random(8,15));
        var speed=floor(random(5,10));
        collections[i]= new Array(r);
        generateSentence(collections[i],x,y,speed);
        x+=ukuran+(floor(random(0,10)));
        y=floor(random(0,500));
    }
    console.log(height);
        



}

function draw(){
    background(0,0,0,150);
    for (var i=0;i<collections.length;i++){
        render(collections[i]);
    }

    
    
}



function render(array,n){
    for (var i=0;i<array.length;i++){
        array[i].show();
        array[i].falls();
        array[i].randomSimbol();
    }
}
function buatArray(sentence1){
    var r =floor(random(8,15));
    sentence1= new Array(r);
    
}

function generateSentence(sentence,x,y,speed){

    
    for(var i=0;i<sentence.length;i++){
        var letter= new simbol(x,y,speed);
        letter.randomSimbol();
        sentence[i]=letter;
        y=y-ukuran;
        
    }
}