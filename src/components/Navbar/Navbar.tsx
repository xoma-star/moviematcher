import React from 'react';
import IconButton from "../IconButton/IconButton";
import {
    Icon24BookmarkOutline,
    Icon24Cards2Outline,
    Icon24MessagesOutline,
    Icon24UserOutline
} from "@vkontakte/icons";
import {useAppDispatch, useAppSelector} from "../../redux";
import {setPanel, UI_Panels} from "../../redux/slices/ui";
import hiddenNavbarPanels from "../../misc/hiddenNavbarPanels";

const Navbar = () => {
    const {activePanel} = useAppSelector(s => s.ui)
    const dispatch = useAppDispatch()
    const isHidden = hiddenNavbarPanels.indexOf(activePanel) >= 0
    const clickHandler = (panel: UI_Panels) => {return () => dispatch(setPanel(panel))}

    return (
        <div className={`fixed bottom-0 h-14 w-full flex flex-row items-center justify-around z-50 duration-100${isHidden ? ' translate-y-24' : ''} bg-gradient-to-b from-transparent to-black`}>
            <IconButton onClick={clickHandler(UI_Panels.HOME)} isActive={activePanel === UI_Panels.HOME}><Icon24Cards2Outline/></IconButton>
            <IconButton onClick={clickHandler(UI_Panels.MESSAGES)} isActive={activePanel === UI_Panels.MESSAGES}><Icon24MessagesOutline/></IconButton>
            <IconButton onClick={clickHandler(UI_Panels.USER)} isActive={activePanel === UI_Panels.USER}><Icon24UserOutline/></IconButton>
            <IconButton onClick={clickHandler(UI_Panels.SAVED)} isActive={activePanel === UI_Panels.SAVED}><Icon24BookmarkOutline/></IconButton>
        </div>
    );
};

export default Navbar;