
export const chooseRandom = (array = [], numItems) => {
    let newArr = []
    let randomIndex = 0

    if (array.length < 2)
    {
        return array
    }

    if (numItems > array.length)
    {
        numItems = getRandomInt(0, array.length)
    }

    let copyArr = []
    copyArr = array

    for (let i = 0; i < numItems; i++)
    {
        randomIndex = getRandomInt(0, copyArr.length)
        newArr.push(copyArr[randomIndex])    
        copyArr.splice(randomIndex, 1)
    }
    
    return newArr
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
