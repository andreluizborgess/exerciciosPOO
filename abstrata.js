"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + "patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("gato", 4);
    }
    fazerBarulho() {
        console.log("o gato está miando");
    }
}
class passaro extends Animal {
    constructor() {
        super("passaro", 2);
    }
    fazerBarulho() {
        console.log("o passaro está cantando");
    }
}
const cachorro2 = new Dog();
cachorro2.apresentar();
cachorro2.fazerBarulho();
const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();
