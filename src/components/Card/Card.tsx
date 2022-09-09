import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import preload from "../../misc/preload";

interface props{
    screens: string[],
    name: string,
    rating: number,
    short_description: string,
    year: string
}

const Card = ({screens, name, rating, short_description, year}: props) => {
    const [initialPoint, setInitialPoint] = useState({x: 0, y: 0})
    const [currentPoint, setCurrentPoint] = useState({x: 0, y: 0})
    const [dragging, setDragging] = useState(false)

    const [currentStep, setCurrentStep] = useState(0)

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
        if(currentPoint.x - initialPoint.x === 0) {
            console.log(currentStep)
            if(currentPoint.x > window.screen.width / 2) {if(currentStep < screens.length - 1) setCurrentStep(x => x + 1)}
            else if(currentStep > 0) setCurrentStep(x => x - 1)
        }
        setDragging(false)
        let willMove = 'no'
        if(currentPoint.x - initialPoint.x > 100) willMove = 'right'
        else if(currentPoint.x - initialPoint.x < -100) willMove = 'left'
        else if(currentPoint.y - initialPoint.y < -100) willMove = 'top'
        else if(currentPoint.y - initialPoint.y > 100) willMove = 'bottom'
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

    useEffect(() => {
        preload(screens)
    }, [screens])

    return (
        <div
            style={{
                transform: `translate(${currentPoint.x - initialPoint.x}px, ${currentPoint.y - initialPoint.y}px) rotate(${(window.screenX - currentPoint.x + initialPoint.x)/45}deg)`, transition: dragging ? '0s' : '200ms'
            }}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            className={`w-[100%] h-[100%] box-border rounded-2xl absolute`}
        >
            <div style={{backgroundImage: `url('${screens[currentStep]}')`}} className={'w-[100%] h-[100%] box-border rounded-2xl bg-pink-100 bg-cover bg-center'}/>
            <div style={{opacity: (currentPoint.x - initialPoint.x - 50) / window.screen.width * 4}}
                 className={'font-bold text-green-400 text-4xl absolute top-28 z-30 border-4 border-green-400 p-4 rounded-2xl rotate-[35deg] left-12'}>НРАВИТСЯ</div>
            <div style={{opacity: (-currentPoint.x + initialPoint.x - 50) / window.screen.width * 4}}
                 className={'font-bold text-red-400 text-4xl absolute top-28 z-30 border-4 border-red-400 p-4 rounded-2xl -rotate-[35deg] right-12'}>НУ ТАКОЕ</div>
            <div style={Math.abs(currentPoint.x - initialPoint.x) < 50 ? {opacity: (-currentPoint.y + initialPoint.y - 50) / window.screen.height * 4} : {opacity: 0}}
                 className={'font-bold text-blue-400 text-4xl absolute bottom-40 z-30 border-4 border-blue-400 p-4 rounded-2xl -rotate-12 right-16'}>ПОСМОТРЮ</div>
            <div style={Math.abs(currentPoint.x - initialPoint.x) < 50 ? {opacity: (currentPoint.y - initialPoint.y - 50) / window.screen.height * 4} : {opacity : 0}}
                 className={'font-bold text-gray-400 text-4xl absolute top-28 z-30 border-4 border-gray-400 p-4 rounded-2xl rotate-12 right-8'}>СЛЕДУЮЩИЙ</div>
            <div className={'bg-contain bg-center bg-no-repeat h-full absolute w-full top-0 backdrop-blur-2xl rounded-2xl'} style={{backgroundImage: `url('${screens[currentStep]}')`}}/>
            <Counter current={currentStep} total={screens.length}/>
            <div className={'bg-rose-100 absolute bottom-0 rounded-2xl w-full text-black p-4'}>
                <div className={'font-bold text-2xl'}>{name} ({year})</div>
                <div className={'leading-4 mt-2'}>{short_description}</div>
            </div>
        </div>
    );
};

export default Card;