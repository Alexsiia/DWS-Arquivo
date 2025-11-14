let nome = prompt("Qual é o seu nome?");

if (nome === null || nome.trim() === "") {
    alert("Você não informou seu nome. Atualize a página e tente novamente!");
} else {
    alert("Olá, " + nome + "! Seja bem-vindo!");

    let sabeJS = confirm("Você sabe programar em JavaScript?");

    if (sabeJS) {
        alert("Que ótimo, " + nome + "! Espero que você aprenda ainda mais!");
    } else {
        alert("Não tem problema, " + nome + "! Você irá aprender agora!");
    }
}
