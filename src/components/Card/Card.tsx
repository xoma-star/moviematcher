import React, {useState} from 'react';

const Card = () => {
    const [initialPoint, setInitialPoint] = useState({x: 0, y: 0})
    const [currentPoint, setCurrentPoint] = useState({x: 0, y: 0})
    const [dragging, setDragging] = useState(false)

    const touchStartHandler = (e: React.TouchEvent) => {
        setDragging(true)
        setInitialPoint({
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        })
        setCurrentPoint({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        })
    }
    const touchMoveHandler = (e: React.TouchEvent) => {
        setCurrentPoint({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        })
    }
    const touchEndHandler = () => {
        setDragging(false)
        let willMove = 'no'
        if(currentPoint.x - initialPoint.x > 200) willMove = 'right'
        else if(currentPoint.x - initialPoint.x < -200) willMove = 'left'
        else if(currentPoint.y - initialPoint.y < -200) willMove = 'top'
        else if(currentPoint.y - initialPoint.y > 200) willMove = 'bottom'
        setCurrentPoint({x: 0, y: 0})
        switch (willMove){
            case 'right':
                setInitialPoint({x: -1000, y: 0})
                break
            case 'left':
                setInitialPoint({x: 1000, y: 0})
                break
            case 'top':
                setInitialPoint({x: 0, y: 1000})
                break
            case 'bottom':
                setInitialPoint({x: 0, y: -1000})
                break
            default: setInitialPoint({x: 0, y: 0})
        }
    }

    return (
        <div
            style={{transform: `translate(${currentPoint.x - initialPoint.x}px, ${currentPoint.y - initialPoint.y}px) rotate(${(window.screenX - currentPoint.x + initialPoint.x)/45}deg)`, transition: dragging ? '0s' : '200ms'}}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            className={`w-[100%] h-[100%] bg-pink-100 box-border rounded-2xl items-end absolute`}
        >

        </div>
    );
};

export default Card;