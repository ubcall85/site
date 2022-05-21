/*
 const thread_sleep = mseconds => new Promise( resolve => setTimeout( resolve, mseconds ) ); // Шаманский прикол, на бизнес встрече по асинхронным потокам объясню
 button.onclick = async function() { // async обязательно для активации асинхронных потоков
  element_outside.style.transform = 'rotateY(90deg)';
  await thread_sleep(1000); // Заставляет поток затормозить на 1 секунду (1000 милисекунд), await обязательно
  element_inside.style.transform = 'rotate(180deg)'; // Изначально у него rotate(90deg);
}
*/

const amount = document.querySelector('input#cifra');


function getRandomCard (min, max) {  
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function vizov() {
    const IMG = document.createElement('img');
    let source = `../carti/taro/${getRandomCard(1, 78)}.jpg`;
    IMG.src = source;
    document.querySelector('.vivodCart').appendChild(IMG);
}   

function vivod(){
    for(let i = 0;amount.value != i;i++){
        vizov();
    }
}

function clear(){
    for(let i = 0;amount.value != i;i++){
        document.querySelector('img').remove('img');
    }
}