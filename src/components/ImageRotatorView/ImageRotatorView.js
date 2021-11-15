import { Fragment, useState } from "react";
import ImageConfigurationPanel from "./ImageConfigurationPanel/ImageConfigurationPanel";
import ImageViewPanel from "./ImageViewPanel/ImageViewPanel";


const ImageRotatorView = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const [rotatedImageInfo, setRotatedImageInfo] = useState(null);
  return (
    <Fragment>
      <ImageConfigurationPanel
        imageInfo={imageInfo}
        rotatedImageInfo={rotatedImageInfo}      
        setImageInfo = {setImageInfo}
        setRotatedImageInfo = {setRotatedImageInfo}
      ></ImageConfigurationPanel>
      <ImageViewPanel rotatedImageInfo={rotatedImageInfo} ></ImageViewPanel>
    </Fragment>
  );
};

export default ImageRotatorView;
