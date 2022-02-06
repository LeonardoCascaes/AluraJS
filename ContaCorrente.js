export class ContaCorrente {
    agencia;
    cliente;
    #saldo = 0;

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