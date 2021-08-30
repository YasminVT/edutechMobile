export class Livro{
    constructor(titulo, editora, autor, codigo){
        this._titulo = titulo;
        this._editora = editora;
        this._autor = autor;
        this._codigo = codigo;
    }

    get titulo(){
        return this._titulo;
    }

    get editora(){
        return this._editora;
    }

    get autor(){
        return this._autor;
    }

    get codigo(){
        return this._codigo;
    }
}