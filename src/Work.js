import React from 'react';

const Work = ({work}) => {
    const {first_name}=work
    return (
        <div>
            <p>first:{first_name}</p>
        </div>
    );
};

export {Work};