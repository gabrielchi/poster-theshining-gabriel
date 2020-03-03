function setup() {
    createCanvas(580, 660);
  }
  
  function draw() {
    background("#FFDF00");
    noStroke();
  
  //sub font
  fill("#252525");
  textFont("Helvetica");
  textStyle(BOLD);
  textSize(25);
  text("stanley", 35, 35);
  text("kubrick's", 40, 60);
  
  text("jack", 40, 590);
  text("nicholson", 35, 615);

  //shapes
  fill("#252525");
  rect(20, 120, 250, 400);

  fill("#FFDF00");
  triangle(270, 470, 230, 520, 147 ,370);
  rect(230, 470, 50, 50);
  
  
  }