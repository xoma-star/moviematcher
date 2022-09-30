import React from 'react';

interface props{
    children?: React.ReactElement | React.ReactElement[]
}

const List = ({children}: props) => {
    return (
        <div className={'flex flex-col w-full'}>
            {children}
        </div>
    );
};

export default List;