# Backend - API de Filósofos

Este diretório contém a API desenvolvida em **Django** que fornece dados sobre filósofos para o frontend. A API recebe requisições de pesquisa e responde com informações sobre filósofos armazenadas no banco de dados.

## Funcionalidades

- **API REST**: Recebe dados de pesquisa via requisições POST e retorna os filósofos correspondentes em formato JSON.
- **Banco de Dados**: Utiliza o banco de dados padrão do Django (SQLite) para armazenar e gerenciar os dados dos filósofos.
- **CORS Headers**: Configurado para permitir comunicação com o frontend React.

## Endpoint

- **POST /filosofos/envia/**: Recebe uma requisição com o nome do filósofo no corpo (body) e retorna as correspondências da base de dados.

### Exemplo de Requisição POST

```bash
POST http://127.0.0.1:8000/filosofos/envia/
Content-Type: application/json

{
  "nome": "Platão"
}
```

### Exemplo de Resposta

```json
[
  {
     "link": "https://pt.wikipedia.org/wiki/Martin_Heidegger",
     "titulo": "Martin Heidegger",
     "descricao": "Martin Heidegger foi um filósofo alemão cujo trabalho influenciou significativamente a fenomenologia e a existência. Sua obra 'Ser e Tempo' explora a questão do ser e da existência humana, e seu pensamento é fundamental para a filosofia contemporânea.",
     "frase": "\"O ser que se torna visível é sempre o ser do nada.\""
  }
]
```

## Tecnologias Utilizadas

- **Framework**: Django (versão 3.x ou superior)
- **Banco de Dados**: SQLite (padrão do Django)
- **CORS Middleware**: Para permitir a comunicação entre o frontend e o backend.

## Como Configurar o Backend

### 1. Navegue até o diretório `backend`:

```bash
cd backend
```

### 2. Crie e ative o ambiente virtual:

```bash
python3 -m venv venv
source venv/bin/activate  # Para Linux/Mac
venv\Scripts\activate  # Para Windows
```

### 3. Instale as dependências:

```bash
pip install -r requirements.txt
```

### 4. Rode as migrações para configurar o banco de dados:

```bash
python manage.py migrate
```

### 5. Carregue os dados dos filósofos:

```bash
python manage.py loaddata filosofos_fixture.json
```

### 6. Inicie o servidor:

```bash
python manage.py runserver
```

O backend estará disponível em `http://127.0.0.1:8000`.

## Arquivos Importantes

- **`models.py`**: Contém a definição do modelo do filósofo no banco de dados.
- **`views.py`**: Contém a lógica para lidar com requisições POST e retornar os dados solicitados pelo frontend.
- **`urls.py`**: Define as rotas/endpoints da API.
- **`corsheaders`**: Configuração no arquivo `settings.py` para permitir comunicação entre diferentes origens (CORS).

## Melhorias Futuras

- Implementar autenticação para rotas protegidas.
- Expandir a API com mais filtros e parâmetros de pesquisa.
- Adicionar testes automatizados para garantir a integridade do código.

## Licença

Este projeto está licenciado sob a [MIT License](../LICENSE.md).
```

Agora o README reflete o fato de que o backend usa apenas o método **POST** no endpoint `/filosofos/envia/`.
