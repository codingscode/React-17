import React from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
    const classesAssinaladas = [];
    let botaoClasse = '';
    if (props.mostrarPessoas) {
        botaoClasse = classes.vermelho;
    }
    
    if (props.pessoas.length <= 2) {
      classesAssinaladas.push(classes.vermelho);  
    }
    if (props.pessoas.length <= 1) {
      classesAssinaladas.push(classes.negrito);  
    }
   
    return (
     <div className={classes.Cockpit}>  
        <h1>{props.title}</h1>
        <p className={classesAssinaladas.join(' ')}>Isto está funcionando</p>
        <button 
        className={botaoClasse}
        onClick={props.clicked}>Alternancia de Pessoas
        </button>
     </div>
   );
};


export default cockpit;