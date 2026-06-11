class Funcionario {
    #salario;

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e trabalho como ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está realizando suas atividades.`;
    }

    getSalario() {
        return this.#salario;
    }

    setSalario(novoSalario) {
        if (novoSalario <= 0) {
            throw new Error("O salário deve ser maior que zero.");
        }

        this.#salario = novoSalario;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagem) {
        super(nome, "Desenvolvedor", salario);
        this.linguagem = linguagem;
    }

    trabalhar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, ferramenta) {
        super(nome, "Designer", salario);
        this.ferramenta = ferramenta;
    }

    trabalhar() {
        return `${this.nome} está criando interfaces no ${this.ferramenta}.`;
    }
}

const dev1 = new Desenvolvedor("Henry", 4500, "JavaScript");
const dev2 = new Desenvolvedor("Ana", 5200, "Python");
const designer1 = new Designer("Carlos", 4000, "Figma");

console.log(dev1.apresentar());
console.log(dev1.trabalhar());
console.log(`Salário: R$ ${dev1.getSalario()}`);

console.log(dev2.apresentar());
console.log(dev2.trabalhar());
console.log(`Salário: R$ ${dev2.getSalario()}`);

console.log(designer1.apresentar());
console.log(designer1.trabalhar());
console.log(`Salário: R$ ${designer1.getSalario()}`);