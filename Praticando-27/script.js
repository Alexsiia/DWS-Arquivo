let nome = prompt("Qual é o seu nome?");

if (nome === null || nome.trim() === "") {
    alert("Você não informou seu nome. Atualize a página e tente novamente!");
} else {
    let h2 = document.createElement("h2");
    h2.innerHTML = `Seja bem vindo <strong>${nome}</strong>`;
    
    document.body.appendChild(h2);

    let btnAdd = document.createElement("button");
    btnAdd.textContent = "Adicionar texto (parágrafo de Lorem Ipsum)";
    btnAdd.className = "btn btn-outline-primary";
    btnAdd.onclick = function() {
        let p = document.createElement("p");
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt.";
        document.body.appendChild(p);
    };

    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Remover texto (todos os parágrafos)";
    btnRemove.className = "btn btn-outline-primary";
    btnRemove.onclick = function() {
        let paragrafos = document.querySelectorAll("p");
        paragrafos.forEach(p => p.remove());
    };
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(btnAdd);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(btnRemove);
}
