export class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo <= valor) {
            console.log("Saldo insuficiente para conseguir efetuar este saque.");
            return;
        }
        this.#saldo -= valor;
        console.log(`Foi sacado R$${valor}! Seu saldo atual é de R$${this.#saldo}`);
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("Valor inválido para deposito.");
            return;
        }
        this.#saldo += valor;
        console.log(`Deposito efetuado com sucesso! Seu saldo atual é de R$${this.#saldo}`);
    }

    verificarSaldo(){
        return this.#saldo;
    }
}