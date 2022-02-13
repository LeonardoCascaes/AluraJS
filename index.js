import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("João", "111.222.333-00");
const contaCorrenteJoao = new ContaCorrente(1001, cliente1);
contaCorrenteJoao.depositar(100);
contaCorrenteJoao.sacar(10);

const cliente2 = new Cliente("Maria", "222.333.444-00");
const contaCorrenteMaria = new ContaCorrente(1001, cliente2);
console.log(contaCorrenteJoao);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);

const contaSalario = new ContaSalario(cliente2);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);