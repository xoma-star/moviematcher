import React from 'react';

interface props{
    children?: React.ReactElement | React.ReactElement[],
    header?: string,
    className?: string
}

const Block = ({children, header, className}: props) => {
    return (
        <div className={'p-4'}>
            {header && <div className={'text-rose-100 font-bold mb-4'}>{header}</div>}
            <div className={className}>{children}</div>
        </div>
    );
};

export default Block;