let runginTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
        buffer = '0';
        runginTotal = 0;
        break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runginTotal;
            runginTotal = 0;
            break;
            case '←':
                if(buffer.length ===1){
                buffer = '0';
        } else {
            buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runginTotal === 0){
        runginTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runginTotal += intBuffer;
    } else if (previousOperator === '-'){
        runginTotal -= intBuffer;
    } else if (previousOperator === '×'){
        runginTotal *= intBuffer;
    } else if (previousOperator === '÷'){
        runginTotal /= intBuffer;
    }
    }

    function handleNumber(numberString){
        if (buffer === '0'){
            buffer = numberString;
        } else {
            buffer += numberString;
        }
    }

    function init(){
        document.querySelector('.calc-buttons').addEventListener('click', function(event){
            buttonClick(event.target.innerText);
        })
    }

    init();
