function c( className, parent, override_tag ) {
	let e = document.createElement( override_tag ?? 'div' );
	e.className = className;

	(parent ?? document.body).appendChild( e );
	return e;
}

/* alert( @string { message } ) detouring */
function alert( message ) {
	let body = c( 'alert-body' );
	setTimeout(_ => body.className += ' visible', 0);

	let h3 	 = c( null, body, 'h3' );
	h3.innerText = 'Уведомление';

	let text = c( null, body, 'span' );
	text.innerText = message;

	let button = c( null, body, 'button' );
	button.innerText = 'Ок'
	button.onclick = function() {
		body.className = 'alert-body slide';
		setTimeout( _ => body.remove(), 400 )
	}
}
