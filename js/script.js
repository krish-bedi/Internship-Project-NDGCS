window.onload = function mainFunc() {
  var app = document.getElementById('typewriter');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('Calibrate Your Business')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Receive Professional Consulting')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Lead The Industry')
      .pauseFor(2500)
      .deleteChars(8)
      .typeString('World!')
      .pauseFor(2500)
      .start();
}

console.log("W = " + w);
console.log("H = " + h);
