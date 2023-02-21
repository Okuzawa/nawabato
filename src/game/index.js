import store from "@/store";
import utils from "@/utils";

const normalBlock = [1, 2]
const spBlock = [3, 4]

function mergeStage(original, target) {
    return target.map((value, index) => {
        if (spBlock.includes(original[index]) && normalBlock.includes(value)) return original[index]
        return value == 8 ? original[index] : target[index]
    });
}
function mergeCard(card1, card2) {
    return card1.map((value, index) => {
        if (value === 8 || card2[index] === 8) {
            return value === 8 ? card2[index] : value;
        }
  
      const isNormalBlock = normalBlock.includes(value) && normalBlock.includes(card2[index]);
      const isSpBlock = spBlock.includes(value) && spBlock.includes(card2[index]);
      return isNormalBlock || isSpBlock ? 7 : Math.max(value, card2[index]);
    });
}

function countPoint(values, target) {
    return target.filter(value => values.some(el => el == value)).length
}

function putFireToBlock(stageMap, myBlock, enemyBlock) {
    const stage = utils.splitArray(stageMap, store.state.stageSideLength)
    return stageMap.map((value, index) => {
        const stagePosY = Math.floor(index / store.state.stageSideLength)
        const stagePosX = index % store.state.stageSideLength
        if (value == myBlock.sp) {
            if (utils.searchAroundAll([1, 2, 3, 4, 5, 6, 7, 8], stagePosY, stagePosX, stage)) return myBlock.fireSp
            else return value
        }
        else if (value == enemyBlock.sp) {
            if (utils.searchAroundAll([1, 2, 3, 4, 5, 6, 7, 8], stagePosY, stagePosX, stage)) return enemyBlock.fireSp
            else return value
        }
        else return value
    })
}

function setBlock(color) {
    return color == 'blue' ? { normal: 2, sp: 4, fireSp: 6 } : { normal: 1, sp: 3, fireSp: 5 }
}

function replaceToBlue(cardList) {
    return cardList.map(card => {
        let blueMap = card.map.map(value => {
            if (value != 0) return value + 1
            return value;
        })
        return { ...card, map: blueMap }
    });
}

function replaceToYellow(cardList) {
    return cardList.map(card => {
        return { ...card }
    });
}

function movePosIndex(direction) {
    let moveIndex = 0;
    switch (direction) {
        case "←":
            moveIndex = -1;
            break;
        case "→":
            moveIndex = +1;
            break;
        case "↑":
            moveIndex = -store.state.stageSideLength;
            break;
        case "↓":
            moveIndex = +store.state.stageSideLength;
            break;
        default:
            break;
    }
    return moveIndex;
}

export default {
    setBlock,
    replaceToBlue,
    replaceToYellow,
    mergeCard,
    mergeStage,
    countPoint,
    putFireToBlock,
    movePosIndex,
};