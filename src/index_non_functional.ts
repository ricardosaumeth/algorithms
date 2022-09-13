const getCount = (z: number, test: number[]) => {
  let counter = 0;
  for (let foo of test) {
    if (foo == z) counter++;
  }
  return counter;
};

interface iresult {
  node: number;
  frequency: number;
  weight: number;
}

const fun = (nodes: number, a: number[], b: number[]) => {
  let result: iresult[] = [];

  for (let i = 0; i < nodes; i++) {
    result[i] = { node: 0, frequency: 0, weight: 0 };
    result[i].node = i + 1;
    result[i].frequency = getCount(i + 1, a) + getCount(i + 1, b);
    result[i].weight = 0;
  }

  console.log(result);

  let sortedDescending = result.sort((x, b) => b.frequency - x.frequency);

  console.log(sortedDescending);

  let counter = nodes;

  for (let foo of sortedDescending) {
    foo.weight = counter--;
  }

  console.log(sortedDescending);

  let sortedByNode = sortedDescending.sort((a, b) => a.node - b.node);

  let totalWeight = 0;
  for (let i = 0; i < a.length; i++) {
    totalWeight += sortedByNode[a[i] - 1].weight + sortedByNode[b[i] - 1].weight;
  }
  return totalWeight;
};

console.log(fun(5, [2, 2, 1, 2], [1, 3, 4, 4]));

// console.log(fun(3,[1],[3]))

// console.log(fun(4,[1,3],[2,4]))
