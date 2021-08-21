song = "";
rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;

function preload()
{
	song = loadSound("One Direction - Drag Me Down.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLooaded);
	poseNet.on('pose', gotPoses);
}

function modelLooaded(){
	console.log('poseNet is Initilized');
}

function gotPoses(results){
	if(results.length > 0){
		scoreRightWrist = results[0].pose.keypoints[10].score;
		scoreLeftWrist = results[0].pose.keypoints[9].score;
		console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		console.log("LeftWristX = " + leftWristX + "LeftWristY = " + leftWristY);
	}
}

function draw() {
	image(video, 0, 0, 600, 500);
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
