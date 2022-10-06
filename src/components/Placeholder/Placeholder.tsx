import React from 'react';

interface props{
    header?: string,
    children?: string,
    icon?: React.ReactElement
}

const Placeholder = ({icon, children, header}: props) => {
    return (
        <div className={'flex flex-col items-center justify-center content-center gap-4 text-center h-full absolute top-0 left-0 px-12'}>
            {icon}
            {header && <div className={'text-xl font-bold'}>{header}</div>}
            {children && <div>{children}</div>}
        </div>
    );
};

export default Placeholder;