# banco-web-testes

Este projeto tem como objetivo demonstrar para os alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript, com organização de código.

## Objetivo
Automatizar cenários de testes para a aplicação Banco Web, utilizando boas práticas de organização, customização de comandos e geração de relatórios, fornecidas como referência didática para alunos de QA.

## Componentes do Projeto
- **Cypress**: Framework principal de automação de testes ponta a ponta.
- **Comandos Personalizados**: Comandos personalizados para reutilização de lógicas comuns nos testes, localizados em `cypress/support/commands/`.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML dos testes executados.

## Estrutura das Massas
- `cypress/e2e/`: Scripts de testes automatizados.
- `cypress/fixtures/`: Dados de apoio para os testes.
- `cypress/support/`: Configurações e comandos personalizados.
- `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos
- Node.js instalado
- Clonar e executar a API e a aplicação Web:
	- [banco-api](https://github.com/juliodelimas/banco-api)
		```sh
		git clone https://github.com/juliodelimas/banco-api.git
		```
	- [banco-web](https://github.com/juliodelimas/banco-web)
		```sh
		git clone https://github.com/juliodelimas/banco-web.git
		```

## Instalação
Clone este repositório:
```sh
git clone https://github.com/Gilsonbrs/banco-web-tests.git
cd banco-web-tests
```
Instale as dependências:
```sh
npm install
```

## Execução dos Testes
Execute os testes em modo headless:
```sh
npm test
```
Execute os testes com interface gráfica do Cypress:
```sh
npm run cy:open
```
Para rodar em modo direcionado (com navegador visível):
```sh
npm run cy:headed
```

## Relatórios
Após a execução dos testes, o relatório em HTML estará disponível em `cypress/reports/html/index.html`.

## Estrutura dos Testes
- `cypress/e2e/login.cy.js`: Testes de login.
- `cypress/e2e/transferencia.cy.js`: Testes de transferência bancária.

## Comandos Personalizados
Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos gerais.
- `cypress/support/commands/login.js`: Comandos relacionados ao login.
- `cypress/support/commands/transferencia.js`: Comandos para transferências.

Para utilizar um comando customizado em seus testes, basta chamar `cy.<nomeDoComando>()`.

## Observações
- Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.
- Os dados de acesso e exemplos estão em `cypress/fixtures/`.

---
Mentoria 2.0 - Automação de Testes com Cypress
