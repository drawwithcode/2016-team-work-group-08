var k = 0;
var m = 0;

var padding=1;
var row = 200;

var battery = 6.36;

var soldTotal = 1033630000;

function setup() {
  createCanvas(windowWidth,windowHeight);
    
    textFont('Inconsolata');
    
}

function draw() {
  background(29,38,47);
  
  stroke(151,224,187);
  line(440,10,440,height-10);
  line(10,40,430,40);
  line(450,40,width-10,40);
  
  noStroke();
  fill(255);
  textSize(16);
  
  var message;
  var iphoneMessage;
  
  row = floor((windowWidth - 460)/(2));
  console.log(row);
  
  if (mouseIsPressed) {
    k++;
    m++;
    
    message = round(k*battery) + ' Watts accumulated';
    iphoneMessage = k + ' iPhones';
    
    if (k>500){
      k+=5;
    }
    
    if (k>2500){
      k+=25;
      m+=2;
    }
    
    if (k>15000){
      k+=125;
    }
    
    if (k>40894284){
      k+=10000;
    }
  
    
    textAlign(LEFT);
    
    push();
    fill(170);
    text('what you could do with such power',10,60);
    pop();
    
    if (k>94) {
      text("94 iPhones power up a hairdryer",10,90);
    }

    if (k>189) {
      text("189 iPhones power up a Nespresso machine",10,120);
    }
    
     if (k>1730) {
      text("1 730 iPhones charge a Tesla S car",10,150);
    }
      
     if (k>2359) {
      text("2 359 iPhones power up an IMAX Xenon lamp",10,180);
    }  
      
     if (k>14156) {
      text("14 156 iPhones power up the ISS",10,210);
    }
    
     if (k>1226829) {
      text("1 226 829 iPhones power up a Frecciarossa train",10,240);
      text("          from Milan to Rome",10,260)
    }
    
    if (k>3361174) {
      text("3 361 174 iPhones power up the Eiffel Tower",10,290);
      text("          for one day!",10,310)
    }
    
    if (k>5662285) {
      text("5 662 285 iPhones power up the entire city of Rome",10,340);
      text("          or cook 450 000 000 pizzas!",10,360);
    }
    
    if (k>22019999) {
      text("22 019 999 iPhones power up Boeing 747 from Milan",10,390);
      text("           to New York City!",10,410);
    }
    
    if (k>40894284) {
      text("40 894 284 iPhones power up GOOOOOOOOOOGLE!",10,440);
    }
    
    if (k>1022357097) {
      text("1 022 357 097 iPhones power up the city of Las Vegas",10,470);
      text("              for an entire day of summer!",10,490);
    }
    
    for (var i=0; i<=m; i++) {
      var w = 2;
      var h = 2;
      
      var scendi=floor(i/row);
      
      var y=scendi*h+padding;
    
      var x=(i%row)*w+padding;
      
      push();
      translate(450,50);
      noStroke();
      fill(255);
      rect(x,y,w-padding,h-padding);
      pop();
    }
      
  } else {
    k=0;
    m=0;
    message = 'no power';
    iphoneMessage = 'no mobiles';
   
    push();
    fill(0,0,0,120);
    rect(0,0,width,height);
    pop();
    
    push();
    rectMode(CENTER);
    stroke(151,224,187);
    fill(29,38,47);
    rect(width/2,height/2,450,150);
    pop();
    
    push();
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text('click and hold',width/2,height/2-10);
    textSize(16);
    text('to accumulate the energy of 1 billion iPhones',width/2,height/2+30);
    pop();
    
  }
  
  text(message,10,30);
  text(iphoneMessage,450,30);
  
  //footer
  textSize(9);
  text('Project by Alessandro Zotta | Creative Coding 2017 | Professors: Michele Mauri + Tommaso Elli',10,height-10);
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}