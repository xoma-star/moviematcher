import Noise from "./components/Noise/Noise";
import Navbar from "./components/Navbar/Navbar";
import WelcomePanel from "./panels/Welcome/WelcomePanel";
import Panel from "./panels/Panel";
import View from "./components/View/View";
import {UI_Panels} from "./redux/slices/ui";
import HomePanel from "./panels/Home/HomePanel";
import {useEffect} from "react";
import bridge from "@vkontakte/vk-bridge";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://api.xoma-star.tk/graphql',
    cache: new InMemoryCache()
})

function App() {
    useEffect(() => {
        bridge.send('VKWebAppInit')
    }, [])
    return (
        <ApolloProvider client={client}>
            <div className={'flex'}>
                <Noise/>
                <Navbar/>
                <View>
                    <Panel id={UI_Panels.WELCOME}><WelcomePanel/></Panel>
                    <Panel id={UI_Panels.HOME}><HomePanel/></Panel>
                </View>
            </div>
        </ApolloProvider>
    )
}

export default App
