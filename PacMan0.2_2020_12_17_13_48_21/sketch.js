var pacman
var outerborder1,outerborder2,outerborder3,outerborder4
var innerborder1,innerborder2,innerborder3,innerborder4
var boxline1,boxline2,boxline3,boxline4
var box2line1,box2line2,box2line3,box2line4
var box3line1,box3line2,box3line3,box3line4
var box4line1,box4line2,box4line3,box4line4
var box5line1,box5line2,box5line3,box5line4
var box5line5,box5line6,box5line7,box5line8,box5line9
var box5line10
var box6line1,box6line2,box6line3,box6line4,box6line5
var box6line6,box6line7,box6line8
var box7line1,box7line2,box7line3,box7line4
var box8line1,box8line2,box8line3
var box9line1,box9line2,box9line3,box9line4
var box10line1,box10line2,box10line3,box10line4
var box10line5,box10line6,box10line7,box10line8
var box11line1,box11line2,box11line3,box11line4
var box12line1,box12line2,box12line3,box12line4
var box13line1,box13line2,box13line3
var box14line1,box14line2,box14line3,box14line4
var box14line5,box14line6,box14line7,box14line8
var box15line1,box15line2,box15line3,box15line4
var box16line1,box16line2,box16line3,box16line4
var box17line1,box17line2,box17line3,box17line4
var box18line1,box18line2,box18line3,box18line4
var box18line5,box18line6,box18line7,box18line8

var coin65,coin2,coin13,coin14,coin64,coin26,coin27,coin38,coin38,coin1
var coin66,coin3,coin12,coin15,coin63,coin25,coin28,coin37,coin40,coin45,coin50,coin54
var coin67,coin4,coin11,coin16,coin62,coin24,coin29,coin36,coin41,coin46,coin51,coin56
var coin68,coin5,coin10,coin17,coin61,coin23,coin30,coin35,coin42,coin47,coin52,coin57
var coin69,coin6,coin9,coin18,coin60,coin22,coin31,coin34,coin43,coin48,coin53,coin58
var coin70,coin7,coin8,coin19,coin20,coin21,coin32,coin33,coin44,coin49,coin54,coin59

var timer

var pacManR,pacManU,pacManL,pacManD
var gost,gost2,gost3,gost4,gost5
var y
var x
var gostI

var win
var winImage

