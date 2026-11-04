// function logName() {
//     console.log(`My name is Oleg`);
// }

// const a = logName();
// console.log(typeof a); // undefined, бо функція нічого не повертає, а лише виводить в консоль



function logName(name, surname) {
    console.log(`My name is ${name} ${surname}`);
}

logName('Oleh', 'Lohunov');


function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * ( 1 + rate / 12) ** month;
    return sum;
}

const example = countDepositSum(1000, 24, 0.10);
console.log(example);


console.log(countDepositSum(1000, 48, 0.10));

