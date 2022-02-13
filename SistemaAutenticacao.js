export class SistemaAutenticacao{
    static login(funcionario, senha){
        return autenticavel.autenticar(senha);
    }
}