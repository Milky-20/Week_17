// window.addEventListener ("load", function () {
//     document.getElementById ("btn").addEventListener ("click", function () {
//         let a = [];
        
//         for (let i = 0; i < 10; i++) a[i] = Math.floor (Math.random () * 21 - 10);
        
//         document.write (a.join("_") + "<br>" + a.filter(function (e) {
//             if (e > 0) return e;}).reduce(function (a, b) {return a * b;})
//             );
//             // document.write("<br>" + "Максимальное число равно " + a.toString());  
//     });
// });
// const result = document.getElementById('result');

// window.addEventListener ("load", function (){
//     document.getElementById ("btn").addEventListener ("click", function (){
// let max = [];
// let a = Math.max();

// for (i = 0; i < 10; i++ ){
//     max.push(Math.round(Math.random() * 20) - 10)
//   }
//   console.log(max);
//   result.innerHTML = `Сгенерировали: ${max}`;
// document.write("Максимальное число равно " + "<br>" + max.toString());
//     })
// });

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

    // let sum = 0;
    // for (i = 0; i < arr.length; i++){
    //     sum += arr[i]; 
        
    // }
    // console.log(sum);

    let sum2 = arr.reduce((total, amount) => total + amount);
    result3.innerHTML = `Сумма равна: ${sum2}`;

    let sum3 = arr.reduce((total, amount) => total * amount);
    result4.innerHTML = `Произведение равно: ${sum3}`;


    let average = sum2 / arr.length;
    result5.innerHTML = `Среднее арифметическое: ${average}`;

})
