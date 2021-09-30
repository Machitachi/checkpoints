const produtos = [
	{ nome: "Mesa de trabalho", valor: 500, qualidade: 9, status: true },
	{ nome: "Computador", valor: 5550, qualidade: 9, status: true },
	{ nome: "Celular XiMI", valor:340, qualidade: 5, status: false },
	{ nome: "SSD 512gb", valor: 700, qualidade: 10, status: false },
	{ nome: 'HD 2TB', valor: 650, qualidade: 7, status: true }
]

const carrinho = produtos.filter(produto => {
	if (
		produto.valor <= 1600 &&
		produto.valor >= 482 &&
		produto.qualidade > 6 &&
		produto.status
	) {
		return true
	}
})


let valorTotal = carrinho.reduce((total, carrinho) => total += carrinho.valor, 0);

console.log(
	{
		produtos: carrinho.map(produto => ({ nome: produto.nome, valor: produto.valor })),
		valorTotal
	}
)



















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

