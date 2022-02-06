import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "João";
cliente1.cpf = "111.222.333-00";

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = "222.333.444-00";

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.agencia = 1001;
contaCorrenteJoao.cliente = cliente1;
contaCorrenteJoao.depositar(100);
contaCorrenteJoao.sacar(10);

const contaCorrenteMaria = new ContaCorrente();
contaCorrenteMaria.agencia = 1001;
contaCorrenteMaria.cliente = cliente2;

console.log("Saldo Maria: " + contaCorrenteMaria.verificarSaldo());
console.log("Saldo João: " + contaCorrenteJoao.verificarSaldo());

contaCorrenteJoao.transferir(50, contaCorrenteMaria);

console.log("Saldo Maria: " + contaCorrenteMaria.verificarSaldo());
console.log("Saldo João: " + contaCorrenteJoao.verificarSaldo());
console.log(cliente1,"\n",cliente2);