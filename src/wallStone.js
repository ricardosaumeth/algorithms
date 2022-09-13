function getBlocks(blockHeights) {
  let wallHeight = 0;
  let currentBlockSize = 0;
  let blockStack = [];
  let blockCounter = 0;

  blockHeights.forEach(currentBlock => {
    currentBlockSize = currentBlock - wallHeight;

    if (currentBlock > wallHeight) {
      blockStack.push(currentBlockSize);
      wallHeight = wallHeight + currentBlockSize;
    }
    if (currentBlock < wallHeight) {
      while (currentBlock < wallHeight) {
        currentBlockSize = blockStack.pop();
        blockCounter++;
        wallHeight = wallHeight - currentBlockSize;
      }

      if (currentBlockSize !== 0) {
        blockStack.push(currentBlockSize);
      }
      wallHeight = wallHeight + currentBlockSize;
    }
  });
  return blockCounter + blockStack.length;
}

console.log(getBlocks([8, 8, 5, 7, 9, 8, 7, 4, 8]));
