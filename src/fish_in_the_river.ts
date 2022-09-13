function getSurvivorFish(fishSizes: number[], fishDirections: number[]) {
  const UPSTREAM = 0;
  const downStreamFishStack: number[] = [];
  const upStreamFishStack: number[] = [];
  let currentFishDirection = 0;

  fishSizes.forEach((currentFishSize, idx) => {
    currentFishDirection = fishDirections[idx];

    if (currentFishDirection === UPSTREAM) {
      while (downStreamFishStack.length > 0) {
        const fishGoingDownstreamSize = downStreamFishStack.pop() as number;
        if (fishGoingDownstreamSize > currentFishSize) {
          downStreamFishStack.push(fishGoingDownstreamSize);
          break;
        }
      }
      if (downStreamFishStack.length === 0) {
        upStreamFishStack.push(currentFishSize);
      }
    } else {
      downStreamFishStack.push(currentFishSize);
    }
  });

  return downStreamFishStack.length + upStreamFishStack.length;
}

// A[0] = 4 B[0] = 0 A[1] = 3 B[1] = 1 A[2] = 2 B[2] = 0 A[3] = 1 B[3] = 0 A[4] = 5 B[4] = 0
//console.log(getSurvivorFish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
console.log(getSurvivorFish([4, 3, 2, 1, 5,6], [0, 1, 0, 0, 0,1]));