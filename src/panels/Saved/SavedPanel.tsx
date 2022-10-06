import React from 'react';
import List from "../../components/List/List";
import Cell from "../../components/Cell/Cell";
import SavedActions from "../../components/SavedActions/SavedActions";
import {useAppSelector} from "../../redux";
import {useGetMoviesQuery, useGetSavedQuery} from "../../generated/graphql";
import {Icon24Spinner, Icon56BookmarkOutline} from "@vkontakte/icons";
import Block from "../../components/Block/Block";
import Placeholder from "../../components/Placeholder/Placeholder";

const SavedPanel = () => {
    const {id} = useAppSelector(s => s.vk)
    const saved = useGetSavedQuery({variables: {id: id || ''}, skip: !id, fetchPolicy: "network-only"})
    const {data, loading} = useGetMoviesQuery({variables: {ids: saved.data?.getUser.saved || []}, skip: (saved.data?.getUser.saved.length || 0) < 1})

    return (
        <Block header={'Сохранено'}>
            {(saved.loading || loading) && <Icon24Spinner/>}
            {(!saved.loading && !loading && !data?.getMovies.length) && <Placeholder icon={<Icon56BookmarkOutline/>} header={'Сохраненные фильмы'}>
                Свайпните понравившийся фильм вверх, и он появится здесь. После просмотра сможете его оценить.
            </Placeholder>}
            {data?.getMovies && <List>
                {data?.getMovies.map(x => <Cell
                    key={x.id}
                    actions={<SavedActions movie={x.id}/>}
                >{x.title}</Cell>)}
            </List>}
        </Block>
    );
};

export default SavedPanel;