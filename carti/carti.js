/*
 const thread_sleep = mseconds => new Promise( resolve => setTimeout( resolve, mseconds ) ); // Шаманский прикол, на бизнес встрече по асинхронным потокам объясню
 button.onclick = async function() { // async обязательно для активации асинхронных потоков
  element_outside.style.transform = 'rotateY(90deg)';
  await thread_sleep(1000); // Заставляет поток затормозить на 1 секунду (1000 милисекунд), await обязательно
  element_inside.style.transform = 'rotate(180deg)'; // Изначально у него rotate(90deg);
}
*/

const amount = document.querySelector('#cifra');
const col = amount;

function getRandomCard (min, max) {  
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function vizov() {
    const IMG = document.createElement('img');
    let source = `../carti/taro/${getRandomCard(1, 78)}.jpg`;
    IMG.src = source;
/*    if (document.querySelector('img') != source){
        document.querySelector('.vivodCart').appendChild(IMG);
    } else{ vizov()}
*/
    document.querySelector('.vivodCart').appendChild(IMG);
}   

function vivod(){
    for(let i = 0; col != i;i++){
        vizov()
    }
}
