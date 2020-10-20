import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Tanderson", 1213143414);



const contaCorrenteTanderson = new ContaCorrente(0, cliente1, 1001);
contaCorrenteTanderson.depositar(500);
contaCorrenteTanderson.sacar(100);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteTanderson);



