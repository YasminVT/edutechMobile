export class Funcionario{
    constructor(nome, cpf, horas){
        this.nome = nome;
        this._cpf = cpf;
        this._horasTrabalhadas = horas;
        this.valorHora = 30;
    }

    get cpf(){
        return this._cpf;
    }

    get horasTrabalhadas(){
        return this._horasTrabalhadas;
    }

    set horasTrabalhadas(novoValor){
        if(novoValor >= 0){
            this._horasTrabalhadas = novoValor;
        }
    }

    salario(){
        let salario = this._horasTrabalhadas * this.valorHora;
        return salario;
    }
}