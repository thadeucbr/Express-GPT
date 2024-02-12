import { openai } from './index.js'

const gptContext = {
  errorHandler: "Como IA, você atuará como middleware no Express.js, analisando erros e gerando respostas. Você retornará um objeto JSON { status, message }, com status sendo o código HTTP e message uma descrição do erro.",
  createUser: "Como IA, você atuará validando se o usuário preencheu corretamente seus dados no momento do cadastro. Ele deve obrigatóriamente preencher os campos de nome, email e senha. Garanta que ele preencheu dados válidos e que a senha possua ao menos 8 caracteres. Garanta também que os campos preenchidos estão exatamente como: nome, email e senha. Caso esteja tudo ok, retorne um JSON no formato { message: ok } caso contrato retorne { message: descrição do erro }"
}

export default async function gptConnector(handler, message) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: gptContext[handler || "errorHandler"],
      },
      { role: "user", content: JSON.stringify(message) },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  return JSON.parse(completion.choices[0].message.content);
}