/*
 const thread_sleep = mseconds => new Promise( resolve => setTimeout( resolve, mseconds ) ); // Шаманский прикол, на бизнес встрече по асинхронным потокам объясню
 button.onclick = async function() { // async обязательно для активации асинхронных потоков
  element_outside.style.transform = 'rotateY(90deg)';
  await thread_sleep(1000); // Заставляет поток затормозить на 1 секунду (1000 милисекунд), await обязательно
  element_inside.style.transform = 'rotate(180deg)'; // Изначально у него rotate(90deg);
}
*/

const amount = document.querySelector('input#cifra');
const a = amount.value;

function getRandomCard (min, max) {  
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function vizov() {
    const IMG = document.createElement('img');
    let source = `../assets/taro/${getRandomCard(1, 78)}.jpg`;
    IMG.src = source;
    document.querySelector('.vivodCart').appendChild(IMG);
}   

function vivod(){
    if(amount.value > 7){
        alert('ДУРА, СДЕЛАЙ КАРТ МЕНЬШЕ');
    } else if(amount.value-0 == amount.value){
        alert('ДУРА, ХУЛИ ТЫ БУКВЫ ПИШЕШЬ? ПИШИ ЦИФРЫ ОТ 1 ДО 7');
    }else{
        for(let i = 0;amount.value != i;i++){vizov();
    }
}

function clear(){
    for(let i = 0;amount.value != i;i++){
        document.querySelector('img').remove('img');
    }
}
