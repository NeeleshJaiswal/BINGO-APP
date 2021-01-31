import "./App.css";
import { WinnerProvider } from "./context/winner.context";
import Blocks from "./views/blocks";

function App() {
  return (
    <div className="App">
      <WinnerProvider>
        <Blocks />
      </WinnerProvider>
    </div>
  );
}

export default App;
