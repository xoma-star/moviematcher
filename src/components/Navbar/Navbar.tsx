import React from 'react';
import IconButton from "../IconButton/IconButton";
import {Icon24VideoOutline} from "@vkontakte/icons";

const Navbar = () => {
    return (
        <div className={'fixed bottom-0 h-14 w-full flex flex-row items-center justify-around'}>
            <IconButton><Icon24VideoOutline/></IconButton>
        </div>
    );
};

export default Navbar;