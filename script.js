var buttons = document.getElementsByClassName('button');
console.log(buttons)
var display = document.getElementById('display');
var string = "";
// var operand1 = null;
// var operand2 = 0;
// var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '/' || value == '*' || value == '+' || value == '-' || value == '%') {
            if (string == "") {
                display.innerText = "ERROR!";
            } else {
                // operator = value;
                // operand1 = parseFloat(display.textContent);
                string = string + value;
                display.innerText = string;
            }
        } else if (value >= 0 && value <= 9) {
            string = string + value;
            display.innerText = string;
            //     if (operand1 = null) {
            //         // operand1 = value;
            //         // display.innerText = operand1;

            //     } else if (operator == null) {
            //         operand1 = Math.pow(operand1, 10) + value;
            //         display.innerText = operand1;
            //     } else {
            //         operand2 = Math.pow(operand2, 10) + value;
            //         display.innerText = operand1, operator, operand2;
            //     }
            // } else if (value == '='){
            //     eval()
        } else if (value == 'AC') {
            string = "";
            display.innerText = string;
        } else if (value == '=') {
            string = eval(string);
            display.innerText = string;
        }

    })
}