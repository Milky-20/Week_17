const btn = document.getElementById('btn');
const result = document.getElementById('result');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
console.log(btn);

btn.addEventListener('click', function() {
    let arr = [];

    for (i = 0; i < 10; i++){
       arr.push(Math.round((Math.random()*10 + Math.random()*(-10))));
    } 
    result.innerHTML = `Рандомный ряд: ${arr}`;

    const max = Math.max.apply(null, arr);
    result1.innerHTML = `Максимальное число: ${max}`;

    const min = Math.min.apply(null, arr);
    result2.innerHTML = `Минимальное число: ${min}`;

    let sum2 = arr.reduce((total, amount) => total + amount);
    result3.innerHTML = `Сумма равна: ${sum2}`;

    let sum3 = arr.reduce((total, amount) => total * amount);
    result4.innerHTML = `Произведение равно: ${sum3}`;


    let average = sum2 / arr.length;
    result5.innerHTML = `Среднее арифметическое: ${average}`;

})
