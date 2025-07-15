# NFeWizard-io

Este repositório contém uma configuração básica para utilização local da biblioteca [nfewizard-io](https://github.com/nfewizard-org/nfewizard-io).

## Como instalar e executar

```sh
git clone https://github.com/nfewizard-org/nfewizard-io.git
cd nfewizard-io
npm i
npm run build
npm link
```

Em outra pasta

```sh
git clone https://github.com/diasjoaovitor/nfewizard-example.git
nfewizard-example
npm i
npm link nfewizard-io
npm run dev
```

Após essas configurações, qualquer alteração feita no código presente em `nfewizard-example` ou na pasta `src` no modulo `nfewizard-io` irá reiniciar automaticamente o servidor.
