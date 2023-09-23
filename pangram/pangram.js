//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (message) => {
  const sentance = message.toLowerCase().replace(/[^a-z]/g, "");
  let letters = [];
  sentance.split("").forEach((char) => {
    if (!letters.includes(char)) letters.push(char);
  });
  return letters.length === 26;
};
