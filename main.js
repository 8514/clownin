noseX=0;
noseY=0;
function preload(){
}

function setup(){
canvas=createCanvas(300,300);
canvas.center(); 
video=createCapture(VIDEO);
video.size(330,330);
video.hide();

posenet=ml5.poseNet(video, modelLoded);
posenet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    }

function modelLoaded(){
console.log('Posenet Is Initialized');    
}

function gotPoses(results)
{
 if(results.length > 0)
 {
 console.log(results);
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 console.log("nose x = " + noseX);
 console.log("nose y = " + noseY);    
 }   
}
function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY, 20);    
}


function take_snapshot(){
save('myFilterImage.png');    
}

