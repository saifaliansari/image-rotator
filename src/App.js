import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Image Rotator</h2>
      </div>

      <main className="main">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </main>
    </div>
  );
}

export default App;