var gameState = "play"
var xp = 25
var yp = 20
function setup() {
 createCanvas(400,400)
  timer = 6000
  y = -3
  x = -3
  gostI = loadImage("gost.png")
  pacManR = loadImage("PacManRight.png")
  pacManU = loadImage("PacManUp.png")
    pacManL = loadImage("PacManLeft.png")
      pacManD = loadImage("PacManDown.png")

gost = createSprite(280,90,10,10)
gost.addImage(gostI)
gost.scale = 0.163
gost2 = createSprite(290,100,10,10)

gost3 = createSprite(290,40,10,10)

gost4 = createSprite(290,300,10,10)

gost5 = createSprite(300,200,10,10)
gost5.addImage(gostI)
gost5.scale = 0.163


  pacman = createSprite(30,20,10,10);
  pacman.addImage(pacManR)
  pacman.scale = 0.1
  


  //these are the coin's of the first sleeping line
  coin1 = createSprite(40,20,5,5)
  coin1.shapeColor = "yellow"
  coin2 = createSprite(80,20,5,5)
  coin2.shapeColor = "yellow"
  coin3 = createSprite(120,20,5,5)
  coin3.shapeColor = "yellow"
  coin4 = createSprite(160,20,5,5)
  coin4.shapeColor = "yellow"
  coin5 = createSprite(200,20,5,5)
  coin5.shapeColor = "yellow"
  coin6 = createSprite(240,20,5,5)
  coin6.shapeColor = "yellow"
  coin7 = createSprite(280,20,5,5)
  coin7.shapeColor = "yellow"
  coin8 = createSprite(320,20,5,5)
  coin8.shapeColor = "yellow"
  coin9 = createSprite(360,20,5,5)
  coin9.shapeColor = "yellow"


  //these are the coin's of the first standing line
  coin10 = createSprite(23,40,5,5)
  coin10.shapeColor = "yellow"
  coin11 = createSprite(23,80,5,5)
  coin11.shapeColor = "yellow"
  coin12  = createSprite(23,120,5,5)
  coin12.shapeColor = "yellow"
  coin13 = createSprite(23,160,5,5)
  coin13.shapeColor = "yellow"
  coin14 = createSprite(23,200,5,5)
  coin14.shapeColor = "yellow"
  coin15 = createSprite(23,240,5,5)
  coin15.shapeColor = "yellow"
  coin16 = createSprite(23,280,5,5)
  coin16.shapeColor = "yellow"
  coin17 = createSprite(23,320,5,5)
  coin17.shapeColor = "yellow"
  coin18  = createSprite(23,360,5,5)
  coin18.shapeColor = "yellow"

  //these are the coin's of the last sleeping line
  coin19 = createSprite(40,380,5,5)
  coin19.shapeColor = "yellow"
  coin20 = createSprite(80,380,5,5)
  coin20.shapeColor = "yellow"
  coin21 = createSprite(120,380,5,5)
  coin21.shapeColor = "yellow"
  coin23 = createSprite(160,380,5,5)
  coin23.shapeColor = "yellow"
  coin24 = createSprite(240,380,5,5)
  coin24.shapeColor = "yellow"
  coin25 = createSprite(280,380,5,5)
  coin25.shapeColor = "yellow"
  coin26 = createSprite(320,350,5,5)
  coin26.shapeColor = "yellow"
  coin27 = createSprite(360,380,5,5)
  coin27.shapeColor = "yellow"

  //these are the coin's of the second standing line
  coin28 = createSprite(85,50,5,5)
  coin28.shapeColor = "yellow"
  coin29 = createSprite(85,90,5,5)
  coin29.shapeColor = "yellow"
  coin30 = createSprite(85,130,5,5)
  coin30.shapeColor = "yellow"
  coin31 = createSprite(85,170,5,5)
  coin31.shapeColor = "yellow"
  coin32 = createSprite(85,210,5,5)
  coin32.shapeColor = "yellow"
  coin33 = createSprite(85,250,5,5)
  coin33.shapeColor = "yellow"
  coin34 = createSprite(85,290,5,5)
  coin34.shapeColor = "yellow"
  coin35 = createSprite(85,330,5,5)
  coin35.shapeColor = "yellow"

  //these are the coin's of the third standing line
  coin36 = createSprite(175,40,5,5)
  coin36.shapeColor="yellow"
  coin37 = createSprite(175,80,5,5)
  coin37.shapeColor = "yellow"
  coin38 = createSprite(175,120,5,5)
  coin38.shapeColor = "yellow"
  coin39 =  createSprite(175,160,5,5)
  coin39.shapeColor = "yellow"
  coin40  = createSprite(175,200,5,5)
  coin40.shapeColor = "yellow"
  coin41 = createSprite(175,240,5,5)
  coin41.shapeColor = "yellow"
  coin42 = createSprite(175,280,5,5)
  coin42.shapeColor = "yellow"
  coin43 = createSprite(175,320,5,5)
  coin43.shapeColor = "yellow"
  coin44 = createSprite(175,360,5,5)
  coin44.shapeColor = "yellow"
  
  //these are the coin's for the 'G' 
  coin45  = createSprite(130,90,5,5)
  coin45.shapeColor = "yellow"
  coin46 = createSprite(130,120,5,5)
  coin46.shapeColor = "yellow"
  coin47 = createSprite(130,150,5,5)
  coin47.shapeColor = "yellow"
  coin48 =  createSprite(150,90,5,5)
  coin48.shapeColor = "yellow"

  //these are the coin's of the fourth standing line
  coin49 = createSprite(285,40,5,5)
  coin49.shapeColor = "yellow"
  coin50 = createSprite(285,80,5,5)
  coin50.shapeColor = "yellow"
  coin51 = createSprite(285,120,5,5)
  coin51.shapeColor = "yellow"
  coin52 = createSprite(285,160,5,5)
  coin52.shapeColor = "yellow"
  coin53 = createSprite(285,200,5,5)
  coin53.shapeColor = "yellow"
  coin54 = createSprite(285,240,5,5)
  coin54.shapeColor = "yellow"
  coin55 = createSprite(285,280,5,5)
  coin55.shapeColor = "yellow"
  coin56 = createSprite(285,280,5,5)
  coin56.shapeColor = "yellow"
  coin57 = createSprite(285,320,5,5)
  coin57.shapeColor = "yellow"


  //these are the coin's of the fifth standing line
  coin58 = createSprite(335,80,5,5)
  coin58.shapeColor = "yellow"
  coin59 = createSprite(335,120,5,5)
  coin59.shapeColor = "yellow"
  coin60 = createSprite(335,160,5,5)
  coin60.shapeColor =  "yellow"
  coin61 = createSprite(335,200,5,5)
  coin61.shapeColor = "yellow"


  coin62 = createSprite(375,80,5,5)
  coin62.shapeColor = "yellow"
  coin63 = createSprite(375,120,5,5)
  coin63.shapeColor = "yellow"
  coin64 = createSprite(375,160,5,5)
  coin64.shapeColor = "yellow"
  coin65 = createSprite(375,200,5,5)
  coin65.shapeColor = "yellow"
  coin66 = createSprite(375,240,5,5)
  coin66.shapeColor = "yellow"
  coin67 = createSprite(375,280,5,5)
  coin67.shapeColor = "yellow"




 outerborder1 = createSprite(5,10,3.5,775); // this is the outer left border
outerborder1.shapeColor = "Blue"; 

outerborder2 = createSprite(395,10,3.5,775);  // this is the outer right border
outerborder2.shapeColor = "Blue";

outerborder3 = createSprite(200,2,390,3.5);  // this is the outer upper border
outerborder3.shapeColor = "Blue";

outerborder4 = createSprite(200,397,390,3.5);  // this is the outer lower border
outerborder4.shapeColor = "Blue";



innerborder1 = createSprite(12,198.5,3,385); // this is the inner left border
innerborder1.shapeColor = "Blue";

innerborder2 = createSprite(388,198,3,385);  // this is the inner right border
innerborder2.shapeColor = "Blue";

innerborder3 = createSprite(200,7,376,3);  // this is the inner upper border
innerborder3.shapeColor = "Blue";

innerborder4 = createSprite(200,390,376,3);  // this is the inner lower border
innerborder4.shapeColor = "Blue";




 boxline1 = createSprite(35,50,3,20); // top leftbox left line
boxline1.shapeColor = "Blue";

boxline2 = createSprite(71,50,3,20); // top leftbox right line
boxline2.shapeColor = "Blue";

boxline3 = createSprite(53,40,37,3);  // top leftbox upper line
boxline3.shapeColor = "Blue";

 boxline4 = createSprite(53,60,37,3); // top leftbox lower line
boxline4.shapeColor = "Blue";



 box2line1 = createSprite(35,200,3,220); //leftmost box left line
box2line1.shapeColor = "Blue";

 box2line2 = createSprite(43,200,3,220); //leftmost box right line
box2line2.shapeColor = "Blue";

 box2line3 = createSprite(39,90,11,3); //leftmost box upper line
box2line3.shapeColor = "Blue";

 box2line4 = createSprite(39,310,11,3); //leftmost box lower line
box2line4.shapeColor = "Blue";



 box3line1 = createSprite(63,200,3,220);  //2nd leftmost box, left line
box3line1.shapeColor = "Blue";

 box3line2 = createSprite(71,200,3,220);  //2nd leftmost box, right line
box3line2.shapeColor = "Blue";

 box3line3 = createSprite(67,90,11,3);  //2nd leftmost box, upper line
box3line3.shapeColor = "Blue";

 box3line4 = createSprite(67,310,11,3);  //2nd leftmost box, lower line
box3line4.shapeColor = "Blue";



 box4line1 = createSprite(35,350,3,20); // bottom leftbox left line
box4line1.shapeColor = "Blue";

 box4line2 = createSprite(71,350,3,20); // bottom leftbox right line
box4line2.shapeColor = "Blue";

 box4line3 = createSprite(53,340,37,3);  // bottom leftbox upper line
box4line3.shapeColor = "Blue";

 box4line4 = createSprite(53,360,37,3); // bottom leftbox lower line
box4line4.shapeColor = "Blue";



 box5line1 = createSprite(130,40,60,3);  //top 2nd leftmost box outer upper line
box5line1.shapeColor = "Blue";

 box5line2 = createSprite(100,115,3,150);  //top 2nd leftmost box outer left line
box5line2.shapeColor = "Blue";

 box5line3 = createSprite(130,190,60,3);  //top 2nd leftmost box outer lower line
box5line3.shapeColor = "Blue";

  
 box5line4 = createSprite(160,55,3,30);  //top 2nd leftmost box upper right line
box5line4.shapeColor = "Blue";

 box5line5 = createSprite(138,70,45,3);  //top 2nd leftmost box inner upper line
box5line5.shapeColor = "Blue";

 box5line6 = createSprite(115,117,3,95);  //top 2nd leftmost box inner left line
box5line6.shapeColor = "Blue";

box5line7 = createSprite(130,165,33,3);  //top 2nd leftmost box inner lower line
box5line7.shapeColor = "Blue";

box5line8 = createSprite(160,155,3,70);  //top 2nd leftmost box outer lower right line
box5line8.shapeColor = "Blue";

box5line9 = createSprite(145,143,3,46);  //top 2nd leftmost box inner lower right line
box5line9.shapeColor = "Blue";

box5line10 = createSprite(153,120,15,3);
box5line10.shapeColor = "blue";



//square like box from the left
box6line1 = createSprite(100,265,3,90);  // has to be red (outer left line)
box6line1.shapeColor = "FireBrick";

 box6line2 = createSprite(130,310,60,3);   // outer lower line
box6line2.shapeColor = "FireBrick";

 box6line3 = createSprite(160,265,3,90); // outer right line
box6line3.shapeColor = "FireBrick";

 box6line4 = createSprite(130,220,60,3); // outer upper line
box6line4.shapeColor = "FireBrick";

 box6line5 = createSprite(115,265,3,50);  //  inner left line
box6line5.shapeColor = "FireBrick";

 box6line6 = createSprite(130,290,30,3);   // inner lower line
box6line6.shapeColor = "FireBrick";

 box6line7 = createSprite(145,265,3,50); // inner right line
box6line7.shapeColor = "FireBrick";

 box6line8 = createSprite(130,240,30,3); // inner upper line
box6line8.shapeColor = "FireBrick";



 box7line1 = createSprite(100,350,3,20); // bottom 2nd most leftbox left line
box7line1.shapeColor = "Blue";

 box7line2 = createSprite(160,350,3,20); // bottom 2nd most leftbox right line
box7line2.shapeColor = "Blue";

 box7line3 = createSprite(130,340,63,3);  // bottom 2nd most leftbox upper line
box7line3.shapeColor = "Blue";

 box7line4 = createSprite(130,360,63,3); // bottom 2nd most leftbox lower line
box7line4.shapeColor = "Blue";



 box8line1 = createSprite(190,365,3,50); // bottom 3rd mostbox left line
box8line1.shapeColor = "Blue";

 box8line2 = createSprite(210,365,3,50); // bottom 3rd mostbox right line
box8line2.shapeColor = "Blue";

 box8line3 = createSprite(200,340,23,3); // bottom 3rd mostbox upper line
box8line3.shapeColor = "Blue";



//rectangle beside red box
 box9line1 = createSprite(190,300,3,27); //left line
box9line1.shapeColor = "blue";

 box9line2 = createSprite(275,300,3,27); //right line
box9line2.shapeColor = "blue";

 box9line3 = createSprite(232.5,285,87,3); //upper line
box9line3.shapeColor = "blue";

 box9line4 = createSprite(232.5,315,87,3); //lower line
box9line4.shapeColor = "blue";



 box10line1 = createSprite(190,170,3,172); // biggest rectangle outer left line
box10line1.shapeColor = "yellow";

 box10line2 = createSprite(275,170,3,172); // biggest rectangle outer right line
box10line2.shapeColor = "yellow";

 box10line3 = createSprite(232.5,83,87,3); // biggest rectangle outer upper line
box10line3.shapeColor = "yellow";

 box10line4 = createSprite(232.5,257,87,3); // biggest rectangle outer lower line
box10line4.shapeColor = "yellow";

 box10line5 = createSprite(210,170,3,122); // biggest rectangle inner left line
box10line5.shapeColor = "yellow";

 box10line6 = createSprite(255,170,3,122); // biggest rectangle inner right line
box10line6.shapeColor = "yellow";

 box10line7 = createSprite(232.5,110,47,3); // biggest rectangle inner upper line
box10line7.shapeColor = "yellow";

 box10line8 = createSprite(232.5,230,47,3); // biggest rectangle innerlower line
box10line8.shapeColor = "yellow";



 box11Line1 = createSprite(190,45,3,27); //top 3rd leftmost box  left line
box11Line1.shapeColor = "Blue";

 box11Line2 = createSprite(275,45,3,27); //top 3rd leftmost box right line
box11Line2.shapeColor = "Blue";

 box11Line3 = createSprite(232.5,33,87,3); //top 3rd leftmost box upper line
box11Line3.shapeColor = "Blue";

 box11Line4 = createSprite(232.5,57,87,3); //top 3rd leftmost box lower line
box11Line4.shapeColor = "Blue";



 box12line1 = createSprite(235,352.5,3,25); // bottom 4th most leftbox left line
box12line1.shapeColor = "Blue";

 box12line2 = createSprite(285,352.2,3,25); // bottom 4th most leftbox right line
box12line2.shapeColor = "Blue";

 box12line3 = createSprite(260,340,53,3);  // bottom 4th most leftbox upper line
box12line3.shapeColor = "Blue";

 box12line4 = createSprite(260,365,53,3); // bottom 4th most leftbox lower line
box12line4.shapeColor = "Blue";



//bottom 2nd box from right
 box13line1 = createSprite(309,382,3,20);// left line 
box13line1.shapeColor = "Blue";

 box13line2 = createSprite(320,382,3,20); //right line
box13line2.shapeColor = "Blue";

 box13line3 = createSprite(314,372,13.5,3); //upper line 
box13line3.shapeColor = "Blue";

   box14line1 = createSprite(315.5,310,3,25); // upper left line 
box14line1.shapeColor = "Blue";

 box14line2 = createSprite(380,310,3,25); // upper right line 
box14line2.shapeColor = "Blue";

 box14line3 = createSprite(326,324,25,3);  
box14line3.shapeColor = "Blue";

 box14line4 = createSprite(372,324,20,3); 
box14line4.shapeColor = "Blue";

 box14line5 = createSprite(348,299,62,3); // upper line 
box14line5.shapeColor = "Blue";

 box14line6 = createSprite(350,367.5,20,3); // bottom line 
box14line6.shapeColor = "Blue";

 box14line7 = createSprite(340,345,3,45); // bottom left line
box14line7.shapeColor = "Blue";

 box14line8 = createSprite(360,345,3,45); // bottom right line 
box14line8.shapeColor = "Blue";



 box15line1 = createSprite(300,45,3,27); //top last box left line
box15line1.shapeColor = "Blue";

 box15line2 = createSprite(385,45,3,27); //top last box right line
box15line2.shapeColor = "Blue";

 box15line3 = createSprite(342.5,33,87,3); //top last box upper line
box15line3.shapeColor = "Blue";

 box15line4 = createSprite(342.5,57,87,3); //top last box lower line
box15line4.shapeColor = "Blue";



//2nd last rectangle from the right around 100 y axis
 box16line1 = createSprite(300,110,3,60); //left
box16line1.shapeColor = "Blue";

 box16line2 = createSprite(315,110,3,60); //right
box16line2.shapeColor = "Blue";

 box16line3 = createSprite(308,80,18,3); //upper
box16line3.shapeColor = "Blue";

 box16line4 = createSprite(308,140,18,3); //bottom
box16line4.shapeColor = "Blue";



//last rectangle from the right around 100 y axis
 box17line1 = createSprite(350,110,3,60); //left
box17line1.shapeColor = "Blue";

 box17line2 = createSprite(365,110,3,60); //right
box17line2.shapeColor = "Blue";

 box17line3 = createSprite(358,80,18,3); //upper
box17line3.shapeColor = "Blue";

 box17line4 = createSprite(358,140,18,3); //bottom
box17line4.shapeColor = "Blue";



//'u' shape
 box18line1 = createSprite(308,165,18,3); //upper left
box18line1.shapeColor = "Blue";

 box18line2 = createSprite(358,165,18,3); //upper right
box18line2.shapeColor = "Blue";

 box18line3 = createSprite(300,215,3,100); //outer left
box18line3.shapeColor = "Blue";

 box18line4 = createSprite(365,215,3,100); //outer right
box18line4.shapeColor = "Blue";

 box18line5 = createSprite(332.5,265,65,3); //outer bottom 
box18line5.shapeColor = "Blue";

 box18line6 = createSprite(315,205,3,80); //inner left
box18line6.shapeColor = "Blue";

 box18line7 = createSprite(350,205,3,80); //inner right
box18line7.shapeColor = "Blue";

box18line8 = createSprite(332.5,245,35,3); //inner bottom 
box18line8.shapeColor = "Blue";

winImage = loadImage("YouWin.png")

win = createSprite(200,200)
win.scale = 1.5
win.addImage(winImage)


win.visible = false

gost.velocityX = x
gost.velocityY = y

gost2.velocityX = x
gost2.velocityY = y

gost4.velocityX = x
gost4.velocityY = y

gost3.velocityX = x
gost3.velocityY = y
  
gost5.velocityX = x
gost5.velocityY = y
}

