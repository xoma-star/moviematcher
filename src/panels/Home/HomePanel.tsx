import React from 'react';
import Card from "../../components/Card/Card";

const HomePanel = () => {
    return (
        <div className={'flex relative w-full'}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default HomePanel;