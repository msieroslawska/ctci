export const compressString = (input: string): string => {
  if (input.length === 0) {
    return '';
  }

  let charCounter = 0;
  let counter = 0;
  const output: string[] = [];

  input.split('').forEach((char) => {
    if (output.length === 0) {
      output.push(char);
      counter += 1;
      charCounter += 1;
    } else {
      const previousChar = output[output.length - 1];
      if (previousChar === char) {
        counter += 1;
      } else {
        output.push(counter.toString());
        output.push(char);
        counter = 1;
        charCounter += 1;
      }
    }
  });
  output.push(counter.toString());

  if (charCounter === input.length) {
    return input;
  }

  return output.join('');
};
