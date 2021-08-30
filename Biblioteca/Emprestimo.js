import {Cliente} from "./Cliente.js"
import {Livro} from "./Livro.js"

export class Emprestimo{
    constructor(cliente, livro){
        this._cliente = cliente;
        this._livro = livro;
        this.dataEmprestimo = Date();
    }

    get cliente(){
        return this._cliente;
    }

    get livro(){
        return this._livro
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
        else{
            console.log("Erro na inclusao");
        }
    }

    set livro(novoLivro){
        if(novoLivro instanceof Livro){
            this._livro = novoLivro;
        }
        else{
            console.log("Erro na inclusao");
        }
    }
}