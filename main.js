leftWristX =""; 
leftWristY ="";
RightWristX ="";
RightWristY =""

function setup() {
    canvas =createCanvas(550,500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

   poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses); 
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
if(results.length >0) { 
    console.log(results); 
  leftWristX =results[0].pose.leftWrist.x; 
  leftWristY =results[0].pose.leftWrist.y; 
  console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY ); 

  RightWristX =results[0].pose.rightWrist.x; 
  RightWristY =results[0].pose.rightWrist.y;
  console.log("RightWristX =" + RightWristX + "RightWristY =" + RightWristY );
}
}

function draw() {
    image(video, 0, 0, 550, 500)
}

function preload() {
  music =loadSound("Music.mp3");
  music1 =loadSound("Music1.mp3")
}



  