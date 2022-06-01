function onScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll');
  } else {
    document.getElementById('navigation').classList.remove('scroll');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services .card,
#about,
#about header,
#about .content`);
