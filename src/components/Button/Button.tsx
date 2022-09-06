import React from 'react';

interface props{
    size: 's' | 'm' | 'l' | 'full',
    children?: string,
    onClick?: (e: React.MouseEvent) => void
}

const Button = ({size, children, onClick}: props) => {
    const clickHandler = (e: React.MouseEvent) => {
        // navigator.vibrate(10)
        if(onClick) onClick(e)
    }

    let classNames = 'bg-gradient-to-br from-[#FDABDD] to-[#374A5A] rounded-2xl w-fit px-4 py-2 text-rose-50 text-center active:translate-y-1'.split(' ')

    switch (size){
        case 'full': classNames = classNames.concat(['w-[100%]', 'font-bold', 'text-2xl'])
            break
    }

    return (
        <button onClick={clickHandler} className={classNames.join(' ')}>
            {children}
        </button>
    );
};

export default Button;