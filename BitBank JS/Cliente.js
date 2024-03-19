
export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return thishis._cpf;
    }

    constructor(nome, cpf) {
        this.nome =  nome;
        this._cpf = cpf; 
        

    }

}
