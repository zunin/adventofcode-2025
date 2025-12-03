import { assertEquals } from "@std/assert";
import { DialPassZeroCounter } from "./DialPassZeroCounter.ts";
import { Dial } from "./Dial.ts";
import { LeftRotation } from "./LeftRotation.ts";
import { RightRotation } from "./RightRotation.ts";
import { RotationParser } from "./RotationParser.ts";
import { DialZeroCounter } from "./DialZeroCounter.ts";

Deno.test("RotationParser can parse", () => {
    const parser = new RotationParser([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82"
    ]);  
    assertEquals([
        new LeftRotation(68),
        new LeftRotation(30),
        new RightRotation(48),
        new LeftRotation(5),
        new RightRotation(60),
        new LeftRotation(55),
        new LeftRotation(1),
        new LeftRotation(99),
        new RightRotation(14),
        new LeftRotation(82)
    ], parser.parse())
});

Deno.test("Dial can rotate left", () => {
    const dial = new Dial();  
    dial.rotate(new LeftRotation(68))
    assertEquals(82, dial.readPosition())
});

Deno.test("Dial can rotate right", () => {
    const dial = new Dial();  
    dial.rotate(new RightRotation(68))
    assertEquals(18, dial.readPosition())
});

Deno.test("Dial position matches example", () => {
    const dial = new Dial();
    const measuredPositions = new RotationParser([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82"
    ]).parse().reduce((positionList, rotation) => {
        dial.rotate(rotation)
        return positionList.concat([dial.readPosition()]);
    }, [] as Array<number>);

    const expectedPositions = [
        82,
        52,
        0,
        95,
        55,
        0,
        99,
        0,
        14,
        32
    ];

    assertEquals(expectedPositions, measuredPositions)
});


Deno.test("Count times landed on zero", () => {
    const input = new RotationParser([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82"
    ]).parse();

    const rotationCounter = new DialZeroCounter(input);  
    assertEquals(3, rotationCounter.count())
});

Deno.test("Count times passed zero", () => {
    const input = new RotationParser([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82"
    ]).parse();

    const rotationCounter = new DialPassZeroCounter(input);  
    assertEquals(6, rotationCounter.count())
});