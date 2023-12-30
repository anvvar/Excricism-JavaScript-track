//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//export 
const tournamentTally = (result) => {
  let title =`Team                           | MP |  W |  D |  L |  P`;
  let template =`${Team}${30-Team.length*" "}                           | MP |  W |  D |  L |  P`;
 let teams= result.split(';');
  return `${title}\n ${teams[0]}${teams[1]} `;
};


tournamentTally('Allegoric Alaskans;Blithering Badgers;win')