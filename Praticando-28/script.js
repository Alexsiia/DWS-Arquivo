let div = document.createElement("div");
div.className = "mt-3 d-flex align-items-center gap-3 flex-wrap";

let label1 = document.createElement("label");
label1.textContent = "Número 1";
label1.className = "form-label";
let input1 = document.createElement("input");
input1.type = "number";
input1.className = "form-control";
input1.style.width = "150px";

let label2 = document.createElement("label");
label2.textContent = "Número 2";
label2.className = "form-label";
let input2 = document.createElement("input");
input2.type = "number";
input2.className = "form-control";
input2.style.width = "150px";

let label3 = document.createElement("label");
label3.textContent = "Resultado";
label3.className = "form-label";
let resultado = document.createElement("input");
resultado.type = "text";
resultado.className = "form-control";
resultado.style.width = "150px";
resultado.readOnly = true;

function calcular(op) {
    let n1 = parseFloat(input1.value);
    let n2 = parseFloat(input2.value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Preencha os dois números!");
        return;
    }

    let res;
    switch (op) {
        case "+": res = n1 + n2; break;
        case "-": res = n1 - n2; break;
        case "*": res = n1 * n2; break;
        case "/":
            if (n2 === 0) {
                alert("Divisão por zero não é permitida!");
                return;
            }
            res = n1 / n2;
            break;
    }

    resultado.value = res;
}

let botoes = [
    { texto: "Soma", op: "+" },
    { texto: "Subtração", op: "-" },
    { texto: "Multiplicação", op: "*" },
    { texto: "Divisão", op: "/" }
];

let divBotoes = document.createElement("div");
divBotoes.className = "mt-3 d-flex gap-2 flex-wrap";

botoes.forEach(btnInfo => {
    let btn = document.createElement("button");
    btn.textContent = btnInfo.texto;
    btn.className = "btn btn-primary";
    btn.onclick = () => calcular(btnInfo.op);
    divBotoes.appendChild(btn);
});

let body = document.body;

body.appendChild(div);
div.appendChild(label1);
div.appendChild(input1);
div.appendChild(label2);
div.appendChild(input2);
div.appendChild(label3);
div.appendChild(resultado);
body.appendChild(divBotoes);
