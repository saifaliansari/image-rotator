import classes from "./ImageUploader.module.css";
const ImageUploader = () => {
  const onImagePicked = () => {};

  return (
    <div className={classes.imageUploadContainer}>
      <label>
        Select File
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={onImagePicked}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
