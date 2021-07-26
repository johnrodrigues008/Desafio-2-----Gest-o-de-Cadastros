
function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto,txtNomeFornecedor,txtEmail,txtTelefone,txtDataComp,txtSaida,txtEntrada) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;
    let fornecedor = document.getElementById(txtNomeFornecedor).value;
    let email = document.getElementById(txtEmail).value;
    let telefone = document.getElementById(txtTelefone).value;
    let data = document.getElementById(txtDataComp).value;
    let saida = document.getElementById(txtSaida).value;
    let entrada = document.getElementById(txtEntrada).value;
    if (nome == "")
        alert("Itens do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, codigo, fornecedor, email, telefone, data, saida, entrada, parseInt(qtidade));
}
function cadastrarProduto(produto, codig, qtidade,fornecedor,email,telefone,data,saida,entrada) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade,fornecedor:fornecedor,email:email,telefone:telefone,data:data,saida:saida,entrada:entrada};
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastrados com sucesso, os produtos do fornecedor "+qtidade+" Nome do Produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}
function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}
function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null);
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}
function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");

                document.write("<li>Nome do Fornecedor: "+produto.fornecedor+"</li>");
                document.write("<li>Email: "+produto.email+"</li>");
                document.write("<li>telefone: "+produto.telefone+"</li>");
                document.write("<li>Data da compra: "+produto.data+"</li>");
                document.write("<li>Valor de entrada: "+produto.entrada+"</li>");
                document.write("<li>Valor de saida: "+produto.saida+"</li>");

                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");

                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
