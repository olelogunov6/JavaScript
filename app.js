                            // Базові арефметичні оператори
 
// const width = 10;
// const height = 5;
// const space = width * height;
// const newWidth = width - 4;
// const newWidth2 = width * 4;
// const division = newWidth / newWidth2;
// const volume = 2 ** 3; // 2 * 2 * 2
// console.log(volume);

// // строки
// const city = 'warszawa';
// const street = 'leszno';
// // console.log(city + ', ' + street + ' ' + 5);




                            // // Оператори присвоювання...
// let age = 18 + 5;
// age += 2; // age = age + 2
// age -= 2; // age = age - 3
// age *= 2; // age = age * 2
// age /= 2; // age = age / 2

// age++; // age = age + 1
// age--; // age = age - 1
// console.log(age);



                            // // Оператори зрівнювання..
// const vasia = 20;
// console.log(age > vasia); // чи більше? true
// console.log(age >= vasia); // більше чи рівно? true
// console.log(age < vasia); // чи менше? false
// console.log(age <= vasia); // менше чи рівно? false
// console.log(age >= vasia); // більше чи рівно? true
// console.log(age == vasia); // чи рівно? false


// const isSuited = 100 - 10 > 90 - 5;
//  console.log(isSuited);
//     100 - (12) 10 > (10) 90 - (12) 5

//  const a = (6 + 10) / 2;
//  console.log(a);

//  let b;
//  let c;
// c = b = 100 + 50 + 30;
//  console.log(c); // 180
//  console.log(b); // 180


// let a = 5;
// let b = 5.5;
// console.log(typeof a); //Number
// console.log(typeof b);
// a = 'строка';
// console.log(typeof a); // String
// e = 'string';
// console.log(typeof e);


// let isAdmin = a > 10;
// console.log(typeof isAdmin); // Boolean

// let c = undefined;
// console.log(c); // undefined
// c = 5;
// console.log(typeof c);

// let d = null;
// console.log(typeof d == null);

// Данні
// let payRateUSD = 80;
// let projectHours = 40;
// let evailabHours = (11 - 2) * 5;

// // Результат
// console.log("Чи зможу я працювати? " + (evailabHours > projectHours));
// console.log("Виплата за роботу " + (projectHours * payRateUSD + "$"));



// const projectName = 'Сайт магазина';
// const price = 2000;
// const author = 'Василий Пупкин';

// const temlate = author + ' заказав ' + projectName + ' по ціні ' + price + '$';
// console.log(temlate);

// const template = `${author} заказав ${projectName} по ціні ${price}`;
// console.log(temlate);

// const template3 = 'Проект \n' + 'Ціна: ' + price + '$';
// console.log(template3);

// const template4 = `Проект
// Ціна: ${price}$`;
// console.log(template4);



// const age = '18';
// console.log(Number(age) + 5); 
// console.log(age - 3);
// const userName = 'Вася';
// console.log(Number(userName) + 5); // NaN
// console.log(typeof NaN);
// console.log(String(4) + 7); // 47
// console.log(Boolean('') + 10); // 10
// console.log(true + 2); // 3

// const a = 2 + '10'; // 210
// console.log(a - 10); // 200
// console.log(a + 10); // 20010




// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(Number('ex')));
// console.log(Boolean(NaN));



// const money = 100;

// if (money > 50) {
//     console.log('Може купити наш продукт');
// } else if (money > 50) {
//     console.log('Куплений міні продукт');
// } else if (money > 50) {
//     console.log('Куплений міні продукт');
// } else {
//     console.log('Не хватає баланса');
// }

// console.log('итог');



// Данні
// let money = 12000;
// let bankCapital = 7;
// let buyHous = 13500;
// let years = 2;

// let yearsProfit = money * (bankCapital / 100);
// let totalProfit = yearsProfit * years;
// let money2Years = money + totalProfit
// let change = money2Years - buyHous;
// // Відповідь..
// console.log('Капітал: ' + money + '$');
// console.log('Капітал за вклад на 2 роки в банк: ' + totalProfit + '$');
// console.log('Сума будинка якого я хочу купити: ' + buyHous + '$');
// console.log('Чи зможу я купити будинок за 2 роки?');
// console.log(money2Years > buyHous);
// console.log('залишок від покупки ' + change + '$');



