import React, { Component } from 'react'
import './Pokedex.scss'

//COMPONENTS
import Pokecard from './Pokecard'

class Pokedex extends Component {
    static defaultProps = {
        pokemonImg: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
    }
    render() {
        const { data, pokemonImg } = this.props
        const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)
        return (
            <div className="pokedex">
                {this.props.isWinner ? (
					<h2 className="pokedex-winner">WINNER!</h2>
				) : (
					<h2 className="pokedex-loser">LOSER!</h2>
				)}
                <div className="pokedex-container">
                {
                    data.map((p) => (
                        <Pokecard
                            key={p.id++} 
                            name={p.name}
                            img={`${pokemonImg}/${padToThree(p.id)}.png`}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))
                }
                </div>
            </div> 
        )
    }
}

export default Pokedex