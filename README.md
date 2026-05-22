# Ionic E-commerce App (Avaliação Formadora 3) 🛒

Este é um aplicativo mobile desenvolvido com o framework **Ionic** e **Angular** (utilizando a arquitetura Standalone Components). O objetivo principal do projeto é demonstrar o consumo de dados de uma API REST externa e a exibição dinâmica dessas informações na interface do usuário.

## 🎯 Objetivo do Projeto
Construir uma aplicação em formato de abas (Tabs) que se conecte à **FakeStore API** via requisições HTTP (GET) para listar e navegar por produtos reais de um e-commerce fictício.

## 📱 Estrutura e Funcionalidades
O aplicativo é dividido em 3 abas principais:
* **Tab 1 (Perfil):** Cartão de identificação do desenvolvedor contendo foto e informações acadêmicas.
* **Tab 2 (Navegação Individual):** Exibição detalhada de um produto por vez, com controles de paginação (Avançar/Voltar) e lógica de desabilitação de botões nos limites da lista.
* **Tab 3 (Lista Completa):** Carregamento completo do catálogo de produtos em tela, com recurso para ocultar/limpar os dados da interface.

## 🛠️ Tecnologias Utilizadas
* [Ionic Framework (v7/8)](https://ionicframework.com/)
* [Angular (Standalone)](https://angular.io/)
* TypeScript
* SCSS (CSS Custom Properties)
* [FakeStore API](https://fakestoreapi.com/) para os dados (Mock API)

## 🚀 Como executar o projeto localmente
### Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* CLI do Angular: `npm install -g @angular/cli`
* CLI do Ionic: `npm install -g @ionic/cli`

### Passo a passo

1. **Clone este repositório**
   Abra o terminal na pasta desejada e baixe o código-fonte:
   ```bash
   git clone [https://github.com/7JPRBM7/avFormadora3.git](https://github.com/7JPRBM7/avFormadora3.git)
