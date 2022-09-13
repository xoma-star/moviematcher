import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {useGetMoviesQuery} from "../../generated/graphql";
import {Icon24Spinner} from "@vkontakte/icons";

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
    useEffect(() => {
        if (!!data) setCards(data.popular)

    }, [data])
    const swipeHandler = () => setTimeout(() => setCards(p => p.slice(0, p.length - 1)), 300)
    return (
        <div className={'flex relative w-full'}>
            {cards.length === 0 && <Icon24Spinner/>}
            {cards.slice(cards.length - 2, cards.length).map(r => <Card key={r.title} {...r} screens={r.screens.slice(0, 5)} onSwipe={swipeHandler}/>)}
        </div>
    );
};

export default HomePanel;