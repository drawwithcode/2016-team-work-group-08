function setup() {
  createCanvas(windowWidth,windowHeight);
}

var pos = 1200;
var vel = 0.01;
var value = 0;
var earth = 1200;
var mars = 25339;
var moon = 14000;
var venus = 38474;
var saturn = 51140;
var percent = 0;

function draw() {
  background(15,15,27);
  
  //Terra
  noStroke();
  fill(54,169,225)
  ellipse(width/2, height/2, pos, pos);
  
  //Testo iniziale
  if (pos<1205) {
    textAlign(LEFT);
    textFont("Montserrat");
    textSize(38);
    fill(255);
    stroke(54,169,225);
    text('LINING UP ALL', 80, (height/2)-95);
    text('THE IPHONE SOLD', 80, (height/2)-60);
    text('CAN YOU IMAGINE', 80, (height/2)-25);
    text('HOW FAR CAN', 80, (height/2)+10);
    text('YOU GET?', 80, (height/2)+45);
    fill(249,178,51);
    text('DISCOVER IT!', 80, (height/2)+85);
    text('SCROLL!', 80, (height/2)+120);
  }
  
  //Cielo + stelle
  fill(15,15,27);
  ellipse(width/2, height/2, (pos-1199)/9.5, (pos-1199)/9.5);
  
  //Luna
  fill(240);
  if (pos>13944) {
    ellipse(width/2, height/2, (pos-13905)/9.5, (pos-13905)/9.5);
  }
  
  //Cielo
  fill(15,15,27);
  if (pos>26235) {
  ellipse(width/2, height/2, (pos-26195)/2.5, (pos-26195)/2.5);
  }
  
  //Marte
  fill(255,15,27);
  if (pos>29400) {
  ellipse(width/2, height/2, (pos-29361)/9.5, (pos-29361)/9.5);
  }
  
  //Cielo 2
  fill(15,15,27);
  if (pos>41455) {
    ellipse(width/2, height/2, (pos-41415)/5.5, (pos-41415)/5.5);
  }
  
  //Venere
  fill(254, 215, 102);
  if (pos>49035) {
    ellipse(width/2, height/2, (pos-48995)/9.5, (pos-48995)/9.5);
  }
  
  //Cielo 3
  fill(15,15,27);
  if (pos>62235) {
    ellipse(width/2, height/2, (pos-62195)/8.5, (pos-62195)/8.5);
  }
  
  //Saturno
  fill(235, 207, 178)
  if (pos>74854) {
    ellipse(width/2, height/2, (pos-74814)/8.5, (pos-74814)/8.5);
  }
  
  if (pos>75355 && pos<86515) {
    fill(191, 169, 145);
    rectMode(CENTER);
    push();
    rotate(30);
    rect(width/2+85, height/2-350, (pos-74814)/5.5, (pos-74814)/180);
    pop();
  }
    
  //Cielo 4
  fill(15,15,27);
  if (pos>86515) {
    ellipse(width/2, height/2, (pos-86475)/175, (pos-86475)/175);
  }
  
  //Informazioni sul viaggio
  textAlign(CENTER);
  textSize(15);
  fill(255);
  
  if (pos===1200 && pos<1201) {
    text('...',width/2,20)
  }
  
  if (pos>1201 && pos<4386) {
    text('You are travelling through the planet EARTH',width/2,20)
  }
  
  if (pos>4386 && pos<7572) {
    text('It is the largest of the terrestrial planets',width/2,20)
  }
  
  if (pos>7572 && pos<10758) {
    text('You are halfway, missing about 6,000 km to complete it',width/2,20)
  }
  
  if (pos>10758 && pos<13944) {
    text ('You are almost there, you can see the sky', width/2, 20)
  }

  if (pos>13944 && pos<19465) {
    text ('Earth completed, next is MOON', width/2, 20)
  }
    
  if (pos>19465 && pos<24432) {
    text ('This satellite is very small', width/2, 20)
  }

  if (pos>24432 && pos<29400) {
    text ('Earth can hold it more than 3 times', width/2, 20)
  }
  
  if (pos>29400 && pos<32975) {
    text ('Moon completed, next is MARS', width/2, 20)
  }
  
  if (pos>32975 && pos<42555) {
    text ('It is called the "Red Planet" because of its color', width/2, 20)
  }
  
  if (pos>42555 && pos<45795) {
    text ('In the solar system is the planet most similar to Earth', width/2, 20)
  }
  
  if (pos>45795 && pos<49035) {
    text ('Continue to scroll to complete your travel in the sky', width/2, 20)
  }
  
  if (pos>49035 && pos<55490) {
    text ('Mars completed, next is VENUS', width/2, 20)
  }
  
  if (pos>55490 && pos<61945) {
    text ('It takes name from the Roman goddess of love and beauty', width/2, 20)
  }
  
  if (pos>61945 && pos<68400) {
    text ('Venus was called by the ancients "Morning Star" or "Evening Star"', width/2, 20)
  }
  
  if (pos>68400 && pos<74854) {
    text ('You are in a quarter of your trip, keep going', width/2, 20)
  }
  
  if (pos>74854 && pos<79077) {
    text ('Venus completed, next is SATURN', width/2, 20)
  }
  
  if (pos>79077 && pos<84200) {
    text('...', width/2, 20)
  }
  
  if (pos>84200 && pos<94255) {
    text('Saturn is classified as a "gas giant"', width/2, 20)
  }
  
  if (pos>94255 && pos<104310) {
    text('It has an extensive and eye-catching ring system...', width/2, 20)
  }
  
  if (pos>104310 && pos<114365) {
    text('...composed of millions of small icy objects orbiting around the planet', width/2, 20)
  }
  
  if (pos>114365 && pos<124420) {
    text('You are in the middle of your trip, continue to scroll', width/2, 20)
  }
  
  if (pos>124420 && pos<134475) {
    text('Its diameter can contain more than 9 times the Earth...', width/2, 20)
  }
  
  if (pos>134475 && pos<144530) {
    text('...and its volume is equal to 744 times the Earth', width/2, 20)
  }
  
  if (pos>144530 && pos<154585) {
    text('So much space you have to cross inside here', width/2, 20)
  }
  
  if (pos>154585 && pos<164640) {
    text('...', width/2, 20)
  }
  
  if (pos>164640 && pos<174695) {
    text('Be patient you are almost done, hold on for a little while', width/2, 20)
  }
  
  if (pos>174695 && pos<184750) {
    text('You can see the end and the sky, but you can not reach it', width/2, 20)
  }
  
  if (pos===184750) {
    text('This travel is complete, thank you', width/2, 20)
  }
    
  textSize(22);    
  if (pos>=184750) {    
    text('Missing 22056 km to complete Saturn!', width/2, (height/2)-15)
    text('You need 100 million of iPhone 7!', width/2, (height/2)+15)
  }
    
  push();
    textSize(15);
    translate(width/2, height/2-20);
    angleMode(DEGREES);
    rotate(90);
    if (pos>1200) {
     text('iPhone length project', 0, -610)
    }
  pop();

  //Etichette pianeti
  textSize(10);
   if (pos>=13945 && pos<=19650) {
    text('MOON!!!--->',(width/2)-150,(height/2))
  }
  
  if (pos>=29400 && pos<=35105) {
    text('MARS!!!--->',(width/2)-150,(height/2))
  }
    
  if (pos>=49035 && pos<=54740) {
    text('VENUS!!!--->', (width/2)-150,(height/2))
  }
  
  if (pos>74854 && pos<80559) {
    text('SATURN!!!--->', (width/2)-150,(height/2))
  }
  
  //Km percorsi
  noStroke();
  fill(255);
  textSize(15);
    
  if (pos>1200 && pos<=13945) {
    text(floor(pos-earth) + ' km walked', (width-80), (height-20))
  }
  
  if (pos>=13945 && pos<26745) {
    text('12745 km walked', (width-80), (height-20))
  }
  
  if (pos>=26745 && pos<29286) {
    text(floor(pos-moon) + ' km walked', (width-90), (height-20))
  }
  
  if (pos>=29286 && pos<41560) {
    text('16221 km walked', (width-80), (height-20))
  }
  
  fill(255);
  if (pos>=41560 && pos<48365) {
    text(floor(pos-mars) + ' km walked', (width-80), (height-20))
  }
  
  if (pos>=48365 && pos<61500) {
    text('23026 km walked', (width-80), (height-20))
  }
  
  if (pos>=61500 && pos<73604) {
    text(floor(pos-venus) + ' km walked', (width-80), (height-20))
  }
  
  if (pos>73604 && pos<86270) {
    text('35130 km walked',  (width-80), (height-20))
  }
  
  if (pos>=86270 && pos<184749.5) {
    text(floor(pos-saturn) + ' km walked', (width-80), (height-20))
  }
  
  if (pos>=184750) {
    text('133609 km walked',  (width-80), (height-20))
  }
  
  //N. Iphone in milioni
  noStroke();
  fill(255);
  
  if (pos>1315 && pos<1775) {
    text('1 M of iPhone', 80, (height-20))
  }
  
  if (pos>1775 && pos<3535.5) {
    text('5 M of iPhone', 80, (height-20))
  }
  
  if (pos>3535.5 && pos<6972) {
    text('10 M of iPhone', 80, (height-20))
  }
  
   if (pos>6972 && pos<12735) {
    text('50 M of iPhone', 80, (height-20))
  }
  
   if (pos>12735 && pos<61529) {
    text('100 M of iPhone', 80, (height-20))
  }

   if (pos>61529 && pos<73298) {
    text('200 M of iPhone', 80, (height-20))
  }
  
   if (pos>73298 && pos<98344) {
    text('300 M of iPhone', 80, (height-20))
  }
  
   if (pos>98344 && pos<110731) {
    text('400 M of iPhone', 80, (height-20))
  }
  
   if (pos>110731 && pos<123246) {
    text('500 M of iPhone', 80, (height-20))
  }
  
   if (pos>123246 && pos<137055) {
    text('600 M of iPhone', 80, (height-20))
  }
  
   if (pos>137055 && pos<151448) {
    text('700 M of iPhone', 80, (height-20))
  }

   if (pos>151448 && pos<168198) {
    text('800 M of iPhone', 80, (height-20))
  }
  
   if (pos>168198 && pos<180303.5) {
    text('900 M of iPhone', 80, (height-20))
  }
  
   if (pos>180303.5 && pos<184750) {
    text('1 B of iPhone', 80, (height-20))
  }

   if (pos>=184750) {
    text('1,03 B of iPhone', 80, (height-20))
  }
    
  //Modelli iPhone
  textSize(15);
  push();
    translate(width/2, height/2-20);
    angleMode(DEGREES);
    rotate(-90);
    
    if (pos>1200) {
      text('Here is used the length', 0, -610) 
    }
    
    if (pos>1200 && pos<1901.5) {
      text('of iPhone Edge / 115mm', 0, -590)
    } 
    
    if (pos>1901.5 && pos<4240) {
      text('of iPhone 3G / 115.5mm', 0, -590)
    }
    
    if (pos>4240 && pos<8082) {
       text('of iPhone 3GS / 115.5mm', 0, -590)
    }
    
    if (pos>8082 && pos<42174) {
      text('of iPhone 4 / 115.2mm', 0, -590)
    }
  
    if (pos>42174 && pos<69714) {
       text('of iPhone 4S / 115.2mm', 0, -590)
    }

    if (pos>69714 && pos<100982) {
       text('of iPhone 5 / 123.8mm', 0, -590)
    }
  
    if (pos>100982 && pos<102450) {
       text('of iPhone 5c / 124.8mm', 0, -590)
    }

    if (pos>102450 && pos<121939) {
       text('of iPhone 5s / 123.8mm', 0, -590)
    }
  
    if (pos>121939 && pos<146842) {
      text('of iPhone 6 / 138.1mm', 0, -590)
    }

    if (pos>146845 && pos<154887) {
      text('of iPhone 6 Plus / 158.1mm', 0, -590)
    }
  
    if (pos>154887 && pos<174230) {
      text('of iPhone 6s / 138.3mm', 0, -590)
    }
    
    if (pos>174230 && pos<181605) {
      text('of iPhone 6s Plus / 158.2mm', 0, -590)
    }
  
    if (pos>181605 && pos<=184750) {
      text('of iPhone SE / 123.8mm', 0, -590)
    }
pop();

  console.log(pos);
}

function mouseWheel(event) {
  print(event.delta);
  //ingrandimento dipende dallo scroll e della grandezza del pianeta
  pos += (event.delta*vel);
  //uncomment to block page scrolling
  //return false;
  if (pos<1200) {
    pos=1200;
  } if (pos>=184750) {
    pos=184750;
  }
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}
