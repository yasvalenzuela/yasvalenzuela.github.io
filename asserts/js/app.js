
{
  setTimeout(() => document.body.classList.add('render'), 60);
  const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
  const total = navdemos.length;
  const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
  const navigate = (linkEl) => {
    document.body.classList.remove('render');
    document.body.addEventListener('transitionend', () => window.location = linkEl.href);
  };
  navdemos.forEach(link => link.addEventListener('click', (ev) => {
    ev.preventDefault();
    navigate(ev.target);
  }));
  document.addEventListener('keydown', (ev) => {
    const keyCode = ev.keyCode || ev.which;
    let linkEl;
    if ( keyCode === 37 ) {
      linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
    }
    else if ( keyCode === 39 ) {
      linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
    }
    else {
      return false;
    }
    navigate(linkEl);
  });
}

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

