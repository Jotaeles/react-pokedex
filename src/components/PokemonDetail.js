import typeColors from '../helpers/typeColors';

export const PokemonDetail = ({ pokemon, setShowModal }) => {

    return (
        <>
            <div className='fixed inset-0 z-50 flex justify-center items-center'>
                <div className='relative bg-white w-4/5 max-w-2xl rounded-xl p-5 shadow-xl'>
                    {/* CLOSE MODAL */}
                    <div onClick={()=> setShowModal(false)} className='absolute -right-3 -top-3 h-8 w-8 bg-red-500 rounded-xl focus:outline-none flex justify-center items-center cursor-pointer'>
                        <span className='absolute h-0.5 w-5 bg-white transform rotate-45'></span>
                        <span className='absolute h-0.5 w-5 bg-white transform -rotate-45'></span>
                    </div>
                    {/* CLOSE MODAL */}
                    <img className='h-40 w-40 -mt-24 pointer-events-none mx-auto' src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <span className='block text-sm font-black text-gray-400'>#{pokemon.id}</span>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-wide mb-2 capitalize'>{pokemon.name}</h2>
                    <div className='mb-6'>
                        {
                            pokemon.types.map((type, index) => {
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
                    <h3 className='text-sm font-black uppercase mb-1'>Abilities</h3>
                    <div className='mb-4'>
                        {
                            pokemon.abilities.map((ability,index) => {
                                let addMargin = (index+1) < pokemon.abilities.length ? 'mr-4' : '';
                                return(
                                    <span className={`text-sm py-1 px-2 rounded-full bg-indigo-50 ${addMargin}`} key={index}>{ability.ability.name}</span>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center mb-4'>
                        <div className='mr-4'>
                            <div className='text-sm font-black uppercase mb-1'>Height</div>
                            <div className='text-sm py-1 px-2 rounded-full bg-indigo-50'>{pokemon.height}</div>
                        </div>
                        <div>
                            <div className='text-sm font-black uppercase mb-1'>Weight</div>
                            <div className='text-sm py-1 px-2 rounded-full bg-indigo-50'>{pokemon.weight}</div>
                        </div>
                    </div>
                    <h3 className='text-sm font-black uppercase mb-1'>Stats</h3>
                    <div className='flex justify-between max-w-sm mx-auto'>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-red-500 text-white text-xs font-bold flex justify-center items-center'>HP</div>
                            <div className='w-full h-1/2'>{pokemon.stats[0].base_stat}</div>
                        </div>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-yellow-500 text-white text-xs font-bold flex justify-center items-center'>ATK</div>
                            <div className='w-full h-1/2'>{pokemon.stats[1].base_stat}</div>
                        </div>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-yellow-300 text-white text-xs font-bold flex justify-center items-center'>DEF</div>
                            <div className='w-full h-1/2'>{pokemon.stats[2].base_stat}</div>
                        </div>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-blue-500 text-white text-xs font-bold flex justify-center items-center'>SPA</div>
                            <div className='w-full h-1/2'>{pokemon.stats[3].base_stat}</div>
                        </div>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-green-500 text-white text-xs font-bold flex justify-center items-center'>SPD</div>
                            <div className='w-full h-1/2'>{pokemon.stats[4].base_stat}</div>
                        </div>
                        <div className='flex flex-col justify-between w-8 h-16 rounded-full bg-indigo-50'>
                            <div className='w-full h-1/2 rounded-full bg-pink-500 text-white text-xs font-bold flex justify-center items-center'>SPD</div>
                            <div className='w-full h-1/2'>{pokemon.stats[5].base_stat}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}