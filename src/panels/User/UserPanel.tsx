import React, {useState} from 'react';
import Block from "../../components/Block/Block";
import Button from "../../components/Button/Button";
import {useGetGenreListQuery, useGetUserQuery, useUpdateGenresMutation} from "../../generated/graphql";
import {useAppSelector} from "../../redux";

const UserPanel = () => {
    const {data} = useGetGenreListQuery()
    const [mutate] = useUpdateGenresMutation()
    const {id ,launchParams} = useAppSelector(s => s.vk)
    useGetUserQuery({variables: {id: id as string}, skip: !id, fetchPolicy: 'network-only', onCompleted: data => setSelected(data.getUser.favourite_genres)})
    const [selected, setSelected] = useState<string[]>([])
    const handler = (g: string) => async () => {
        const x = [...selected]
        const newSelected = x.indexOf(g) >= 0 ? x.filter(v => v !== g) : [...x, g]
        setSelected(newSelected)
        mutate({variables: {id: id as string, genres: newSelected}, context: {headers: {authorization: JSON.stringify(launchParams)}}})
    }

    return (
        <div className={'flex flex-col w-full'}>
            {/*<div className={'flex items-center'}>*/}
            {/*    <Avatar size={40} src={'https://sun9-23.userapi.com/impg/Q3d0VaD7q2Hj4qQsblaCyyTZxSO-De44nkzQ4Q/RY5AdHjRvu8.jpg?size=604x340&quality=96&sign=0e99edcbd212396b29aaa9af73cf625e&c_uniq_tag=xvxW77bU-zz_p_Hix0rKzT7SwB7f_5SkIRdD0yjGy6U&type=album'}/>*/}
            {/*    <span className={'text-2xl ml-4 font-bold'}>Александр</span>*/}
            {/*</div>*/}
            <Block header={'Любимые жанры'} className={'flex flex-row gap-2 flex-wrap content-center'}>
                {data && data.getGenreList.map(x => <Button selected={selected.indexOf(x) >= 0} key={`genre${x}`} size={'s'} mode={'secondary'} onClick={handler(x)}>{x}</Button>)}
            </Block>
        </div>
    );
};

export default UserPanel;