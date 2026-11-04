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



                            // ТЕРНАРНІ ОПЕРАТОРИ....


// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 2000000;



// let message = budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

// console.log(`Я хочу купити ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);


                   // Оператори нульвого злиття...



// let userName = null;
// console.log(userName || 'Default Username'); // Default Username    

// let userName1 = undefined;
// console.log(userName1 || 'Default Username'); // Default Username    

// let userName2 = '';
// console.log(userName2 || 'Default Username'); // Default Username    

// let userName3 = null;
// console.log(userName3 ?? 'Default Username'); // Default Username 


// let age = 0;
// console.log(age || 18); // 18
// console.log(age ?? 18); // 0




// let balance = 1000;
// let bonusBalance = 100;
// let gamePrice = 1000;
// let isBanned = false;
// let isArested = false;
// let isSelling = true;

// if (isBanned) {
//     console.log('Ви забанені, доступ заборонений !!!');
// } else if (isArested) {
//     console.log('Ви арештовані, доступ заборонений !!!');
// } else if(!isSelling) {
//     console.log('Гру вжe роспродано !!!');
// } else if (balance >= gamePrice) {
//     console.log('Ви можете купити гру? ' + '\n' + 'Так, у вас вистачає грошей)');
// } else if (balance + bonusBalance >= gamePrice) {
//     console.log('Ви можете купити гру з бонусом? ' + '\n' +'Так, у вас вистачає грошей)');
// } else {
//     console.log('Ви можете купити гру? ' + '\n' + 'Ні, у вас не вистачає грошей !!!');
// }


// const balance = 1000;
// const bonusBalance = 100;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;

// const canBuy = (balance >= 1000 || bonusBalance >= 100)
//     && !isBanned
//     && !isExist
//     && isSelling;

// console.log(`Можу купити ігру: ${canBuy ? 'Так' : 'Ні'}`); // Можу купити ігру: Так




