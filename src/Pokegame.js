import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.scss';

const data = [
	{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

const randomPokemon = () => data[Math.floor(Math.random() * data.length)];

const createPropsData = () => {
	const arr = [];
	for (let i = 0; i < 4; i++) {
		arr.push(randomPokemon());
	}
	return arr;
}

const propsData1 = createPropsData();
const propsData2 = createPropsData();

const calculateExperience = (propsData) => {
	const experience = propsData.map((pokemon) => pokemon.base_experience);
	return experience.reduce((acc, nxt) => acc + nxt, 0);
}

const totalExp1 = calculateExperience(propsData1);
const totalExp2 = calculateExperience(propsData2);

let isWinner1, isWinner2;

if (totalExp1 < totalExp2) {
	isWinner1 = false;
	isWinner2 = true;
} else if (totalExp1 === totalExp2) {
	isWinner1 = 'Draw!';
	isWinner2 = 'Draw!';
} else {
	isWinner1 = true;
	isWinner2 = false;
}

const playAgain = () => window.location.reload(false)

class Pokegame extends Component {
	render() {
		return (
			<div className="Pokegame">
            <img className="pokedex-title" src="https://fontmeme.com/permalink/190906/f87c04db0b54e3b89caa3d1d3ee405fb.png" alt="pokemon-font" border="0"></img>
            <button className="playAgainBtn" onClick={playAgain}>PLAY AGAIN!</button>
				<Pokedex data={propsData1} isWinner={isWinner1} />
				<Pokedex data={propsData2} isWinner={isWinner2} />
			</div>
		);
	}
}

export default Pokegame;