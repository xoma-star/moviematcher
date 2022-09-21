import React from 'react';

interface props{
    src?: string,
    badge?: React.ReactElement,
    size?: number
}

const Avatar = ({src, badge, size}: props) => {
    return (
        <div className={`w-12 h-12 relative`}>
            <img src={src} className={'rounded-full object-cover w-full h-full'} alt={'avatar'}/>
            {badge}
        </div>
    );
};

export default Avatar;