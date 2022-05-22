const user = navigator.platform;
const huy = document.querySelector('button#konechnoe');
const arrAnswer = ['Твоя мать шлюха',
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

huy.onclick = () => { if (user.indexOf('Mac') !== -1){
    alert('Твоя мать шлюха. Я сам проверял.');
}else {
    alert(arrAnswer[Math.floor(Math.random()*arrAnswer.length)]);
}
};

