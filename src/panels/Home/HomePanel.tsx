import React, {useState} from 'react';
import Card from "../../components/Card/Card";
import {MoviesEntity, PushMovieToType, useGetMoviesQuery, useSwipeHandlerMutation} from "../../generated/graphql";
import {Icon24Spinner} from "@vkontakte/icons";
import {useAppSelector} from "../../redux";



const HomePanel = () => {
    const [cards, setCards] = useState<MoviesEntity[]>([])
    const {id, launchParams} = useAppSelector(s => s.vk)
    const {refetch} = useGetMoviesQuery({variables: {id: id || '', count: 10}, skip: !id, onCompleted: r => {
            if (!!r) setCards([...cards, ...(r.getRecommended as MoviesEntity[]).filter(x => cards.findIndex(v => v.id === x.id) < 0)])
        },
        onError: () => refetch()
    })
    const [swipeSender] = useSwipeHandlerMutation({context: {headers: {authorization: JSON.stringify(launchParams)}}})

    const swipeHandler = (movieId: string) => async (e: string) => {
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
        swipeSender({variables: {id: id, to: moviePushTo, movieId: movieId}}).catch(r => console.log(r))
        setTimeout(() => setCards(p => p.slice(0, p.length - 1)), 300)
        if(cards.length <= 6) refetch({id: id, count: 10})
    }
    return (
        <div className={'flex relative w-full'}>
            {cards.length === 0 && <Icon24Spinner/>}
            {cards.slice(cards.length - 2, cards.length).map(r => <Card key={r.title} {...r} screens={r.screens} onSwipe={swipeHandler(r.id)}/>)}
        </div>
    );
};

export default HomePanel;