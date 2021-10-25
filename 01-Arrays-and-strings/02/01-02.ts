export const normalizeString = (myString: string): string => myString.replace(/\W/g, '').toLowerCase();

export const sort = (myString: string): string[] => myString.split('').sort();

export const isPermutation = (string1: string, string2: string): boolean => {
  const normalizedString1 = normalizeString(string1);
  const normalizedString2 = normalizeString(string2);

  if (normalizedString1.length !== normalizedString2.length) {
    return false;
  }

  const sortedArray1 = sort(normalizedString1);
  const sortedArray2 = sort(normalizedString2);

  return sortedArray1.every((ch, idx) => ch === sortedArray2[idx]);
};
