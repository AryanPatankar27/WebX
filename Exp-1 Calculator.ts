class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | never {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  handleInvalidOperation(operation: any): never {
    throw new Error(`Invalid operation: '${operation}'. Allowed operations are 'add', 'subtract', 'multiply', 'divide'.`);
  }

  operate(a: number, b: number, operation: string): number | never {
    switch (operation) {
      case 'add':
        return this.add(a, b);
      case 'subtract':
        return this.subtract(a, b);
      case 'multiply':
        return this.multiply(a, b);
      case 'divide':
        return this.divide(a, b);
      default:
        return this.handleInvalidOperation(operation);
    }
  }
}

const calc = new Calculator();

try {
  console.log(calc.operate(10, 5, 'add'));
  console.log(calc.operate(10, 5, 'subtract'));
  console.log(calc.operate(10, 5, 'multiply'));
  console.log(calc.operate(10, 0, 'divide'));
  console.log(calc.operate(10, 5, 'modulus'));
} catch (error) {
  console.error(error.message);
}
