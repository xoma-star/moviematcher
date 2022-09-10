import React from 'react';

interface props{
    children: React.ReactElement,
    isActive?: boolean,
    onClick?: () => void
}

const IconButton = ({children, isActive, onClick}: props) => {
    const clickHandler = () => {if(onClick) onClick()}

    return (
        <button
             onClick={clickHandler}
             className={`${isActive ? 'bg-gradient-to-br from-[#FDABDD] ' +
                 'to-[#374A5A]' : 'bg-rose-100'} rounded-2xl w-fit 
                 px-4 py-2 ${isActive ? 'text-rose-50' : 'text-[#374A5A]'}
                 active:translate-y-0.5 duration-100
                 `}>
            {children}
        </button>
    );
};

export default IconButton;