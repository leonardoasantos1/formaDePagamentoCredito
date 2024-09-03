# Simulação de Dados do Cartão

Este projeto é uma aplicação simples que simula a inserção e visualização de dados de um cartão de crédito em tempo real. A ideia principal é permitir que o usuário visualize como os dados inseridos são refletidos em um cartão fictício na tela.

![imagem](https://github.com/user-attachments/assets/ea3c9bb5-1210-43cc-8518-132f8542f55d) ![imagem2](https://github.com/user-attachments/assets/d3b24ef8-8b40-473c-bafc-1019b44f09e9)

## Funcionalidades

- Visualização dos dados inseridos em tempo real no layout do cartão.
- Detecção automática da bandeira do cartão com base no número inserido.
- Máscaras aplicadas automaticamente ao número do cartão, data de validade e CVV.
- Alteração da visualização para o verso do cartão ao inserir o CVV.

## Funcionalidades Detalhadas

### Nome no Cartão
- O nome inserido no campo **Nome no cartão** é refletido em tempo real no cartão virtual.
- A borda do campo muda de cor para verde quando um nome válido é inserido.

### Número do Cartão
- O número do cartão é automaticamente formatado com espaços a cada 4 dígitos para facilitar a leitura.
- O sistema detecta a bandeira do cartão (Visa, Mastercard, Elo) e exibe a respectiva imagem no canto superior direito do cartão virtual.
- A borda do campo muda de cor para verde quando o número do cartão atinge 19 dígitos.

### Data de Validade
- A data de validade é formatada automaticamente como **MM/AA**.
- Quando a data é inserida corretamente, a borda do campo é alterada para verde.

### CVV
- O CVV é ocultado por padrão e é exibido no verso do cartão virtual.
- Quando o campo **CVV** está focado, o cartão vira para mostrar o verso, exibindo o código CVV inserido.
- A borda do campo muda de cor para verde quando o CVV possui 3 dígitos.

## Aviso de Segurança
Este projeto foi criado para fins de estudo e não deve ser utilizado para inserir informações reais de cartão de crédito. Nenhuma medida de segurança foi implementada para proteger os dados sensíveis.

## Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização básica da página.
- **JavaScript:** Manipulação do DOM para refletir os dados inseridos nos inputs.
