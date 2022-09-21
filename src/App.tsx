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
import {useAppSelector} from "./redux";
import MessagesPanel from "./panels/Messages/MessagesPanel";
import UserPanel from "./panels/User/UserPanel";
import useBridge from "./hooks/useBridge";

const client = new ApolloClient({
    uri: 'https://api.xoma-star.tk/graphql',
    cache: new InMemoryCache()
})

function App() {
    useBridge()
    const {activePanel} = useAppSelector(s => s.ui)

    return (
        <ApolloProvider client={client}>
            <div className={'flex'}>
                <Noise/>
                <Navbar/>
                <View activePanel={activePanel}>
                    <Panel id={UI_Panels.WELCOME}><WelcomePanel/></Panel>
                    <Panel id={UI_Panels.HOME}><HomePanel/></Panel>
                    <Panel id={UI_Panels.MESSAGES}><MessagesPanel/></Panel>
                    <Panel id={UI_Panels.USER}><UserPanel/></Panel>
                </View>
            </div>
        </ApolloProvider>
    )
}

export default App
