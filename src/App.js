import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageInfo, setImageInfo] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <h2>Image Rotator</h2>
      </div>

      <main className="main">
        <LeftPanel imageInfo = {imageInfo} onImageUploaded={setImageInfo}></LeftPanel>
        <RightPanel imageInfo={imageInfo} ></RightPanel>
      </main>
    </div>
  );
}

export default App;
