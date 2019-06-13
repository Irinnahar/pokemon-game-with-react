import React , {Component} from 'react';
import Pokedex from './pokedex/pokdex';
import './App.css';
import axios from './utils/Api';

class App extends Component {
  temp = [];
  state = {
    pokemon : []
  }
  
  componentDidMount(){
    axios.get('/?offset=0&limit=500').then(response => {
      response.data['results'].map(data => {
        axios.get(`/${data.name}`).then(pokemon => {
          this.temp.push(pokemon.data)
          return (this.setState({
           pokemon : this.temp
          }))
        })
      })      
    })   
  }

  render(){
    const pokedex = this.state.pokemon.map(data => {
      return <Pokedex details = {data} key = {data.id}/>
    })

    return (
      <div className="App">
        <div className="container-fluid">
          {pokedex}
        </div>
      </div>
    );
  }
 
}

export default App;
