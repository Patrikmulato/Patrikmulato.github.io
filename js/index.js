// Fade // 
$(document).ready(function () {
  $('div.hidden').fadeIn(2000).removeClass('hidden');
});

setTimeout(
function fade() {
  $('#welcome').fadeOut(1000);
  $('#welcome').fadeIn(1000);
  $('#tomy').fadeOut(1000);
  $('#tomy').fadeIn(1000);
  $('#webpage').fadeOut(1000);
  $('#webpage').fadeIn(1000);
},6000);



// Text change // 
var i = 0;
var first = document.getElementById("welcome");
var second = document.getElementById("tomy");
var third = document.getElementById("webpage");
setInterval(change , 7000);

function change(){
  first.innerHTML = "<p id='feel'>Feel</p>";
  second.innerHTML = "<p id='freeto'>Free to</p>";
  third.innerHTML = "<p id='looka'>Look Around</p>";
  i++
  if(i => text.length){
    i=0;
  }
}

// Scroll About//
$(document).ready(function(){
  $("#about").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-185
      }, 600, function(){
        window.location.hash = hash-185;
      });
    } 
  });
});

// Scroll Skills//
$(document).ready(function(){
  $("#skill").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-70
      }, 600, function(){
        window.location.hash = hash-70;
      });
    } 
  });
});

// Scroll Portfolio//
$(document).ready(function(){
  $("#port").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-70
      }, 600, function(){
        window.location.hash = hash-70;
      });
    } 
  });
});

// Scroll Home//
$(document).ready(function(){
  $("#home").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
        window.location.hash = hash;
      });
    } 
  });
});

// Carousel //
$('.carousel').carousel({
  interval: 4000
})

