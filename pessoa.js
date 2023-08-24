"use strict";
class Pessoa {
    constructor(nome, idade, comida) {
        this.nome = nome;
        this.idade = idade;
        this.comida = comida;
    }
    cumprimentar() {
        let msgHabilitação = "ja posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitação = " nao posso tirar minha cnh";
        }
        return "olá meu nome é" + this.nome;
        "e tenho" + this.idade + "anos" + msgHabilitação + ".";
    }
    comidasFavoritas() {
        console.log("minhas(s) comidas=(s) favorita(s)");
        for (let i = 0; i < this.comida.length; i++) {
            console.log(this.comida[i]);
        }
    }
}
let Pessoa1 = new Pessoa("andré", 17, ["doguinho", "lasanha"]);
console.log(Pessoa1.cumprimentar());
console.log(Pessoa1.comidasFavoritas());
