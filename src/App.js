import ImageConfigurationPanel from "./components/ImageConfigurationPanel/ImageConfigurationPanel";
import ImageViewPanel from "./components/ImageViewPanel/ImageViewPanel";
import rotate from "./utils/imageRotationUtil";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageInfo, setImageInfo] = useState(null);
  const [rotatedImageInfo, setRotatedImageInfo] = useState(null);

  const imageUploadHandler = (imageInfo) => {
    setImageInfo((state) => {
      return {
        fileName: imageInfo.fileName,
        imageData: imageInfo.imageData,
        rotationAngle : 0,
        processingTime:imageInfo.processingTime
      };
    });
    setRotatedImageInfo((state) => {
      return {
        fileName: imageInfo.fileName,
        imageData: imageInfo.imageData,
        rotationAngle : 0,
        processingTime:imageInfo.processingTime
      };
    });
  };

  const rotationChangeHandler = (angle) => {
    if (!imageInfo) {
      return alert(`Please select an image first`);
    }
    try {
      
      const start = performance.now();
      const rotatedImageData = rotate(imageInfo.imageData, angle);
      const end = performance.now();
        setRotatedImageInfo((state) => {
        return {
          fileName: state.fileName,
          imageData: rotatedImageData,
          rotationAngle : angle,
          processingTime: (end - start)
        };
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h2>Image Rotator</h2>
      </div>

      <main className="main">
        <ImageConfigurationPanel
          imageInfo={rotatedImageInfo}
          onImageUploaded={imageUploadHandler}
          onApplyRotation={rotationChangeHandler}
        ></ImageConfigurationPanel>
        <ImageViewPanel imageInfo={rotatedImageInfo}></ImageViewPanel>
      </main>
    </div>
  );
}

export default App;
