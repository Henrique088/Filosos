# Projeto: Integração de Frontend com Backend

Este projeto integra um frontend simples e responsivo em **React** com um backend em **Django**. A aplicação permite que os usuários pesquisem filósofos em uma base de dados e exibe os resultados dinamicamente.

## Visão Geral

- **Frontend**: Interface de usuário simples e responsiva para pesquisa de filósofos.
- **Backend**: API criada em Django para fornecer os dados ao frontend.
- **Banco de Dados**: Base de dados com filósofos, utilizando o banco de dados padrão do Django (SQLite).

## Estrutura do Projeto

- **front-end/filosofos/**: Contém a aplicação React.
- **Backend/**: Contém o projeto Django.

## Tecnologias Utilizadas

- **Frontend**: React, HTML5, CSS3, JavaScript (Fetch API)
- **Backend**: Django, Python, Banco de Dados SQLite
- **Comunicação**: Fetch API e CORS Headers para permitir a comunicação entre frontend e backend.

## Funcionalidades

- Pesquisa de filósofos em uma base de dados.
- Resultados apresentados dinamicamente.
- Prevenção de submissão automática (sem pressionar o botão de busca).
- Design simples e responsivo.

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-repositorio/projeto-filosofo.git
```

### 2. Executar o Frontend

1. Navegue até o diretório `front-end`:
   ```bash
   cd front-end
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   O front-end estará disponível em `http://localhost:3000`.

### 3. Executar o Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   ```
2. Crie e ative o ambiente virtual:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Para Linux/Mac
   venv\Scripts\activate  # Para Windows
   ```
3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
4. Rode as migrações para configurar o banco de dados:
   ```bash
   python manage.py migrate
   ```
5. Carregue os dados dos filósofos:
   ```bash
   python manage.py loaddata dados.json
   ```
6. Inicie o servidor Django:
   ```bash
   python manage.py runserver
   ```
   O backend estará disponível em `http://localhost:8000`.

## Melhorias Futuras

- Expandir a base de dados de filósofos.
- Melhorar a experiência do usuário (UI/UX).
- Adicionar mais funcionalidades, como filtros e ordenação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).
```

Esse README fornece uma visão geral clara do projeto, com instruções detalhadas sobre como executar tanto o frontend quanto o backend, e inclui sugestões para melhorias futuras.
