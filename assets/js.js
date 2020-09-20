    function myFunction() {
      var x = document.getElementById("mynavbar");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }

    function tutupmenu() {
      var x = document.getElementById("mymenu");
      var y = document.getElementById("mynavbar");
      if (y.className === "navbar responsive") {
        y.className = "navbar";
      } else {
        y.className = "navbar responsive";
      }
    }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}