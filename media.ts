class estudante {
    nome: string;
    idade: number;


    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    media(media:number){
return "o nome é"+ this.nome + "as idade é "+ this.idade;
    }
}
let aluno = new estudante("maria", 20);
console.log(aluno.media)