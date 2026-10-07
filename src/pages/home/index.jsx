import "./home.css"

export default function index() {
  return (
    <main className="container">
        <div className="container-cards">
            <div className="cards">
                <h1>Provas concluídas</h1>
                <p>1</p>
            </div>
            <div className="cardss">
                <h1>Tempo de RP</h1>
                <p>02:20:10</p>
                <strong>Última prova: 01:10:56</strong>
            </div>
        </div>
        <div className="container-navs">
            <div className="navs">
                <button>Minhas Provas</button>
                <button>Minhas Métricas</button>
            </div>
            <div className="registrar">
                <button>Registrar Nova Prova</button>
            </div>
        </div>
    </main>
  )
}
