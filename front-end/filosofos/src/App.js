// src/PesquisaFilosofo.js
import React, { useState, useRef } from 'react';
import dados from './dados'; // Importa o array de dados (filósofos)
import './style.css'; // Importa o CSS para estilizar o componente
import logo from './coracao.png';

function App() {

  const [data, setData] = useState('');
  const [result, setResult] = useState('');
  const [botao, setBotao] = useState('');

  async function handleSubmit(e) {
    e.preventDefault(); // previne atualização da pagina ao enviar o formulario
    const response = await fetch('http://127.0.0.1:8000/filosofos/envia/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    const result = await response.json();
    if (result.length === 0) {
      // alert('Filosófo não existe na base de dados');
      setBotao('clicado');
      setResult('');

    }
    else {
      setResult(result);
      setData('');
      setBotao('clicado');

      console.log(result);
      console.log(data);
    }

  }

  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#"><img src={logo} alt="logo de coracao" /></a>
          <a href="#" className="princi">Filósofia diária</a>
        </div>

        {/* <div className="top-right">
          <a>Filósofo</a>
          <a>Frases</a>
        </div> */}
      </nav>
      <header>
        <h1>Frases Filosóficas</h1>
        <div className="loader"></div>
        <h2>Encontre um Filósofo</h2>
      </header>
      <main>
        <div className="ali">
          <section className="form-control">
            <input
              placeholder="Digite para buscar"
              type="text"
              className="input input-alt"
              value={data}
              onChange={(e) => setData(e.target.value)}

            />
            <span className="input-border input-border-alt"></span>
          </section>
          <button id="botao" type='submit' onClick={handleSubmit}>Pesquisar</button>
        </div>
        <section className="resultados-pesquisa">
          {Object.keys(result).length <= 0 && botao === 'clicado' ? (
            <div className="item-resultado">
              <p>Filósofo não encontrado na base de dados.</p>
            </div>
          ) : botao === 'clicado' ? (

            <div className="item-resultado" >
              {result.map((filosofo, index) => (
                <div key={index} className="filosofo-item">
                  <h2>
                    <a href={filosofo.link} target="_blank" className="titulo" rel="noopener noreferrer">
                      {filosofo.titulo}
                    </a>
                  </h2>
                  <p>{filosofo.descricao}<br /><br />{filosofo.frase}</p>
                  <a href={filosofo.link} target="_blank" rel="noopener noreferrer">Saiba Mais</a>
                </div>
              ))}
            </div>
          ) : null}

        </section>
      </main>
      <footer>
        <a>Todos os direitos reservados - 2024</a>
        <a>Contato: henriqueribeiro88bb@gmail.com</a>
      </footer>
    </div>
  );
};

export default App;
