function wordToNumber(word){
    const words = new Map([["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eigth", 8], ["nine", 9], ["zero", 0]])
    return words.get(word);
}

let res = 0;
let doing = '';

function inputNum(n){
    const table = document.querySelector(".table");
    table.textContent += n;
    console.log(table);
}

function removeTable(){
    const table = document.querySelector(".table");
    table.textContent = "";
}

function Doing(){
    const table = document.querySelector(".table");
    switch (doing) {
        case "mul":
            res *= parseInt(table.textContent);
        case "sum":
            res += parseInt(table.textContent);
        case "min":
            res -= parseInt(table.textContent);
        case "div":
            res /= parseInt(table.textContent);
        case '':
            res = res;
    }
}

function clickButton(button){
    let val = button.id;
    let n = 0;
    console.log(val);
    if (['mul', 'sum', 'min', 'div'].includes(val)){
        doing = val;
        Doing();
        removeTable();


    } else {
        n = wordToNumber(val);
        inputNum(n);
        if (res == 0){
            res += n;
        }
    }
    console.log(parseInt("1+1"));
}

function result() {
    console.log(res);
    removeTable();
    inputNum(res);
}