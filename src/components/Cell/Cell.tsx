import React from 'react';

interface props{
    children: string,
    before?: React.ReactElement,
    actions?: React.ReactElement | React.ReactElement[]
}

const Cell = ({children, before, actions}: props) => {
    return (
        <div className={'flex flex-row justify-between items-center gap-4'}>
            <div className={'text-xl font-bold'}>{children}</div>
            {actions && <div>{actions}</div>}
        </div>
    );
};

export default Cell;