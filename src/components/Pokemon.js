import typeColors from '../helpers/typeColors';

export const Pokemon = ({ pokemon, setShowModal, setPokemonDetail }) => {

    const handleModal = () => {
        setPokemonDetail(pokemon);
        setShowModal(true);
    }

    return(
        <div onClick={handleModal} className='flex flex-col items-center shadow-2xl bg-white rounded-xl p-5 cursor-pointer'>
            <img className='h-32 w-32 -mt-20 pointer-events-none' src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span className='block text-sm font-black text-gray-400'>#{pokemon.id}</span>
            <h2 className='text-xl font-bold tracking-wide mb-1'>{pokemon.name}</h2>
            <div className='mb-4'>
                {
                    pokemon.types.map((type, index)=>{
                        let addMargin = type.slot < pokemon.types.length ? 'mr-4' : '';
                        return(
                            <span
                                className={`text-sm font-bold py-1 px-2 rounded ${addMargin}`}
                                style={{backgroundColor: typeColors[type.type.name]}}
                                key={index}
                            >{type.type.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}