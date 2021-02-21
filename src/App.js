import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { SearchBar } from './components/SearchBar';
import { PokemonDetail } from './components/PokemonDetail'
import { BackButton } from './components/BackButton'
import { getPokemonData, getPokemons, searchPokemon } from './api/api';

function App() {

	const [pokemons, setPokemons] = useState([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
  	const [searching, setSearching] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [pokemonDetail, setPokemonDetail] = useState({});

	const fetchPokemons = async () => {
		try {
			setLoading(true);
			const data = await getPokemons(12, 12 * page);
			const promises = data.results.map( async (pokemon) => {
				return await getPokemonData(pokemon.url)
			});
			const results = await Promise.all(promises);
			setPokemons(results);
			setLoading(false);
			setTotal(Math.ceil(data.count / 12))
			setNotFound(false);
		} catch (error) {

		}
	}

	useEffect(() => {
		if(!searching) {
		  	fetchPokemons();
		}
	}, [page]);

	const onSearch = async (pokemon) => {
		if(!pokemon) {
		  	return fetchPokemons();
		}
		setLoading(true);
		setNotFound(false);
		setSearching(true);
		const result = await searchPokemon(pokemon);
		if (!result) {
			setNotFound(true);
			setLoading(false);
			setSearching(false);
			return;
		} else {
			setPokemons([result]);
			setPage(0);
			setTotal(1);
		}
		setLoading(false);
		setSearching(false);
	};

	return (
		<div className="App bg-blue-50 min-h-screen">
			<Header />
			<div className='container mx-auto'>
				<SearchBar onSearch={onSearch} />
				{
					notFound ? (
						<>
							<div className='font-bold mb-4'>No pokemon found</div>
							<BackButton fetchPokemons={fetchPokemons} />
						</>
					) : (
						<Pokedex
							loading={loading}
							pokemons={pokemons}
							page={page}
							setPage={setPage}
							total={total}
							setShowModal={setShowModal}
							setPokemonDetail={setPokemonDetail}
						/>
					)
				}
			</div>
			{
				showModal &&
					<PokemonDetail pokemon={pokemonDetail} setShowModal={setShowModal} />
			}
			<footer className='font-medium text-sm text-gray-400 py-4 pb-8'> Made with &#9829; by <a href='https://github.com/Jotaeles' target='_blank'>Jotaeles</a></footer>
		</div>
	);
}

export default App;
