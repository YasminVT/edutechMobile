import {Cliente} from "./Cliente.js"
import { Livro } from "./Livro.js";
import { Emprestimo } from "./Emprestimo.js";

const cliente1 = new Cliente ("Maria", 1234567895);
const cliente2 = new Cliente ("João", 12345642132);
const livro1 = new Livro("O Jardim de Bronze", "Globo Livros", "Gustavo Malajovich", 6555670185);
const livro2 = new Livro("Morte e vida Severina", "Alfaguara", "João Cabral de Melo Neto", 8560281320);
const emprestimo1 = cliente1.emprestimo(livro1);
console.log(emprestimo1);
const emprestimo2 = cliente2.emprestimo(livro2);
console.log(emprestimo2);