$('document').ready(function() {
  // Set options
  var speed = 500; // Fade speed
  var autoswitch = true; // Auto slider option
  var autoswitch_speed = 5000; // Auto slider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  // Switch to next slide
  function nextSlide() {
    $('.active').removeClass('active').addClass('oldActive');

    if ($('.oldActive').is(':last-child')) {
      $('.slide').first().addClass('active');
    }
    else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // Switch to previous slide
  function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');

    if ($('.oldActive').is(':first-child')) {
      $('.slide').last().addClass('active');
    }
    else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  //Next handler
  $('#next').on('click', nextSlide);

  $('#prev').on('click', prevSlide);

  // Auto slider handler
  if (autoswitch == true) {
    setInterval(nextSlide, autoswitch_speed);
  }
});































