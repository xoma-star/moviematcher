import Noise from "./components/Noise/Noise";
import Navbar from "./components/Navbar/Navbar";
import WelcomePanel from "./panels/Welcome/WelcomePanel";
import Panel from "./panels/Panel";
import View from "./components/View/View";
import {UI_Panels} from "./redux/slices/ui";
import HomePanel from "./panels/Home/HomePanel";
import {useAppSelector} from "./redux";
import MessagesPanel from "./panels/Messages/MessagesPanel";
import UserPanel from "./panels/User/UserPanel";
import useBridge from "./hooks/useBridge";
import SavedPanel from "./panels/Saved/SavedPanel";

function App() {
    useBridge()
    const {activePanel} = useAppSelector(s => s.ui)

    return (
        <div className={'flex'}>
            <Noise/>
            <div className={'w-full h-full fixed bg-[url("img/backdrops/lines-min.jpg")] bg-center bg-cover opacity-40'}/>
            <Navbar/>
            <View activePanel={activePanel}>
                <Panel id={UI_Panels.WELCOME}><WelcomePanel/></Panel>
                <Panel id={UI_Panels.HOME}><HomePanel/></Panel>
                <Panel id={UI_Panels.MESSAGES}><MessagesPanel/></Panel>
                <Panel id={UI_Panels.USER}><UserPanel/></Panel>
                <Panel id={UI_Panels.SAVED}><SavedPanel/></Panel>
            </View>
        </div>
    )
}

export default App