// const deposit = 10000;
// const rate = 0.07;
// const depositLength = 24;
// const houseCost = 13500;

// const res = deposit * (1 + rate /12) ** 24;
// if (res > houseCost) {
//     console.log(`Ми назбирали: ${res}. Можемо купити. Остаток ${res - houseCost}`);
// } else {
//     console.log(`Ми назбирали: ${res}. Купити не зможемо (((`);
// }

// const secretNumber = '7';

// if (Number(secretNumber)  === 7) {
//     console.log('Вгадав строго');
// }

// if (secretNumber == 7) {
//     console.log('Вгадав не строго');
// }

// const q = Number(prompt('Ведіть число'));
// if (q === 7) {
//     console.log('!');
// }



                        // if, else if, else, switch, case , default....

// const role = 'manager';

// if (role === 'manager') {
//     console.log('Менеджер');
// } else if (role === 'admin') {
//     console.log('Админ');
// } else if (role === 'ceo') {
//     console.log('Сео');
// } else {
//     console.log('Ми тебе не знаємо');
// }



// switch (role) {
//     case 'manager': 
//         console.log('Менеджер');
//         break;
//     case 'admin': 
//         console.log('Адмін');
//         break;
//     case 'ceo': 
//         console.log('Сео');
//         break;
//     default:
//         console.log('Ми тебе не знаємо');
// }  


// const num = 0;

// switch(true) {
//     case num > 0:
//         console.log('Позитивний');
//         break;
//     case num < 0:
//         console.log('Отрицательний');
//         break;
//     default:
//         console.log('Ноль!');
// }




                    // ТЕРНАРНІ ОПЕРАТОРИ....


// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 2000000;



// let message = budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

// console.log(`Я хочу купити ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

                    

                            




                // ЛОГІЧНІ ОПЕРАТОРИ + switch,case,default

// let answer = (prompt('Скільки буде 7 + 8'));


// if (answer === 'Я не робот') {
//     console.log('Ви не робот !))');
// } else {
//     let robot = Number(answer);


//  if (robot === 15) {
//     console.log('Ви не робот !');
// } else if (robot > 15) {
//     console.log('Ви робот !!!');
// } else if (robot >= 0) {
//     console.log('Ви робот !!');
// } else {
//     console.log('Ви підар,, пиши нориально');
// }

// }



// const res = prompt('Скільки буде 7 + або - 15');
// switch(true) {
//     case res === 'Я не робот':
//     case Number(res) ===  22:
//     case Number(res) ===  -8:
//         console.log('Ви не робот !!');
//         break;
//     default:
//         console.log('Ви робот !!');
// }


// if (res === 'Я не робот') {
//     console.log('Успех !!');
// } else {
//     const resNum = Number(res);
//     switch(resNum) {
//         case 22:
//         case -8:
//             console.log('Успех !!');
//             break;
//         default:
//             console.log('Ви робот !!');
//     }
// }







                        // БУЛЕВІ ОПЕРАТОРИ....






// const isAdmin = true;
// const canWrite = true;

// console.log(`Системний файл ${isAdmin && canWrite}`);
// console.log(`Обичний  файл ${isAdmin || canWrite}`);
// console.log(`Інвертируєм права адміна ${!isAdmin}`); // Первертає саме значення true на false, і на оборот.. 

// const isEdited = true;
// const isSuperAdmin = false;

// console.log(`Файл редактирований ${
//     isAdmin && canWrite && (!isEdited || isSuperAdmin)
// }`)




// console.log(!true);   // false
// console.log(!false);  // true



// console.log(5 > 3 && 2 > 10); // false
// console.log(5 > 3 || 2 > 10); // true
// console.log(1 === 1 && 1 === 1); // true
// console.log(1 === 2 || 1 === 2); // false




console.log('Вася' || 'Олег');
console.log('false' || 'Олег');
console.log('Вася' || 'false');
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);


let a = 'Марина';
const userName = a || 'Петя';
console.log(userName);


const isAdmin = true;
const filename = isAdmin && 'file.mp4';
console.log(filename)