import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("João", "111.222.333-00");
const contaCorrenteJoao = new ContaCorrente(1001, cliente1);
contaCorrenteJoao.depositar(100);
contaCorrenteJoao.sacar(10);

const cliente2 = new Cliente("Maria", "222.333.444-00");
const contaCorrenteMaria = new ContaCorrente(1001, cliente2);

console.log("Saldo Maria: " + contaCorrenteMaria.verificarSaldo());
console.log("Saldo João: " + contaCorrenteJoao.verificarSaldo());

contaCorrenteJoao.transferir(50, contaCorrenteMaria);

console.log("Saldo Maria: " + contaCorrenteMaria.verificarSaldo());
console.log("Saldo João: " + contaCorrenteJoao.verificarSaldo());
console.log(ContaCorrente.numeroContas + " Contas abertas.");
console.log(cliente1,"\n",cliente2);