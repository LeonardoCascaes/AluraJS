import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Mario", 10000, 12345678900);
diretor.cadastrarSenha("123123");
const gerente = new Gerente("Ricardo", 5000, 12345611121);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945685844, "123321")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123123");

console.log(gerenteEstaLogado, diretorEstaLogado);