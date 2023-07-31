export const convertNumber = (number: number): string => {
    const { symbol, remainder} = subtractLargestValueInLookupFromNumber(number, lookupTable);
    return remainder === 0 ? symbol : symbol + convertNumber(remainder);
}

const subtractLargestValueInLookupFromNumber = (number: number, lookup: LookupValue[]): SubtractionResult => {
    const [{value, symbol}, ...remainingValues] = lookup;
    return number >= value ? {
        symbol,
        remainder: number - value
    } : subtractLargestValueInLookupFromNumber(number, remainingValues);
}

const lookupTable: LookupValue[] = [
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
