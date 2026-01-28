let s = function(p){}
new p5(s);

let cats = [];

function preload(){
  catImg = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  catPower();
}

function draw() {
  background(250,200,200);
  image(catImg, mouseX, mouseY, 50, 50);
  updateAndDrawCats();
}

function mousePressed() {
  let cat1 = createCat();
  cat1.x = mouseX;
  cat1.y = mouseY;
  cats.push(cat1);
}

function updateAndDrawCats(){
  for (let i = cats.length - 1; i >= 0; i--){
    let cat = cats[i];
    drawCat(cat);
    cat.lifespan -= 1;

    if (cat.lifespan <= 0){
      cats.splice(i, 1);
    }
  }
}

function catPower(){
  for(let i = 0; i < 20; i++){
    let cat1 = createCat();
    append(cats, cat1);
  }
}

function createCat(){
  let cat = {
    x: random(20, windowWidth - 20),
    y: random(20, windowHeight - 20),
    size: random(20, 75),
    lifespan: random(255, 300)
  };
  return cat;
}

function drawCat(cat){
  image(catImg, cat.x, cat.y, cat.size, cat.size);
  cat.size = cat.size * 0.99;
}
