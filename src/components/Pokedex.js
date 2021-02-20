import { Pokemon } from '../components/Pokemon';
import { Pagination } from '../components/Pagination';

export const Pokedex = ({loading, pokemons, page, setPage, total, setShowModal, setPokemonDetail}) => {

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    }

    return (
        <div>
            {
                loading ?
                    <div className='font-bold'>Loading pokemon...</div>
                :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-20 p-5'>
                    {
                        pokemons.map((pokemon, index) => {
                            return(
                                <Pokemon pokemon={pokemon} key={pokemon.name} setShowModal={setShowModal} setPokemonDetail={setPokemonDetail} />
                            )
                        })
                    }
                </div>
            }
            <Pagination
                page={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
            />
        </div>
    )
}