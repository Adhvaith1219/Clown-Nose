nose_x=0;
nose_y=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/T11rp0CZ/58e8ff52eb97430e819064cf.png');

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x=" +results[0].pose.nose.x);
        console.log("nose y=" +results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;   
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}