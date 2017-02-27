var suono;
var bottino = 0;
var contaPezzi = 0;
var soldi = 0;

//prezzi iPhone
var primo   = 299;    //3G      | 20250000, 3Gs     | 33260000
var secondo = 499;    //Edge    | 6100000
var terzo   = 549;    //5c      | 11800000
var quarto  = 649;    //4       | 86400000, 4s      | 125040000
var quinto  = 749;    //5       | 150260000, 5s     | 157420000, 6 | 180350000, 6s | 139860000
var sesto   = 849;    //6 Plus  | 50870000, 6s Plus | 46620000

var check1 = false;
var check2 = false;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function controllaMouse1() {
  if (mouseX > 200 && mouseX < 220 && mouseY > 260 && mouseY < 460) {
    !check1;
       cassa();
  } else {
    check1 = !check1;
  }
}

function controllaMouse2() {
  if (contaPezzi >= 100 && mouseX > 400 && mouseX < 420 && mouseY > 260 && mouseY < 460) {
    !check1;
       cassa();
  } else {
    check1 = !check1;
  }
}

function controllaMouse3() {
  if (contaPezzi >= 5000 && mouseX > 600 && mouseX < 620 && mouseY > 260 && mouseY < 460) {
    !check1;
       cassa();
  } else {
    check1 = !check1;
  }
}

function cassa() {
  suono.play();
}

