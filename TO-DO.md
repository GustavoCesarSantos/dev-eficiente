Refatorar todas as controllers para ser uma controller para cada endpoint, deixando assim as controllers 100%, pois do jeito que esta feito atualmente
a controller tem repositorios que não são usando por todos os métodos ou não tem conexão entre os método que permita que eles estejam na mesma classe e ela seja 100% coesa.

Criar dto de resposta para o endpoint listarLivros

Corrigir o endpoint encontrarLivro, para receber o id do autor e da categoria, e utilizar o repositorio para pegar o autor e categoria
