


let currentkey = 'a';
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(227, 181, 5);
    smooth();
    bgc = color(227, 181, 5);
    gkcount = 20;
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}


 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */


  let currentkey = key;

switch(currentkey) {
case 'a':
  console.log("a");  // black line
 // let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'b':
  console.log("b");  // red line
  jlsplatter2(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'c':
  console.log("c");  // green line
  jlsplooter(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'd':
  console.log("d");  // fat teal line
  jlsplatter(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'e':
  console.log("erase");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case 'h':
    console.log("h");
    jlhighlight(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case 'g':
    console.log("g");  // make your first brush here!!
  

 break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(8);
  stroke(4, 75, 127);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function jlsplatter2( kcount, lx, ly,) {
  noStroke();
 fill(random(97, 3, 69),180,130,400)
  let temp = random(80,90)
  rect(lx,ly,temp,temp)

}

function jlsplatter( kcount, lx, ly,) {
  noStroke();
  fill(random(149, 25, 12),20,60,300)
  let temp = random(40,50)
  rect(lx,ly,temp,temp)
}

function jlsplooter( kcount, lx, ly,) {
  noStroke();
  fill(random(16, 126, 125),100,160,250)
  let temp = random(80,50)
  ellipse(lx,ly,temp,temp)
}

function jlhighlight (kcount, lx, ly,  px, py) {
  noStroke();
  fill(random(227, 181, 5),250,200,450)
  let temp = random(80,50)
  ellipse(lx,ly,temp,temp)
}


function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(227, 181, 5);
  } else if (key == 's' || key == 'S') {
    saveFrames('myreallycooldrawing', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

