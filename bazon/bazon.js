const mat = "Твоя мать шлюха";
const priemniy = "Ты приемный";

const userAgent = navigator.userAgent;
const huy = document.querySelector('button#konechnoe');

huy.onclick = () => {if (userAgent.indexOf('Safari')){
    alert('Твоя мать шлюха. Я сам проверял.')
}else {
    alert('Твой отце не твой отце, ты приемный.')
}
};

function is_all_checked() {
    
}

is_all_checked();