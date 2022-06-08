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

let cards = []; // объявляем массив, это будет пул, откуда выдергиваются числа на рандом. дважды одно и то же число оттуда дернуть нельзя.
let cards_proto = new Array( 78 ); // Здесь мы объявляем прототипный массив, который мы будем копировать в пул, чтобы из него можно было дергать числа.
cards_proto.fill(0) // Здесь мы заполняем прото-массив нулями
    
cards_proto = Array.prototype.map.call( cards_proto, (_, i) => i ); // Здесь мы присваиваем каждой ячейке массива в значение ее индекс, типа нулевой элемент = 0, первый элемент = 1 и т.д

function refresh_array() {
    cards = [...cards_proto]; // Здесь мы копируем прото-массив в пул
}

refresh_array() // Это ОБЯЗАТЕЛЬНО вызываешь в начале скрипта, чтобы массив заполнился возможными картами, и вызываешь когда в него нужно вернуть все карты, чтобы из них можно было выбирать


function unique_random() {
    if ( cards.length < 1 ) return false; // Если в пуле нет чисел, значит все карты уже разложены
    let idx = Math.floor(Math.random() * cards.length); // Выбираем случайный элемент из пула

    return cards.splice(idx, 1)[0] + 1; // удаляем элемент из пула и выводим его в функции, прибавляем единицу ибо индекс с 0, а нам надо от 1 до 78
}

// unique_random() вернет одно из чисел от 1 до 78, но при этом оно не вернет повторяющееся число, пока ты не вызовешь refresh_array();

function is_int(v){
    return v - 0 == v;
}

function displayCard(){
    refresh_array();
    if (is_int(amount.value) == true && amount.value != 0 && amount.value < 6){
        for(let i = 0; amount.value != i; i++){
            const card = document.createElement('img');
            let num = unique_random();
            let source = `../assets/taro/${num}.jpg`;
            card.src = source;
            card.id = num;
            document.querySelector('.cardPlace').appendChild(card);
        }
        displayButton();
    } else{
        alert('ДУРА, ПИЩИ ЦИФРЫ ОТ 1 ДО 5');
    }
}

function displayButton(){
    const br = document.createElement('br');

    const checkButton = document.createElement('button');
    checkButton.id = 'checkButton';
    checkButton.innerText = 'ПРОВЕРИТЬ';
    
    const clearButton = document.createElement('button');
    clearButton.id = 'clearButton'
    clearButton.innerText = 'ЗАНОВО';

    checkButton.onclick = function(){
        alert(arrPredict[Math.floor(Math.random()*arrPredict.length)]);
    }

    clearButton.onclick = function(){
        const col = document.querySelectorAll('img');
        for(let c of col){
            c.remove();
        }

        document.querySelector('input#cifra').value="";
        document.querySelector('br').remove();
        document.querySelector('button#checkButton').remove();
        document.querySelector('button#clearButton').remove();
        alert('ВВЕДИТЕ НОВОЕ ЗНАЧЕНИЕ');

    }
    document.querySelector('.cardPlace').appendChild(br);
    document.querySelector('.cardPlace').appendChild(checkButton);
    document.querySelector('.cardPlace').appendChild(clearButton);
}