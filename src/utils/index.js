function getTotalCount(cardList) {
    let totalCount = 0
    cardList.forEach(card => totalCount += card.count)
    return totalCount
}

function create2DArray(rows, cols) {
    let array = new Array(rows);
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(cols).fill(null);
    }
    return array;
}

function splitArray(array, part) {
    var tmp = [];
    for (var i = 0; i < array.length; i += part) {
        tmp.push(array.slice(i, i + part));
    }
    return tmp;
}

function shuffleArray(array) {
    const cloneArray = [...array];
    for (let i = cloneArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
        [cloneArray[i], cloneArray[j]] = [cloneArray[j], cloneArray[i]]; // 要素を入れ替えます
    }
    return cloneArray
}

function rotateArray(array, part) {
    let rotatedMap = []
    for (let y = 0; y < part; y++) {
        rotatedMap[y] = [];
        for (let x = 0; x < part; x++) {
            rotatedMap[y][x] = array[x][part - y - 1]
        }
    }
    return rotatedMap
}

function searchAround(values, posY, posX, targetArea) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (y == 1 && x == 1) continue
            if (values.includes(targetArea[posY + y - 1][posX + x - 1])) return true
        }
    }
    return false;
}
function searchAroundAll(values, posY, posX, targetArea) {
    let results = [];
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (y == 1 && x == 1) continue
            results.push(values.includes(targetArea[posY + y - 1][posX + x - 1]));
        }
    }
    return !results.includes(false);
}

export default {
    getTotalCount,
    create2DArray,
    splitArray,
    shuffleArray,
    rotateArray,
    searchAround,
    searchAroundAll,
};