import { Fragment, useState } from "react";
import ImageConfigurationPanel from "./ImageConfigurationPanel/ImageConfigurationPanel";
import ImageViewPanel from "./ImageViewPanel/ImageViewPanel";
import rotate from "../../utils/imageRotationUtil";

const ImageRotatorView = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const [rotatedImageInfo, setRotatedImageInfo] = useState(null);

  const imageUploadHandler = (imageInfo) => {
    setImageInfo((state) => {
      return {
        fileName: imageInfo.fileName,
        imageData: imageInfo.imageData,
        rotationAngle: 0,
        processingTime: imageInfo.processingTime,
      };
    });
    setRotatedImageInfo((state) => {
      return {
        fileName: imageInfo.fileName,
        imageData: imageInfo.imageData,
        rotationAngle: 0,
        processingTime: imageInfo.processingTime,
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
          rotationAngle: angle,
          processingTime: end - start,
        };
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <ImageConfigurationPanel
        imageInfo={rotatedImageInfo}
        onImageUploaded={imageUploadHandler}
        onApplyRotation={rotationChangeHandler}
      ></ImageConfigurationPanel>
      <ImageViewPanel imageInfo={rotatedImageInfo}></ImageViewPanel>
    </Fragment>
  );
};

export default ImageRotatorView;
