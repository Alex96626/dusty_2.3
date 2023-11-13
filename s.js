// Калькуторикс
function calculate(num1, num2, sign) {
  if (sign === '+') return num1 + num2;
  if (sign === '-') return num1 - num2;
  if (sign === '/') return num1 / num1;
  if (sign === '*') return num1 * num2;
}

console.log(calculate(5, 3, '+'));

// Прямая или нет

function isOnOneLine(x1,y1,x2,y2,x3,y3){
     return (x3 * (y2 - y1) - y3 * (x2 - x1) === x1 * y2 - x2 * y1);
}

console.log(isOnOneLine(1, 1, 0, 0, -1, -1)); // true, первые два аргумента – координаты первой точки, и так далее
console.log(isOnOneLine(1, 1, 0, 1, -1, -1)); // false

// Какой ты треугольник сегодня

function isTriangleExists (x, y, z) { // сущ. ли треугольник
    return x + y > z || y + z > x || x + z > y;
}

function isIsosceles(x, y, z) { // равнобедренный
    return x === y || x === z || y === z;
};

function isEquilateral(x, y, z) { // равносторонним
    return x === y === z;
};

function isRectangular(x, y, z) { // прямоугольным
   const xPow = Math.pow(x, 2);
   const yPow = Math.pow(y, 2);
   const zPow = Math.pow(z, 2);

   return xPow === yPow + zPow || yPow === xPow + zPow || zPow === yPow + xPow;
};

// Допросник

function askPassword(question, valid) {
    const pass = prompt(question);
    return valid(pass);
}


function isValid(password) {
    if(password <= 1000) return askPassword('пароль не верный', isValid);
    if(password.length < 5) return askPassword('пароль короткий', isValid);
    return password
}

const newPassword = askPassword('Введите новый пароль, не менее пяти символов', isValid);
console.log(newPassword);