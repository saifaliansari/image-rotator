const isImageDataValid = (image) => {
  if (typeof image !== 'object' || !image.data || !image.width || !image.height) {
    throw new Error('Invalid ImageData provided');
  }
  const dataPixelCount = image.data.length / 4.0;
  const pixelCount = image.width * image.height;
  if (dataPixelCount !== pixelCount) {
    throw new Error('Image dimensions are corrupted');
  }
};

const calculateTargetDimensions = (width, height, angle) => {
  const sinValueForAngle = Math.sin(angle);
  const sinValueForAngleSupplement = Math.sin(Math.PI / 2.0 - angle);

  const w = Math.round(
    width * Math.abs(sinValueForAngleSupplement) + height * Math.abs(sinValueForAngle),
  );
  const h = Math.round(
    height * Math.abs(sinValueForAngleSupplement) + width * Math.abs(sinValueForAngle),
  );
  return { width: w, height: h };
};
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

const rotateImage = (data, width, height, radians) => {
  const targetDimensions = calculateTargetDimensions(width, height, radians);
  const deltaX = Math.round((targetDimensions.width - width) / 2.0);
  const deltaY = Math.round((targetDimensions.height - height) / 2.0);
  const targetLineWidth = targetDimensions.width * 4;
  const targetData = new Uint8ClampedArray(targetLineWidth * targetDimensions.height);

  const centerX = Math.trunc(width / 2);
  const centerY = Math.trunc(height / 2);

  const sourceLineWidth = width * 4;
  let row = 0;
  for (let i = 0, l = sourceLineWidth * height; i < l;) {
    const x = Math.round((i % sourceLineWidth) / 4);
    const y = row;
    const rotatedPoint = rotatePoint(x, y, centerX, centerY, radians);
    rotatedPoint.x += deltaX;
    rotatedPoint.y += deltaY;
    if (
      rotatedPoint.x >= 0
      && rotatedPoint.x < targetDimensions.width
      && rotatedPoint.y >= 0
      && rotatedPoint.y < targetDimensions.height
    ) {
      const target = rotatedPoint.y * targetLineWidth + rotatedPoint.x * 4;
      targetData[target] = data[i];
      targetData[target + 1] = data[i + 1];
      targetData[target + 2] = data[i + 2];
      targetData[target + 3] = data[i + 3];
    }
    i += 4;
    if (i % sourceLineWidth === 0) {
      row += 1;
    }
  }
  return {
    data: targetData,
    width: targetDimensions.width,
    height: targetDimensions.height,
  };
};

const rotate = (image, angle) => {
  isImageDataValid(image);
  if (typeof parseFloat(angle) !== 'number') {
    throw new Error('Angle must be number');
  }
  const radians = parseFloat((angle * (Math.PI / 180)).toFixed(2));
  if (Math.abs(radians) % (Math.PI * 2.0).toFixed(2) === 0.0) {
    return image;
  }
  const { data, width, height } = image;
  const result = rotateImage(data, width, height, radians);

  return new ImageData(Uint8ClampedArray.from(result.data), result.width, result.height);
};

export default rotate;
