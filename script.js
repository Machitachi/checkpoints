// No VS Code, resolva as seguintes situações em JavaScript.

// 1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.


let produtos = [
    {
        nomeDoProduto: "Mesa de trabalho",
        valorDoProduto: 500,
        qualidadeDoProduto: 9,
        status: true,
    },
    {
        nomeDoProduto: "Computador",
        valorDoProduto: 5550,
        qualidadeDoProduto: 9,
        status: true,
    },
    {
        nomeDoProduto: "Celular XiMI",
        valorDoProduto:340,
        qualidadeDoProduto: 5,
        status: false,
    },
    {
        nomeDoProduto: "SSD 512gb",
        valorDoProduto: 700,
        qualidadeDoProduto: 10,
        status: false,
    },
    {
        nomeDoProduto: "HD 2TB",
        valorDoProduto: 650,
        qualidadeDoProduto: 7,
        status: true,
    },
]

let a = produtos.reduce((acumulador, produtos) => {
    acumulador += produtos.valorDoProduto;

    return acumulador;
}, 0);

console.log(a)

// 2.	Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 

// Valor entre 482 e 1600;
// Qualidade superior a 6;
// Status como disponível.

// O resultado do filtro deve ser armazenado na variável carrinho.



 

function valorDoProdutoEntre(produto) {
    if (produto.valorDoProduto >= 482 && produto.valorDoProduto <= 1600) {
        return produtos;
    }
}

function qualidadeDoProduto(produto) {
    return produto.qualidadeDoProduto > 6;
}

function statusDoProduto(produto) {
    return produto.status = "Disponível";
}

let carrinho = produtos.filter(valorDoProdutoEntre).filter(qualidadeDoProduto).filter(statusDoProduto);

console.log(carrinho);


// 3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.

const resultado = produtos.valorDoProduto

const somatoriaDaCompra = carrinho.map((produto) => {
    let soma = [];
    
return {nomeDoProduto: produto.nomeDoProduto, preco: produto.valorDoProduto, total: resultado};
})


console.log(somatoriaDaCompra)













// let filtrarProduto = produtos.filter((valorDoProdutoEntre) => {
//     if (valorDoProdutoEntre >= 482 && valorDoProdutoEntre <= 1600) {
//         produtos;
//     })

// let carrinho = [];

// const filtrarProduto = produtos.map((produto) => {
//     if (produto.valorDoProduto >= 482 && produto.valorDoProduto <= 1600) {
//         return carrinho.push(produto);
//     }
// })

// console.log(filtrarProduto)



