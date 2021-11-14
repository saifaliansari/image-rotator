const rotate = (image, angle) => {
  _isImageDataValid(image);
  if (typeof parseFloat(angle) !== "number") {
    throw new Error("Angle must be number");
  }
  const radians = parseFloat((angle * (Math.PI / 180)).toFixed(2));
  if (Math.abs(radians) % (Math.PI * 2.0).toFixed(2) === 0.0) {
    return image;
  }
  const { data, width, height } = image,
    result = _rotate(data, width, height, radians);

  return new ImageData(
    Uint8ClampedArray.from(result.data),
    result.width,
    result.height
  );
};

const _isImageDataValid = (image) => {
  if (
    typeof image !== "object" ||
    !image.data ||
    !image.width ||
    !image.height
  ) {
    throw new Error("Invalid ImageData provided");
  }
  const dataPixelCount = image.data.length / 4.0,
    pixelCount = image.width * image.height;
  if (dataPixelCount !== pixelCount) {
    throw new Error("Image dimensions are corrupted");
  }
};

const _rotate = (data, width, height, radians) => {
  const targetDimensions = _calculateTargetDimensions(width, height, radians),
    deltaX = Math.round((targetDimensions.width - width) / 2.0),
    deltaY = Math.round((targetDimensions.height - height) / 2.0),
    targetLineWidth = targetDimensions.width * 4,
    targetData = new Uint8ClampedArray(
      targetLineWidth * targetDimensions.height
    );

  const centerX = Math.trunc(width / 2),
    centerY = Math.trunc(height / 2);

  const sourceLineWidth = width * 4;
  let row = 0;
  for (let i = 0, l = sourceLineWidth * height; i < l; ) {
    const x = Math.round((i % sourceLineWidth) / 4),
      y = row;
    const rotatedPoint = _rotatePoint(x, y, centerX, centerY, radians);
    rotatedPoint.x += deltaX;
    rotatedPoint.y += deltaY;
    if (
      rotatedPoint.x >= 0 &&
      rotatedPoint.x < targetDimensions.width &&
      rotatedPoint.y >= 0 &&
      rotatedPoint.y < targetDimensions.height
    ) {
      const target = rotatedPoint.y * targetLineWidth + rotatedPoint.x * 4;
      targetData[target] = data[i];
      targetData[target + 1] = data[i + 1];
      targetData[target + 2] = data[i + 2];
      targetData[target + 3] = data[i + 3];
    }
    i += 4;
    if (i % sourceLineWidth === 0) {
      row++;
    }
  }
  return {
    data: targetData,
    width: targetDimensions.width,
    height: targetDimensions.height,
  };
};

const _calculateTargetDimensions = (width, height, angle) => {
  const sinValueForAngle = Math.sin(angle),
    sinValueForAngleSupplement = Math.sin(Math.PI / 2.0 - angle);

  const w = Math.round(
      width * Math.abs(sinValueForAngleSupplement) +
        height * Math.abs(sinValueForAngle)
    ),
    h = Math.round(
      height * Math.abs(sinValueForAngleSupplement) +
        width * Math.abs(sinValueForAngle)
    );
  return { width: w, height: h };
};

const _rotatePoint = (pointX, pointY, centerX, centerY, radians) => {
  pointX -= centerX;
  pointY -= centerY;
  const sinAngle = Math.sin(radians),
    cosAngle = Math.cos(radians);

  const rotatedX = pointX * cosAngle - pointY * sinAngle,
    rotatedY = pointX * sinAngle + pointY * cosAngle;

  pointX = rotatedX + centerX;
  pointY = rotatedY + centerY;

  return { x: Math.round(pointX), y: Math.round(pointY) };
};
export default rotate;
