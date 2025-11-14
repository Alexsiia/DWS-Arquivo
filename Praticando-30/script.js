$(function () {
    let nome = prompt("Qual é o seu nome?");
    if (nome === null || nome.trim() === "") {
        alert("Você não informou seu nome. Atualize a página e tente novamente!");
    } else {
        let $h2 = $("<h2></h2>").html(`Seja bem vindo <strong>${nome}</strong>`);
        $("body").append($h2);
        let $btnAdd = $("<button></button>")
            .text("Adicionar texto (parágrafo de Lorem Ipsum)")
            .addClass("btn btn-outline-primary")
            .on("click", function () {
                let $p = $("<p></p>").text(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt. " +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt. " +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor sit amet eros placerat tincidunt."
                );
                $("body").append($p);
            });
        let $btnRemove = $("<button></button>")
            .text("Remover texto (todos os parágrafos)")
            .addClass("btn btn-outline-primary")
            .on("click", function () {
                $("p").remove();
            });
        $("body")
            .append("<br>")
            .append($btnAdd)
            .append("<br><br>")
            .append($btnRemove);
    }
});