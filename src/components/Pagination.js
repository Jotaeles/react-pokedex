import RightArrow from '../components/svgs/RightArrow';

export const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
    return(
        <div className='flex justify-center items-center pt-5 pb-10'>
            <button className='flex justify-center items-center h-8 w-8 rounded-xl bg-red-500 shadow-xl focus:outline-none' onClick={onLeftClick}>
                <RightArrow className='h-4 w-4 fill-current text-white transform rotate-180' />
            </button>
            <div className='font-bold mx-4'>{page} de {totalPages}</div>
            <button className='flex justify-center items-center h-8 w-8 rounded-xl bg-red-500 shadow-xl focus:outline-none' onClick={onRightClick}>
                <RightArrow className='h-4 w-4 fill-current text-white' />
            </button>
        </div>
    )
}