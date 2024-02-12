# Express-GPT
### Descrição
Este projeto é uma prova de conceito que demonstra como a Inteligência Artificial (IA) pode ser utilizada para realizar validações de API e tratamento de erros, tornando os projetos menores e mais fáceis de manter. Com um treinamento adequado, é possível otimizar o fluxo de trabalho, tornando todas as validações mais seguras, assertivas e inteligentes.

### Funcionalidades
O projeto utiliza a biblioteca OpenAI para realizar as seguintes tarefas:

- Validação de entrada: A IA valida se o usuário preencheu corretamente seus dados no momento do cadastro. Ela verifica se os campos de nome, email e senha foram preenchidos corretamente e se a senha possui pelo menos 8 caracteres.

- Tratamento de erros: A IA atua como um middleware no Express.js, analisando erros e gerando respostas. Ela retorna um objeto JSON { status, message }, com status sendo o código HTTP e message uma descrição do erro.

### Instalação
1. Clone o repositório para a sua máquina local usando ```git clone```.
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
