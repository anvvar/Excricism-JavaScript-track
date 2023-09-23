//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (bands) => {
 const colorcode = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
 ]
  let code=bands.map(color =>colorcode.indexOf(color)).join('').slice(0,2);
  return Number(code);
};
