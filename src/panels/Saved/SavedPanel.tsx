import React from 'react';
import List from "../../components/List/List";
import Cell from "../../components/Cell/Cell";
import SavedActions from "../../components/SavedActions/SavedActions";

const SavedPanel = () => {
    return (
        <div className={'flex flex-col w-full'}>
            <div className={'text-3xl font-bold mb-8'}>Сохранено</div>
            <List>
                <Cell
                    actions={<SavedActions/>}
                >
                    Фильм
                </Cell>
            </List>
        </div>
    );
};

export default SavedPanel;