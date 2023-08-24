"use strict";
class estudante {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    media(media) {
        return "o nome é" + this.nome + "as idade é " + this.idade;
    }
}
let aluno = new estudante("maria", 20);
console.log(aluno.media);
