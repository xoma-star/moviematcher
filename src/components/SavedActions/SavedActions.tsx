import React from 'react';
import Avatar from "../Avatar/Avatar";

import {Icon24ThumbsDownOutline, Icon24ThumbsUpOutline, Icon24TrashSmileOutline} from "@vkontakte/icons";

const SavedActions = () => {
    return (
        <div className={'flex flex-row gap-2'}>
            <Avatar className={'bg-green-600'}><Icon24ThumbsUpOutline/></Avatar>
            <Avatar className={'bg-red-600'}><Icon24ThumbsDownOutline/></Avatar>
            <Avatar className={'bg-gray-500'}><Icon24TrashSmileOutline/></Avatar>
        </div>
    );
};

export default SavedActions;