function setup() {
  createCanvas(720, 400);

  background(220);
  
  translate(140,0);
  
  let d = 90;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;

  
  stroke(0);
  line(p2,p2,p3,p2);
  line(p1,p3,p2,p3);
  line(p2,p2,p1,p3);
  line(p3,p2,p2,p3);
}

//Irvine, California - closest shape I could make of aerial image