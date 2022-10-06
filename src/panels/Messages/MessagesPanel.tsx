import React from 'react';
import Block from "../../components/Block/Block";
import Placeholder from "../../components/Placeholder/Placeholder";
import {Icon56GestureOutline} from "@vkontakte/icons";

const MessagesPanel = () => {

    return (
        <Block header={'Совпадения по интересам'}>
            <Placeholder header={'Продолжайте свайпать'} icon={<Icon56GestureOutline/>}>
                Совсем скоро тут появятся люди, с которыми вы разделяете общие интересы по фильмам. Но нам нужно еще чуть-чуть ваших оценок.
            </Placeholder>
        </Block>
    );
};

export default MessagesPanel;