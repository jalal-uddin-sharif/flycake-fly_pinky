import React from 'react';
import CakeCard from './CakeCard';
import { getAllCakes } from '@/lib/cakes';

const CakeGrid = () => {
    const cakes = getAllCakes()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                cakes?.map((cake)=>(

                    <CakeCard key={cake.slug} cake={cake}/>
                ))
            }
        </div>
    );
};

export default CakeGrid;