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
    onSwipe?: (s: 'right' | 'left' | 'top' | 'bottom') => void,
    scaled?: number,
    setBackCardScale: (n: number) => void
}

const Card = ({screens, title, overview, release_date, onSwipe, genres, imdb_id, scaled, setBackCardScale}: props) => {
    const [initialPoint, setInitialPoint] = useState({x: 0, y: 0})
    const [currentPoint, setCurrentPoint] = useState({x: 0, y: 0})
    const [prevPoint, setPrevPoint] = useState({x: 0, y: 0})
    const [dragging, setDragging] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const prevThrottled = useThrottle(prevPoint, 200)

    const dx = currentPoint.x - initialPoint.x
    const dy = currentPoint.y - initialPoint.y
    const diag = Math.sqrt(dx*dx + dy*dy)

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
        setBackCardScale(0.8)
    }
    const touchMoveHandler = (e: React.TouchEvent) => {
        const a = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        const b = Math.abs(diag) / window.screen.height + 0.8
        setBackCardScale(b < 1 ? b : 1)
        setCurrentPoint(a)
        setPrevPoint(a)
    }
    const touchEndHandler = () => {
        setBackCardScale(1)
        if(currentPoint.x - initialPoint.x === 0) {
            if(currentPoint.x > window.screen.width / 2) {if(currentStep < screens.length - 1) setCurrentStep(x => x + 1)}
            else if(currentStep > 0) setCurrentStep(x => x - 1)
        }
        setDragging(false)
        const speed = calcSpeed(currentPoint, prevThrottled)
        let willMove = 'no'
        if(speed > 20){
            if(dx > 30) willMove = 'right'
            else if(dx < -30) willMove = 'left'
            else if(dy < -30) willMove = 'top'
            else if(dy > 30) willMove = 'bottom'
        }
        setCurrentPoint({x: 0, y: 0})
        switch (willMove){
            case 'right':
                // setInitialPoint({x: -window.screen.width - 60, y: 0})
                if(onSwipe) onSwipe('right')
                break
            case 'left':
                // setInitialPoint({x: window.screen.width + 60, y: 0})
                if(onSwipe) onSwipe('left')
                break
            case 'top':
                // setInitialPoint({x: 0, y: window.screen.height})
                if(onSwipe) onSwipe('top')
                break
            case 'bottom':
                // setInitialPoint({x: 0, y: -window.screen.height})
                if(onSwipe) onSwipe('bottom')
                break
            // default: setInitialPoint({x: 0, y: 0})
        }
        setInitialPoint(willMove === 'no' ? {x: 0, y: 0} : {x: -window.screen.width * dx / diag * 1.2, y: -window.screen.height * dy / diag * 1.1})
    }

    useEffect(() => {
        preload(screens)
    }, [screens])

    return (
        <div
            style={{
                transform: `translate(${currentPoint.x - initialPoint.x}px, ${currentPoint.y - initialPoint.y}px) 
                            rotate(${(window.screenX - currentPoint.x + initialPoint.x)/45}deg)
                            scale(${scaled || 1})
                `,
                transition: dragging || (scaled && scaled !== 1) ? '0s' : '200ms'
            }}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            className={`will-change-transform w-[100%] h-[100%] box-border rounded-2xl absolute overflow-hidden bg-black`}
        >
            <div style={{backgroundImage: `url('${screens[currentStep]}')`}} className={'w-[120%] h-[120%] box-border rounded-2xl bg-black bg-cover bg-center blur-lg absolute left-[-10%] top-[-10%] opacity-50'}/>
            <Stamps currentPoint={currentPoint} initialPoint={initialPoint} dragging={dragging}/>
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
                <a target={'_blank'} href={`https://imdb.com/title/${imdb_id}`} onTouchEnd={(e) => e.stopPropagation()}>
                    <div className={'text-lg font-medium underline'}>Подробнее на imdb.com</div>
                </a>
            </div>
        </div>
    );
};

export default Card;