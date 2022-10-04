import React from 'react';
import Block from "../../components/Block/Block";
import Avatar from "../../components/Avatar/Avatar";
import Badge from "../../components/Badge/Badge";
import Placeholder from "../../components/Placeholder/Placeholder";
import {Icon56GestureOutline} from "@vkontakte/icons";

const MessagesPanel = () => {

    return (
        <div className={'flex flex-col relative w-full'}>
            <Block header={'Совпадения по интересам'} className={'h-full flex justify-center'}>
                {/*<div className={'flex flex-row gap-4 pt-4 flex-wrap justify-between'}>*/}
                {/*    {[].map(r => <div className={'flex items-center flex-col'}><Avatar src={r} badge={<Badge>12%</Badge>}/><span className={'mt-2'}>Александр</span></div>)}*/}
                {/*</div>*/}
                <Placeholder header={'Продолжайте свайпать'} icon={<Icon56GestureOutline/>}>
                    Совсем скоро тут появятся люди, с которыми вы разделяете общие интересы по фильмам. Но нам нужно еще чуть-чуть ваших оценок.
                </Placeholder>
            </Block>
        </div>
    );
};

export default MessagesPanel;