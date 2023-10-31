# Case Frontend

Desafio:
Criar uma aplicação no modelo SPA usando Angular (12 ou mais recente) para consulta e cadastro de produtos que deve conter as reguintes funcionalidades:

Consulta de Produtos:
Tela onde serão apresentados todos os produtos cadastrados possibilitando a pesquisa por código e/ou categoria (opções: atacado, varejo, internacional, todos).
Deve exibir uma lista contendo código do produto, nome, categoria.
Inclusão:
Tela para permitir a inclusão de um produto novo, permitindo informar código (único e não deve repetir), nome e categoria (deve ser uma lista pré-definida). Deve ter as opções de salvar ou voltar para a tela de consulta.
Alteração:
Tela para permitir alterar nome e categoria de um produto já existente. Deve ter as opções de salvar ou voltar para a tela de consulta.
Exclusão:
Excluir um determinado produto da lista apresentada na tela de consulta, solicitando a confirmação do usuário.

## Informações sobre o Projeto

Este projeto foi gerado via [Angular CLI](https://github.com/angular/angular-cli) na versão 13.3.2.

## Servidor de desenvolvimento

Execute o comando `json-server --watch src/assets/db.json` para iniciar um servidor backend local. A rota de acesso é `http://localhost:3000/`. 

Após executar a subida do servidor backend local, em outro terminal execute o comando `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar algum dos arquivos de origem.

## Incrementar código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directiva|pipe|service|class|guard|interface|enum|module`.

## Comando para Build da Aplicação

Execute `ng build` para buildar o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral do Angular CLI e referência de comandos](https://angular.io/cli).

Ou entre em contato via email: ruy.jr.duarte@outlook.com
