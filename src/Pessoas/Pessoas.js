import React, {Component} from 'react'

import Pessoa from '../Pessoa/Pessoa'

class Pessoas extends Component {
  /*static getDerivedStateFromProps(props, state) {   n usados mais
    console.log('[Pessoas.js] getDerivedStateFromProps');
    return state;
  }*/
  /*componentWilReceiveProps(props) {                   n usados mais
    console.log('[Pessoas.js] componentWilReceiveProps', props);
  } */
 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Pessoas.js] shouldComponentUpdate');
    return true;
  }
 
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Pessoas.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Pessoas.js] componentDidUpdate');
    console.log(snapshot);
  }

    render() {
      console.log('[Pessoas.js] rendering...');
      return this.props.pessoas.map((pessoa, index) => {
      return (<Pessoa 
        click={() => this.props.clicked(index)}
        nome={pessoa.nome} 
        idade={pessoa.idade}
        key={pessoa.id}
        changed={(event) => this.props.changed(event, pessoa.id)}/>
       )
      })

    }
    
}

export default Pessoas;