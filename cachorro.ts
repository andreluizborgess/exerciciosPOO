class cachorro{
    nome: string;
    raca:string;
    idade: number;
    constructor(nome: string, raca: string, idade: number){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    apresentar(){
        return "oi, eu sou" + this.nome + "um" + this.raca + "de" + this.idade + "anos";
    }
    apresentarPara(humano:string){

        return "olá"  + humano + "eu sou" + + this.raca + "de" + this.idade + "anos";
        }
}

let rex = new cachorro("rex", "labrador" , 3)
let thor =new cachorro("thor", "bulldog" , 2)
console.log(rex.nome);
console.log(thor.nome);
console.log(rex.apresentarPara("andré"))

