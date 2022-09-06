import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../redux";

interface props{
    children: React.ReactElement[] | React.ReactElement
}

const View = ({children}: props) => {
    const [prevPanel, setPrevPanel] = useState('')
    const {activePanel} = useAppSelector(s => s.ui)
    useEffect(() => {
        setTimeout(() => setPrevPanel(activePanel), 100)
    }, [activePanel])

    const panels = (children as React.ReactElement[])
        .map((elem: React.ReactElement) => {
            if(elem.props.id === activePanel) {
                return <div key={elem.props.id}>
                    {elem}
                </div>
            }
            if(elem.props.id === prevPanel){
                return <div key={elem.props.id} className={'-translate-x-full ease-in duration-100 absolute'}>
                    {elem}
                </div>
            }
        })

    return (
        <div className={'flex overflow-hidden'}>
            {panels}
        </div>
    );
};

export default View;