
import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior < 10 ? valorAnterior + 1 : valorAnterior
    );
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Minha primeira aplicação React</h1>
        <p>Praticando o useState</p>
      </header>

      <section className="cartao">
        <h2>Missão 1 — Contador</h2>

        <p className="numero">{contador}</p>

        <div className="botoes">
          <button onClick={diminuir}>Voltar um</button>
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={() => setContador(0)}>Zerar</button>
        </div>

        {contador === 10 && (
          <p className="sucesso">Meta atingida!</p>
        )}
      </section>

      <section className="cartao">
        <h2>Missão 2 — Aviso</h2>

        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>

        {visivel && (
          <p className="aviso">O aviso está visível!</p>
        )}
      </section>

      <section className="cartao">
        <h2>Missão 3 — Saudação</h2>

        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />

        <p>Olá, {nome || "visitante"}!</p>
      </section>

      <section className="cartao destaque">
        <h2>Desafio final — Cartão de boas-vindas</h2>

        <p>Digite seu nome para personalizar sua saudação.</p>

        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Seu nome aqui"
        />

        <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
          {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
        </button>

        {mostrarSaudacao && (
          <p className="saudacao">
            Olá, {nome || "visitante"}!
          </p>
        )}
      </section>

      <footer>
        <p>Atividade React — useState</p>
      </footer>
    </main>
  );
}

export default App;
