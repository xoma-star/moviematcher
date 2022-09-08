import React, {useEffect, useMemo, useState} from 'react';
import {useAppSelector} from "../../redux";

interface props{
    children: React.ReactElement[] | React.ReactElement
}

const View = ({children}: props) => {
    const [prevPanel, setPrevPanel] = useState('')
    const [currentPanel, setCurrentPanel] = useState('')
    const {activePanel} = useAppSelector(s => s.ui)
    useEffect(() => {
        setPrevPanel(currentPanel)
        setCurrentPanel(activePanel)
        setTimeout(() => setPrevPanel(''), 100)
    }, [activePanel])

    const panels = useMemo(() => (children as React.ReactElement[])
        .map((elem: React.ReactElement) => {
            if(elem.props.id === activePanel) {
                return <div key={elem.props.id+Math.random()} className={'animate-panelIn will-change-transform'}>
                    {elem}
                </div>
            }
            if(elem.props.id === prevPanel){
                return <div key={elem.props.id+Math.random()} className={'animate-panelOut will-change-transform'}>
                    {elem}
                </div>
            }
        }), [currentPanel, prevPanel])

    return (
        <div className={'flex overflow-hidden'}>
            {panels}
        </div>
    );
};

export default View;