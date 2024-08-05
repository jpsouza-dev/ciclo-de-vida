import React from "react";

export class Counter extends React.Component {
  //primeira parte da montagem do componente contador
  constructor() {
    super();
    this.state = { contador: 0 };
  }
  //UNSAFE_componentWillMoun nao e recomendado segunda parte da Montagem
  UNSAFE_componentWillMount() {}

  //componentDidMount metodo recomendado quarta e ultima parte de montagem
  componentDidMount() {
    //scroll evento de rolagem da pagina
    document.addEventListener("scroll", this.consoleScroll);
  }

  //meotodo chamado sempre que o prop ou estado for atualizado, se estiver como false o componente nunca vai atualizar esse metodo serve para controlar o quando que deve ser atualizado
  shouldComponentUpdate() {
    return true;
  }

  //UNSAFE_componentWillUpdate avisa sempre quando o componente for atualizado 1 parte de atualizacao
  UNSAFE_componentWillUpdate() {}
  //metodo render() renderiza antes  do componentDidMount terceira parte da montagem/ e reenderiza sempre que o componente for alterado

  // componentDidUpdate serve para avisar que o componente foi atualizado com sucesso 2 parte de atualizacao
  componentDidUpdate() {}

  //serve para desmontagem
  componentWillUnmount() {
    //removendo evento scroll da pagina
    document.removeEventListener("scroll", this.consoleScroll);
  }
  consoleScroll() {}
  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
      </div>
    );
  }
}
