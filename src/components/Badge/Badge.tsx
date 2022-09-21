import React from 'react';

interface props{
    children: React.ReactElement | string
}

const Badge = ({children}: props) => {
    return (
        <div className={'rounded-full absolute -right-2 -bottom-2 text-xs bg-rose-100 p-1 text-black font-bold'}>
            {children}
        </div>
    );
};

export default Badge;