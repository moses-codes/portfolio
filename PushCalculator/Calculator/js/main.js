function MakeExpression() {
    this.readNum = [];
    this.expression = '';
    this.operators = ['+', '-', '/', '*'];

    this.addNum = function (input) {
        //let val = prompt('enter a digit, or operator')
        if (!(isNaN(Number(input))) || input === '.') {
            this.readNum.push(input)
            let counter = 0

            for (let digit of this.readNum) {
                if (digit === '.') counter++
            }

            if (counter > 1) {
                this.readNum = []
                this.expression = ''
                return 'error'
            }

        } else if (input === "+" || input === "-" || input === "*" || input === "/") {
            this.expression += (this.readNum.join(''))
            this.expression += input
            this.readNum = []
        } else {

        }
        console.log(this.readNum, this.expression)
    };

    this.evaluate = function () {

        this.expression += this.readNum.join('')
        if (this.expression === '') {
            return 0;
        }
        let finalExp
        let lastChar = this.expression.charAt(this.expression.length - 1)
        //if the last element of expression is an operator, remove it
        if (this.operators.indexOf(lastChar) !== -1 || this.operators.indexOf(lastChar) === '=') {

            this.expression = this.expression.split('')
            this.expression.splice(-1)

            finalExp = this.expression.join('')

            console.log(finalExp)

        } else {
            finalExp = this.expression
        }
        //re-initialize all variables
        this.readNum = []
        this.expression = ''

        return parseFloat(eval(finalExp).toFixed(6))

    };
    //clear object function
    this.reset = function () {
        this.readNum = [];
        this.expression = '';
    }
}

let exp = new MakeExpression()

let numpad = Array.from(document.querySelectorAll(".num"))
let operators = Array.from(document.querySelectorAll(".operator"))
let display = document.querySelector('.display')
let equals = document.querySelector('.equals')
let clear = document.querySelector('.clear')

numpad.forEach(e => {
    e.addEventListener('click', function () {
        exp.addNum(e.innerText)
        display.innerText = exp.readNum.join('')
    })
})

operators.forEach(e => {
    e.addEventListener('click', function () {
        exp.addNum(e.innerText)
        display.innerText = e.innerText
    })
})

equals.addEventListener('click', function () {
    display.innerText = exp.evaluate()
})

clear.addEventListener('click', function () {
    exp.reset();
    display.innerText = 0;
})