function preload() {
  suono = loadSound('cash_register.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  suono.setVolume(0.05);  //volume
  suono.rate(1.075);      //velocità
}

function draw() {
  
  background(255);
  noFill();
  stroke(0);
  textFont("VT323");

  //suono della cassa
  controllaMouse1();
  controllaMouse2();
  controllaMouse3();

  /*
  numeri limite 
  pezzi venduti 1033630000
  guadagni $725939370000
  */

push();
  if (contaPezzi >= 1033630000) {
    contaPezzi = 1033630000;
    soldi = 725939370000;
  }
pop();

  //rettangolo sfondo
push();
  strokeWeight(4);
  rect(100, 260, 620, 200);
pop();

  //zona 1 
push();
  strokeWeight(4);
  if (mouseX > 200 && mouseX < 220 && mouseY > 260 && mouseY < 460) {
    fill(0);
  }
  noStroke();
  rect(200, 260, 20, 200);
pop();
  //zona 2
push();
  if (contaPezzi >= 100) {
    strokeWeight(4);
    if (mouseX > 400 && mouseX < 420 && mouseY > 260 && mouseY < 460) {
      fill(0);
    }
    noStroke();
    rect(400, 260, 20, 200);
  }
pop();
  //zona 3
push();
  if (contaPezzi >= 5000) {
    strokeWeight(4);
    if (mouseX > 600 && mouseX < 620 && mouseY > 260 && mouseY < 460) {
      fill(0);
    }
    noStroke();
    rect(600, 260, 20, 200);
  }
pop();


  //bottino incrementale
push();
  fill(0);
  strokeWeight(1);
  //zona 1
  if (mouseX > 200 && mouseX < 220 && mouseY > 260 && mouseY < 460) {
    contaPezzi += +1;
    bottino += +0.01;
    soldi += +702;
    //zona 2
  } else if (contaPezzi >= 100 && mouseX > 400 && mouseX < 420 && mouseY > 260 && mouseY < 460) {
    contaPezzi += +10;
    bottino += +0.05;
    soldi += +7020;
    //zona 3
  } else if (contaPezzi >= 5000 && mouseX > 600 && mouseX < 620 && mouseY > 260 && mouseY < 460) {
    contaPezzi += +1000000;
    bottino += +0.1;
    soldi += +70200000; 
  }
  rect(1200, 700, 100, -bottino);
pop();

  //testo generico
push();
  textFont("VT323");
  fill(0);
  noStroke();
  textSize(32);
  push();
  fill(0);
  textFont("VT323");
  noStroke();
  textSize(24);
  text('How much you could earn selling iPhones?', 100, height / 2 - 340)
  text('Swipe on the cashier and discover it!', 100, height / 2 - 300)
    if (contaPezzi >= 100) {
      text('Go on! Your sales are doing good! You could achieve more!   (new sales option ulocked)', 100, height / 2 - 250)
  } 
    if (contaPezzi >= 5000) {
      text('Keep goin, the path to a Billion sales is long', 100, height / 2 - 220)
  }
  pop();
  text(contaPezzi + ' iPhones sold', width / 10 * 4, height / 2 + 150)
  text('revenue $' + soldi, 100, height / 2 + 150)
  text('sales graphic', width / 10 * 8, height / 2 + 350);
pop();

  //testo esito bottino accumulato
push();
  fill(0);
  textSize(32);
  textFont("VT323");
  //strokeWeight(1);

  //testo 1 
  if (soldi >= 3088000000 && soldi <= 6019000000) {
    text("3.088.000.000$ ≃ Belize's GDP (171st out 191)", 100, height / 2 + 280)
  }
  //testo 2
  else if (soldi >= 6019000000 && soldi <= 6432000000) {
    text("6.019.000.000$ ≃ Lesotho's GDP (162nd out 191)", 100, height / 2 + 280)
  }
  //testo 3
  else if (soldi >= 6432000000 && soldi <= 9169000000) {
    text("6.432.000.000$ ≃ Bhutan's GDP (160th out 191)", 100, height / 2 + 280)
  }
  //testo 4
  else if (soldi >= 9169000000 && soldi <= 10613000000) {
    text("9.169.000.000$ ≃ Eritrea's GDP (155th out 191)", 100, height / 2 + 280)
  }
  //testo 5
  else if (soldi >= 10613000000 && soldi <= 39717000000) {
    text("10.613.000.000$ ≃ Montenegro's GDP (154th out 191)", 100, height / 2 + 280)
  }
  //testo 6
  else if (soldi >= 39717000000 && soldi <= 43185000000) {
    text("39.717.000.000$ ≃ Senegal's GDP (113rd out 191)", 100, height / 2 + 280)
  }
  //testo 7
  else if (soldi >= 43185000000 && soldi <= 58741000000) {
    text("43.185.000.000$ ≃ Honduras's GDP (110th out 191)", 100, height / 2 + 280)
  }
  //testo 8
  else if (soldi >= 58741000000 && soldi <= 79256000000) {
    text("58.741.000.000$ ≃ Luxembourg's GDP (106th out 191)", 100, height / 2 + 280)
  }
  //testo 9
  else if (soldi >= 79256000000 && soldi <= 101458000000) {
    text("79.256.000.000$ ≃ Costa Rica's GDP (92nd out 191)", 100, height / 2 + 280)
  }
  //testo 10
  else if (soldi >= 101458000000 && soldi <= 107831000000) {
    text("101.458.000.000$ ≃ Serbia's GDP (82nd out 191)", 100, height / 2 + 280)
  }
  //testo 11
  else if (soldi >= 107831000000 && soldi <= 120786000000) {
    text("107.831.000.000$ ≃ Syria's GDP (81st out 191)", 100, height / 2 + 280)
  }
  //testo 12
  else if (soldi >= 120786000000 && soldi <= 132339000000) {
    text("120.786.000.000$ ≃ Ghana's GDP (80th out 191)", 100, height / 2 + 280)
  }
  //testo 13
  else if (soldi >= 132339000000 && soldi <= 725939370000) {
    text("132.339.000.000$ ≃ Guatemala's GDP (77th out 191)", 100, height / 2 + 280)
  }
  //testo 14
  else if (soldi >= 725939370000) {
    text("736.320.000.000$ ≃ South Africa's GDP (30th out 191)", 100, height / 2 + 280)
  }
pop();

}