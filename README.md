# Portfólio de Automação de Testes Web com Cypress

Este projeto é um portfólio de automação de testes End-to-End (E2E) para uma aplicação de e-commerce de demonstração, a [Sauce Demo](https://www.saucedemo.com/). O objetivo é demonstrar competências em planejamento, design e implementação de testes automatizados utilizando Cypress e aplicando as melhores práticas de Engenharia de Qualidade de Software.

## 🚀 Funcionalidades Testadas

Atualmente, o projeto possui uma suíte de testes completa para a funcionalidade de **Login**, cobrindo os seguintes cenários:

- **Testes Funcionais de Sucesso:**
    - `LI-001`: Login com um usuário padrão válido.
- **Testes de Variação de Dados:**
    - `LI-005`: Login com sucesso mesmo com espaços em branco extras no nome de usuário, validando o tratamento de `trim` da aplicação.
- **Testes de Cenários de Falha e Erro:**
    - `LI-002`: Tentativa de login com um usuário bloqueado.
    - `LI-003`: Tentativa de login com uma senha incorreta.
    - `LI-004`: Tentativa de login com o campo de usuário vazio.
- **Testes de Usabilidade (UI/UX):**
    - `LI-006`: Verificação de que o campo de senha mascara o texto digitado (`type="password"`).

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Framework de Automação:** [Cypress](https://www.cypress.io/)
- **Linguagem:** JavaScript (ES6+)
- **Gerenciador de Pacotes:** NPM
- **Controle de Versão:** Git & GitHub

## 📂 Estrutura do Projeto

O projeto segue a estrutura padrão do Cypress para garantir organização e manutenibilidade:

- `/cypress/e2e`: Contém todos os arquivos de teste (`.cy.js`), organizados por funcionalidade.
- `/cypress/fixtures`: Armazena dados de teste estáticos (ex: `users.json`) para separar os dados da lógica de teste.
- `/cypress/support`: Contém arquivos de suporte, como o `commands.js` para a criação de Comandos Customizados reutilizáveis (ex: `cy.login()`).

## ⚙️ Configuração do Ambiente

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_AQUI]
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd cypress-automation-portfolio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

## ▶️ Executando os Testes

O Cypress permite a execução dos testes de duas formas principais:

1.  **Modo Interativo (Test Runner):**
    - Ideal para desenvolver e depurar os testes.
    - Abre um navegador dedicado onde você pode ver os testes sendo executados em tempo real.
    - Comando:
      ```bash
      npx cypress open
      ```

2.  **Modo Headless:**
    - Ideal para execução em pipelines de CI/CD ou para uma validação rápida via terminal.
    - Roda os testes em segundo plano, sem abrir a interface gráfica do navegador.
    - Comando:
      ```bash
      npx cypress run
      ```

## ✍️ Estratégia e Design de Teste

A qualidade desta suíte de testes é garantida pela aplicação de técnicas formais e boas práticas:

- **Técnicas de Caixa-Preta:** O design dos casos de teste foi baseado em **Particionamento de Equivalência** e **Análise de Valor Limite** para garantir uma cobertura eficiente dos cenários de login.
- **Seletores Resilientes:** Prioriza-se o uso de seletores `[data-test]`, que são imunes a mudanças de CSS ou de estrutura HTML, tornando os testes mais estáveis e menos quebradiços.
- **Separação de Dados:** O uso de **Fixtures** (`users.json`) desacopla os dados de teste da lógica de automação, facilitando a manutenção e a criação de novos cenários.
- **Reutilização de Código:** **Comandos Customizados** (`commands.js`) são utilizados para encapsular fluxos repetitivos (como o login), tornando o código mais limpo, legível e seguindo o princípio DRY (Don't Repeat Yourself).

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center" valign="top">
      <a href="https://github.com/Edcleryton">
        <img src="https://avatars.githubusercontent.com/u/134793465?v=4" width="50px" alt="Edcleryton Silva"/><br />
        <sub><b>Edcleryton Silva</b></sub>
      </a>
    </td>
  </tr>
</table>
