function SLIDE_0( e ) {
	
}

function SLIDE_1( e ) {
	if (e.children[0].className == "page-center") e = e.children[0];
	let children = e.children;
	if (!children) return;

	let i = 0;
	for (let c of children) {
		i++;
		c.style.opacity = 0;
		setTimeout( _ => c.style.opacity = 1, i * 1500 );
	}

	let img = document.querySelector('#term');
	img.style.filter = "blur(250px)";
	img.style.opacity = "0";

	img.style.position = "absolute";
	img.style.left = "50%";
	img.style.top = "50%";
	img.style.transform = "translate(-50%, -50%)";

	let promo = document.querySelector('#promo');
	promo.style.opacity = '0';
	promo.style.filter = 'blur(250px)';

	function nextStep2() {
		img.style.left = "10px";
		img.style.transform = "translate(0, -50%) scale(0.5)";

		setTimeout(() => {promo.style.opacity = '1'; promo.style.filter = "blur(0px)";}, 100);
	}

	function nextStep1() {
		img.style.transform = "translate(-50%, -50%) scale(0.5)";

		setTimeout( nextStep2, 1000 );
	}

	function showPics() {
		let slide = e.parentElement;
		img.style.filter = "blur(0px)";
		img.style.opacity = "1";

		setTimeout( nextStep1, 1000 );
	}

	setTimeout( _ => {e.style.opacity = 0; showPics()}, 7000 );

}

let ui = document.querySelector('#ui');
ui.style.position = "absolute";
ui.style.right = "150px";
ui.style.top = "-500px";
ui.style.opacity = "0";
ui.style.width = "300px";


const uniq = document.querySelector( '#uniq' );
uniq.style.transform = "skewX(50deg) scale(0.1)";
uniq.style.filter = "blur(250px)";
uniq.style.opacity = "0";

const uruniq = document.querySelector( '#uruniq' );
uruniq.style.opacity = "0";
uruniq.style.filter = "blur(250px)";
uruniq.style.top = "150%";

function SLIDE_2( e ) {

	function nextStep2() {
		uniq.style.opacity = "0";
		ui.style.opacity = "1";
		ui.style.top = "50%";
		ui.style.transform = "translate(0, -50%)";

		uruniq.style.top = "50%";
		uruniq.style.filter = ""
		uruniq.style.opacity = "1";
	}

	function nextStep1() {
		uniq.style.transform = "";
		uniq.style.filter = "";
		uniq.style.opacity = "1";

		setTimeout( nextStep2, 5500 );
	}

	setTimeout( nextStep1, 2000 );
}