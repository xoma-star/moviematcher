import React from 'react';

interface props{
    children?: React.ReactElement[] | React.ReactElement,
    id: string
}

const Panel = ({children}: props) => {
    return (
        <div className={'p-4 min-h-[100vh] flex pb-14 min-w-[100vw] relative'}>
            {children}
        </div>
    );
};

export default Panel;