import {useEffect} from "react";
import bridge from "@vkontakte/vk-bridge";
import {launchParamsType, setID, setLaunchParams} from "../redux/slices/vk";
import {useAppDispatch} from "../redux";
import {useGetUserByVkQuery, useSignupUserMutation} from "../generated/graphql";

const useBridge = () => {
    const vkid = localStorage.getItem('pb_id')
    const dispatch = useAppDispatch()
    const url = window.location.href
    const launchParams = url.slice(url.indexOf('?') + 1).split('&')
    const processed = launchParams.map((_, i) => ({key: launchParams[i].split('=')[0], value: launchParams[i].split('=')[1]}))
    const id = parseInt(processed.find(x => x.key === 'vk_user_id')?.value || '0')
    if(!id) return
    const [mutate] = useSignupUserMutation()

    useGetUserByVkQuery({variables: {id: id}, skip: !!vkid,
        onError: async e => {
            //@ts-ignore
            if(e.graphQLErrors.some(x => x.extensions?.exception?.status === 404)) {
                mutate({variables: {id: id}})
                    .then(r => {
                        if(r.data?.createUser.id) localStorage.setItem('pb_id', r.data.createUser.id)
                    })
                    .catch(e => console.log(e))
            }
        }, onCompleted: data1 => {
            const pb_id = data1?.getUserByVk.id
            if(pb_id){
                localStorage.setItem('pb_id', pb_id)
                dispatch(setID(pb_id))
            }
        }
    })

    useEffect(() => {
        dispatch(setLaunchParams(processed as unknown as launchParamsType[]))
        if(vkid) dispatch(setID(vkid))
        bridge.send('VKWebAppInit')
    }, [])
}

export default useBridge