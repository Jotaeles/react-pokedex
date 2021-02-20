import RightArrow from '../components/svgs/RightArrow';

export const BackButton = ({ fetchPokemons }) => {
    return(
        <button onClick={()=>fetchPokemons()} className='flex justify-center items-center rounded-xl bg-red-500 shadow-xl py-2 px-5 text-white font-bold mx-auto focus:outline-none'>
            <RightArrow className='h-3 w-3 fill-current text-white transform rotate-180 mr-2' />
            Back
        </button>
    )
}