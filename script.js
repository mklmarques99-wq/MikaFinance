let saldo = 0;

function adicionar(){

    let descricao =
    document.getElementById("descricao").value;

    let valor =
    Number(document.getElementById("valor").value);

    saldo += valor;

    document.getElementById("saldo").innerText =
    "R$ " + saldo;

    let item = document.createElement("li");

    item.innerText =
    descricao + " - R$ " + valor;

    document.getElementById("lista")
    .appendChild(item);
}