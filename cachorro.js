"use strict";
class cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "oi, eu sou" + this.nome + "um" + this.raca + "de" + this.idade + "anos";
    }
    apresentarPara(humano) {
        return "olá" + humano + "eu sou" + +this.raca + "de" + this.idade + "anos";
    }
}
let rex = new cachorro("rex", "labrador", 3);
let thor = new cachorro("thor", "bulldog", 2);
console.log(rex.nome);
console.log(thor.nome);
console.log(rex.apresentarPara("andré"));
