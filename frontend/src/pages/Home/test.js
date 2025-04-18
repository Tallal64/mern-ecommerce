// function arraylimit(array, limit) {
//   if (limit > array.length) return null;
//   return array.slice(0, limit);
// }

const array = Array.from({ length: 8 }, (_, index) => `String ${index + 1}`);

// const limitedArray = arraylimit(array, 4);
// console.log(limitedArray);

function getRandomElements(array, n) {
    if (n > array.length) return null;
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

const randomElements = getRandomElements(array, 3);
console.log(randomElements);