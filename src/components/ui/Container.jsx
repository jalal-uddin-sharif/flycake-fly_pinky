import React from 'react';

const Container = ({children}) => {
    return (
        <div className='width mx-auto'>
            {children}
        </div>
    );
};

export default Container;