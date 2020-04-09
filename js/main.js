import anime from 'animejs/lib/anime.es.js';

const elements = {
	tunnel: '.tunnel circle',
	conveyor: '.conveyor-belt .conveyor',
	zigzag: '.zigzag path',
	wave: '.wave path',
}

// tunnel
anime({
	targets: elements.tunnel,
	scale: 1.1,
	loop: true,
	direction: 'alternate',
	duration: 400,
	easing: 'easeInOutCubic',
	delay: anime.stagger(80),
});

// conveyor belt
anime({
	targets: elements.conveyor,
	loop: true,
	duration: 1500,
	easing: 'linear',
	translateX: '-50%',
})

// zigzag
anime({
	targets: elements.zigzag,
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 1500,
	easing: 'easeInOutSine',
	direction: 'alternate',
	loop: true,
	delay: 800,
})

// wave
anime({
	targets: elements.wave,
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 2000,
	easing: 'easeInOutCubic',
	direction: 'alternate',
	loop: true,
	delay: 0,
})
