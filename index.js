
const reverseString = (string) => {

  if(!string){
    return "Boş string girdin."
  }

  const splitString = string.split("");
  const reversedArray = splitString.reverse();
  const joinArray = reversedArray.join("");

  return joinArray;
}

const test = () => {

  const testString = "Candan Erçetin";
  const testReverse = reverseString(testString);
  const response = `Default değer: ${testString} \nTest Sonucu: ${testReverse}`

  return response;
}

module.exports = {
  reverseString,
  test
};
