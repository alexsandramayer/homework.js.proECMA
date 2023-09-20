// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// const arr = [1, 5, 7, 9];
// const findMinNumber = Math.min(...arr);
// console.log(findMinNumber);


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// function createCounter(num) {
//     return {
//         get() {
//             return num;
//         },
//         inc() {
//             return num++;
//         },
//         dec() {
//             return num--;
//         }
//     };
// }
// const counter = createCounter(5);
// console.log(counter.get());
// counter.inc();
// counter.inc();
// counter.inc();
// console.log(counter.get());
// counter.dec();
// console.log(counter.get());

