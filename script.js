'use strict';

// MODAL SHOW AND CLOSE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.form-btn');
const btnCloseModal = document.querySelector('.close-modal');
const btnModalBtn = document.querySelector('.modal-btn');
const body = document.querySelector('body');
const attrBtn = document.querySelector('.attr-btn');
const noCharWarn = document.querySelector('.no-char-warn');
const noAtWarn = document.querySelector('.no-at-warn');
const heroEmailInput = document.querySelector('.hero-email');

// MOBILE NAVIGATION
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
  console.log('fuck');
});

const openModal = function () {
  // if (heroEmail.value.contains('@')) {
  //   console.log(heroEmail);
  // }

  const heroEmail = document.querySelector('.hero-email').value;
  if (heroEmail === '') {
    attrBtn.removeAttribute('href');
    noCharWarn.classList.remove('hidden');
    noAtWarn.classList.add('hidden');
    heroEmailInput.style.borderColor = 'red';
    // console.log(noCharWarn);
  }

  for (let i = 0; i < heroEmail.length; i++) {
    if (heroEmail[i] === '@') {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      body.classList.add('no-vert-scroll');
      attrBtn.setAttribute('href', '#');
      heroEmailInput.style.borderColor = '#ababab';
    } else if (!heroEmail.includes('@')) {
      attrBtn.removeAttribute('href');
      noAtWarn.classList.remove('hidden');
      noCharWarn.classList.add('hidden');
      heroEmailInput.style.borderColor = 'red';
    }
  }
  document.querySelector('.hero-email').value = '';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('no-vert-scroll');
  attrBtn.setAttribute('href', '#');
  noCharWarn.classList.add('hidden');
  noAtWarn.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    {
      closeModal();
    }
  }
});

// SCROLL BEHAVIOUR
const allLinks = document.querySelectorAll('a:link');

//this selects each of the links and call the link
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href == '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scrolls to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }

    // Closes mobile Navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});
