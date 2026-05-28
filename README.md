# Projeto MongoDB Commerce

## Habilidades adquiridas

- Utilizar o método `updateOne()` e `updateMany()`
- Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`
- Renomear campos e remover campos
- Incorporar dados aos documentos através de arrays
- Utilizar os operadores `$pop`, `$pull` e `$push`
- Utilizar o operador `$addToSet`
- Utilizar os operadores `$each`, `$slice` e `$sort`
- Utilizar o operador `$all` para filtrar documentos
- Utilizar o operador `$elemMatch` para filtrar documentos
- Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays
- Utilizar o operador `$expr` para criar expressões de agregação
- Utilizar expressões regulares e o operador `$regex` para buscar documentos
- Utilizar o índice textual e o operador `$text`
- Utilizar o operador `$mod`

## Instruções para restaurar o banco de dados `commerce`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como **_Connection refused_**, tente reiniciar sua instância.
2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.
3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `commerce`:
   ```sh
   DBNAME=commerce ./scripts/resetdb.sh assets/produtos
   ```

## Instruções para testar suas queries

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:

```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio.
