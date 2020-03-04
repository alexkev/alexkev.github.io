import jump from './jump.js';
// ARROW  JUMP LOGIC

var targets = ['.container', '.bio', '.portfolio', '.experience', '.contact'];

var count = 0;

var buttonUp = document.getElementById('button-up');
var buttonDown = document.getElementById('button-down');

buttonUp.addEventListener('click', () => {
	if (count < 0) {
		count = 0;
	} else {
		count -= 1;
	}
	jump(targets[count]);
});

buttonDown.addEventListener('click', () => {
	if (count <= 0) {
		count = 1;
	} else if (count === 4) {
		count = 0;
	} else {
		count += 1;
	}
	jump(targets[count]);
});

// NAV JUMP LOGIC

var home = document.getElementById('home');
var bio = document.getElementById('bio');
var portfolio = document.getElementById('portfolio');
var experience = document.getElementById('experience');
var contact = document.getElementById('contact');

let homeJump = () => {
	jump('.container');
	count = 0;
	rmActive();
	home.classList.add('active');
};

home.addEventListener('click', () => {
	location.hash = '#/home';
});

let bioJump = () => {
	jump('.bio');
	count = 1;
	rmActive();
	bio.classList.add('active');
};

bio.addEventListener('click', () => {
	location.hash = '#/bio';
});

let portfolioJump = () => {
	jump('.portfolio');
	count = 2;
	rmActive();
	portfolio.classList.add('active');
};
portfolio.addEventListener('click', () => {
	location.hash = '#/portfolio';
});

let experienceJump = () => {
	jump('.experience');
	count = 3;
	rmActive();
	experience.classList.add('active');
};
experience.addEventListener('click', () => {
	location.hash = '#/experience';
});

let contactJump = () => {
	jump('.contact');
	count = 4;
	rmActive();
	contact.classList.add('active');
};
contact.addEventListener('click', () => {
	location.hash = '#/contact';
});

// NAV BAR SElECTOR
function rmActive() {
	home.classList.remove('active');
	bio.classList.remove('active');
	portfolio.classList.remove('active');
	experience.classList.remove('active');
	contact.classList.remove('active');
}

function locationHashChanged() {
	if (location.hash === '#/home') {
		homeJump();
	} else if (location.hash === '#/bio') {
		bioJump();
	} else if (location.hash === '#/portfolio') {
		portfolioJump();
	} else if (location.hash === '#/experience') {
		experienceJump();
	} else if (location.hash === '#/contact-me') {
		contactJump();
	}
}

window.onhashchange = locationHashChanged;
