// let name1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 console.log(findMatching)
// function findMatching(){
//  return findMatching.filter("name1");
// }
// const result = name1.filter(name1 => name1.length);
// console.log(name1)
function findMatching(source, sought) {
  return source.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
  );
}

function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(source, soughtName) {
  return source.filter((record) => record.name === soughtName);
}