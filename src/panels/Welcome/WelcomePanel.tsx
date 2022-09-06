import React from 'react';
import Button from "../../components/Button/Button";
import {useAppDispatch} from "../../redux";
import {setPanel, UI_Panels} from "../../redux/slices/ui";

const WelcomePanel = () => {
    const dispatch = useAppDispatch()
    const clickHandler = () => {
        dispatch(setPanel(UI_Panels.HOME))
    }

    return (
        <div className={'flex flex-col items-center justify-around'}>
            <div className={'font-extrabold text-5xl'}>Это MovieMatcher!</div>
            <div>Добро пожаловать! С помощью этого сервиса вы сможете найти новых знакомых по вкусам. Приложение работает по аналогии с сервисами знакомств. Свайп влево - фильм не нравится, вправо - нравится, наверх - не смотрел и не собираюсь, вниз - буду смотреть.</div>
            <Button size={'full'} onClick={clickHandler}>Поехали!</Button>
        </div>
    );
};

export default WelcomePanel;