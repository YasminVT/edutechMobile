import {Funcionario} from "./Funcionarios.js";

const funcionario1 = new Funcionario ("Marcos", 12346578910, 30);
const funcionario2 = new Funcionario ("Ana", 45612346521, 15);
/* 
console.log(funcionario1.cpf);
funcionario1.cpf = 123;

console.log(funcionario1.horasTrabalhadas);
funcionario1.horasTrabalhadas = 20;
console.log(funcionario1.horasTrabalhadas);
*/
let salario = funcionario1.salario();
console.log(funcionario1);
console.log("O salário do funcionario é R$" + (salario.toFixed(2)));

console.log("\n\n");

salario = funcionario2.salario();
console.log(funcionario2);
console.log("O salário do funcionario é R$" + (salario.toFixed(2)));