
const reverseString = (string) => {

  let helloWorld = "Hello World.";

  if(!string){
    return "Boş string girdin."
  }

  const splitString = string.split("");

  const reversedArray = splitString.reverse();

  const joinArray = reversedArray.join("");

  return joinArray;
}

module.exports = {
  reverseString
};
