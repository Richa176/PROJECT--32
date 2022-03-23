Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Richa176 
priyapandey2020
/
e994fb33739d9ff31bd9e32c5e7f6ed9
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
e994fb33739d9ff31bd9e32c5e7f6ed9/sketch.js /
@priyapandey2020
priyapandey2020 Add files via upload
Latest commit 218afb1 on Jul 7, 2021
 History
 1 contributor
64 lines (49 sloc)  1.42 KB
   
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
