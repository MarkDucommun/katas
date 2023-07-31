import {convert} from "./romanNumeralConverter";
import {convertNumber} from "./convertNumber";

const runConvertTestCasesToo = (converter: (number) => string, ...testCases: TestCase[]) => {
    testCases.forEach(([input, expectedOutput]) => {
        it(`should convert ${input} to ${expectedOutput}`, () => {
            expect(converter(input)).toEqual(expectedOutput);
        });
    });
}

const testCases: TestCase[] = [[1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [20, "XX"],
    [21, "XXI"],
    [40, "XL"],
    [50, "L"],
    [54, "LIV"],
    [60, "LX"],
    [70, "LXX"],
    [80, "LXXX"],
    [90, "XC"],
    [100, "C"],
    [111, "CXI"],
    [200, "CC"],
    [303, "CCCIII"],
    [400, "CD"],
    [500, "D"],
    [544, "DXLIV"],
    [600, "DC"],
    [700, "DCC"],
    [800, "DCCC"],
    [900, "CM"],
    [1000, "M"],
];

type TestCase = [number, string];

describe("Convert", () => {
    describe("Roman Numeral Converter", () => {

        runConvertTestCasesToo(convert, ...testCases);
    });

    describe("ConvertNumber", () => {

        runConvertTestCasesToo(convertNumber, ...testCases);
    });

});




