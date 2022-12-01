// Задание 1
// for (let i = 0; i <= 10; i++) {
//     console.log((i % 2 == 0) ? `${i} -четное число` : `${i} -нечетное число`)

// }
// Задание 2
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr[3] = arr[5];
// arr[4] = arr[6]
// arr.pop();
// arr.pop();
// console.log(arr);
// Задание 3

// const myarr = [];
// let sum = 0;
// for (i = 0; i < 5; i++) {
//     myarr[i] = Math.round((Math.random(0, 9) * 10));
//     sum = sum + myarr[i];
// }
// const min = Math.min(...myarr);
// console.log(`минимальное число массива -  ${min}`)

// console.log((myarr[i] = 3) ? `${3} - есть в массив` : `${3} -нет в массиве)`);
// console.log(myarr);
// console.log(`сумма всех элементов массива ${sum}`);


// Задание 4
// function genArr(elem) {
//     const myarr = [];
//     for (i = 0; i < elem; i++) {
//         myarr[i] = Math.round((Math.random() * 10));
//         if (myarr[i] % 2 == 0) {
//             console.log(`число в квадрате -${myarr[i] ** 2}`)
//         }
//         if (myarr[i] % 3 == 0) {
//             console.log(`число в кубе- ${myarr[i] ** 3}`)
//         }
//     }
//     return myarr;
// }
// console.log(genArr(10));

// Задание 5
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         count++;
//     }
// }
// console.log(count);

// Задание 6
// const userarr = [1, 2, 3, 4, 5];
// let a = userarr.shift();
// let b = userarr.shift();
// userarr.shift();
// userarr.unshift(b);
// userarr.unshift(a)
// console.log(userarr);
// Дополнительное задание
// let i = 0,
//     j = 0;
// let max = 20;
// let space = "",
//     cross = "";

// while (i < max) {
//     space = "";
//     cross = "";

//     for (j = 0; j < i + 1; j++) cross += "х";
//     for (j = 0; j < max - i; j++) space += " ";
//     console.log(cross + space);
//     i++;
// }