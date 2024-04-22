/*
 Project 2 - Array of Objects
 Name: David duchimaza
 Comments: i used my sprite image from project 1 and decided to add it to this with comments
 */


/*** 
* Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
* Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
* Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var objects = new Array(20); // Array to hold objects

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  for(var i = 0; i < objects.length; i++) { // initialize array with objects
    objects[i] = new Cat(random(width), random(height)); // create new Cat object with random position
  }
}

function draw(){
  background(0, 200, 0); // green background
  for(var i = 0; i < objects.length; i++){
    objects[i].move(); // each time through the loop, move the next object in the array
    if(objects [i].left){ // if my object (the cat) is moving left it will...
      objects[i].displayleft(); // display my left aligned object
    } else { // if the object is not moving left (aka moving to the right) it will... 
      objects[i].displayright(); // display my right aligned object 
    }
  }
}

// Object constructor function
function Cat(tempX, tempY){ 
  this.x = tempX; // assign 1st argument to this.x 
  this.y = tempY; // assign 2nd argument to this.y
  this.angle = 0; // initialize angle for rotation
  this.speedX = random(-1, 1); // initialize speed in X direction
  this.speedY = random(-1, 1); // initialize speed in Y direction
  this.left; // designate "left" which will be used below
  if(this.speedX < 0){ // if my speed is negative (moving to the left)
    this.left = true; // be "left" aligned
  } else { // if moving to the right
    this.left = false; // be "right" aligned
  }

  this.move = function() {
    // Move the cat
    this.x += this.speedX; // update the x-coordinate
    // If the cat reaches the canvas edges, reverse direction
    if (this.x > width || this.x < 0) {
      this.speedX *= -1; // reverse X direction
      this.left = !this.left; // toggle direction
    }
    this.y += this.speedY; // update the y-coordinate
    if (this.y > height || this.y < 0) {
      this.speedY *= -1; // reverse Y direction
    }
  }

  this.displayleft = function(){ // my cat that will show when moving to the left 
    // define how the object will look
    push();
    translate(this.x, this.y); // center the drawing at the .x and .y properties of the object
    rotate(this.angle); // rotate the cat

    // Draw cat body
    fill(255, 128, 0); // Orange color
    ellipse(0, 0, 60, 40); // Cat's body

    // Draw cat head
    ellipse(-25, -15, 30, 30); // Cat's head
    fill(225); // Black color
    ellipse(-31, -20, 10, 10); // Left eye
    ellipse(-19, -20, 10, 10); // Right eye

    // Black pupil
    fill(0); //  Black color
    ellipse(-31, -20, 5, 9); // Left eye
    ellipse(-19, -20, 5, 9); // Right eye

    // Green inside part of the eye
    fill(0,150,0); 
    ellipse(-31, -20, 2,11); // Left eye
    ellipse(-19, -20, 2, 11); // Right eye

    // Draw nose
    fill(255, 192, 203); // Pink color
    triangle(-30, -13, -25,-8, -20, -13); // Nose (pink triangle)
  
    // Whiskers left side
    line(-35,-12, -30, -11);
    line(-35,-9, -30, -9);
    line(-35,-6, -30, -7);

    // Whiskers right side
    line(-20,-11, -15, -12);
    line(-20,-9, -15, -9);
    line(-20,-7, -15, -6);

    // Draw cat ears
    fill(255, 128, 0); // Orange color
    triangle(-40, -25, -50, -50, -30, -25); // Left ear
    triangle(-20, -25, -10, -40, 0, -25); // Right ear

    // Draw cat legs
    stroke(0); // Black color
    line(-20, 10, -30, 20); // Front left leg
    line(-20, 10, -10, 20); // Front right leg
    line(10, 10, 0, 20); // Rear left leg
    line(10, 10, 20, 20); // Rear right leg

    pop(); // Restore the transformation state
  }

  this.displayright = function(){ // my cat that will show when moving to the right 
    // define how the object will look
    push();
    translate(this.x, this.y); // center the drawing at the .x and .y properties of the object
    rotate(this.angle); // rotate the cat

    // Draw cat body
    fill(255, 128, 0); // Orange color
    ellipse(0, 0, 60, 40); // Cat's body

    // Draw cat head
    ellipse(-25, -15, 30, 30); // Cat's head
    fill(225); // Black color
    ellipse(-31, -20, 10, 10); // Left eye
    ellipse(-19, -20, 10, 10); // Right eye

    // Black pupil
    fill(0); //  Black color
    ellipse(-31, -20, 5, 9); // Left eye
    ellipse(-19, -20, 5, 9); // Right eye

    // Green inside part of the eye
    fill(0,150,0); 
    ellipse(-31, -20, 2,11); // Left eye
    ellipse(-19, -20, 2, 11); // Right eye

    // Draw nose
    fill(255, 192, 203); // Pink color
    triangle(-30, -13, -25,-8, -20, -13); // Nose (pink triangle)
  
    // Whiskers left side
    line(-35,-12, -30, -11);
    line(-35,-9, -30, -9);
    line(-35,-6, -30, -7);

    // Whiskers right side
    line(-20,-11, -15, -12);
    line(-20,-9, -15, -9);
    line(-20,-7, -15, -6);

    // Draw cat ears
    fill(255, 128, 0); // Orange color
    triangle(-40, -25, -50, -50, -30, -25); // Left ear
    triangle(-20, -25, -10, -40, 0, -25); // Right ear

    // Draw cat legs
    stroke(0); // Black color
    line(-20, 10, -30, 20); // Front left leg
    line(-20, 10, -10, 20); // Front right leg
    line(10, 10, 0, 20); // Rear left leg
    line(10, 10, 20, 20); // Rear right leg

    pop(); // Restore the transformation state
  }
} // end of Cat() constructor
