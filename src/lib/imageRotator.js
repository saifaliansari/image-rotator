const SINGLE_PIXEL_DATA_LEN = 4;
const TWO_PI = Math.PI * 2.0;
const PI_BY_2 = Math.PI / 2;
const isImageDataValid = (image) => {
  if (!image) {
    throw new Error('No image data provided');
  }
  if (typeof image !== 'object' || !image.data || !image.width || !image.height) {
    throw new Error('Invalid ImageData provided');
  }
  const dataPixelCount = image.data.length / 4.0;
  const pixelCount = image.width * image.height;
  if (dataPixelCount !== pixelCount) {
    throw new Error('Image dimensions are corrupted');
  }
};

/*
 This method calculates the dimension of the target rectangle
 after rotation for a given angle
*/
const calculateTargetDimensions = (width, height, angle) => {
  const sinValueForAngle = Math.sin(angle);
  const sinValueForAngleSupplement = Math.sin(PI_BY_2 - angle);

  const w = Math.round(
    width * Math.abs(sinValueForAngleSupplement) + height * Math.abs(sinValueForAngle),
  );
  const h = Math.round(
    height * Math.abs(sinValueForAngleSupplement) + width * Math.abs(sinValueForAngle),
  );
  return { width: w, height: h };
};

/*
 * This method calculates the new coordinates of a point on a 2d plane after rotation
 * for a given angle in relation to a given center. After the calculation it returns
 * the new position removing the realtion with center
*/
const rotatePoint = (pointX, pointY, centerX, centerY, radians) => {
  let x = pointX - centerX;
  let y = pointY - centerY;
  const sinAngle = Math.sin(radians);
  const cosAngle = Math.cos(radians);

  const rotatedX = x * cosAngle - y * sinAngle;
  const rotatedY = x * sinAngle + y * cosAngle;

  x = rotatedX + centerX;
  y = rotatedY + centerY;

  return { x: Math.round(x), y: Math.round(y) };
};

/*
 * This method creates a new target array and fills it with data of the rotated image caluculated
 * point by point using the rotation logic.The method sets a center to the image around which the 
 * image has to be rotated
*/
const rotateImage = (data, width, height, radians) => {
  const targetImageMatrixDimensions = calculateTargetDimensions(width, height, radians);
  const deltaX = Math.round((targetImageMatrixDimensions.width - width) / 2.0);
  const deltaY = Math.round((targetImageMatrixDimensions.height - height) / 2.0);
  const targetImageMatrixWidth = targetImageMatrixDimensions.width * SINGLE_PIXEL_DATA_LEN;
  const targetImageData = new Uint8ClampedArray(targetImageMatrixWidth
    * targetImageMatrixDimensions.height);

  const centerX = Math.trunc(width / 2);
  const centerY = Math.trunc(height / 2);

  const matrixWidth = width * 4;
  let row = 0;
  for (let col = 0, l = matrixWidth * height; col < l;) {
    const x = Math.round((col % matrixWidth) / SINGLE_PIXEL_DATA_LEN);
    const y = row;
    const rotatedPoint = rotatePoint(x, y, centerX, centerY, radians);
    rotatedPoint.x += deltaX;
    rotatedPoint.y += deltaY;
    if (
      rotatedPoint.x >= 0
      && rotatedPoint.x < targetImageMatrixDimensions.width
      && rotatedPoint.y >= 0
      && rotatedPoint.y < targetImageMatrixDimensions.height
    ) {
      const target = rotatedPoint.y * targetImageMatrixWidth
                   + rotatedPoint.x * SINGLE_PIXEL_DATA_LEN;
      targetImageData[target] = data[col]; // RED
      targetImageData[target + 1] = data[col + 1]; // GREEN
      targetImageData[target + 2] = data[col + 2]; // BLUE
      targetImageData[target + 3] = data[col + 3]; // ALPHA
    }
    col += SINGLE_PIXEL_DATA_LEN;
    if (col % matrixWidth === 0) {
      row += 1;
    }
  }
  return {
    data: targetImageData,
    width: targetImageMatrixDimensions.width,
    height: targetImageMatrixDimensions.height,
  };
};

const rotate = (image, angle) => {
  isImageDataValid(image);
  if (Number.isNaN(parseFloat(angle))) {
    throw new Error('Angle must be number');
  }
  const radians = parseFloat((angle * (Math.PI / 180)).toFixed(2));
  if (Math.abs(radians) % (TWO_PI).toFixed(2) === 0.0) {
    return image;
  }
  const { data, width, height } = image;
  const result = rotateImage(data, width, height, radians);
  return new ImageData(Uint8ClampedArray.from(result.data), result.width, result.height);
};
module.exports = rotate;
