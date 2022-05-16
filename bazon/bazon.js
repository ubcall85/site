const mat = "Твоя мать шлюха";
const priemniy = "Ты приемный";

const user = navigator.platform;
const huy = document.querySelector('button#konechnoe');

huy.onclick = () => { if (user.indexOf('Mac') !== -1){
    alert('Твоя мать шлюха. Я сам проверял.')
}else {
    alert('Твой отце не твой отце, ты приемный.')
}
};

function is_all_checked() {
    
}

is_all_checked();