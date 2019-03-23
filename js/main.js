// Preload Animation
$(document).ready(() => {
  $(".loader").fadeOut(2000);
  $(".preLoader")
    .delay(1500)
    .fadeOut(1000);
});

$(document).ready(() => {
  $(".cover").fadeIn(3100);
});

// Text 1 Fadeout
setTimeout(() => {
  $("#text1").fadeOut(1000);
  $("#text2").fadeOut(1000);
  $("#text3").fadeOut(1000);
}, 5000);

// Text 2 Fade-in
var lang = window.navigator.language;
var url = document.URL;

if (url.includes("/hu")) {
  setTimeout(() => {
    $("#text1")
      .text("Nézz")
      .fadeIn(1000);
    $("#text2")
      .text("körül")
      .fadeIn(1000);
    $("#text3")
      .text("Nyugodtan")
      .fadeIn(1000);
  }, 6000);
} else {
  setTimeout(() => {
    $("#text1")
      .text("Feel free")
      .fadeIn(1000);
    $("#text2")
      .text("to")
      .fadeIn(1000);
    $("#text3")
      .text("Look around")
      .fadeIn(1000);
  }, 6000);
}

// Scroll //
$(document).ready(() => {
  $('a[href^="#"]').on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 65
        },
        800, 
        () => {
          window.location.hash = hash - 65;
        }
      );
    }
  });
});


// Back Home
$("#return-to-top").click(() => {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    500
  );
});

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $("#return-to-top").show();
  } else {
    $("#return-to-top").hide();
  }
});
// Navbar Change
$(document).ready(() => {
  var scrollTop = 0;
  var coverHeight = 0;
  $(window).scroll(() => {
    scrollTop = $(window).scrollTop();
    coverHeight = $(".cover").height();
    if (scrollTop >= coverHeight) {
      $("#navigation")
        .addClass("scrolledNavbar container-fluid navbar-light")
        .removeClass("container navbar-dark");
    } else if (scrollTop < coverHeight) {
      $("#navigation")
        .removeClass("scrolledNavbar container-fluid navbar-light")
        .addClass("container navbar-dark");
    }
  });
});

// Carousel //
$(".carousel").carousel({
  interval: 4000
});
