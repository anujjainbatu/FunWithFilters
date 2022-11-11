var img = null;

function loadImage() {
  var file = document.getElementById("inputfile");
  var canvas = document.getElementById("can");
  img = new SimpleImage(file);
  img.drawTo(can);
}

function makeGray() {
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for (var pixel of img.values()) {
    var ave = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    pixel.setGreen(ave);
    pixel.setRed(ave);
    pixel.setBlue(ave);
  }
  img.drawTo(can);
}

function makeRed() {
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for (var pixel of img.values()) {
    pixel.setRed(255);
  }
  img.drawTo(can);
}

function makeGreen() {
    if (img == null || !img.complete()){
      alert("Image is not Loaded");
      return;
    }
    for (var pixel of img.values()) {
      pixel.setGreen(255);
    }
    img.drawTo(can);
  }
  
  function makeBlue() {
    if (img == null || !img.complete()){
      alert("Image is not Loaded");
      return;
    }
    for (var pixel of img.values()) {
      pixel.setBlue(255);
    }
    img.drawTo(can);
  }

function doReset() {
  var org = document.getElementById("inputfile");
  img = new SimpleImage(org);
  img.drawTo(can);
}

function makeRDH() {
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for (var pixel of img.values()) {
    var ave = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    if (ave < 128) {
      pixel.setGreen(0);
      pixel.setRed(2*ave);
      pixel.setBlue(0);
    }else {
      pixel.setGreen(2*ave-255);
      pixel.setRed(255);
      pixel.setBlue(2*ave-255);
    }
  }
  img.drawTo(can);
}

function makePride() {
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for (var pixel of img.values()){
    var y = img.getHeight()/7 ;
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    if (pixel.getY()<y) {
    if (avg <128) {
     pixel.setRed(2*avg);
     pixel.setGreen(0);
     pixel.setBlue(0);
    }
    else {
     pixel.setRed(255);
     pixel.setGreen(2*avg-255);
     pixel.setBlue(2*avg-255);
     }
  }
 else if (pixel.getY()<2*y) {
    if (avg <128) {
     pixel.setRed(2*avg);
     pixel.setGreen(0.8*avg);
     pixel.setBlue(0);
    }
    else {
     pixel.setRed(255);
     pixel.setGreen(1.2*avg-51);
     pixel.setBlue(2*avg-255);
     }
  }
     else if (pixel.getY() <3*y) {
       if (avg <128) {
     pixel.setRed(2*avg);
     pixel.setGreen(2*avg);
     pixel.setBlue(0);
    }
    else {
     pixel.setRed(255);
     pixel.setGreen(255);
     pixel.setBlue(2*avg-255);
     }    
    }
     else if (pixel.getY() <4*y) {
       if (avg <128) {
     pixel.setRed(0);
     pixel.setGreen(2*avg);
     pixel.setBlue(0);
    }
    else {
     pixel.setRed(2*avg-255);
     pixel.setGreen(255);
     pixel.setBlue(2*avg-255);
     }    
    }
    else if (pixel.getY() <5*y) {
       if (avg <128) {
     pixel.setRed(0);
     pixel.setGreen(0);
     pixel.setBlue(2*avg);
    }
    else {
     pixel.setRed(2*avg-255);
     pixel.setGreen(2*avg-255);
     pixel.setBlue(255);
     }    
    }
     else if (pixel.getY() <6*y) {
       if (avg <128) {
     pixel.setRed(0.8*avg);
     pixel.setGreen(0);
     pixel.setBlue(2*avg);
    }
    else {
     pixel.setRed(1.2*avg-51);
     pixel.setGreen(2*avg-255);
     pixel.setBlue(255);
     }    
    }
     else if (pixel.getY() <7*y) {
       if (avg <128) {
     pixel.setRed(1.6*avg);
     pixel.setGreen(0);
     pixel.setBlue(1.6*avg);
    }
    else {
     pixel.setRed(0.4*avg+153);
     pixel.setGreen(2*avg-255);
     pixel.setBlue(0.4*avg+153);
     }    
    }
  }
  img.drawTo(can);
}

function makeBlur(x, y) {
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  var newImg = new SimpleImage(img.getWidth(),img.getHeight());
  for (var pixel of img.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5) {
      newImg.setPixel(x, y, pixel);
    }
    else {
      var random = Math.floor(Math.random()*23 - 11);
      var newX = random + x;
      var newY = random + y;
      if (newX > 0 && newX <= img.getWidth()-1) {
        if (newY > 0 && newY <= img.getHeight()-1) {
          var newPixel = img.getPixel(newX, newY);
          newImg.setPixel(x, y, newPixel);
        }
      }
    }
  }
  newImg.drawTo(can);
}