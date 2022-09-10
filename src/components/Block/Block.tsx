import React from 'react';

interface props{
    children?: React.ReactElement | React.ReactElement[],
    header?: string
}

const Block = ({children, header}: props) => {
    return (
        <div className={'p-4'}>
            {<div className={'text-rose-100 font-bold'}>{header}</div>}
            <div>{children}</div>
        </div>
    );
};

export default Block;