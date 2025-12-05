$(document).ready(function () {
    const URL_LIST = "https://epansani.com.br/2025/dwe1/ajax/list.php";
    const URL_INS  = "https://epansani.com.br/2025/dwe1/ajax/ins.php";
    const URL_REM  = "https://epansani.com.br/2025/dwe1/ajax/rem.php";
    let deleteData = { id: null, row: null };
    loadTable();
    $("#btn-gravar").on("click", saveRecord);
    $("#btn-limpar").on("click", clearForm);
    $("#btn-atualizar").on("click", loadTable);
    function loadTable() {
        $.ajax({
            url: URL_LIST,
            method: "GET",
            dataType: "json",
            success: function (data) {
                fillTable(data);
            },
            error: function () {
                showAlert("Erro ao carregar dados.", "danger");
            }
        });
    }
    function fillTable(data) {
        const tbody = $("#table-registros tbody");
        tbody.empty();
        data.forEach(row => {
            const tr = $("<tr>");
            tr.append($("<td>").text(row.id));
            tr.append($("<td>").text(row.nome));
            tr.append($("<td>").text(row.email));
            const btnDelete = $("<button>")
                .addClass("btn btn-outline-danger btn-sm")
                .text("Apagar")
                .on("click", () => openDeleteModal(row.id, row.nome, tr));
            tr.append($("<td>").append(btnDelete));
            tbody.append(tr);
        });
    }
    function openDeleteModal(id, nome, row) {
        deleteData = { id, row };
        $("#delete-info").text(`#${id} (${nome})`);
        const modal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
        modal.show();
        $("#btn-confirm-delete").off().on("click", function () {
            modal.hide();
            removeRecord(deleteData.id, deleteData.row);
        });
    }
    function removeRecord(id, rowElement) {
        $.ajax({
            url: URL_REM,
            method: "POST",
            data: { id: id },
            success: function (resp) {
                if (resp.toString().trim() === "true") {
                    rowElement.remove();
                    showAlert("Registro removido.", "success");
                } else {
                    showAlert("Falha ao remover (retorno inválido).", "danger");
                }
            },
            error: function () {
                showAlert("Erro ao remover.", "danger");
            }
        });
    }
    function saveRecord() {
        const nome = $("#nome").val().trim();
        const email = $("#email").val().trim();
        if (!nome || !email) {
            showAlert("Preencha nome e email.", "warning");
            return;
        }
        $.ajax({
            url: URL_INS,
            method: "POST",
            data: { nome, email },
            success: function (resp) {
                if (resp.toString().trim() === "true") {
                    clearForm();
                    showAlert("Registro gravado!", "success");
                    loadTable();
                } else {
                    showAlert("Falha ao gravar.", "danger");
                }
            },
            error: function () {
                showAlert("Erro ao gravar.", "danger");
            }
        });
    }
    function clearForm() {
        $("#nome").val("");
        $("#email").val("");
    }
    function showAlert(msg, type = "info") {
        const alert = $(`
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${msg}
                <button class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        $("#alert-area").append(alert);
        setTimeout(() => alert.alert("close"), 4000);
    }
});
