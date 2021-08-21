Lwrist= 0;
Rwrist= 0;
nosex= 0;
nosey= 0;
diifference = 0;
function preload() {

}

function setup() {
canvas = createCanvas(650,480);
canvas.position(950,200);
video = createCapture(VIDEO);
video.position(200,200);

poser = ml5.poseNet(video, Load);

poser.on('pose', Gotem());
}

function draw() {
}

function Load() {
    console.log("🪵loaded");
}

function Gotem(results) {
    if(results.length >0) {
        console.log(results);
    }
}