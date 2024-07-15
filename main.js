// 1)
const checkIfEqual = function (a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
};

// 2)
const convertTemp = function (temp) {
  if (typeof temp !== "number") return false;
  return (temp - 32) / 1.8;
};

// 3)
const calculator = function (a, b, operation) {
  if (typeof a !== "number" && typeof b !== "number") return false;

  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return false;
    }
    return a / b;
  } else {
    return false;
  }
};
