import { Livro } from "./Livro.js";
import { Emprestimo } from "./Emprestimo.js";

export class Cliente{
    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    emprestimo(livro){
        if(livro instanceof Livro){
            return new Emprestimo (this, livro);
        }
    }
}