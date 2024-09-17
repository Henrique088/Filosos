# Frontend - Pesquisa de Filósofos

Este diretório contém o código do frontend da aplicação, desenvolvido com **React**. A interface permite a pesquisa de filósofos e exibe os resultados dinamicamente, com um design simples e responsivo.

## Estrutura

- **Navbar**: Barra de navegação fixa no topo.
- **Campo de Pesquisa**: Campo de input para o nome do filósofo.
- **Botão de Busca**: Realiza a pesquisa ao ser pressionado.
- **Área de Resultados**: Exibe os resultados da pesquisa abaixo do botão.
- **Footer**: Rodapé fixo ao final da página.

## Tecnologias Utilizadas

- **Framework**: React
- **Linguagens**: HTML5, CSS3, JavaScript
- **Comunicação**: Fetch API para enviar requisições ao backend

## Como Executar o Frontend

### 1. Navegue até o diretório `frontend`:

```bash
cd frontend/filosofos
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O frontend será aberto automaticamente em `http://localhost:3000`.

## Funcionalidades

- **Pesquisa Dinâmica**: Permite buscar filósofos e exibe os resultados correspondentes.
- **Prevenção de Submissão Automática**: Apenas exibe resultados após pressionar o botão de busca.
- **Responsividade**: Interface adaptada para diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.

## Estrutura de Arquivos

- **`src/App.js`**: Componente principal que gerencia o estado da pesquisa e renderiza a interface.
- **`src/components/Navbar.js`**: Componente para a barra de navegação.
- **`src/components/SearchInput.js`**: Componente para o campo de pesquisa e botão de busca.
- **`src/components/Results.js`**: Componente para exibir os resultados da pesquisa.
- **`src/App.css`**: Arquivo CSS para estilização global.

## Melhorias Futuras

- Implementar feedback visual enquanto a pesquisa está sendo realizada.
- Adicionar funcionalidades como filtros e ordenação dos resultados.
- Melhorar a experiência do usuário (UI/UX) com base em feedback.

## Licença

Este projeto está licenciado sob a [MIT License](.././LICENSE.md).
```

### Pontos principais:
- **Estrutura**: Descreve a estrutura da aplicação frontend e os principais componentes.
- **Tecnologias e Funcionalidades**: Destaca as tecnologias usadas e as funcionalidades principais.
- **Instruções de Execução**: Fornece passos claros para executar a aplicação.
- **Melhorias Futuras**: Sugestões para aprimorar a aplicação.

Este README é voltado para desenvolvedores que irão trabalhar com o frontend, fornecendo informações úteis sobre a configuração, estrutura e possíveis melhorias.
