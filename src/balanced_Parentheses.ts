const balancedParentheses = (str: string) => {
  type parentheses = '(' | '{' | '[';
  const stack = [];
  const parenthesesMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      const lastEl = stack.pop() as parentheses;
      if (str[i] !== parenthesesMap[lastEl]) {
        return 0;
      }
    }
  }

  if (stack.length !== 0) return 0;

  return 1;
};

console.log(balancedParentheses('{[]()}')); // 1
console.log(balancedParentheses('{[(])}')); // 0
console.log(balancedParentheses('{[}')); // 0
