//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {

  const gigaSecond=10e11;
  const outputDate=new Date(inputDate.getTime()+gigaSecond);
  return outputDate;
};
