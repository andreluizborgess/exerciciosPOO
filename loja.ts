class ProdutoLoja {
    nome: string;
    valor: number;
    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
}
class CarrinhoCompras {
    carrinho: ProdutoLoja[] = []
    constructor() {
    }
    adicionarProduto(Produtos: ProdutoLoja) {
        this.carrinho.push(Produtos)
    }
    removerProduto(Produto: ProdutoLoja) {
        this.carrinho = this.carrinho.filter((item) => item.nome !== Produto.nome)
    }

    valorFinal() {
        let soma = 0;
        for (let i = 0; i < this.carrinho.length; i++) {
            soma += this.carrinho[i].valor;
        }
        return soma
    }
    visualizarProduto() {
        for (let i = 0; i < this.carrinho.length; i++) {
            console.log(this.carrinho[i].nome + "no valor" + this.carrinho[i].valor);
        }
    }
}
class Loja {
    estoque: ProdutoLoja[] = []
    carrinho = new CarrinhoCompras();
    constructor() {

    }
    adicionarEstoque(Produto: ProdutoLoja) {
        this.estoque.push(Produto)
    }
    removerProduto(Produto: ProdutoLoja) {
        this.estoque = this.estoque.filter((item) => item.nome !== Produto.nome)
    }
    adicionarProdutoCarrinho(Produto: ProdutoLoja) {
        const produtoEncontrado = this.estoque.find(
            item => item.nome
        );
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(Produto);
            return "produto adicionado";
        }
        else {
            return "produto nn encontrado";
        }
    }
    removerProdutoDoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.estoque.find(
            item => item.nome == produto.nome
        );
        if(produtoEncontrado){
            this.carrinho.removerProduto(produto);

            return "produto removido do carrinho"
        }
        else{
            return "Produto não encontrado no carrinho";
        }
    }
    visualizarEstoque(){
        for(let i=0; i< this.estoque.length; i++ ){
            console.log(this.estoque[i].nome + " no valor " + this.estoque[i].valor);  
        }
    }
}

const produtos1 = new ProdutoLoja("leite", 10.00);
const produtos2 = new ProdutoLoja("agua", 2.00);
const produtos3 = new ProdutoLoja("refri", 4.50);
const produtos4 = new ProdutoLoja("ballantines", 80.00);

const carrinholist = new CarrinhoCompras();
carrinholist.adicionarProduto(produtos1)
carrinholist.adicionarProduto(produtos2)
carrinholist.adicionarProduto(produtos3)
console.log(carrinholist.visualizarProduto());
console.log(carrinholist.removerProduto(produtos2));
console.log(carrinholist.visualizarProduto());
console.log(carrinholist.valorFinal());


const estoque = new Loja();

estoque.adicionarEstoque(produtos1)
estoque.adicionarEstoque(produtos2)
estoque.adicionarEstoque(produtos3)
estoque.adicionarEstoque(produtos4)


console.log(carrinholist.visualizarProduto());
console.log(carrinholist.removerProduto(produtos2));
console.log(estoque.removerProdutoDoCarrinho(produtos1));
console.log(estoque.adicionarProdutoCarrinho(produtos4));
console.log(estoque.visualizarEstoque());
console.log(carrinholist.valorFinal());

