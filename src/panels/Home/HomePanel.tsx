import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {PushMovieToType, useGetMoviesQuery, useSwipeHandlerMutation} from "../../generated/graphql";
import {Icon24Spinner} from "@vkontakte/icons";
import {useAppSelector} from "../../redux";

type movie = {
    title: string,
    overview: string,
    screens: string[],
    release_date: string,
    id: number
}

const HomePanel = () => {
    const [cards, setCards] = useState<movie[]>([])
    const {data} = useGetMoviesQuery()
    const {id, launchParams} = useAppSelector(s => s.vk)
    const [swipeSender] = useSwipeHandlerMutation({context: {headers: {authorization: JSON.stringify(launchParams)}}})
    useEffect(() => {
        if (!!data) setCards(data.popular)

    }, [data])
    const swipeHandler = (movieId: number) => async (e: string) => {
        let moviePushTo: PushMovieToType = PushMovieToType.Liked
        switch (e) {
            case 'right':
                moviePushTo = PushMovieToType.Liked
                break
            case 'left':
                moviePushTo = PushMovieToType.Disliked
                break
            case 'top':
                moviePushTo = PushMovieToType.Saved
                break
            case 'bottom':
                moviePushTo = PushMovieToType.Skipped
                break
        }
        if(!id) return
        await swipeSender({variables: {id: id, to: moviePushTo, movieId: movieId}})
        setTimeout(() => setCards(p => p.slice(0, p.length - 1)), 300)
    }
    return (
        <div className={'flex relative w-full'}>
            {cards.length === 0 && <Icon24Spinner/>}
            {cards.slice(cards.length - 2, cards.length).map(r => <Card key={r.title} {...r} screens={r.screens.slice(0, 5)} onSwipe={swipeHandler(r.id)}/>)}
        </div>
    );
};

export default HomePanel;