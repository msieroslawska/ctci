export const ARBITRARY_SIZE_OF_ASCII_TABLE = 128;

export const hasUniqueCharsWithSet = (myString: string): boolean => {
  if (myString === undefined) {
    throw new Error('No string has been provided!');
  }
  if (myString.length === 0 || myString.length > ARBITRARY_SIZE_OF_ASCII_TABLE) {
    return false;
  }
  if (myString.length === 1) {
    return true;
  }

  const mySet = new Set(myString);

  return mySet.size === myString.length;
};

export const hasUniqueChars = (myString: string): boolean => {
  if (myString === undefined) {
    throw new Error('No string has been provided!');
  }
  if (myString.length === 0 || myString.length > ARBITRARY_SIZE_OF_ASCII_TABLE) {
    return false;
  }
  if (myString.length === 1) {
    return true;
  }

  const charArray = new Array<boolean>(ARBITRARY_SIZE_OF_ASCII_TABLE + 1).fill(false);

  for (let i = 0; i < myString.length; i += 1) {
    const val = myString.charCodeAt(i);
    if (charArray[val] === false) {
      charArray[val] = true;
    } else {
      return false;
    }
  }

  return true;
};

export const createASCIIString = (): string => {
  const chars = [];
  for (let i = 0; i < 128; i += 1) {
    chars.push(String.fromCharCode(i));
  }

  if (chars.length !== ARBITRARY_SIZE_OF_ASCII_TABLE) {
    throw new Error('Generated table has incorrect size!');
  }

  return chars.join('');
};
