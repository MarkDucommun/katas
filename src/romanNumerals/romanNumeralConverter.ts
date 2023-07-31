export const convert = (number) => {
    return convertThousandsNew(number) +
        convertHundreds(number) +
        convertTensNew(number) +
        convertOnesNew(number);
}
const convertThousandsNew = (number) => "M".repeat(numberOfThousandsIn(number));
const convertHundreds = (number) => convertInner(numberOfHundredsIn(number), "C", "D", "M")
const convertTensNew = (number) => convertInner(numberOfTensIn(number), "X", "L", "C")
const convertOnesNew = (number) => convertInner(numberOfOnesIn(number), "I", "V", "X")

const convertInner = (number, a, b, c) => {
    if (number <= 3) {
        return a.repeat(number);
    } else if (number === 4) {
        return `${a}${b}`;
    } else if (number === 5) {
        return b;
    } else if (number === 6 || number === 7 || number === 8) {
        return b + a.repeat(number - 5);
    } else if (number === 9) {
        return `${a}${c}`;
    }
}

const numberOfThousandsIn = (number) => Math.floor(number / 1000);
const numberOfHundredsIn = (number) => Math.floor((number % 1000) / 100);
const numberOfTensIn = (number) => Math.floor((number % 1000 % 100) / 10);
const numberOfOnesIn = (number) => number % 1000 % 100 % 10;


// 1 -> I
// 5 -> V
// 10 -> X
// 50 -> L
// 100 -> C
// 500 -> D
// 1000 -> M

