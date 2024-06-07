import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-evenly items-center flex-col mt-14'>
            <img src={imgURL} alt={customerName} className='w-[120px] h-[120px] rounded-full' />

            <p className='mt-6 max-w-sm text-center info-text'>
                {feedback}
            </p>

            <div className='py-2 flex justify-center items-center gap-2'>
                <img src={star} alt='star' w-24 h-24 />
                <p className='text-xl text-slate-gray'>({rating})</p>
            </div>

            <h3 className='mt-1 text-3xl font-bold font-palanquin'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard