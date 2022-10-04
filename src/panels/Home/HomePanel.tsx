import React, {useState} from 'react';
import Card from "../../components/Card/Card";
import {
    MoviesEntity,
    PushMovieToType,
    useGetRecommendedQuery,
    useSwipeHandlerMutation
} from "../../generated/graphql";
import {Icon24Spinner} from "@vkontakte/icons";
import {useAppDispatch, useAppSelector} from "../../redux";
import {popFetched, pushFetched} from "../../redux/slices/movies";



const HomePanel = () => {
    const {id, launchParams} = useAppSelector(s => s.vk)
    const {fetched} = useAppSelector(s => s.movie)
    const [backCardScale, setBackCardScale] = useState(0.9)
    const dispatch = useAppDispatch()
    const {refetch, loading} = useGetRecommendedQuery({variables: {id: id || '', count: 10}, skip: !id || fetched.length > 0, onCompleted: r => {
            if(!!r) dispatch(pushFetched(r.getRecommended as MoviesEntity[]))
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
        swipeSender({variables: {id: id, to: moviePushTo, movieId: movieId}}).catch(() => {})
        setTimeout(() => dispatch(popFetched()), 100)
        if(fetched.length <= 6 && !loading) refetch({id: id, count: 10})
    }

    return (
        <div className={'flex relative w-full'}>
            {fetched.length === 0 && <Icon24Spinner/>}
            {fetched.length > 2 && fetched
                .slice(fetched.length - 4, fetched.length)
                .map((r, i) => <Card
                    scaled={i === 2 ? backCardScale : (i < 2 ? 0.9 : undefined)}
                    key={r.id + 'obamka'}
                    {...r}
                    screens={r.screens}
                    onSwipe={swipeHandler(r.id)}
                    setBackCardScale={(n: number) => setBackCardScale(n)}
                />)}
        </div>
    );
};

export default HomePanel;