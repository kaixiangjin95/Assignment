class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    };
    clear() {
        this.currentText = '';
        this.previousText = '';
        this.operation = undefined;
    };
    delete() {
        this.currentText = this.currentText.toString().slice(0,-1)
    };
    appendNumebr(number) {
        if (number === '.' && this.currentText.includes('.')) return
        this.currentText = this.currentText.toString() + number.toString();
    };
    chooseOperation(operation) {
        if (this.currentText === '') return
        if (this.previousText !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousText = this.currentText;
        this.currentText = '';
    };
    compute() {
        let computation;
        const prev = parseFloat(this.previousText);
        const current = parseFloat(this.currentText);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '*':
                computation = prev * current;
                break
            case '/':
                computation = prev / current;
                break
            default:
                return
        }
        this.currentText = computation;
        this.operation = undefined;
        this.previousText = '';
    };
    updatedisplay() {
        this.currentTextElement.innerText = this.currentText;
        if (this.operation != null) {
            this.previousTextElement.innerText = `${this.previousText} ${this.operation}`;
        } else {
            this.previousTextElement.innerText = this.previousText;
        }
        
    };
}
const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousTextElement = document.querySelector('[data-previous-operand]');
const currentTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousTextElement, currentTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumebr(button.innerText)
        calculator.updatedisplay()
    });
});
operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updatedisplay()
    });
});
equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updatedisplay();
})
allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updatedisplay();
})
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updatedisplay();
})