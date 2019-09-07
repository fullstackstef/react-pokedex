import React, { Component } from 'react'
import './Pokecard.scss'

class Pokecard extends Component {
    render() {
        const { name, img, type, exp } = this.props
        return (
            <div className="pokecard">
                <h1 className="pokecard-title">{name}</h1>
                <img src={img} alt={name} className="pokecard-img"/>
                <div className="pokecard-info">
                    <p>Type: {type} </p>
                    <p>EXP: {exp} </p>
                </div>
            </div>
        )
    }
}

export default Pokecard