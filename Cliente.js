class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "João";
cliente1.cpf = "111.222.333-00";
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = "222.333.444-00";
cliente2.agencia = 1001;
cliente2.saldo = 1000;

console.log(cliente1, cliente2);