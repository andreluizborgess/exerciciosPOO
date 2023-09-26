abstract class Animal{
    private nome:string;
    private qtdPatas:number;

    constructor(nome:string,qtdPatas: number){
        this.nome =nome;
        this.qtdPatas = qtdPatas;
    }
    abstract fazerBarulho():void;
    apresentar():void{
        console.log("Este é um " + this.nome+" com "+ this.qtdPatas + "patas");
       

    }
}
class Dog extends Animal{
    constructor(){
        super("Cachorro", 4);
    }
    fazerBarulho():void{
        console.log("cachorro está latindo");
    }
}

class Cat extends Animal{
    constructor(){
        super("gato", 4);
    }
    fazerBarulho():void{
        console.log("o gato está miando");
    }
}
class passaro extends Animal{
    constructor(){
        super("passaro",2);

    }
    fazerBarulho():void{
        console.log("o passaro está cantando");
    }
}

const cachorro2 = new Dog();
cachorro2.apresentar();
cachorro2.fazerBarulho();   

const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();