/**
 * Performs basic arithmetic operations on two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} sign - Arithmetic operator ('+', '-', '*', '/')
 * @returns {number} Result of the arithmetic operation
 */
function calculate(num1, num2, sign) {
    if (sign === '+') return num1 + num2;
    if (sign === '-') return num1 - num2;
    if (sign === '/') return num1 / num1;
    if (sign === '*') return num1 * num2;
}

console.log(calculate(5, 3, '+'));

/**
 * Checks if three points lie on the same line
 * @param {number} x1 - X coordinate of first point
 * @param {number} y1 - Y coordinate of first point
 * @param {number} x2 - X coordinate of second point
 * @param {number} y2 - Y coordinate of second point
 * @param {number} x3 - X coordinate of third point
 * @param {number} y3 - Y coordinate of third point
 * @returns {boolean} True if points lie on same line, false otherwise
 */
function isOnOneLine(x1, y1, x2, y2, x3, y3) {
    return (x3 * (y2 - y1) - y3 * (x2 - x1) === x1 * y2 - x2 * y1);
}

console.log(isOnOneLine(1, 1, 0, 0, -1, -1)); // true, первые два аргумента – координаты первой точки, и так далее
console.log(isOnOneLine(1, 1, 0, 1, -1, -1)); // false

/**
 * Checks if a triangle can be formed with given side lengths
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle can exist, false otherwise
 */
function isTriangleExists(x, y, z) { // сущ. ли треугольник
    return x + y > z
        || y + z > x
        || x + z > y;
}

/**
 * Checks if a triangle is isosceles
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is isosceles, false otherwise
 */
function isIsosceles(x, y, z) { // равнобедренный
    return x === y
        || x === z
        || y === z;
};

/**
 * Checks if a triangle is equilateral
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is equilateral, false otherwise
 */
function isEquilateral(x, y, z) { // равносторонним
    return x === y === z;
};

/**
 * Checks if a triangle is rectangular (right-angled)
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is rectangular, false otherwise
 */
function isRectangular(x, y, z) { // прямоугольным
    const xPow = Math.pow(x, 2);
    const yPow = Math.pow(y, 2);
    const zPow = Math.pow(z, 2);

    return xPow === yPow + zPow ||
        yPow === xPow + zPow ||
        zPow === yPow + xPow;
};

/**
 * Prompts user for password and validates it
 * @param {string} question - Prompt message to display
 * @param {Function} valid - Validation function
 * @returns {string|undefined} Valid password or undefined
 */
function askPassword(question, valid) {
    const pass = prompt(question);

    return valid(pass);
}

/**
 * Validates password against criteria
 * @param {string} password - Password to validate
 * @returns {string|undefined} Valid password or undefined if validation fails
 */
function isValid(password) {
    if (password <= 1000) {
        return askPassword('пароль не верный', isValid);
    }
    if (password.length < 5) {
        return askPassword('пароль короткий', isValid);
    }

    return password;
}

const newPassword = askPassword('Введите новый пароль, не менее пяти символов', isValid);
console.log(newPassword);
