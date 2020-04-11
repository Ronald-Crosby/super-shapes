import anime from 'animejs/lib/anime.es.js';

const elements = {
	tunnel: '.tunnel circle',
	conveyor: '.conveyor-belt .conveyor',
	zigzag: '.zigzag path',
	wave: '.wave path',
	crosses: '.crosses',
	squares: '.squares',
	dots: '.dots',
	boxes: '.boxes',
	boxTunnel: '.boxTunnel'
}

const colors = ['#FFF636', '#FC3135', '#CB89FC', '#77EBFD']

// selects the first child of an element and duplicates it a given number of times
const duplicateHTML = (el, quantity) => {
	const elParent = document.querySelector(el)
	const elArray = new Array(quantity).fill(elParent.innerHTML)

	elParent.innerHTML = elArray.join('')
}

// Box Tunnel
duplicateHTML(elements.boxTunnel, 6)

const boxTunnelElements = document.querySelectorAll(`${elements.boxTunnel} .boxTunnelEl`)

boxTunnelElements.forEach((box, i) => {
	const val = (i * 25) + 25
	box.setAttribute('width', `${val}%`)
	box.setAttribute('height', `${val}%`)
	box.style.transform = 'translate(-50%, -50%)'
})

anime({
	targets: `${elements.boxTunnel} rect`,
	rotate: [45, 0, -45],
	delay: anime.stagger(50),
	loop: true,
	autoplay: true,
	direction: 'alternate',
	duration: 2000,
	easing: 'easeInOutSine'
})

// flashing boxes
duplicateHTML(elements.boxes, 4)

// apply the colours from the array
function applyColors() {
	document.querySelectorAll(`${elements.boxes} .box`).forEach((box, i) => {
		box.style.backgroundColor = colors[i]
	})
}

applyColors()

anime({
	targets: `${elements.boxes} .box`,
	backgroundColor: () => {
		const randomNum = Math.floor(Math.random() * Math.floor(colors.length));
		return colors[randomNum]
	},
	loop: true,
	easing: 'linear',
	autoplay: true,
	direction: 'alternate',
	duration: 500,
	delay: anime.stagger(500)
})

// dots
duplicateHTML(elements.dots, 20)

anime({
	targets: `${elements.dots} .dot`,
	scale: [0, 1],
	delay: anime.stagger(100),
	loop: true,
	easing: 'linear',
	direction: 'alternate',
	autoplay: true,
	duration: 250,
})

// squares
duplicateHTML(elements.squares, 40)

anime({
	targets: `${elements.squares} .square`,
	rotate: () => {
		return anime.random(0, 360)
	},
	duration: () => {
		return anime.random(500, 1500)
	},
	translateX: () => {
		return anime.random(0, 8)
	},
	loop: true,
	easing: 'easeInOutSine',
	direction: 'alternate',
	autoplay: true,
})

// crosses
duplicateHTML(elements.crosses, 10)

anime({
	targets: `${elements.crosses} path`,
	loop: true,
	duration: 1000,
	direction: 'alternate',
	easing: 'easeInOutSine',
	rotate: 360,
	delay: anime.stagger(90)
})

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
