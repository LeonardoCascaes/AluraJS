export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        let taxa = 1;
        this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo <= valorSacado) {
            console.log("Saldo insuficiente para conseguir efetuar este saque.");
            return;
        }
        this._saldo -= valorSacado;
        console.log(`Foi sacado R$${valorSacado}! Seu saldo atual é de R$${this._saldo}.`);
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("Valor inválido para deposito.");
            return;
        }
        this._saldo += valor;
        console.log(`Deposito efetuado com sucesso! Seu saldo atual é de R$${this._saldo}.`);
    }

    transferir(valor, conta){
        if(valor < 0){
            console.log("Valor inválido para transferencia!");
            return;
        }
        else if(valor > this._saldo){
            console.log("Saldo insuficiente para efetuar uma transferencia neste valor.");
            return;
        }
        
        conta.depositar(valor);
        this._saldo -= valor;
        console.log(`R$${valor} transferido com sucesso para a ${conta.cliente.nome}.`)
    }
}