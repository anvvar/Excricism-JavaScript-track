//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = ( x, y) => {
  let point = 0;
  const radius=Math.sqrt(x**2+y**2)
    if (radius<=1) point = 10;
    else if (radius<=5)point = 5;
    else if (radius<=10) point = 1;
    else point = 0;
    Math.hypot

  return point;
};
