# Exercício - Orientação a Objetos com JavaScript

## Descrição

Este projeto foi desenvolvido como atividade prática do **Módulo 24 - Orientação a Objetos com JavaScript** do curso **Profissão Engenheiro Front-End** da EBAC.

O objetivo do exercício é aplicar os principais conceitos da Programação Orientada a Objetos (POO) utilizando JavaScript, incluindo abstração, herança, encapsulamento e polimorfismo.

## Objetivos do Exercício

* Criar uma classe de abstração;
* Criar pelo menos duas classes herdeiras;
* Criar pelo menos três instâncias de objetos;
* Aplicar conceitos de encapsulamento;
* Demonstrar o uso de herança;
* Demonstrar o uso de polimorfismo;
* Armazenar o código em uma branch específica do repositório.

## Estrutura Implementada

### Classe Base

Foi criada a classe:

```text
Funcionario
```

Esta classe representa a abstração de um funcionário de uma empresa.

### Classes Herdeiras

Foram criadas duas subclasses:

```text
Desenvolvedor
Designer
```

Ambas herdam atributos e métodos da classe `Funcionario`.

### Instâncias Criadas

```text
dev1
dev2
designer1
```

As instâncias representam diferentes profissionais dentro da organização.

## Conceitos Aplicados

### Abstração

A classe `Funcionario` foi utilizada para representar características comuns a todos os funcionários.

### Herança

As classes `Desenvolvedor` e `Designer` herdam atributos e comportamentos da classe `Funcionario`.

### Encapsulamento

O atributo salário foi implementado utilizando atributos privados:

```javascript
#salario
```

O acesso é realizado através de métodos getters e setters.

### Polimorfismo

O método:

```javascript
trabalhar()
```

foi sobrescrito nas subclasses para apresentar comportamentos específicos para cada tipo de funcionário.

## Tecnologias Utilizadas

* JavaScript ES6+
* Classes
* Herança
* Encapsulamento
* Polimorfismo
* Node.js

## Como Executar

Clone o repositório:

```bash
git clone https://github.com/henryoriondev/curso_ebac_frontend
```

Acesse a pasta do projeto:


Execute o arquivo:

```bash
node oo.js
```

## Estrutura do Projeto

```text
.
├── oo.js
└── README.md
```

## Branch do Exercício

O desenvolvimento deste exercício foi realizado na branch:

```text
oo_js
```

## Resultado Esperado

Ao executar o programa, serão exibidas informações dos funcionários cadastrados, demonstrando o funcionamento da herança, encapsulamento e polimorfismo.

## Autor

Henry Orion Monteiro Machado de Souza

Projeto desenvolvido para fins acadêmicos durante o curso Profissão Engenheiro Front-End da EBAC.
