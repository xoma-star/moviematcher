import React from 'react';
import Avatar from "../../components/Avatar/Avatar";
import Block from "../../components/Block/Block";

const UserPanel = () => {
    return (
        <div className={'flex flex-col relative w-full'}>
            <div className={'flex items-center'}>
                <Avatar size={40} src={'https://sun9-23.userapi.com/impg/Q3d0VaD7q2Hj4qQsblaCyyTZxSO-De44nkzQ4Q/RY5AdHjRvu8.jpg?size=604x340&quality=96&sign=0e99edcbd212396b29aaa9af73cf625e&c_uniq_tag=xvxW77bU-zz_p_Hix0rKzT7SwB7f_5SkIRdD0yjGy6U&type=album'}/>
                <span className={'text-2xl ml-4 font-bold'}>Александр</span>
            </div>
            <Block header={'Любимые жанры'}>

            </Block>
        </div>
    );
};

export default UserPanel;