import React from 'react';

const CategoryCard = ({name, icon, iconSize = 35}) => {
    return (
        <div className='bg-surface border w-fit flex-none  border-[#e3bdc5] flex flex-col px-6 py-4 justify-center items-center rounded-lg gap-3 group hover:border-primary transition-all duration-500 cursor-pointer'>
            <span
                className='material-symbols-outlined text-primary'
                style={{
                    fontSize: iconSize,
                    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
                }}
            >
                {icon}
            </span>
            <span className='text-label-bold'>{name}</span>
            <div className='w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500'></div>
        </div>
    );
};

export default CategoryCard;
