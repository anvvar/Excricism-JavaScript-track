//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//export
 const rows = (lines) => {
let pascal="";
let p=1;
  for(let i=1;i<=lines;i++)
  {
    for(let j=lines;j<=i;j++)
    {
      pascal+=String(" ")
    }
    for(let k=1;k<=i;k++ ,p++)
    {
      pascal+=Number(p)
    }
    pascal+="\n"
  }

  return pascal;
};

console.log(rows(5));