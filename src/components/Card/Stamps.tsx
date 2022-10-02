import React from 'react';

interface point{
    x: number,
    y: number
}

const Stamps = ({currentPoint, initialPoint}: {currentPoint: point, initialPoint: point, dragging: boolean}) => {
    return (
        <>
            <div style={{opacity: (currentPoint.x - initialPoint.x - 30) / window.screen.width * 6}}
                 className={'font-bold text-green-400 text-4xl absolute top-28 z-30 border-4 border-green-400 p-4 rounded-2xl rotate-[35deg] left-12'}>НРАВИТСЯ</div>
            <div style={{opacity: (-currentPoint.x + initialPoint.x - 30) / window.screen.width * 6}}
                 className={'font-bold text-red-400 text-4xl absolute top-28 z-30 border-4 border-red-400 p-4 rounded-2xl -rotate-[35deg] right-12'}>НУ ТАКОЕ</div>
            <div style={Math.abs(currentPoint.x - initialPoint.x) < 30 ? {opacity: (-currentPoint.y + initialPoint.y - 30) / window.screen.height * 6} : {opacity: 0}}
                 className={'font-bold text-blue-400 text-4xl absolute bottom-56 z-30 border-4 border-blue-400 p-4 rounded-2xl -rotate-12 right-16'}>ПОСМОТРЮ</div>
            <div style={Math.abs(currentPoint.x - initialPoint.x) < 30 ? {opacity: (currentPoint.y - initialPoint.y - 30) / window.screen.height * 6} : {opacity : 0}}
                 className={'font-bold text-gray-400 text-4xl absolute top-28 z-30 border-4 border-gray-400 p-4 rounded-2xl rotate-12 right-8'}>ПРОПУСТИТЬ</div>
        </>
    );
};

export default Stamps;