import React, {Component} from 'react';

class Pokedex extends Component {
    render(){
        const {name, base_experience} = this.props.details;
        const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.props.details.id}.png`
        return(
            <div className="card">
                <img src={imgurl}/>
                <h4 className="name">{name}</h4> 
                <h5>Exp: {base_experience}</h5>
            </div>
        )
    }
    
}

export default Pokedex;