function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponivel');
    } else {
        alert('Compra realizada com sucesso');
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponivel');
    } else {
        alert('Compra realizada com sucesso!');
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
    } 
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponivel');
    } else {
        alert('Compra realizada com sucesso!');
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
    }
}