# GitHub Profile Viewer - AJAX

## Descrição

Este projeto foi desenvolvido como atividade prática do módulo **Ajax e Exceções** do curso **Profissão Engenheiro Front-End** da EBAC.

A aplicação consome dados da API pública do GitHub e exibe informações de um usuário de forma dinâmica, utilizando requisições AJAX com a Fetch API.

## Objetivo

Adaptar o projeto base fornecido pela EBAC para que os dados fossem carregados através de uma requisição assíncrona, substituindo os valores estáticos existentes na página.

## Funcionalidades

* Consumo da API pública do GitHub
* Exibição dinâmica do avatar do usuário
* Exibição do nome do perfil
* Exibição do nome de usuário
* Exibição da quantidade de repositórios públicos
* Exibição da quantidade de seguidores
* Exibição da quantidade de usuários seguidos
* Link direto para o perfil do GitHub
* Tratamento de erros utilizando try/catch

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* Git
* GitHub

## Conceitos Aplicados

### AJAX

A aplicação utiliza AJAX para realizar requisições assíncronas à API do GitHub sem necessidade de recarregar a página.

### Fetch API

A comunicação com a API é realizada através da função `fetch()`, responsável por solicitar os dados do usuário.

### Tratamento de Exceções

Foi implementado tratamento de erros utilizando `try/catch`, garantindo que falhas na requisição sejam tratadas adequadamente e não interrompam a execução da aplicação.

## API Utilizada

GitHub REST API

Exemplo de endpoint utilizado:

```text
https://api.github.com/users/henryoriondev
```

## Estrutura do Projeto

```text
.
├── css
│   └── main.css
│
├── js
│   └── main.js
│
├── imagens
│
├── index.html
│
└── README.md
```

## Como Executar

Clone o repositório:

```bash
git clone https://github.com/henryoriondev/curso_ebac_frontend
```

Abra o arquivo `index.html` em um navegador ou utilize uma extensão como Live Server no Visual Studio Code.

## Branch do Exercício

O desenvolvimento solicitado pela atividade foi realizado na branch:

```text
exercicio_ajax
```

## Autor

Henry Orion Monteiro Machado de Souza

Projeto desenvolvido para fins acadêmicos durante o curso Profissão Engenheiro Front-End da EBAC.
