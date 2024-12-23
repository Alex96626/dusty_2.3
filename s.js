/**
 * Performs basic arithmetic operations on two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} sign - Arithmetic operator ('+', '-', '*', '/')
 * @returns {number} Result of the arithmetic operation
 */
// Калькуторикс
const calculate = (firstNumber, secondNumber, sign) => {
  if (sign === "+") return firstNumber + secondNumber;
  if (sign === "-") return firstNumber - secondNumber;
  if (sign === "/") return firstNumber / firstNumber;
  if (sign === "*") return firstNumber * secondNumber;
};

console.log(calculate(5, 3, "+"));

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
// Прямая или нет

const isOnOneLine = (coordinateX1, coordinateY1, coordinateX2, coordinateY2, coordinateX3, coordinateY3) => {
  return coordinateX3 * (coordinateY2 - coordinateY1) - coordinateY3 * (coordinateX2 - coordinateX1) === coordinateX1 * coordinateY2 - coordinateX2 * coordinateY1;
};

console.log(isOnOneLine(1, 1, 0, 0, -1, -1)); // true, первые два аргумента – координаты первой точки, и так далее
console.log(isOnOneLine(1, 1, 0, 1, -1, -1)); // false

// Какой ты треугольник сегодня
/**
 * Checks if a triangle can be formed with given side lengths
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle can exist, false otherwise
 */
const isTriangleExists = (sideTriangleX, sideTriangleY, sideTriangleZ) => {
  // сущ. ли треугольник
  return sideTriangleX + sideTriangleY > sideTriangleZ 
      || sideTriangleY + sideTriangleZ > sideTriangleX 
      || sideTriangleX + sideTriangleZ > sideTriangleY;
};

/**
 * Checks if a triangle is isosceles
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is isosceles, false otherwise
 */

const isIsosceles = (sideTriangleX, sideTriangleY, sideTriangleZ) => {
  // равнобедренный
  return sideTriangleX === sideTriangleY 
      || sideTriangleX === sideTriangleZ 
      || y === sideTriangleZ;
};

/**
 * Checks if a triangle is equilateral
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is equilateral, false otherwise
 */
const isEquilateral = (sideTriangleX, sideTriangleY, sideTriangleZ) => {
  // равносторонним
  return (sideTriangleX === sideTriangleY) === sideTriangleZ;
};

/**
 * Checks if a triangle is rectangular (right-angled)
 * @param {number} x - Length of first side
 * @param {number} y - Length of second side
 * @param {number} z - Length of third side
 * @returns {boolean} True if triangle is rectangular, false otherwise
 */
const isRectangular = (sideTriangleX, sideTriangleY, sideTriangleZ) => {
  // прямоугольным
  const xPow = Math.pow(sideTriangleX, 2);
  const yPow = Math.pow(sideTriangleY, 2);
  const zPow = Math.pow(sideTriangleZ, 2);

  return xPow === yPow + zPow 
      || yPow === xPow + zPow 
      || zPow === yPow + xPow;
};

/**
 * Prompts user for password and validates it
 * @param {string} question - Prompt message to display
 * @param {Function} valid - Validation function
 * @returns {string|undefined} Valid password or undefined
 */
const askPassword = (question, valid) => {
  const pass = prompt(question);

  return valid(pass);
};

/**
 * Validates password against criteria
 * @param {string} password - Password to validate
 * @returns {string|undefined} Valid password or undefined if validation fails
 */
const isValid = (password) => {
  if (password <= 1000) {
    return askPassword("пароль не верный", isValid);
  } 
  
  if (password.length < 5) {
    return askPassword("пароль короткий", isValid);
  }
  
  return password;
};

const newPassword = askPassword(
  "Введите новый пароль, не менее пяти символов",
  isValid
);
console.log(newPassword);
