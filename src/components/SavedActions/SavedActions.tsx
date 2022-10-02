import React, {useState} from 'react';
import Avatar from "../Avatar/Avatar";
import {Icon24ThumbsDownOutline, Icon24ThumbsUpOutline, Icon24TrashSmileOutline} from "@vkontakte/icons";
import {PushMovieToType, useSwipeHandlerMutation} from "../../generated/graphql";
import {useAppSelector} from "../../redux";

interface props{
    movie: string
}

const SavedActions = ({movie}: props) => {
    const {id, launchParams} = useAppSelector(s => s.vk)
    const [selected, setSelected] = useState<'liked' | 'disliked' | 'removed' | null>(null)
    if(!id) return <></>
    const [mutate] = useSwipeHandlerMutation({context: {headers: {authorization: JSON.stringify(launchParams)}}})
    const likeHandler = () => {
        if(selected) return
        setSelected('liked')
        mutate({variables: {id: id, to: PushMovieToType.Liked, movieId: movie, force: true}})
        window.navigator.vibrate([100, 50, 100])
    }
    const dislikeHandler = () => {
        if(selected) return
        setSelected('disliked')
        mutate({variables: {id: id, to: PushMovieToType.Disliked, movieId: movie, force: true}})
        window.navigator.vibrate([300])
    }
    const removeHandler = () => {
        if(selected) return
        setSelected('removed')
        mutate({variables: {id: id, to: PushMovieToType.Skipped, movieId: movie, force: true}})
    }

    return (
        <div className={'flex flex-row gap-2'}>
            <Avatar style={selected && selected !== 'liked' ? {display: 'none'} : {}} onClick={likeHandler} className={'bg-green-600'}><Icon24ThumbsUpOutline/></Avatar>
            <Avatar style={selected && selected !== 'disliked' ? {display: 'none'} : {}} onClick={dislikeHandler} className={'bg-red-600'}><Icon24ThumbsDownOutline/></Avatar>
            <Avatar style={selected && selected !== 'removed' ? {display: 'none'} : {}} onClick={removeHandler} className={'bg-gray-500'}><Icon24TrashSmileOutline/></Avatar>
        </div>
    );
};

export default SavedActions;