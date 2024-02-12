# Express-GPT

Este projeto é uma prova de conceito que demonstra como a Inteligência Artificial (IA) pode ser utilizada para realizar validações de API e tratamento de erros, tornando os projetos menores e mais fáceis de manter. 

Com um treinamento adequado, é possível otimizar o fluxo de trabalho, tornando todas as validações mais seguras, assertivas e inteligentes.

### Funcionalidades
O projeto utiliza a biblioteca OpenAI para realizar as seguintes tarefas:

- Validação de entrada: A IA valida se o usuário preencheu corretamente seus dados no momento do cadastro. Ela verifica se os campos de nome, email e senha foram preenchidos corretamente e se a senha possui pelo menos 8 caracteres.

- Tratamento de erros: A IA atua como um middleware no Express.js, analisando erros e gerando respostas. Ela retorna um objeto JSON { status, message }, com status sendo o código HTTP e message uma descrição do erro.

### Requisitos
- Node versão 20.6.0 ou superior.
- Ter uma conta no OpenAI para obter o token para realizar requisições na API deles.

### Instalação
1. Clone o repositório para a sua máquina local usando ```git clone git@github.com:thadeucbr/Express-GPT.git```.
2. Navegue até o diretório do projeto.
3. Execute npm install para instalar as dependências do projeto.

### Configuração
Crie um arquivo **config.env** na raiz do projeto e adicione a seguinte variável de ambiente:

```API_KEY=sua-chave-api```

Substitua **sua-chave-api** pela chave da API sua chave openai.

### Execução
Para iniciar o servidor, execute o seguinte comando:

```npm start```

O servidor começará a rodar na porta 3000.

## Exemplos de Requisições
Aqui estão três exemplos de requisições CURL para a rota /user do seu servidor Express. Cada exemplo representa um cenário diferente.

### 1. Email inválido
```curl -X POST -H "Content-Type: application/json" -d '{"name":"João","email":"joao.emailinvalido","senha":"senha123"}' http://localhost:3000/user```

Neste exemplo, estamos enviando uma requisição POST para a rota /user com um email inválido.

### 2. Senha com menos de 6 caracteres
```curl -X POST -H "Content-Type: application/json" -d '{"name":"João","email":"joao@email.com","senha":"123"}' http://localhost:3000/user```

Neste exemplo, estamos enviando uma requisição POST para a rota /user com uma senha que tem menos de 6 caracteres.

### 3. Todos os dados corretos
```curl -X POST -H "Content-Type: application/json" -d '{"name":"João","email":"joao@email.com","senha":"senha123"}' http://localhost:3000/user```

Neste exemplo, estamos enviando uma requisição POST para a rota /user com todos os dados corretos.

### Como executar os comandos CURL

Para executar esses comandos, você precisa abrir um terminal no seu computador. Em seguida, copie e cole o comando CURL desejado no terminal e pressione Enter. O comando CURL enviará uma requisição para o servidor e você verá a resposta no terminal.

### Importando CURL no Postman

Se você preferir usar o Postman, você pode importar os comandos CURL diretamente para ele. Para fazer isso, siga estas etapas:

1. Abra o Postman.
2. Clique em ‘Import’ no canto superior esquerdo.
3. Selecione a aba ‘Raw Text’.
4. Cole o comando CURL no campo de texto.
5. Clique em ‘Import’ para importar o comando.
6. Agora você pode ver a requisição importada no Postman e pode enviá-la clicando em ‘Send’.
