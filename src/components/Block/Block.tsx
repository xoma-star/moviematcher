import React from 'react';

interface props{
    children?: React.ReactNode | React.ReactNode[],
    header?: string,
    className?: string
}

const Block = ({children, header, className}: props) => {
    return (
        <div className={'p-4 h-full flex flex-col'}>
            {header && <div className={'text-rose-100 font-bold mb-4 text-3xl'}>{header}</div>}
            <div className={className}>{children}</div>
        </div>
    );
};

export default Block;