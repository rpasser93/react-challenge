export const formatNumber = (value: number) => {
  if (!value) {
    return '0';
  }
  const formattedNumber: string = value.toLocaleString('en-US');
  return formattedNumber;
};
