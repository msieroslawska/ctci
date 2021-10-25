const checkIfReplacedOrTheSame = (string1: string, string2: string): boolean => {
  let replaceCount = 0;

  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] !== string2[i]) {
      replaceCount += 1;
    }
  }

  return replaceCount < 2;
};

const checkIfAddedOrTheSame = (string1: string, string2: string): boolean => {
  let mismatchCount = 0;

  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] !== string2[i + mismatchCount]) {
      mismatchCount += 1;
    }
  }

  return mismatchCount < 2;
};

export const oneAway = (string1: string, string2: string): boolean => {
  if (string1.length === string2.length) {
    return checkIfReplacedOrTheSame(string1, string2);
  }

  if (string1.length + 1 === string2.length) {
    return checkIfAddedOrTheSame(string1, string2);
  }

  if (string1.length === string2.length + 1) {
    return checkIfAddedOrTheSame(string2, string1);
  }

  return false;
};
