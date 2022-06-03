const layout = document.querySelector( '.layout' );
const slides = layout.children;

document.body.onload = () => setTimeout( _ => {window.scrollTo(0, 0); console.log('reset');}, 10);

let shift_idx = 0;

function rebuild_layout() {	
	let shift = 0;
	for (let element of slides) {
		element.style.left = window.innerWidth * (shift++) + "px";
		element.onshow = new Function( element.getAttribute( 'ce-show' ) );
	}

	window.scrollTo( shift_idx * window.innerWidth, 0 );
}

rebuild_layout();

window.onresize = rebuild_layout;

let decay = false;
function show_slide( idx ) {
	window.scrollTo( {
		left:		slides[ idx ].offsetLeft,
		behavior:	'smooth'
	} );
	
	slides[idx].onshow();

	decay = true;
	setTimeout( _ => decay = false, 1500 );
}

const SKIP_TRIGGERS = [ 32 /* Space */ ];


document.body.addEventListener( 'keypress', ev => {

	if ( !decay && SKIP_TRIGGERS.indexOf( ev.keyCode ) !== -1 && shift_idx < slides.length - 1 ) {
		ev.preventDefault();
		show_slide(++shift_idx);
	}

}, false );
