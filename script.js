// // // No VS Code, resolva as seguintes situações em JavaScript.

// // // 1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

// // // A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// // // A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

// // const produtos = [
// //     {
// //         nomeDoProduto: "Mesa de trabalho",
// //         valorDoProduto: 500,
// //         qualidadeDoProduto: 9,
// //         status: true,
// //     },
// //     {
// //         nomeDoProduto: "Computador",
// //         valorDoProduto: 5550,
// //         qualidadeDoProduto: 9,
// //         status: true,
// //     },
// //     {
// //         nomeDoProduto: "Celular XiMI",
// //         valorDoProduto:340,
// //         qualidadeDoProduto: 5,
// //         status: false,
// //     },
// //     {
// //         nomeDoProduto: "SSD 512gb",
// //         valorDoProduto: 700,
// //         qualidadeDoProduto: 10,
// //         status: false,
// //     },
// //     {
// //         nomeDoProduto: "HD 2TB",
// //         valorDoProduto: 650,
// //         qualidadeDoProduto: 7,
// //         status: true,
// //     },
// // ]

// // // 2.	Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 

// // // Valor entre 482 e 1600;
// // // Qualidade superior a 6;
// // // Status como disponível.

// // // O resultado do filtro deve ser armazenado na variável carrinho.

// // const valorDoProdutoEntre = ((produto) => {
// //     if (produto.valorDoProduto >= 482 && produto.valorDoProduto <= 1600) {
// //         return produto;
// //     }
// // });

// // const qualidadeDoProduto = ((produto) => {
// //     return produto.qualidadeDoProduto > 6;
// // });

// // const statusDoProduto = ((produto) => {
// //     return produto.status = "Disponível";
// // });

// // let carrinho = produtos.filter(valorDoProdutoEntre).filter(qualidadeDoProduto).filter(statusDoProduto);

// // // console.log(carrinho);

// // // 3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.

// // let somatoriaDosPrecos = carrinho.reduce((acumulador, carrinho) => {
// //     acumulador += carrinho.valorDoProduto;
// //     return acumulador;
// // }, 0);

// // const exibirTotalDaCompraEProdutos = carrinho.map((produto) => {
       
// // return {nomeDoProduto: produto.nomeDoProduto, preco: produto.valorDoProduto};
// // })

// // console.log(exibirTotalDaCompraEProdutos);
// // console.log(`Valor Total dos Produtos: ${somatoriaDosPrecos}`);

// const produtos = [
// 	{
// 		nome: "Mesa de trabalho",
// 		valor: 500,
// 		qualidade: 9,
// 		status: true,
// 	},
// 	{
// 		nome: "Computador",
// 		valor: 5550,
// 		qualidade: 9,
// 		status: true,
// 	},
// 	{
// 		nome: "Celular XiMI",
// 		valor:340,
// 		qualidade: 5,
// 		status: false,
// 	},
// 	{
// 		nome: "SSD 512gb",
// 		valor: 700,
// 		qualidade: 10,
// 		status: false,
// 	},
// 	{
// 		nome: "HD 2TB",
// 		valor: 650,
// 		qualidade: 7,
// 		status: true,
// 	},
// ]

// const carrinho = produtos.filter(produto => {
// 	if (
// 		produto.valor >= 482 &&
// 		produto.valor <= 1600 &&
// 		produto.qualidade > 6 &&
// 		produto.status
// 	) {
// 		return true
// 	}
// })


// // não sei usar esse comando, apenas copiei o seu
// let valorTotal = carrinho.reduce((acumulador, carrinho) => {
// 	acumulador += carrinho.valor;
// 	return acumulador;
// }, 0)

// const valorTotalEProdutos = carrinho.map((produto) => {
// 		return { nome: produto.nome, preco: produto.valor, total: valorTotal};
// });

// console.log(valorTotalEProdutos)


const produtos = [
	{ nome: "Mesa de trabalho", valor: 500, qualidade: 9, status: true },
	{ nome: "Computador", valor: 5550, qualidade: 9, status: true },
	{ nome: "Celular XiMI", valor:340, qualidade: 5, status: false },
	{ nome: "SSD 512gb", valor: 700, qualidade: 10, status: false },
	{ nome: 'HD 2TB', valor: 650, qualidade: 7, status: true }
]

const carrinho = produtos.filter(_prod => {
	if (
		_prod.valor > 482 &&
		_prod.valor < 1600 &&
		_prod.qualidade > 6 &&
		_prod.status
	) {
		return true
	}
})


let valorTotal = carrinho.reduce((_total, _current) => _total += _current.valor, 0)

console.log(
	{
		produtos: carrinho.map(_prod => ({ nome: _prod.nome, valor: _prod.valor })),
		valorTotal
	}
)