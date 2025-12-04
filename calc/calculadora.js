let display = document.getElementById('display');
let currentInput = "";
let currentOperator = "";


function appendToDisplay(value) { 
    currentInput += value;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === "") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculateResult(){
    try {
        let result = eval(currentInput)
        if(!Number.isInteger(result)){
            result = result.toFixed(2);
        }
        currentInput = result.toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Erro";
        currentInput = "";
    }

}

function clearDisplay() { 
    currentInput = "";
    display.textContent = currentInput;
}