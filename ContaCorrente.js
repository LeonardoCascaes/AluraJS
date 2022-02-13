import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroContas++;
    }

    sacar(valor) {
        let taxa = 1.1;
        super._sacar(valor, taxa);
    }
}