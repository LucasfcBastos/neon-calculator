function insert(num) {
    var calcDisplay = document.getElementById('calc');
    var currentNumber = calcDisplay.innerHTML;

    if (currentNumber === "0") {
        if (num === "00" || /[+\-*/]/.test(num)) {
            return;
        }
        calcDisplay.innerHTML = num;
    } else {
        var lastChar = currentNumber.slice(-1);

        if (/[+\-*/]/.test(lastChar) && /[+\-*/]/.test(num)) {
            calcDisplay.innerHTML = currentNumber.slice(0, -1) + num;
        } else if (currentNumber.length < 18) {
            calcDisplay.innerHTML = currentNumber + num;
        }
    }
}
function clean() {
    document.getElementById('calc').innerHTML = "0";
    document.getElementById('rest').innerHTML = "";
}

function back() {
    var calcElement = document.getElementById('calc');
    var calc = calcElement.innerHTML;
    var novaCalc = calc.substring(0, calc.length - 1);

    if (novaCalc === '') {
        novaCalc = '0';
    }

    calcElement.innerHTML = novaCalc;
}


function full() {
    var result = document.getElementById('calc').innerHTML;
    result = result.replace(/,/g, '.');

    if (result) {
        document.getElementById('rest').innerHTML = eval(result);
        document.getElementById('calc').innerHTML = "0";
    } else {
        document.getElementById('rest').innerHTML = "0";
    }
}

function git(){
    var Link = "https://github.com/LucasfcBastos";
    window.open(Link, "_blank");
}
