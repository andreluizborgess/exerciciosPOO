abstract class ContaDois {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta: string, saldo: number, titular: string) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular

    }
    deposito(deposito: number): void {
        let saldoFinal = this.saldo + deposito;
        this.saldo = saldoFinal;
        console.log("ola vc fez um deposito de" + deposito + ". o seu saldo agora é de" + saldoFinal + "reais");
    }
    sacar(sacar: number): void {
        let posSaque = this.saldo - sacar
        let valorAceito = "sua conta nn pode efetuar esse valor de saque";
        this.saldo = posSaque
        if(this.saldo <= sacar)
        {
            valorAceito = "vc efetuou um saque de" + posSaque + "o saque foi efetuado, seu saldo agora é de" + this.saldo;
        }
        console.log(valorAceito + ".");
    }
    consultarSaldo():number{
        return this.saldo
    }
}
class ContaCorrente extends ContaBancaria