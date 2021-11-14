import "./App.css";
import ImageRotatorView from "./components/ImageRotatorView/ImageRotatorView";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Image Rotator</h2>
      </div>
      <main className="main">
        <ImageRotatorView></ImageRotatorView>
      </main>
    </div>
  );
}

export default App;
