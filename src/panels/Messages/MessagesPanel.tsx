import React from 'react';
import Block from "../../components/Block/Block";
import Avatar from "../../components/Avatar/Avatar";
import Badge from "../../components/Badge/Badge";

const MessagesPanel = () => {
    const a = [
        'https://sun9-12.userapi.com/s/v1/ig2/JN4gUXUTxRNjGrRtkcYcHu_TDt7UyZe1pnR10T13LuGTVUSeAGpeAYQk6wVkKqi1SP84mxW5uwVJew9DShheOa6M.jpg?size=50x0&quality=96&crop=0,0,1080,1080&ava=1',
        'https://sun9-27.userapi.com/s/v1/ig2/m64Xe8EcYUiwc28Mk7IY-ggzWHm1B9sMlb3tARH7UB0_UbQ5zgSZ_9DUL9pYkfEGOrmccml7U9CxoXX_lch4xstm.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1',
        'https://sun9-36.userapi.com/s/v1/ig2/V1XMF3VIlik6DVBN_Wr80uGtSVYalSwN5hCfS3_5Vx82ptjCpcq_IJF19g7oOCuFeD0mPw6U3BcPSsJcEUnCNdpR.jpg?size=50x0&quality=96&crop=0,0,512,512&ava=1',
        'https://sun9-41.userapi.com/s/v1/ig2/ChiTd3V-GRNA5EwQSDr_N1htxZy9thj6RV2xsJ0t-7ZG-T3AQS1RULvvhYhitGlwH3RPef4EAWX1_C0GuAGiqqB0.jpg?size=50x0&quality=96&crop=0,0,992,992&ava=1'
    ]
    return (
        <div className={'flex flex-col relative w-full'}>
            <Block header={'Совпадения по интересам'}>
                <div className={'flex flex-row gap-4 pt-4 flex-wrap justify-between'}>
                    {[...a, ...a, ...a, ...a].map(r => <div className={'flex items-center flex-col'}><Avatar src={r} badge={<Badge>12%</Badge>}/><span className={'mt-2'}>Александр</span></div>)}
                </div>
            </Block>
        </div>
    );
};

export default MessagesPanel;