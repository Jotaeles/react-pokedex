import React, { useState } from 'react';
import Pokeball from '../components/svgs/Pokeball';

export const SearchBar = ({ onSearch }) => {

    const [search, setSearch] = useState();

    const onChange = (e) => {
        setSearch(e.target.value)
        if(e.target.value.lenght === 0) {
            onSearch(null);
        }
    }

    const onClick = () => {
        onSearch(search);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(search);
        }
    }

    return (
        <div className='relative my-12 px-5'>
            <input
                className='h-12 rounded-xl px-4 w-full shadow-2xl focus:outline-none focus:ring focus:border-red-500'
                placeholder='Search pokemon...'
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className='absolute right-8 top-2 h-8 w-8 flex justify-center items-center rounded-xl bg-red-500 focus:outline-none'
                onClick={onClick}
            >
                <Pokeball className='h-6 w-6 fill-current text-white' />
            </button>
        </div>
    )
}