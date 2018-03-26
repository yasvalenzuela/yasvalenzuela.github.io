$(document).ready(() => {
  let title = `
      <h1 class="title text-center">Yasna Valenzuela</h1>
    `
    $('#name').append(title);
  let subtitle = `
      <h3 class="subtitle text-center">Front End Developer</h3>
    `
    $('#name').append(subtitle);
  let about = `
      <h2 class="aboutMe">ABOUT ME</h2>
      <p class="description">Hi, my name is Yasna Valenzuela, I'm 26 years old.
          <br>I am Front-end developer and engineer in risk prevention, quality and environment.
          <br>I love music, photography, art, soccer and code.
          <br>I consider myself a responsible, dedicated, curious, creative person, capable of working as a team and under pressure.</p>
    `
    $('#about').append(about);
  let like = `
    <div class="col-md-3 col-xs-3">
      <img src="asserts/img/headphones.png" alt="" id="headphone">
    </div>
    <div class="col-md-3 col-xs-3">
      <img src="asserts/img/laptop.png" alt="" id="laptop">
    </div>
    <div class="col-md-3 col-xs-3">
      <img src="asserts/img/camera.png" alt="" id="camera">
    </div>
    <div class="col-md-3 col-xs-3">
      <img src="asserts/img/brush.png" alt="" id"brush">
    </div>
    `
    $('#about').append(like);
  let photo = `
    <img src="asserts/img/image.png" alt="" id="photo">
    `
    $('#photoMe').append(photo);
  let skillOne = `
    <div class="col-md-2 col-xs-3">
      <i class="devicon-html5-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-css3-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-javascript-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-jquery-plain skillsLogo"></i>
    </div>
    `
    $('#skillOne').append(skillOne);
  let skillTwo = `
    <div class="col-md-2 col-xs-3">
      <i class="devicon-nodejs-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-sass-original skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-bootstrap-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-3">
      <i class="devicon-photoshop-plain skillsLogo"></i>
    </div>
    `
    $('#skillTwo').append(skillTwo);
  let skillThree = `
    <div class="col-md-2 col-xs-2">
      <i class="devicon-github-plain skillsLogo"></i>
    </div>
    <div class="col-md-2 col-xs-2">
      <i class="devicon-git-plain skillsLogo"></i>
    </div>
  `
  $('#skillThree').append(skillThree);



  // init controller
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: '.title'
    })
    .setClassToggle('.title', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.subtitle'
    })
    .setClassToggle('.subtitle', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.aboutMe'
    })
    .setClassToggle('.aboutMe', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.description'
    })
    .setClassToggle('.description', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#headphone'
    })
    .setClassToggle('#headphone', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#laptop'
    })
    .setClassToggle('#laptop', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#camera'
    })
    .setClassToggle('#camera', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#brush'
    })
    .setClassToggle('#brush', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#photo'
    })
    .setClassToggle('#photo', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#skillOne'
    })
    .setClassToggle('#skillOne', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#skillTwo'
    })
    .setClassToggle('#skillTwo', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#skillThree'
    })
    .setClassToggle('#skillThree', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.workOne'
    })
    .setClassToggle('.workOne', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.workTwo'
    })
    .setClassToggle('.workTwo', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.workThree'
    })
    .setClassToggle('.workThree', 'fade-in')
    .addTo(controller);
/*
  new ScrollMagic.Scene({
      triggerElement: '.mail'
    })
    .setClassToggle('.mail', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.linkedin'
    })
    .setClassToggle('.linkedin', 'fade-in')
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.github'
    })
    .setClassToggle('.github', 'fade-in')
    .addTo(controller);
*/
});// fin de document ready





/*funcion scroll menu*/
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
  }
});

/*
  // botón para subir
var btn = $('#top');
  btn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  })
*/

