import React from 'react';
import Pokeball from '../components/svgs/Pokeball';

export const Header = () => {
    return (
        <header className='w-full mx-auto h-20 flex justify-center items-center bg-white shadow-2xl	'>
            <Pokeball className='fill-current text-red-500 h-10 w-10 mr-1'/>
            <h1 className='text-xl text-red-500 font-black'>Pokedex</h1>
        </header>
    )
}