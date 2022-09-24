import React from 'react';
import {Icon20Cancel} from "@vkontakte/icons";

interface props{
    size: 's' | 'm' | 'l' | 'full',
    children?: string,
    onClick?: (e: React.MouseEvent) => void,
    mode?: 'primary' | 'secondary',
    removable?: boolean,
    onRemove?: () => void,
    selected?: boolean
}

const Button = ({size, children, onClick, mode = 'primary', removable = false, onRemove, selected = false}: props) => {
    const clickHandler = (e: React.MouseEvent) => {
        if(onClick) onClick(e)
    }
    const removeHandler = () => {
        if(removable && onRemove) onRemove()
    }

    let classNames = 'flex gap-4 items-center justify-center rounded-2xl w-fit px-4 py-2 text-center active:opacity-80 duration-100'.split(' ')

    switch (size){
        case 'full': classNames = classNames.concat(['w-[100%]', 'font-bold', 'text-2xl'])
            break
        case "s": classNames = classNames.concat(['text-md'])
            break
    }

    switch (mode){
        case 'primary': classNames = classNames.concat(['bg-gradient-to-br', 'from-[#FDABDD]', 'to-[#374A5A]', 'text-rose-50'])
            break
        case 'secondary': classNames = selected ? classNames.concat(['bg-rose-100', 'text-black']) : classNames.concat(['text-rose-50'])
            classNames = classNames.concat(['border-2', 'border-rose-50'])
            break
    }

    return (
        <button onClick={clickHandler} className={classNames.join(' ')}>
            {children}
            {removable && (
                size === "s" && <Icon20Cancel onClick={removeHandler}/>
            )}
        </button>
    );
};

export default Button;