export const convertNumber = (number: number): string => {
    const { symbol, remainder} = subtractLargestValueInLookupFromNumber(number, newLookupTable);
    return remainder === 0 ? symbol : symbol + convertNumber(remainder);
}

const subtractLargestValueInLookupFromNumber = (number: number, lookup: LookupValue[]): SubtractionResult => {
    const {value, symbol} = lookup[0];
    return number >= value ? {
        symbol,
        remainder: number - value
    } : subtractLargestValueInLookupFromNumber(number, lookup.slice(1));
}

const lookupTable: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
]

const newLookupTable: LookupValue[] = [
    {value: 1000, symbol: "M"},
    {value: 900, symbol: "CM"},
    {value: 500, symbol: "D"},
    {value: 400, symbol: "CD"},
    {value: 100, symbol: "C"},
    {value: 90, symbol: "XC"},
    {value: 50, symbol: "L"},
    {value: 40, symbol: "XL"},
    {value: 10, symbol: "X"},
    {value: 9, symbol: "IX"},
    {value: 5, symbol: "V"},
    {value: 4, symbol: "IV"},
    {value: 1, symbol: "I"},
];

type LookupValue = {
    value: number,
    symbol: string,
}

type SubtractionResult = {
    symbol: string,
    remainder: number,
}
