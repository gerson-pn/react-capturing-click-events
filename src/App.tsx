import { Component } from "react";
import imagem from './img/suit-tie.png'
import './css/estilo.css'

class App extends Component<{ nomes: string[] }, { nomes: string[] }> {
  constructor(props) {
    super(props)
    this.state = {
      nomes: this.props.nomes
    }
  }
  obterListaDeNomes = () => {
    let listaNomes = this.state.nomes.map((nome, indice) =>
      <li key={indice}>
        <div className="alinhamento" >
        <img className="tamanho" src={imagem} alt=''/><br/>
        <button onClick={this.removerNomeDaLista.bind(this, indice)} >{nome}</button>
        </div>
      </li>
    );
    return listaNomes
  }
  removerNomeDaLista(indice: number) {
    let listaNomes = this.state.nomes
    listaNomes.splice(indice,1)
    this.setState({
      nomes:listaNomes
    })
  }
  render() {
    let nomes = this.obterListaDeNomes()
    return (
      <div>
        <ul>{nomes}</ul>
      </div>
    )
  }
}
export default App;