import React from 'react';

interface props{
    children: React.ReactElement
}

const IconButton = ({children}: props) => {
    return (
        <div className={'bg-gradient-to-br from-[#FDABDD] to-[#374A5A] rounded-2xl w-fit px-4 py-2 text-rose-50'}>
            {children}
        </div>
    );
};

export default IconButton;