import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    #saldo = 0;
    _cliente;

    set cliente(valor){
        if(valor instanceof Cliente){
            this._cliente = valor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas++;
    }

    sacar(valor) {
        if (this.#saldo <= valor) {
            console.log("Saldo insuficiente para conseguir efetuar este saque.");
            return;
        }
        this.#saldo -= valor;
        console.log(`Foi sacado R$${valor}! Seu saldo atual é de R$${this.#saldo}.`);
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("Valor inválido para deposito.");
            return;
        }
        this.#saldo += valor;
        console.log(`Deposito efetuado com sucesso! Seu saldo atual é de R$${this.#saldo}.`);
    }

    transferir(valor, conta){
        if(valor < 0){
            console.log("Valor inválido para transferencia!");
            return;
        }
        else if(valor > this.#saldo){
            console.log("Saldo insuficiente para efetuar uma transferencia neste valor.");
            return;
        }
        
        conta.depositar(valor);
        this.#saldo -= valor;
        console.log(`R$${valor} transferido com sucesso para a ${conta.cliente.nome}.`)
    }

    verificarSaldo(){
        return this.#saldo;
    }
}