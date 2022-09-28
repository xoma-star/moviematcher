import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import preload from "../../misc/preload";
import Stamps from "./Stamps";
import useThrottle from "../../hooks/useThrottle";

const calcSpeed = (a: any, b: any) => {
    return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2))
}

interface props{
    title: string,
    overview: string,
    screens: string[],
    release_date: string,
    id: string,
    genres: string[],
    imdb_id: string,
    onSwipe?: (s: 'right' | 'left' | 'top' | 'bottom') => void
}

const Card = ({screens, title, overview, release_date, onSwipe, genres, imdb_id}: props) => {
    const [initialPoint, setInitialPoint] = useState({x: 0, y: 0})
    const [currentPoint, setCurrentPoint] = useState({x: 0, y: 0})
    const [prevPoint, setPrevPoint] = useState({x: 0, y: 0})
    const [dragging, setDragging] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const prevThrottled = useThrottle(prevPoint, 200)

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
        const a = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        setCurrentPoint(a)
        setPrevPoint(a)
    }
    const touchEndHandler = () => {
        if(currentPoint.x - initialPoint.x === 0) {
            if(currentPoint.x > window.screen.width / 2) {if(currentStep < screens.length - 1) setCurrentStep(x => x + 1)}
            else if(currentStep > 0) setCurrentStep(x => x - 1)
        }
        setDragging(false)
        const speed = calcSpeed(currentPoint, prevThrottled)
        let willMove = 'no'
        if(speed > 30){
            if(currentPoint.x - initialPoint.x > 1) willMove = 'right'
            else if(currentPoint.x - initialPoint.x < -1) willMove = 'left'
            else if(currentPoint.y - initialPoint.y < -1) willMove = 'top'
            else if(currentPoint.y - initialPoint.y > 1) willMove = 'bottom'
        }
        setCurrentPoint({x: 0, y: 0})
        switch (willMove){
            case 'right':
                setInitialPoint({x: -1000, y: 0})
                if(onSwipe) onSwipe('right')
                break
            case 'left':
                setInitialPoint({x: 1000, y: 0})
                if(onSwipe) onSwipe('left')
                break
            case 'top':
                setInitialPoint({x: 0, y: 1000})
                if(onSwipe) onSwipe('top')
                break
            case 'bottom':
                setInitialPoint({x: 0, y: -1000})
                if(onSwipe) onSwipe('bottom')
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
                transform: `translate(${currentPoint.x - initialPoint.x}px, ${currentPoint.y - initialPoint.y}px) rotate(${(window.screenX - currentPoint.x + initialPoint.x)/45}deg)`,
                transition: dragging ? '0s' : '200ms'
            }}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            className={`will-change-transform w-[100%] h-[100%] box-border rounded-2xl absolute overflow-hidden bg-black`}
        >
            <div style={{backgroundImage: `url('${screens[currentStep]}')`}} className={'w-[120%] h-[120%] box-border rounded-2xl bg-black bg-cover bg-center blur-lg absolute left-[-10%] top-[-10%] opacity-50'}/>
            <Stamps currentPoint={currentPoint} initialPoint={initialPoint}/>
            <div className={'bg-contain bg-center bg-no-repeat h-full absolute w-full top-0 rounded-2xl'} style={{backgroundImage: `url('${screens[currentStep]}')`}}/>
            <Counter current={currentStep} total={screens.length}/>
            <div
                className={'bg-rose-100 absolute bottom-0 rounded-2xl w-full text-black p-4'}>
                <div className={'font-bold text-3xl'}>{title}</div>
                <div className={'mt-2 font-medium'}>{release_date.split('-')[0]}, {genres.join(', ')}</div>
                <div className={'leading-4 mt-2 max-h-20 overflow-hidden relative'}>
                    {overview}
                    <div className={'bg-gradient-to-b from-transparent to-rose-100 absolute w-full h-full max-h-20 top-0'}/>
                </div>
                <a onClick={(e) => e.stopPropagation()} target={'_blank'} href={`https://imdb.com/title/${imdb_id}`}>
                    <div className={'text-lg font-medium underline'}>Подробнее на imdb.com</div>
                </a>
            </div>
        </div>
    );
};

export default Card;