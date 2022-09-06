import React, {useState} from 'react';
import Button from "../../components/Button/Button";

const HomePanel = () => {
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
        setCurrentPoint({x: 0, y: 0})
        setInitialPoint({x: 0, y: 0})
        setTimeout(() => setDragging(false), 200)
    }

    return (
        <div
            style={{transform: `translate(${currentPoint.x - initialPoint.x}px, ${currentPoint.y - initialPoint.y}px) rotate(${(window.screenX - currentPoint.x + initialPoint.x)/15}deg)`, transition: dragging ? '0s' : '200ms'}}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            className={`w-full h-100vh bg-pink-100 box-border rounded-2xl flex items-end`}
        >
            <Button size={'full'}>ab</Button>
        </div>
    );
};

export default HomePanel;