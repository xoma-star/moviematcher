import Noise from "./components/Noise/Noise";
import Navbar from "./components/Navbar/Navbar";
import WelcomePanel from "./panels/Welcome/WelcomePanel";
import Panel from "./panels/Panel";

function App() {

    return (
        <div className={'flex'}>
            <Noise/>
            <Navbar/>
            <Panel id={'welcome'}><WelcomePanel/></Panel>
        </div>
    )
}

export default App
