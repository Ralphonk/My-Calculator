let memory = 0;

function calculateExpression() {
    const display = document.querySelector(".display-input");
    console.log("Display value:", display.value);
    try {
        // Add an * operator automatically when the user enters a number followed by a ( character
        const expression = display.value.replace(/(\d)\(/g, '$1*(');
        const result = eval(expression);
        console.log("Result:", result);
        display.value = result;
    } catch (error) {
        console.error("Error:", error);
        display.value = "Error";
    }
}


function memoryClear() {
    memory = 0;
    document.querySelector(".display-input").value = memory;
}

function memoryAdd() {
    const display = document.querySelector(".display-input");
    memory += parseFloat(display.value) || 0;
    document.querySelector(".display-input").value = "";
}

function memorySubtract() {
    const display = document.querySelector(".display-input");
    memory -= parseFloat(display.value) || 0;
    document.querySelector(".display-input").value = "";
}

function memoryRecall() {
    document.querySelector(".display-input").value = memory;
}
