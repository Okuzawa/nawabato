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

function shuffle(array) {
    const cloneArray = [...array];
    for (let i = cloneArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
        [cloneArray[i], cloneArray[j]] = [cloneArray[j], cloneArray[i]]; // 要素を入れ替えます
    }
    return cloneArray
}

export default {
    getTotalCount,
    create2DArray,
    splitArray,
    shuffle,
};