import React from 'react';
import List from "../../components/List/List";
import Cell from "../../components/Cell/Cell";
import SavedActions from "../../components/SavedActions/SavedActions";
import {useAppSelector} from "../../redux";
import {useGetMoviesQuery, useGetSavedQuery} from "../../generated/graphql";
import {Icon24Spinner} from "@vkontakte/icons";
import Block from "../../components/Block/Block";

const SavedPanel = () => {
    const {id} = useAppSelector(s => s.vk)
    const saved = useGetSavedQuery({variables: {id: id || ''}, skip: !id, fetchPolicy: "network-only"})
    const {data, loading} = useGetMoviesQuery({variables: {ids: saved.data?.getUser.saved || []}, skip: (saved.data?.getUser.saved.length || 0) < 1})

    return (
        <Block header={'Сохранено'}>
            {(saved.loading || loading) && <Icon24Spinner/>}
            <List>
                {data?.getMovies.map(x => <Cell
                    key={x.id}
                    actions={<SavedActions movie={x.id}/>}
                >{x.title}</Cell>)}
            </List>
        </Block>
    );
};

export default SavedPanel;