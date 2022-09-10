import React, {useEffect, useMemo, useState} from 'react';
import {UI_Panels} from "../../redux/slices/ui";

interface props{
    children: React.ReactElement[] | React.ReactElement,
    activePanel: UI_Panels
}

const View = ({children, activePanel}: props) => {
    const [prevPanel, setPrevPanel] = useState('')
    const [currentPanel, setCurrentPanel] = useState('')

    useEffect(() => {
        setPrevPanel(currentPanel)
        setCurrentPanel(activePanel)
        setTimeout(() => setPrevPanel(''), 100)
    }, [activePanel])

    const panels = useMemo(() => (children as React.ReactElement[])
        .map((elem: React.ReactElement) => {
            if(elem.props.id === activePanel) {
                return <div key={elem.props.id} className={'animate-panelIn will-change-transform z-30'}>
                    {elem}
                </div>
            }
            if(elem.props.id === prevPanel){
                return <div key={elem.props.id} className={'animate-panelOut will-change-transform z-20'}>
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