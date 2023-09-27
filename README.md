# Vendinha Online - Um projeto React Native

Olá. Esse repositório contém uma PoC (Proof of Concepts) acerca do dominio de desenvolvimento de uma aplicação mobile usando os seguintes requisitos:

- Framework: **React Native**
- Linguagem: **JavaScript/Typescript**
- **Clean Code**

Para a realização e conclusão desse projeto, foram necessárias o uso de algumas bibliotecas, que serão citadas abaixo:

## Dependências do Projeto

- **@react-navigation/bottom-tabs** - Adiciona o suporte a navegação por tabs/guias dentro do aplicativo.
- **@react-navigation/native** - Adiciona o suporte a navegação entre layouts/telas dentro do aplicativo.
- **@react-navigation/native-stack** - Adiciona o elemento de stack, que permite a navegação entre layouts/telas dentro do aplicativo.
- **gerador-validador-cpf** - Responsável por fazer a validação de CPF dentro da aplicação.
- **nativewind** - Biblioteca de estilização para React Native que usa o Tailwind CSS para estilização no mobile.
- **react** - Framework JavaScript/TypeScript que permite o desenvolvimento de uma SPA.
- **react-native** - Biblioteca responsável por distribuir os elementos para desenvolvimento da aplicação mobile em JavaScript/TypeScript.
- **react-native-date-picker** - Responsável por fornecer um elemento para seleção de data  ou data e hora para a aplicação (tanto em android, quanto em ios), de forma nativa.
- **react-native-event-listeners** - Responsável por fazer o gerenciamento e emissão de eventos/mensagens/sinais dentro da aplicação.
- **react-native-fade-loading** - Responsável por gerar animações de um elemento customizável dentro do aplicativo.
- **react-native-safe-area-context** - Responsável por fornecer um elemento React/React Native que exiba elementos dentro da "área segura" do dispositivo.
- **react-native-screens** - Responsável por gerenciar múltiplas telas (em múltiplas views) dentro da aplicação.
- **react-native-vector-icons** - Responsável por fornecer ícones de bibliotecas populares para uso dentro da aplicação.

## Dependências de Desenvolvimento do Projeto

- **@babel/core** - Núcleo do compilador JavaScript usado no projeto React Native.
- **@babel/preset-env** - Bibiloteca que permite padronizar o ambiente de desenvolvimento para o babel.
- **@babel/runtime** - Biblioteca que auxilia no monitoramento do fluxo da aplicação compilada com o babel.
- **@react-native/eslint-config** - Plugin do eslint que adiciona o suporte e entendimento de propriedades e elementos usados no React Native.
- **@react-native/metro-config** - Ferramenta que permite a compilação da aplicação para a plataforma mobile (android e/ou ios).
- **@tsconfig/react-native** - Biblioteca que permite a configuração do typescript no projeto.
- **@types/react** - Biblioteca que trás o retorno esperado de todos os componentes da biblioteca react.
- **@types/react-native-vector-icons** - Biblioteca que trás o retorno esperado de todos os componentes da biblioteca de ícones do react do projeto.
- **@types/react-test-renderer** - Biblioteca que trás o retorno esperado de todos os componentes da biblioteca de teste de render do react.
- **@typescript-eslint/parser** - Plugin do eslint que permite a formatação/ajustes do código typescript.
- **babel-jest** - Biblioteca de testes Jest do compilador Babel
- **eslint** - Biblioteca que auxilia na padronização de código dentro do projeto.
- **eslint-plugin-prettier** - Plugin do eslint que evita o conflito e realiza a comunicação entre o eslint e o prettier.
- **eslint-plugin-tailwindcss** - Plugin do eslint que adiciona o suporte e entendimento de propriedades, elementos e classes usados no NativeWind e Tailwind CSS.
- **jest** - Biblioteca de testes automatizados de comportamentos esperados da aplicação.
- **metro-react-native-babel-preset** - Biblioteca que adiciona padrões e comportamentos do Metro ao compilador Babel e permite trabalhar em conjunto.
- **prettier** - Formatador e padronizador de código.
- **prettier-plugin-tailwindcss** - Plugin do prettier que adiciona o suporte e entendimento de propriedades, elementos e classes usados no NativeWind e Tailwind CSS.
- **react-test-renderer** - Biblioteca que adiciona métodos extras para renderização de elementos dentro do React Native
- **tailwindcss** - Biblioteca de estilização de elementos web.
- **typescript** - Biblioteca que adiciona o suporte ao typescript ao projeto, que é a linguagem JavaScript, com tipagem dos objetos.

<hr></hr>

# Execução do Projeto

Para testar e desfrutar do projeto, você tem 2 alternativas:

- Clonar o projeto e configurar em sua máquina
- Instalar o aplicativo em um emulador/dispositivo android.

## Instalando em um dispositivo android

- Faça o download de qualquer uma das versões postadas [**aqui**](https://github.com/PQPMath3ws/vendinha_mobile_poc/releases/tag/release) (versão assinada x versão não assinada).

- Instale no dispositivo de preferência

- Abra a aplicação, após instalada!

## Clonando o projeto

Abra um terminal/console no seu sistema operacional e insira o comando:

```
git clone https://github.com/PQPMath3ws/vendinha_mobile_poc.git
```

Navegue até o diretório clonado:

```
cd vendinha_mobile_poc/
```

Garanta de instalar as dependências do projeto primeiro, com o comando:

```
npm install
```

Depois, execute o Metro do React Native, com esse comando:

```
npm run start
```

Para executar no android, aperte a tecla **A**. Para executar no iOS, aperte a tecla **I**.

Aguarde o aplicativo compilar e pronto!

OBS: Para executar no android, é necessário que esteja com o modo de depuração ativado no android (pois a instalação é realizada via ADB).