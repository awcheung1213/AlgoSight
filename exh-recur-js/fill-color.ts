var floodFill = function(image, sr, sc, color) {
  const originColor = image[sr][sc];

  function _floodFill(image, sr, sc, color, originColor){
    const notInbounds = sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length
    if (notInbounds) return;
    if (image[sr][sc] !== originColor) return;
    // if (image[sr][sc] === color && image[sr][sc] !== originColor) return image;


    image[sr][sc] = color;

    _floodFill(image, sr + 1, sc, color, originColor)
    _floodFill(image, sr - 1, sc, color, originColor)
    _floodFill(image, sr, sc + 1, color, originColor)
    _floodFill(image, sr, sc - 1, color, originColor)

  }

  if (originColor !== color) _floodFill(image, sr, sc, color, originColor);
  return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
