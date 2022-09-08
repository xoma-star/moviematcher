import React from 'react';

interface props{
    current: number,
    total: number
}

const Counter = ({current, total}: props) => {
    const a = new Array(total).fill(false)
    return (
        <div className={'flex flex-row gap-4 h-5 pt-4 px-4 z-10 absolute top-0 w-full box-border'}>
            {a.map((_, i) => {
                if(i === current) return <div key={`active-${i}`} className={'bg-gradient-to-br from-[#FDABDD] to-[#374A5A] rounded-full flex h-full w-full'}/>
                else return <div key={`passive-${i}`} className={'bg-rose-50 rounded-full flex h-full w-full'}/>
            })}
        </div>
    );
};

export default Counter;