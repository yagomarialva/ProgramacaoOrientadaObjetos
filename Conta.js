import { Cliente } from "./Cliente.js";
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
        if (this.constructor == Conta) {
            throw new Error("Você nao pode instanciar um objeto do tipo conta diretamente!!!1");
        }
    }

    get saldo() {
        return this._saldo;
    }
    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    get cliente() {
        return this._cliente;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        } else {
            console.log("Não é possível sacar, valor de saque maior que o saldo em conta");
        }
    };

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}