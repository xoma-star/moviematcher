import React from 'react';
import IconButton from "../IconButton/IconButton";
import {Icon24MessagesOutline, Icon24VideoOutline} from "@vkontakte/icons";
import {useAppDispatch, useAppSelector} from "../../redux";
import {setPanel, UI_Panels} from "../../redux/slices/ui";
import hiddenNavbarPanels from "../../misc/hiddenNavbarPanels";

const Navbar = () => {
    const {activePanel} = useAppSelector(s => s.ui)
    const dispatch = useAppDispatch()
    const isHidden = hiddenNavbarPanels.indexOf(activePanel) >= 0
    const clickHandler = (panel: UI_Panels) => {return () => dispatch(setPanel(panel))}

    return (
        <div className={`fixed bottom-0 h-14 w-full flex flex-row items-center justify-around z-50 duration-100${isHidden ? ' translate-y-24' : ''}`}>
            <IconButton onClick={clickHandler(UI_Panels.HOME)} isActive={activePanel === UI_Panels.HOME}><Icon24VideoOutline/></IconButton>
            <IconButton onClick={clickHandler(UI_Panels.MESSAGES)} isActive={activePanel === UI_Panels.MESSAGES}><Icon24MessagesOutline/></IconButton>
        </div>
    );
};

export default Navbar;