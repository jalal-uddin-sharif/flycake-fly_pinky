import React from 'react';

const AuthHeader = ({title, description}) => {
    return (
        <div className='mb-6'>
            <h1 className='text-heading'>{title}</h1>
            <p className='text-on-surface-variant'>{description}</p>
        </div>
    );
};

export default AuthHeader;