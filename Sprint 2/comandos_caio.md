

## Como rodar o projeto?

O primeiro passo é baixar o repositório utilizando os comandos a seguir:

```bash

git clone git@github.com:crisdamacena/ide-experimentador-grupo-7.git
```

Para saber mais sobre como clonar, [clique aqui](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

Com o projeto instalado, é necessário configurar o [Bun.js](https://bun.sh/).  O Bun é um gerenciador de pacotes JavaScript compatível com pacotes npm

#### O Bun

[Instale](https://bun.sh/docs/installation) usando o seguinte comando:

```bash
curl -fsSL https://bun.sh/install | bash
````

Em seguida, execute `exec /bin/zsh ` para atualizar o terminal e depois `bun --help` para visualizar as opções de comandos `bun`.

Para iniciar o programa, execute

```bash
bun install
```

para acessar pacotes importantes para aplicação. 

Em seguida, 

```bash
bun run start
bun install
``````


versão obrigatória: ruby 2.7.5 

```bash
bundle update --bundler
``````
```bash
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
``````
```bash
asdf install ruby 2.7.5  
``````
reiniciar o terminal após instalar a versão

` ./bin/dev `

Rodar comando para os erros de banco de dados

```bash
bin/rails db:migrate
```

Para testar a aplicação acesse

http://127.0.0.1:3000/hello/world

executar cucumber:  
```bash
bundle exec cucumber
```
 (não precisa de servidor rodando)

No capybara todo cenário precisa ter @javascript

Rspec é o teste unitário 

Checklist:
Débitos sprint 2
	Teste unitário
	BDD
	Migrar lógicas para o backend
	Integrar no Rails
Sprint 3
	Baixar as gemas
	Gema de documentação irá gerar docs automáticas (Rdoc)
	Criar uma wiki detalhando os débitos e a entrega da sprint 3
