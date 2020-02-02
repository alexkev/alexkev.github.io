import jump from './jump.js';
// ARROW  JUMP LOGIC

var targets = ['.container', '.bio', '.profolio', '.experience', '.contact'];

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

	console.log(count);
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

	console.log(count);
});

// NAV JUMP LOGIC

var home = document.getElementById('home');
var bio = document.getElementById('bio');
var profolio = document.getElementById('profolio');
var experience = document.getElementById('experience');
var contact = document.getElementById('contact');

home.addEventListener('click', () => {
	jump('.container');
	count = 0;
	rmActive();
	home.classList.add('active');
});

bio.addEventListener('click', () => {
	jump('.bio');
	count = 1;
	rmActive();
	bio.classList.add('active');
});

profolio.addEventListener('click', () => {
	jump('.profolio');
	count = 2;
	rmActive();
	profolio.classList.add('active');
});

experience.addEventListener('click', () => {
	jump('.experience');
	count = 3;
	rmActive();
	experience.classList.add('active');
});

contact.addEventListener('click', () => {
	jump('.contact');
	console.log('something happened');
	count = 4;
	rmActive();
	contact.classList.add('active');
});

// NAV BAR SElECTOR
function rmActive() {
	home.classList.remove('active');
	bio.classList.remove('active');
	profolio.classList.remove('active');
	experience.classList.remove('active');
	contact.classList.remove('active');
}
