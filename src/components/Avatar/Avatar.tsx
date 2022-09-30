import React from 'react';

interface props{
    src?: string,
    badge?: React.ReactElement,
    size?: number,
    style?: React.CSSProperties,
    children?: React.ReactElement,
    className?: string
}

const Avatar = ({src, badge, size, style, children, className}: props) => {
    return (
        <div className={`w-12 h-12 relative rounded-full ${className}`} style={style}>
            {src && <img src={src} className={'rounded-full object-cover w-full h-full'} alt={'avatar'}/>}
            {badge}
            {children && <div className={'p-3'}>{children}</div>}
        </div>
    );
};

export default Avatar;