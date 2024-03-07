const input = document.getElementById('inputtext');
const historyBar = document.getElementById('historyBar');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const buttons = document.querySelectorAll('button');
const history = [];
const deleteHistoryBtn = document.getElementById('deleteHistoryBtn');

function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}

deleteHistoryBtn.addEventListener('click', function () {
    const isConfirmed = confirm("Are you sure you want to delete the entire history?");
    
    if (isConfirmed) {
        // Clear history array, update the history bar, and clear calculator screen
        history.length = 0;
        updateHistoryBar();
        clearCalculatorScreen();

        // Clear local storage
        localStorage.removeItem('history');
    }
});

clearHistoryBtn.addEventListener('click', function () {
    const isConfirmed = confirm("Are you sure you want to clear the history?");
    
    if (isConfirmed) {
        // Clear history array, update the history bar, and clear calculator screen
        history.length = 0;
        updateHistoryBar();
        clearCalculatorScreen();

        // Clear local storage
        localStorage.removeItem('history');
    }
});

function updateHistoryBar() {
    historyBar.innerHTML = '';

    history.forEach(entry => {
        historyBar.innerHTML += `<div>${entry.expression} = ${entry.result}</div>`;
    });
}

function updateHistory() {
    const expression = input.value;
    const result = calculate(expression);
    history.push({ expression, result });
    historyBar.innerHTML += `<div>${expression} = ${result}</div>`;
}


function clearHistory() {
    historyBar.innerHTML = '';
}

function operation(buttonValue) {
    if (buttonValue === 'C') {
        clearCalculatorScreen();
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        updateHistory();
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}

function clearCalculatorScreen() {
    input.value = '';
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});

clearHistoryBtn.addEventListener('click', clearHistory);

//Color Repairation And Swtiching
document.getElementById('textsaddle').addEventListener('click', function() {
    document.body.style.backgroundColor = 'saddlebrown';
    document.getElementById('textlawn').style.backgroundColor = 'saddlebrown';
    document.getElementById('textaqua').style.backgroundColor = 'saddlebrown';
    document.getElementById('textsaddle').style.backgroundColor = 'saddlebrown';
    document.getElementById('textchocolate').style.backgroundColor = 'saddlebrown';
    document.getElementById('textgolden').style.backgroundColor = 'saddlebrown';
    document.getElementById('textbluev').style.backgroundColor = '#999';
    updateHistoryBar();
});

document.getElementById('textaqua').addEventListener('click', function() {
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textbluev').style.backgroundColor = 'aquamarine';
    document.getElementById('textaqua').style.backgroundColor = 'aquamarine';
    document.getElementById('textsaddle').style.backgroundColor = 'aquamarine';
    document.getElementById('textchocolate').style.backgroundColor = 'aquamarine';
    document.getElementById('textgolden').style.backgroundColor = 'aquamarine';
    updateHistoryBar();
});

document.getElementById('textlawn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lawngreen';
    document.getElementById('textaqua').style.backgroundColor = '#999';
    document.getElementById('textbluev').style.backgroundColor = 'lawngreen';
    document.getElementById('textlawn').style.backgroundColor = 'lawngreen';
    document.getElementById('textsaddle').style.backgroundColor = 'lawngreen';
    document.getElementById('textchocolate').style.backgroundColor = 'lawngreen';
    document.getElementById('textgolden').style.backgroundColor = 'lawngreen';
    updateHistoryBar();
});

document.getElementById('textgolden').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod';
    document.getElementById('textlawn').style.backgroundColor = 'goldenrod';
    document.getElementById('textaqua').style.backgroundColor = 'goldenrod';
    document.getElementById('textsaddle').style.backgroundColor = 'goldenrod';
    document.getElementById('textbluev').style.backgroundColor = 'goldenrod';
    document.getElementById('textchocolate').style.backgroundColor = 'goldenrod';
    document.getElementById('textgolden').style.backgroundColor = 'goldenrod';
    updateHistoryBar();
});

document.getElementById('textchocolate').addEventListener('click', function() {
    document.body.style.backgroundColor = 'chocolate';
    document.getElementById('textlawn').style.backgroundColor = 'chocolate';
    document.getElementById('textaqua').style.backgroundColor = 'chocolate';
    document.getElementById('textsaddle').style.backgroundColor = 'chocolate';
    document.getElementById('textbluev').style.backgroundColor = 'chocolate';
    document.getElementById('textchocolate').style.backgroundColor = 'chocolate';
    document.getElementById('textgolden').style.backgroundColor = 'chocolate';
    updateHistoryBar();
});

document.getElementById('textbluev').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blueviolet';
    document.getElementById('textsaddle').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = 'blueviolet';
    document.getElementById('textlawn').style.backgroundColor = 'blueviolet';
    document.getElementById('textbluev').style.backgroundColor = 'blueviolet';
    document.getElementById('textchocolate').style.backgroundColor = 'blueviolet';
    document.getElementById('textgolden').style.backgroundColor = 'blueviolet';
    updateHistoryBar();
});

// Retrieve data from local storage when the page loads
document.addEventListener('DOMContentLoaded', function () {
    retrieveData();
    updateHistoryBar();
});

// Save data to local storage when the page is about to be unloaded
window.addEventListener('beforeunload', function () {
    saveData();
});

function saveData() {
    localStorage.setItem('history', JSON.stringify(history));
}

function retrieveData() {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
        history.length = 0; // Clear the current history
        history.push(...JSON.parse(storedHistory));
        history.forEach(entry => {
            historyBar.innerHTML += `<div>${entry.expression} = ${entry.result}</div>`;
        });
    }
}