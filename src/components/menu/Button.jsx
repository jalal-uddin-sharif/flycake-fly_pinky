import React from 'react';

const Button = () => {
    return (
        <div className='mt-12 mb-3'>
            <button className='bg-primary w-full py-2 rounded-full text-white font-medium cursor-pointer hover:bg-primary/95 transition-transform duration-300 active:scale-105 '>Apply Filters</button>
        </div>
    );
};

export default Button;