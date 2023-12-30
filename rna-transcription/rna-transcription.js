//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const toRna = (DNA) => {
  const RNA = [];
  DNA.split('').forEach((nucliotide) => {
    nucliotide === "G"
      ? RNA.push("C")
      : nucliotide === "C"
      ? RNA.push("G")
      : nucliotide=== "T"
      ? RNA.push("A")
      : nucliotide === "A"
      ? RNA.push("U")
      : "";
  });
  return RNA.join('');
};
