function ajax( dest, payload_obj ) {
    return new Promise( function(resolve) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if ( this.readyState == 4 ) {
                if ( this.status == 200 ) {
                    resolve( this.responseText );
                }
            }
        }

        let keys = Object.keys( payload_obj );
        let serialized_chunks = [];
        for ( let key of keys ) {
            if (!payload_obj[key]) { continue };
            serialized_chunks.push( `${key}=${payload_obj[key]}` );
        }

        xhr.open( 'POST', dest, false );
        xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        xhr.send( serialized_chunks.join('&') );
    } );
}

async function get_all_in_category( cat ) {
    let data = await ajax( '/api/get.php', { category: cat } );
    return JSON.parse(data);
};