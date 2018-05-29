var song;
var playbutton;
var on;
var fft;
var fftsize;
var img;
function preload(){
    song= loadSound('iboed2.mp3');
    img= loadImage('src/ibo.png');
}

function setup(){
    fftsize=256;
    createCanvas(window.innerWidth,window.innerHeight);
    on=false;
    playbutton= createButton('toggle');
    playbutton.mouseClicked(onMusic);
    fft= new p5.FFT(0.8,fftsize);
}

function draw(){
    background(img);
    translate(width/2,height/2)
    var spectrum= fft.analyze();
    
    for (var i=0;i<spectrum.length;i++){
        fill(0);
        var angle= map(i,0,spectrum.length,0,360);
        var amp= spectrum[i];
        var r= map(amp,0,fftsize,50,300);
        var x= r* cos(angle);
        var y= r* sin(angle);
        line(0,0,x,y);
    }
    fill(200,0,100);
    ellipse(0,0,75);
    
    
}
function onMusic(){
    if(!on){    
        song.setVolume(50);
        song.play();
        on=true;
    }else{
        song.pause();
        on=false;
    }
}
