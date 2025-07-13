function wordToNumber(word){
    const words = new Map([["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eigth", 8], ["nine", 9], ["zero", 0]])
    return words.get(word);
}

let res = 0;
let doing = [];
console.log(parseInt("sum"));
let flag = 0;

function inputNum(n){
    const table = document.querySelector(".table");
    table.textContent += n;
    console.log(table);
}

function removeTable(){
    const table = document.querySelector(".table");
    table.textContent = "";
}

function forSloth(){
    const table = document.querySelector(".table");
    let c;
    if (doing.length == NaN){
        c = 0;
    } else {
        c = doing.length;
    }

    doing[c] = parseInt(table.textContent);
}

function transform(){
    while (parseInt(doing[0]) == NaN || parseInt(doing[doing.length-1]) == NaN){
        if (isNaN(parseInt(doing[doing.length-1]))){
            doing.splice(doing.length-1, 1);
        }
        if (isNaN(parseInt(doing[0]))){
            doing.splice(0, 1);
        }
    } 


}
function Doing() {
    transform();  // очистка NaN (если есть)


    res = doing[0];  // начальное значение = первый элемент (число)
    for (let i = 1; i < doing.length; i += 2) {
        const operator = doing[i];
        const nextNum = doing[i + 1];
        
        switch (operator) {
            case "sum":
                res += nextNum;
                break;  // ← важно!
            case "min":
                res -= nextNum;
                break;
            case "mul":
                res *= nextNum;
                break;
            case "div":
                res /= nextNum;
                break;
            default:
                console.error("Неизвестный оператор:", operator);
        }
    }
}

function clickButton(button){
    let val = button.id;
    let n = 0;
    console.log(val);
    if (['mul', 'sum', 'min', 'div'].includes(val)){
        let c;
        forSloth();
        removeTable();
        doing = doing.filter(function(element) {
  return !isNaN(element);
});
        if (doing.length == NaN){
            c = 0;
        } else {
            c = doing.length;
        }
        console.log(parseInt(doing[doing.length-1]));
        if (isNaN(parseInt(doing[doing.length-1]))){
            console.log('sjjkdfd');
            doing[c-1] = val;
        } else {
            doing[c] = val;

        }
    } else {
        if (flag == 1){
            removeTable();
            flag = 0;
        }
        n = wordToNumber(val);
        inputNum(n);
        
        
    }
    console.log(doing);
}

function result() {
    forSloth();
    Doing();
    console.log(doing);
    console.log(res);
    removeTable();
    inputNum(res);
    flag = 1;
    doing = [];
}