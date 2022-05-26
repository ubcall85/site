/*
 const thread_sleep = mseconds => new Promise( resolve => setTimeout( resolve, mseconds ) ); // Шаманский прикол, на бизнес встрече по асинхронным потокам объясню
 button.onclick = async function() { // async обязательно для активации асинхронных потоков
  element_outside.style.transform = 'rotateY(90deg)';
  await thread_sleep(1000); // Заставляет поток затормозить на 1 секунду (1000 милисекунд), await обязательно
  element_inside.style.transform = 'rotate(180deg)'; // Изначально у него rotate(90deg);
}
*/

const arrPredict = ['Твоя мамаша дура ебаная',
                    'Твоя мать шлюха',
                    'Твой отец пидорас',
                    'Чекни мать',
                    'Кстати, ты приемный',
                    'Твой отец не твой отец',
                    'Твою мамашу ебуть 10 негров',
                    'Скоро ты сходишь в хуй',
                    'Твоя мать прекрасная женщина', 
                    'Твой отец транс',
                    'В свой жизни ты будешь ебать только свою руку',
                    'Ты долбаёб',
                    'Скоро тебя переебут лопатой',
                    'Вытащи мать из канавы',
                    'Поздравляю вы гений'];
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

function vizovButton(){
    const br = document.createElement('br');
    document.querySelector('.vivodCart').appendChild(br);

    const buttonCheck = document.createElement("button");
    buttonCheck.id = 'check';

    buttonCheck.innerText = "Проверить";
    buttonCheck.onclick = function(){
        alert(arrPredict[Math.floor(Math.random()*arrPredict.length)]);
    }

    document.querySelector('.vivodCart').appendChild(buttonCheck);

    const buttonClear = document.createElement("button");
    buttonClear.id = 'clear';

    buttonClear.innerText = "Заново";
    buttonClear.onclick = function(){
        const col = document.querySelectorAll('img');
        for (let c of col) {
            c.remove();
        }
        document.querySelector('input#cifra').value="";
        document.querySelector('br').remove();
        document.querySelectorAll('button').remove();
        alert('Введите новую цифру');
    }
    document.querySelector('.vivodCart').appendChild(buttonClear);

}

function is_int(v){
    return v - 0 == v;
}

function vivod(){
    if (is_int(amount.value) == false){
        alert('ДУРА, ХУЛИ ТЫ БУКВЫ ПИШЕШЬ? ПИШИ ЦИФРЫ ОТ 1 ДО 5');
    }else if(amount.value > 5){
        alert('ДУРА, СДЕЛАЙ КАРТ МЕНЬШЕ! ПИШИ ОТ 1 ДО 5');
    }else{
        for(let i = 0;amount.value != i;i++){vizov();
        }
    }
    vizovButton();
}

function clear(){
    for(let i = 0;amount.value != i;i++){
        document.querySelector('img').remove('img');
    }
}

function prediction(){

}
