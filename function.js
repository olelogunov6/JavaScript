// function logName() {
//     console.log(`My name is Oleg`);
// }

// const a = logName();
// console.log(typeof a); // undefined, бо функція нічого не повертає, а лише виводить в консоль



// function logName(name, surname) {
//     console.log(`My name is ${name} ${surname}`);
// }

// logName('Oleh', 'Lohunov');


// function countDepositSum(depositInUSD, month, rate) {
//     const sum = depositInUSD * ( 1 + rate / 12) ** month;
//     return sum;
// }

// const example = countDepositSum(1000, 24, 0.10); // 1220
// console.log(example);


// console.log(countDepositSum(1000, 48, 0.10)); // 1489

// function greet(name) {
//     return `Hello ${name}!`;
// }

// console.log(greet(`Oleg`)); Hello Oleg!



// function getArea(width, height) {
//     return width * height;
// }

// console.log(getArea(5, 3)); // 15 


// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// function getPrice(price, isStudent) {
//     if (isStudent) {
//         return Math.round(price * 0.8 * 100) / 100; // 20% знижка для студентів    
//     } else {
//         return price; // без знижки для інших
//     }
// }
// console.log(getPrice(500, true)); // 400
// console.log(getPrice(500, false)); // 500
// console.log(getPrice(333, true)); // 266.4



// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month;
// }


// function isEnough(deposit, month, rate, goal) {
//     const sum = countDepositSum(deposit, month, rate);
//     return sum >= goal;
// }

// console.log(isEnough(1000, 24, 0.10, 1200));
// console.log(isEnough(1000, 24, 0.10, 1300));




// function canBuy(balance, bonusBalance, gamePrice, isBanned, isArrested, isSelling) {
    
//     if (isBanned) {
//         return 'Ви забанені, доступ заборонений !';
//     } else if (isArrested) {
//         return 'Ви арештовані, доступ забороннений'; 
//     } else if (!isSelling) {
//         return 'Гру вже роспродано !';
//     } else if (balance >= gamePrice) {
//         return 'Ви можете купити гру !';
//     } else if (balance + bonusBalance >= gamePrice) {
//         return'Ви можете купити гру з бонусом !';
//     } else {
//         return 'Ви купити не можете !';
//     }
// }


// console.log(canBuy(1000, 100, 1000, false, false, true));
// console.log(canBuy(950, 100, 1000, false, false, true));
// console.log(canBuy(790, 100, 1000, false, false, true));
// console.log(canBuy(1000, 100, 1000, true, false, true));
// console.log(canBuy(1000, 100, 1000, false, false, false));




function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(15)); // 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15 = 15