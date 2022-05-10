// # Config 
const particles_per_scene	= 125;	// How much particles scene can handle
const velocity_multiplier	= 1;	// Particles velocity
const affection_quanity		= 1;	// How much mouse movement affects particles velocity
const affection_dist		= 150;	// At what distance mouse starts repulsing particles

let mx = 0;
let my = 0;

let canvas	= document.querySelector('canvas');
let ctx 	= canvas.getContext('2d');

document.body.onmousemove = function(event) {
	mx = event.clientX;
	my = event.clientY;
}

canvas.width	= window.innerWidth;
canvas.height	= window.innerHeight;

ctx.globalAlpha = 1;

const circles = [];

const update_heap = ( ) => {
	if ( circles.length < 100 ) {	// Prevent scene overloading;
		const particle = {
			born_at: 	Date.now(),
			life_Time: 	5 + Math.random() * 10 * 1000, // Seconds
			x: 		Math.random() * canvas.width, 
			y: 		Math.random() * canvas.height,
			ovel_x: 		-1 + Math.random() * 2, 
			ovel_y: 		-1 + Math.random() * 2, 
			radius: 	2 + Math.random() * 2
		};

		particle.vel_x = particle.ovel_x
		particle.vel_y = particle.ovel_y

		circles.push( particle );
	}

	// Clean heap;
	circles.forEach( (particle, heap_idx) => {
		if ( Date.now() > particle.born_at + particle.life_Time ) {
			circles.splice(heap_idx, 1); // garbage collecting proc;
		}
	});
}

for (var i = 0; i < 100; i++) update_heap();
setInterval( update_heap, 10 );

const d_dist = (x, y, x1, y1) => Math.sqrt( (x1 - x)**2 + (y1 - y)**2 );

const frame_Descriptor = ( ) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let particle of circles) {
		if ( particle == undefined ) continue;

		let dist = d_dist(particle.x, particle.y, mx, my);

		particle.x += particle.vel_x * 2;
		particle.y += particle.vel_y * 2;

		particle.vel_x = particle.vel_x + (particle.ovel_x - particle.vel_x) * 0.1
		particle.vel_y = particle.vel_y + (particle.ovel_y - particle.vel_y) * 0.1

		if ( dist < affection_dist ) {
			let rel_q = 1 - dist / affection_dist
			particle.vel_x += (particle.x - mx) / d_dist(particle.x, 0, mx, 0) * (rel_q * affection_quanity);
			particle.vel_y += (particle.y - my) / d_dist(0, particle.y, 0, my) * (rel_q * affection_quanity);
		}

		let sine_fill = Math.cos( ( (Date.now() - particle.born_at) / particle.life_Time ) * Math.PI );
		//console.log( (Date.now() / (particle.born_at + particle.life_Time)) * Math.PI );
		ctx.fillStyle = "rgba(255, 255, 255, " + sine_fill + ")";
		ctx.beginPath();
		ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
		ctx.fill();

		for (let neigh of circles) {
			if ( d_dist( neigh.x, neigh.y, particle.x, particle.y) < 200 ) {
				let opacity = 2 * (d_dist(neigh.x,neigh.y,particle.x,particle.y) / 200);
				let alpha = 1-(d_dist(neigh.x, neigh.y, particle.x, particle.y) / 200);
				ctx.strokeStyle = "rgba(255, 255, 255, " + Math.floor(alpha * 10) / 10 + ')';
				ctx.fillStyle = ctx.strokeStyle;
				ctx.lineWidth = opacity;
				
				ctx.beginPath();
					ctx.moveTo(neigh.x, neigh.y);
					ctx.lineTo(particle.x, particle.y);
				ctx.stroke();
			}
		}
	}
	window.requestAnimationFrame( frame_Descriptor );
};

frame_Descriptor(); // Initial call
