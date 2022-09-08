import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {useGetMoviesQuery} from "../../generated/graphql";

type movie = {
    name: string,
    short_description: string,
    screens: string[],
    rating: number,
    year: string
}

const HomePanel = () => {
    const [cards, setCards] = useState<movie[]>([])
    const {loading, data} = useGetMoviesQuery()
    useEffect(() => {
        if (!!data) setCards(
            data?.moviematcher?.data.map(r => {
                return {
                    ...r.attributes,
                    screens: r.attributes?.screens?.data.map(v => `https://api.xoma-star.tk${v.attributes?.url}`)
                };
            }) as unknown as movie[]
        )

    }, [data])
    return (
        <div className={'flex relative w-full'}>
            {cards.map(r => <Card key={r.name + r.rating} {...r}/>)}
        </div>
    );
};

export default HomePanel;