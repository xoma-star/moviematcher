import Noise from "./components/Noise/Noise";
import Navbar from "./components/Navbar/Navbar";
import WelcomePanel from "./panels/Welcome/WelcomePanel";
import Panel from "./panels/Panel";
import View from "./components/View/View";
import {UI_Panels} from "./redux/slices/ui";
import HomePanel from "./panels/Home/HomePanel";

function App() {
    return (
        <div className={'flex'}>
            <Noise/>
            <Navbar/>
            <View>
                <Panel id={UI_Panels.WELCOME}><WelcomePanel/></Panel>
                <Panel id={UI_Panels.HOME}><HomePanel/></Panel>
            </View>
        </div>
    )
}

export default App
