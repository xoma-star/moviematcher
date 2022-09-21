import {useEffect} from "react";
import bridge from "@vkontakte/vk-bridge";
import verifyLaunchParams from "../vk/verify";
import {setID, setVerified} from "../redux/slices/vk";
import {useAppDispatch} from "../redux";
import {useGetUserByVkQuery} from "../generated/graphql";

const useBridge = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const url = window.location.href
        bridge.send('VKWebAppInit')
        const launchParams = url.slice(url.indexOf('?') + 1).split('&')
        //@ts-ignore
        const processed = launchParams.map(key => ({key: key, value: launchParams[key]}))
        const verified = verifyLaunchParams(processed, 'EMGtSbU8xcx1i3SyBcIt')
        dispatch(setVerified(verified))
        const vkid = localStorage.getItem('pb_id')
        if(!vkid){
            const id = processed.find(x => x.key === 'vk_user_id')?.value
            if(id){
                const {loading, data} = useGetUserByVkQuery({variables: {id: id}})
                if(!loading){
                    const pb_id = data?.getUserByVk.id
                    if(pb_id){
                        localStorage.setItem('pb_id', pb_id)
                        dispatch(setID(pb_id))
                    }
                }
            }
        }else dispatch(setID(vkid))
    }, [])
}

export default useBridge