function draw() {
  background("black")


  if (gameState === "play"){
    fill("red")
    text("Press 's' to start the game",100,200)
    text("For winning this game you will have to stay alive by not touching the ghosts for 1 minute",100,250)
    text("If you touch the ghost then you will lose best of luck",100,300)
    if (keyDown("s")){
      gameState = "start"
    }
    }
  
if (gameState==="start"){
  timer = timer - 3.6
  pacman_controls()
  if (gost.isTouching(pacman)){
    gameState="end"
  }
  if (gost2.isTouching(pacman)){
    gameState="end"
  }
  if (gost3.isTouching(pacman)){
    gameState="end"
  }
  if (gost4.isTouching(pacman)){
    gameState="end"
  }
  if (gost5.isTouching(pacman)){
    gameState="end"
  }
  if (pacman.isTouching(coin1)){
    coin1.visible = false
  }
  if (pacman.isTouching(coin2)){
    coin2.visible = false
  }
  if (pacman.isTouching(coin3)){
    coin3.visible = false
  }
  if (pacman.isTouching(coin4)){
    coin4.visible = false
  }
  if (pacman.isTouching(coin5)){
    coin5.visible = false
  }
  if (pacman.isTouching(coin6)){
    coin6.visible = false
  }
  if (pacman.isTouching(coin7)){
    coin7.visible = false
  }
  if (pacman.isTouching(coin8)){
    coin8.visible = false
  }
  if (pacman.isTouching(coin9)){
    coin9.visible = false
  }
  if (pacman.isTouching(coin10)){
    coin10.visible = false
  }
  if (pacman.isTouching(coin11)){
    coin11.visible = false
  }
  if (pacman.isTouching(coin12)){
    coin12.visible = false
  }
  if (pacman.isTouching(coin13)){
    coin13.visible = false
  }
  if (pacman.isTouching(coin14)){
    coin14.visible = false
  }
  if (pacman.isTouching(coin15)){
    coin15.visible = false
  }
  if (pacman.isTouching(coin16)){
    coin16.visible = false
  }
  if (pacman.isTouching(coin17)){
    coin17.visible = false
  }
  if (pacman.isTouching(coin18)){
    coin18.visible = false
  }
  if (pacman.isTouching(coin19)){
    coin19.visible = false
  }
  if (pacman.isTouching(coin20)){
    coin20.visible = false
  }
  if (pacman.isTouching(coin21)){
    coin21.visible = false
  }
  if (pacman.isTouching(coin23)){
    coin23.visible = false
  }
  if (pacman.isTouching(coin24)){
    coin24.visible = false
  }
  if (pacman.isTouching(coin25)){
    coin25.visible = false
  }
  if (pacman.isTouching(coin26)){
    coin26.visible = false
  }
  if (pacman.isTouching(coin27)){
    coin27.visible = false
  }
  if (pacman.isTouching(coin28)){
    coin28.visible = false
  }
  if (pacman.isTouching(coin29)){
    coin29.visible = false
  }
  if (pacman.isTouching(coin30)){
    coin30.visible = false
  }
  if (pacman.isTouching(coin31)){
    coin31.visible = false
  }
  if (pacman.isTouching(coin32)){
    coin32.visible = false
  }
  if (pacman.isTouching(coin33)){
    coin33.visible = false
  }
  if (pacman.isTouching(coin34)){
    coin34.visible = false
  }
  if (pacman.isTouching(coin35)){
    coin35.visible = false
  }
  if (pacman.isTouching(coin36)){
    coin36.visible = false
  }
  if (pacman.isTouching(coin37)){
    coin37.visible = false
  }
  if (pacman.isTouching(coin38)){
    coin38.visible = false
  }
  if (pacman.isTouching(coin39)){
    coin39.visible = false
  }
  if (pacman.isTouching(coin40)){
    coin40.visible = false
  }
  if (pacman.isTouching(coin41)){
    coin41.visible = false
  }
  if (pacman.isTouching(coin42)){
    coin42.visible = false
  }
  if (pacman.isTouching(coin43)){
    coin43.visible = false
  }
  if (pacman.isTouching(coin44)){
    coin44.visible = false
  }  
  if (pacman.isTouching(coin45)){
    coin45.visible = false
  }
  if (pacman.isTouching(coin46)){
    coin46.visible = false
  }
  if (pacman.isTouching(coin47)){
    coin47.visible = false
  }
  if (pacman.isTouching(coin48)){
    coin48.visible = false
  }
  if (pacman.isTouching(coin49)){
    coin49.visible = false
  }
  if (pacman.isTouching(coin50)){
    coin50.visible = false
  }
  if (pacman.isTouching(coin51)){
    coin51.visible = false
  }
  if (pacman.isTouching(coin52)){
    coin52.visible = false
  }
  if (pacman.isTouching(coin53)){
    coin53.visible = false
  }
  if (pacman.isTouching(coin54)){
    coin54.visible = false
  }
  if (pacman.isTouching(coin55)){
    coin55.visible = false
  }
  if (pacman.isTouching(coin56)){
    coin56.visible = false
  }
  if (pacman.isTouching(coin57)){
    coin57.visible = false
  }
  if (pacman.isTouching(coin58)){
    coin58.visible = false
  }
  if (pacman.isTouching(coin59)){
    coin59.visible = false
  }
  if (pacman.isTouching(coin60)){
    coin60.visible = false
  }
  if (pacman.isTouching(coin61)){
    coin61.visible = false
  }
  if (pacman.isTouching(coin62)){
    coin62.visible = false
  }
  if (pacman.isTouching(coin63)){
    coin63.visible = false
  }
  if (pacman.isTouching(coin64)){
    coin64.visible = false
  }
  if (pacman.isTouching(coin65)){
    coin65.visible = false
  }
  if (pacman.isTouching(coin66)){
    coin66.visible = false
  }
  if (pacman.isTouching(coin67)){
    coin67.visible = false
  }


}
createEdgeSprites();
  pacman.bounceOff(outerborder1);
  pacman.bounceOff(outerborder2);
  pacman.bounceOff(outerborder3);
  pacman.bounceOff(outerborder3);
  
  pacman.bounceOff(innerborder1);
  pacman.bounceOff(innerborder2);
  pacman.bounceOff(innerborder3);
  pacman.bounceOff(innerborder4);
  
  pacman.bounceOff(boxline1);
  pacman.bounceOff(boxline2);
  pacman.bounceOff(boxline3);
  pacman.bounceOff(boxline4);
  
  pacman.bounceOff(box2line1);
  pacman.bounceOff(box2line2);
  pacman.bounceOff(box2line3);
  pacman.bounceOff(box2line4);
  
  pacman.bounceOff(box3line1);
  pacman.bounceOff(box3line2);
  pacman.bounceOff(box3line3);
  pacman.bounceOff(box3line4);
  
  pacman.bounceOff(box4line1);
  pacman.bounceOff(box4line2);
  pacman.bounceOff(box4line3);
  pacman.bounceOff(box4line4);
  
  pacman.bounceOff(box5line1);
  pacman.bounceOff(box5line2);
  pacman.bounceOff(box5line3);
  pacman.bounceOff(box5line4);
  pacman.bounceOff(box5line5);
  pacman.bounceOff(box5line6);
  pacman.bounceOff(box5line7);
  pacman.bounceOff(box5line8);
  pacman.bounceOff(box5line9);
  pacman.bounceOff(box5line10);
  
  pacman.bounceOff(box6line1);
  pacman.bounceOff(box6line2);
  pacman.bounceOff(box6line3);
  pacman.bounceOff(box6line4);
  pacman.bounceOff(box6line5);
  pacman.bounceOff(box6line6);
  pacman.bounceOff(box6line7);
  pacman.bounceOff(box6line8);
  
  pacman.bounceOff(box7line1);
  pacman.bounceOff(box7line2);
  pacman.bounceOff(box7line3);
  pacman.bounceOff(box7line4);
  
  pacman.bounceOff(box8line1);
  pacman.bounceOff(box8line2);
  pacman.bounceOff(box8line3);
  
  pacman.bounceOff(box9line1);
  pacman.bounceOff(box9line2);
  pacman.bounceOff(box9line3);
  pacman.bounceOff(box9line4);
  
  pacman.bounceOff(box10line1);
  pacman.bounceOff(box10line2);
  pacman.bounceOff(box10line3);
  pacman.bounceOff(box10line4);
  pacman.bounceOff(box10line5);
  pacman.bounceOff(box10line6);
  pacman.bounceOff(box10line7);
  pacman.bounceOff(box10line8);
  
  pacman.bounceOff(box11Line1);
  pacman.bounceOff(box11Line2);
  pacman.bounceOff(box11Line3);
  pacman.bounceOff(box11Line4);
  
  pacman.bounceOff(box12line1);
  pacman.bounceOff(box12line2);
  pacman.bounceOff(box12line3);
  pacman.bounceOff(box12line4);
  
  pacman.bounceOff(box13line1);
  pacman.bounceOff(box13line2);
  pacman.bounceOff(box13line3);
  
  pacman.bounceOff(box14line1);
  pacman.bounceOff(box14line2);
  pacman.bounceOff(box14line3);
  pacman.bounceOff(box14line4);
  pacman.bounceOff(box14line5);
  pacman.bounceOff(box14line6);
  pacman.bounceOff(box14line7);
  pacman.bounceOff(box14line8);
  
  pacman.bounceOff(box15line1);
  pacman.bounceOff(box15line2);
  pacman.bounceOff(box15line3);
  pacman.bounceOff(box15line4);
  
  pacman.bounceOff(box16line1);
  pacman.bounceOff(box16line2);
  pacman.bounceOff(box16line3);
  pacman.bounceOff(box16line4);
  
  pacman.bounceOff(box17line1);
  pacman.bounceOff(box17line2);
  pacman.bounceOff(box17line3);
  pacman.bounceOff(box17line4);
  
  pacman.bounceOff(box18line1);
  pacman.bounceOff(box18line2);
  pacman.bounceOff(box18line3);
  pacman.bounceOff(box18line4);
  pacman.bounceOff(box18line5);
  pacman.bounceOff(box18line6);
  pacman.bounceOff(box18line7);
  pacman.bounceOff(box18line8);
  
  
  
  
  
  
  gost.bounceOff(outerborder1);
  gost.bounceOff(outerborder2);
  gost.bounceOff(outerborder3);
  gost.bounceOff(outerborder3);
  
  gost.bounceOff(innerborder1);
  gost.bounceOff(innerborder2);
  gost.bounceOff(innerborder3);
  gost.bounceOff(innerborder4);
  
  gost.bounceOff(boxline1);
  gost.bounceOff(boxline2);
  gost.bounceOff(boxline3);
  gost.bounceOff(boxline4);
  
  gost.bounceOff(box2line1);
  gost.bounceOff(box2line2);
  gost.bounceOff(box2line3);
  gost.bounceOff(box2line4);
  
  gost.bounceOff(box3line1);
  gost.bounceOff(box3line2);
  gost.bounceOff(box3line3);
  gost.bounceOff(box3line4);
  
  gost.bounceOff(box4line1);
  gost.bounceOff(box4line2);
  gost.bounceOff(box4line3);
  gost.bounceOff(box4line4);
  
  gost.bounceOff(box5line1);
  gost.bounceOff(box5line2);
  gost.bounceOff(box5line3);
  gost.bounceOff(box5line4);
  gost.bounceOff(box5line5);
  gost.bounceOff(box5line6);
  gost.bounceOff(box5line7);
  gost.bounceOff(box5line8);
  gost.bounceOff(box5line9);
  gost.bounceOff(box5line10);
  
  gost.bounceOff(box6line1);
  gost.bounceOff(box6line2);
  gost.bounceOff(box6line3);
  gost.bounceOff(box6line4);
  gost.bounceOff(box6line5);
  gost.bounceOff(box6line6);
  gost.bounceOff(box6line7);
  gost.bounceOff(box6line8);
  
  gost.bounceOff(box7line1);
  gost.bounceOff(box7line2);
  gost.bounceOff(box7line3);
  gost.bounceOff(box7line4);
  
  gost.bounceOff(box8line1);
  gost.bounceOff(box8line2);
  gost.bounceOff(box8line3);
  
  gost.bounceOff(box9line1);
  gost.bounceOff(box9line2);
  gost.bounceOff(box9line3);
  gost.bounceOff(box9line4);
  
  gost.bounceOff(box10line1);
  gost.bounceOff(box10line2);
  gost.bounceOff(box10line3);
  gost.bounceOff(box10line4);
  gost.bounceOff(box10line5);
  gost.bounceOff(box10line6);
  gost.bounceOff(box10line7);
  gost.bounceOff(box10line8);
  
  gost.bounceOff(box11Line1);
  gost.bounceOff(box11Line2);
  gost.bounceOff(box11Line3);
  gost.bounceOff(box11Line4);
  
  gost.bounceOff(box12line1);
  gost.bounceOff(box12line2);
  gost.bounceOff(box12line3);
  gost.bounceOff(box12line4);
  
  gost.bounceOff(box13line1);
  gost.bounceOff(box13line2);
  gost.bounceOff(box13line3);
  
  gost.bounceOff(box14line1);
  gost.bounceOff(box14line2);
  gost.bounceOff(box14line3);
  gost.bounceOff(box14line4);
  gost.bounceOff(box14line5);
  gost.bounceOff(box14line6);
  gost.bounceOff(box14line7);
  gost.bounceOff(box14line8);
  
  gost.bounceOff(box15line1);
  gost.bounceOff(box15line2);
  gost.bounceOff(box15line3);
  gost.bounceOff(box15line4);
  
  gost.bounceOff(box16line1);
  gost.bounceOff(box16line2);
  gost.bounceOff(box16line3);
  gost.bounceOff(box16line4);
  
  gost.bounceOff(box17line1);
  gost.bounceOff(box17line2);
  gost.bounceOff(box17line3);
  gost.bounceOff(box17line4);
  
  gost.bounceOff(box18line1);
  gost.bounceOff(box18line2);
  gost.bounceOff(box18line3);
  gost.bounceOff(box18line4);
  gost.bounceOff(box18line5);
  gost.bounceOff(box18line6);
  gost.bounceOff(box18line7);
  gost.bounceOff(box18line8);

  
  
    gost2.bounceOff(outerborder1);
  gost2.bounceOff(outerborder2);
  gost2.bounceOff(outerborder3);
  gost2.bounceOff(outerborder3);
  
  gost2.bounceOff(innerborder1);
  gost2.bounceOff(innerborder2);
  gost2.bounceOff(innerborder3);
  gost2.bounceOff(innerborder4);
  
  gost2.bounceOff(boxline1);
  gost2.bounceOff(boxline2);
  gost2.bounceOff(boxline3);
  gost2.bounceOff(boxline4);
  
  gost2.bounceOff(box2line1);
  gost2.bounceOff(box2line2);
  gost2.bounceOff(box2line3);
  gost2.bounceOff(box2line4);
  
  gost2.bounceOff(box3line1);
  gost2.bounceOff(box3line2);
  gost2.bounceOff(box3line3);
  gost2.bounceOff(box3line4);
  
  gost2.bounceOff(box4line1);
  gost2.bounceOff(box4line2);
  gost2.bounceOff(box4line3);
  gost2.bounceOff(box4line4);
  
  gost2.bounceOff(box5line1);
  gost2.bounceOff(box5line2);
  gost2.bounceOff(box5line3);
  gost2.bounceOff(box5line4);
  gost2.bounceOff(box5line5);
  gost2.bounceOff(box5line6);
  gost2.bounceOff(box5line7);
  gost2.bounceOff(box5line8);
  gost2.bounceOff(box5line9);
  gost2.bounceOff(box5line10);
  
  gost2.bounceOff(box6line1);
  gost2.bounceOff(box6line2);
  gost2.bounceOff(box6line3);
  gost2.bounceOff(box6line4);
  gost2.bounceOff(box6line5);
  gost2.bounceOff(box6line6);
  gost2.bounceOff(box6line7);
  gost2.bounceOff(box6line8);
  
  gost2.bounceOff(box7line1);
  gost2.bounceOff(box7line2);
  gost2.bounceOff(box7line3);
  gost2.bounceOff(box7line4);
  
  gost2.bounceOff(box8line1);
  gost2.bounceOff(box8line2);
  gost2.bounceOff(box8line3);
  
  gost2.bounceOff(box9line1);
  gost2.bounceOff(box9line2);
  gost2.bounceOff(box9line3);
  gost2.bounceOff(box9line4);
  
  gost2.bounceOff(box10line1);
  gost2.bounceOff(box10line2);
  gost2.bounceOff(box10line3);
  gost2.bounceOff(box10line4);
  gost2.bounceOff(box10line5);
  gost2.bounceOff(box10line6);
  gost2.bounceOff(box10line7);
  gost2.bounceOff(box10line8);
  
  gost2.bounceOff(box11Line1);
  gost2.bounceOff(box11Line2);
  gost2.bounceOff(box11Line3);
  gost2.bounceOff(box11Line4);
  
  gost2.bounceOff(box12line1);
  gost2.bounceOff(box12line2);
  gost2.bounceOff(box12line3);
  gost2.bounceOff(box12line4);
  
  gost2.bounceOff(box13line1);
  gost2.bounceOff(box13line2);
  gost2.bounceOff(box13line3);
  
  gost2.bounceOff(box14line1);
  gost2.bounceOff(box14line2);
  gost2.bounceOff(box14line3);
  gost2.bounceOff(box14line4);
  gost2.bounceOff(box14line5);
  gost2.bounceOff(box14line6);
  gost2.bounceOff(box14line7);
  gost2.bounceOff(box14line8);
  
  gost2.bounceOff(box15line1);
  gost2.bounceOff(box15line2);
  gost2.bounceOff(box15line3);
  gost2.bounceOff(box15line4);
  
  gost2.bounceOff(box16line1);
  gost2.bounceOff(box16line2);
  gost2.bounceOff(box16line3);
  gost2.bounceOff(box16line4);
  
  gost2.bounceOff(box17line1);
  gost2.bounceOff(box17line2);
  gost2.bounceOff(box17line3);
  gost2.bounceOff(box17line4);
  
  gost2.bounceOff(box18line1);
  gost2.bounceOff(box18line2);
  gost2.bounceOff(box18line3);
  gost2.bounceOff(box18line4);
  gost2.bounceOff(box18line5);
  gost2.bounceOff(box18line6);
  gost2.bounceOff(box18line7);
  gost2.bounceOff(box18line8);
  
  

   


  gost3.bounceOff(outerborder1);
  gost3.bounceOff(outerborder2);
  gost3.bounceOff(outerborder3);
  gost3.bounceOff(outerborder3);
  
  gost3.bounceOff(innerborder1);
  gost3.bounceOff(innerborder2);
  gost3.bounceOff(innerborder3);
  gost3.bounceOff(innerborder4);
  
  gost3.bounceOff(boxline1);
  gost3.bounceOff(boxline2);
  gost3.bounceOff(boxline3);
  gost3.bounceOff(boxline4);
  
  gost3.bounceOff(box2line1);
  gost3.bounceOff(box2line2);
  gost3.bounceOff(box2line3);
  gost3.bounceOff(box2line4);
  
  gost3.bounceOff(box3line1);
  gost3.bounceOff(box3line2);
  gost3.bounceOff(box3line3);
  gost3.bounceOff(box3line4);
  
  gost3.bounceOff(box4line1);
  gost3.bounceOff(box4line2);
  gost3.bounceOff(box4line3);
  gost3.bounceOff(box4line4);
  
  gost3.bounceOff(box5line1);
  gost3.bounceOff(box5line2);
  gost3.bounceOff(box5line3);
  gost3.bounceOff(box5line4);
  gost3.bounceOff(box5line5);
  gost3.bounceOff(box5line6);
  gost3.bounceOff(box5line7);
  gost3.bounceOff(box5line8);
  gost3.bounceOff(box5line9);
  gost3.bounceOff(box5line10);
  
  gost3.bounceOff(box6line1);
  gost3.bounceOff(box6line2);
  gost3.bounceOff(box6line3);
  gost3.bounceOff(box6line4);
  gost3.bounceOff(box6line5);
  gost3.bounceOff(box6line6);
  gost3.bounceOff(box6line7);
  gost3.bounceOff(box6line8);
  
  gost3.bounceOff(box7line1);
  gost3.bounceOff(box7line2);
  gost3.bounceOff(box7line3);
  gost3.bounceOff(box7line4);
  
  gost.bounceOff(box8line1);
  gost.bounceOff(box8line2);
  gost.bounceOff(box8line3);
  
  gost3.bounceOff(box9line1);
  gost3.bounceOff(box9line2);
  gost3.bounceOff(box9line3);
  gost3.bounceOff(box9line4);
  
  gost3.bounceOff(box10line1);
  gost3.bounceOff(box10line2);
  gost3.bounceOff(box10line3);
  gost3.bounceOff(box10line4);
  gost3.bounceOff(box10line5);
  gost3.bounceOff(box10line6);
  gost3.bounceOff(box10line7);
  gost3.bounceOff(box10line8);
  
  gost3.bounceOff(box11Line1);
  gost3.bounceOff(box11Line2);
  gost3.bounceOff(box11Line3);
  gost3.bounceOff(box11Line4);
  
  gost3.bounceOff(box12line1);
  gost3.bounceOff(box12line2);
  gost3.bounceOff(box12line3);
  gost3.bounceOff(box12line4);
  
  gost3.bounceOff(box13line1);
  gost3.bounceOff(box13line2);
  gost3.bounceOff(box13line3);
  
  gost3.bounceOff(box14line1);
  gost3.bounceOff(box14line2);
  gost3.bounceOff(box14line3);
  gost3.bounceOff(box14line4);
  gost3.bounceOff(box14line5);
  gost3.bounceOff(box14line6);
  gost3.bounceOff(box14line7);
  gost3.bounceOff(box14line8);
  
  gost3.bounceOff(box15line1);
  gost3.bounceOff(box15line2);
  gost3.bounceOff(box15line3);
  gost3.bounceOff(box15line4);
  
  gost3.bounceOff(box16line1);
  gost3.bounceOff(box16line2);
  gost3.bounceOff(box16line3);
  gost3.bounceOff(box16line4);
  
  gost3.bounceOff(box17line1);
  gost3.bounceOff(box17line2);
  gost3.bounceOff(box17line3);
  gost3.bounceOff(box17line4);
  
  gost3.bounceOff(box18line1);
  gost3.bounceOff(box18line2);
  gost3.bounceOff(box18line3);
  gost3.bounceOff(box18line4);
  gost3.bounceOff(box18line5);
  gost3.bounceOff(box18line6);
  gost3.bounceOff(box18line7);
  gost3.bounceOff(box18line8);




  gost4.bounceOff(outerborder1);
  gost4.bounceOff(outerborder2);
  gost4.bounceOff(outerborder3);
  gost4.bounceOff(outerborder3);
  
  gost4.bounceOff(innerborder1);
  gost4.bounceOff(innerborder2);
  gost4.bounceOff(innerborder3);
  gost4.bounceOff(innerborder4);
  
  gost4.bounceOff(boxline1);
  gost4.bounceOff(boxline2);
  gost4.bounceOff(boxline3);
  gost4.bounceOff(boxline4);
  
  gost4.bounceOff(box2line1);
  gost4.bounceOff(box2line2);
  gost4.bounceOff(box2line3);
  gost4.bounceOff(box2line4);
  
  gost4.bounceOff(box3line1);
  gost4.bounceOff(box3line2);
  gost4.bounceOff(box3line3);
  gost4.bounceOff(box3line4);
  
  gost4.bounceOff(box4line1);
  gost4.bounceOff(box4line2);
  gost4.bounceOff(box4line3);
  gost4.bounceOff(box4line4);
  
  gost4.bounceOff(box5line1);
  gost4.bounceOff(box5line2);
  gost4.bounceOff(box5line3);
  gost4.bounceOff(box5line4);
  gost4.bounceOff(box5line5);
  gost4.bounceOff(box5line6);
  gost4.bounceOff(box5line7);
  gost4.bounceOff(box5line8);
  gost4.bounceOff(box5line9);
  gost4.bounceOff(box5line10);
  
  gost4.bounceOff(box6line1);
  gost4.bounceOff(box6line2);
  gost4.bounceOff(box6line3);
  gost4.bounceOff(box6line4);
  gost4.bounceOff(box6line5);
  gost4.bounceOff(box6line6);
  gost4.bounceOff(box6line7);
  gost4.bounceOff(box6line8);
  
  gost4.bounceOff(box7line1);
  gost4.bounceOff(box7line2);
  gost4.bounceOff(box7line3);
  gost4.bounceOff(box7line4);
  
  gost4.bounceOff(box8line1);
  gost4.bounceOff(box8line2);
  gost4.bounceOff(box8line3);
  
  gost4.bounceOff(box9line1);
  gost4.bounceOff(box9line2);
  gost4.bounceOff(box9line3);
  gost4.bounceOff(box9line4);
  
  gost4.bounceOff(box10line1);
  gost4.bounceOff(box10line2);
  gost4.bounceOff(box10line3);
  gost4.bounceOff(box10line4);
  gost4.bounceOff(box10line5);
  gost4.bounceOff(box10line6);
  gost4.bounceOff(box10line7);
  gost4.bounceOff(box10line8);
  
  gost4.bounceOff(box11Line1);
  gost4.bounceOff(box11Line2);
  gost4.bounceOff(box11Line3);
  gost4.bounceOff(box11Line4);
  
  gost4.bounceOff(box12line1);
  gost4.bounceOff(box12line2);
  gost4.bounceOff(box12line3);
  gost4.bounceOff(box12line4);
  
  gost4.bounceOff(box13line1);
  gost4.bounceOff(box13line2);
  gost4.bounceOff(box13line3);
  
  gost4.bounceOff(box14line1);
  gost4.bounceOff(box14line2);
  gost4.bounceOff(box14line3);
  gost4.bounceOff(box14line4);
  gost4.bounceOff(box14line5);
  gost4.bounceOff(box14line6);
  gost4.bounceOff(box14line7);
  gost4.bounceOff(box14line8);
  
  gost4.bounceOff(box15line1);
  gost4.bounceOff(box15line2);
  gost4.bounceOff(box15line3);
  gost4.bounceOff(box15line4);
  
  gost4.bounceOff(box16line1);
  gost4.bounceOff(box16line2);
  gost4.bounceOff(box16line3);
  gost4.bounceOff(box16line4);
  
  gost4.bounceOff(box17line1);
  gost4.bounceOff(box17line2);
  gost4.bounceOff(box17line3);
  gost4.bounceOff(box17line4);
  
  gost4.bounceOff(box18line1);
  gost4.bounceOff(box18line2);
  gost4.bounceOff(box18line3);
  gost4.bounceOff(box18line4);
  gost4.bounceOff(box18line5);
  gost4.bounceOff(box18line6);
  gost4.bounceOff(box18line7);
  gost4.bounceOff(box18line8);





  gost5.bounceOff(outerborder1);
  gost5.bounceOff(outerborder2);
  gost5.bounceOff(outerborder3);
  gost5.bounceOff(outerborder3);
  
  gost5.bounceOff(innerborder1);
  gost5.bounceOff(innerborder2);
  gost5.bounceOff(innerborder3);
  gost5.bounceOff(innerborder4);
  
  gost5.bounceOff(boxline1);
  gost5.bounceOff(boxline2);
  gost5.bounceOff(boxline3);
  gost5.bounceOff(boxline4);
  
  gost5.bounceOff(box2line1);
  gost5.bounceOff(box2line2);
  gost5.bounceOff(box2line3);
  gost5.bounceOff(box2line4);
  
  gost5.bounceOff(box3line1);
  gost5.bounceOff(box3line2);
  gost5.bounceOff(box3line3);
  gost5.bounceOff(box3line4);
  
  gost5.bounceOff(box4line1);
  gost5.bounceOff(box4line2);
  gost5.bounceOff(box4line3);
  gost5.bounceOff(box4line4);
  
  gost5.bounceOff(box5line1);
  gost5.bounceOff(box5line2);
  gost5.bounceOff(box5line3);
  gost5.bounceOff(box5line4);
  gost5.bounceOff(box5line5);
  gost5.bounceOff(box5line6);
  gost5.bounceOff(box5line7);
  gost5.bounceOff(box5line8);
  gost5.bounceOff(box5line9);
  gost5.bounceOff(box5line10);
  
  gost5.bounceOff(box6line1);
  gost5.bounceOff(box6line2);
  gost5.bounceOff(box6line3);
  gost5.bounceOff(box6line4);
  gost5.bounceOff(box6line5);
  gost5.bounceOff(box6line6);
  gost5.bounceOff(box6line7);
  gost5.bounceOff(box6line8);
  
  gost5.bounceOff(box7line1);
  gost5.bounceOff(box7line2);
  gost5.bounceOff(box7line3);
  gost5.bounceOff(box7line4);
  
  gost5.bounceOff(box8line1);
  gost5.bounceOff(box8line2);
  gost5.bounceOff(box8line3);
  
  gost5.bounceOff(box9line1);
  gost5.bounceOff(box9line2);
  gost5.bounceOff(box9line3);
  gost5.bounceOff(box9line4);
  
  gost5.bounceOff(box10line1);
  gost5.bounceOff(box10line2);
  gost5.bounceOff(box10line3);
  gost5.bounceOff(box10line4);
  gost5.bounceOff(box10line5);
  gost5.bounceOff(box10line6);
  gost5.bounceOff(box10line7);
  gost5.bounceOff(box10line8);
  
  gost5.bounceOff(box11Line1);
  gost5.bounceOff(box11Line2);
  gost5.bounceOff(box11Line3);
  gost5.bounceOff(box11Line4);
  
  gost5.bounceOff(box12line1);
  gost5.bounceOff(box12line2);
  gost5.bounceOff(box12line3);
  gost5.bounceOff(box12line4);
  
  gost5.bounceOff(box13line1);
  gost5.bounceOff(box13line2);
  gost5.bounceOff(box13line3);
  
  gost5.bounceOff(box14line1);
  gost5.bounceOff(box14line2);
  gost5.bounceOff(box14line3);
  gost5.bounceOff(box14line4);
  gost5.bounceOff(box14line5);
  gost5.bounceOff(box14line6);
  gost5.bounceOff(box14line7);
  gost5.bounceOff(box14line8);
  
  gost5.bounceOff(box15line1);
  gost5.bounceOff(box15line2);
  gost5.bounceOff(box15line3);
  gost5.bounceOff(box15line4);
  
  gost5.bounceOff(box16line1);
  gost5.bounceOff(box16line2);
  gost5.bounceOff(box16line3);
  gost5.bounceOff(box16line4);
  
  gost5.bounceOff(box17line1);
  gost5.bounceOff(box17line2);
  gost5.bounceOff(box17line3);
  gost5.bounceOff(box17line4);
  
  gost5.bounceOff(box18line1);
  gost5.bounceOff(box18line2);
  gost5.bounceOff(box18line3);
  gost5.bounceOff(box18line4);
  gost5.bounceOff(box18line5);
  gost5.bounceOff(box18line6);
  gost5.bounceOff(box18line7);
  gost5.bounceOff(box18line8);

    fill("white")
    line(200,20,200,20);
if (coin1.visible === false&&
  coin2.visible === false&&
  coin3.visible === false&&
  coin4.visible === false&&
  coin5.visible === false&&
  coin6.visible === false&&
  coin7.visible === false&&
  coin8.visible === false&&
  coin9.visible === false&&
  coin10.visible === false&&
  coin11.visible === false&&
  coin12.visible === false&&
  coin13.visible === false&&
  coin14.visible === false&&
  coin15.visible === false&&
  coin16.visible === false&&
  coin17.visible === false&&
  coin18.visible === false&&
  coin19.visible === false&&
  coin20.visible === false&&
  coin21.visible === false&&
  coin23.visible === false&&
  coin24.visible === false&&
  coin25.visible === false&&
  coin26.visible === false&&
  coin27.visible === false&&
  coin28.visible === false&&
  coin29.visible === false&&
  coin30.visible === false&&
  coin31.visible === false&&
  coin32.visible === false&&
  coin33.visible === false&&
  coin34.visible === false&&
  coin35.visible === false&&
  coin36.visible === false&&
  coin37.visible === false&&
  coin38.visible === false&&
  coin39.visible === false&&
  coin40.visible === false&&
  coin41.visible === false&&
  coin42.visible === false&&
  coin43.visible === false&&
  coin44.visible === false&&
  coin45.visible === false&&
  coin46.visible === false&&
  coin47.visible === false&&
  coin48.visible === false&&
  coin49.visible === false&&
  coin50.visible === false&&
  coin51.visible === false&&
  coin52.visible === false&&
  coin53.visible === false&&
  coin54.visible === false&&
  coin55.visible === false&&
  coin56.visible === false&&
  coin57.visible === false&&
  coin58.visible === false&&
  coin59.visible === false&&
  coin60.visible === false&&
  coin61.visible === false&&
  coin62.visible === false&&
  coin63.visible === false&&
  coin64.visible === false&&
  coin65.visible === false&&
  coin66.visible === false&&
  coin67.visible === false
  ){
  gameState="win"
}
if (gameState==="win"){

  win.visible = true

  gost.velocityX = 0
  gost2.velocityX = 0
  gost3.velocityX = 0
  gost4.velocityX = 0
  gost5.velocityX = 0
  pacman.velocityX = 0

  gost.velocityY = 0
  gost2.velocityY = 0
  gost3.velocityY = 0
  gost4.velocityY = 0
  gost5.velocityY = 0
  pacman.velocityY = 0
  text("press 'S' to restart",100,250)
  if (keyDown("s")){
    gameState="start"

  }
}



if (gameState==="end"){
  fill("red")
  textSize(21)
  text("You lose",100,200)
  gost.velocityX = 0
  gost2.velocityX = 0
  gost3.velocityX = 0
  gost4.velocityX = 0
  gost5.velocityX = 0


  gost.velocityY = 0
  gost2.velocityY = 0
  gost3.velocityY = 0
  gost4.velocityY = 0
  gost5.velocityY = 0

  pacman.velocityX = 0
  pacman.velocityY = 0

  text("reload the game to play again",100,250)

}
  drawSprites()
}
function pacman_controls(){
  
    
     if(keyDown(UP_ARROW)) {                      
    pacman.velocityX = 0;
    pacman.velocityY = -5;
    pacman.addImage(pacManU)
  }
  if(keyWentUp(UP_ARROW))
  {
    pacman.velocityY = 0;
  }
  
  if(keyDown(DOWN_ARROW)) {              
    pacman.velocityX = 0;
    pacman.velocityY = 5;
    pacman.addImage(pacManD)
  }
  if(keyWentUp(DOWN_ARROW)) 
  {
    pacman.velocityY = 0;
    
  }
  if(keyDown(RIGHT_ARROW)) {                     
    pacman.velocityX = 5;
    pacman.velocityY = 0;
        pacman.addImage(pacManR)

  }
  if(keyWentUp(RIGHT_ARROW))
  {
   pacman.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)) {                
    pacman.velocityX = -5;
    pacman.velocityY = 0;
        pacman.addImage(pacManL)

  }
  if (keyWentUp(LEFT_ARROW)) {
    pacman.velocityX = 0;
  } 
}

