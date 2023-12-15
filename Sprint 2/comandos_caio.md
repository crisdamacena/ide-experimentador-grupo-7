

## Como rodar o projeto?

O primeiro passo é baixar o repositório utilizando os comandos a seguir:

```bash

git clone git@github.com:crisdamacena/ide-experimentador-grupo-7.git
```

Para saber mais sobre como clonar, [clique aqui](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

Com o projeto instalado, é necessário configurar o [Bun.js](https://bun.sh/).  O Bun é um gerenciador de pacotes JavaScript compatível com pacotes npm

#### O Bun

[Instale](https://bun.sh/docs/installation)usando o seguinte comando:

```bash
curl -fsSL https://bun.sh/install | bash
````

Em seguida, execute `exec /bin/zsh ` para atualizar o terminal e depois `bun --help` para visualizar as opções de comandos `bun`:

```
`Bun is a fast JavaScript runtime, package manager, bundler, and test runner. (1.0.15 (b3bdf22e))

Usage: bun <command> [...flags] [...args]

Commands:
  run       ./my-script.ts       Execute a file with Bun
            lint                 Run a package.json script
  test                           Run unit tests with Bun
  x         eslint               Execute a package binary (CLI), installing if needed (bunx)
  repl                           Start a REPL session with Bun

  install                        Install dependencies for a package.json (bun i)
  add       next-app             Add a dependency to package.json (bun a)
  remove    @evan/duckdb         Remove a dependency from package.json (bun rm)
  update    browserify           Update outdated dependencies
  link      [<package>]          Register or link a local npm package
  unlink                         Unregister a local npm package
  pm <subcommand>                Additional package management utilities

  build     ./a.ts ./b.jsx       Bundle TypeScript & JavaScript into a single file

  init                           Start an empty Bun project from a blank template
  create    @zarfjs/zarf         Create a new project from a template (bun c)
  upgrade                        Upgrade to latest version of Bun.
  <command> --help               Print help text for command.

Flags:
      --watch                    Automatically restart the process on file change
      --hot                      Enable auto reload in the Bun runtime, test runner, or bundler
      --smol                     Use less memory, but run garbage collection more often
  -r, --preload                  Import a module before other modules are loaded
      --inspect                  Activate Bun's debugger
      --inspect-wait             Activate Bun's debugger, wait for a connection before executing
      --inspect-brk              Activate Bun's debugger, set breakpoint on first line of code and wait
      --if-present               Exit without an error if the entrypoint does not exist
      --no-install               Disable auto install in the Bun runtime
      --install                  Configure auto-install behavior. One of "auto" (default, auto-installs when no node_modules), "fallback" (missing packages only), "force" (always).
  -i                             Auto-install dependencies during execution. Equivalent to --install=fallback.
  -e, --eval                     Evaluate argument as a script
      --prefer-offline           Skip staleness checks for packages in the Bun runtime and resolve from disk
      --prefer-latest            Use the latest matching versions of packages in the Bun runtime, always checking npm
  -p, --port                     Set the default port for Bun.serve
  -b, --bun                      Force a script or package to use Bun's runtime instead of Node.js (via symlinking node)
      --silent                   Don't print the script command
  -v, --version                  Print version and exit
      --revision                 Print version with revision and exit
      --env-file                 Load environment variables from the specified file(s)
      --cwd                      Absolute path to resolve files & entry points from. This just changes the process' cwd.
  -c, --config                   Specify path to Bun config file. Default $cwd/bunfig.toml
  -h, --help                     Display this menu and exit
`
```

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
