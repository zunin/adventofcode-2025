import { assertEquals } from "@std/assert/equals";
import { Powerbank } from "./Powerbank.ts";
import { PowerBankParser } from "./PowerBankParser.ts";
import { Joltagesummerizer } from "./Joltagesummerizer.ts";

Deno.test("Batterybankparser parses powerbank", () => {
    assertEquals([new Powerbank("987654321111111")], new PowerBankParser(
        `
        987654321111111
        `
    ).parse());
});

Deno.test("Batterybank 987654321111111 can find highest joltage", () => {
    assertEquals(98, new Powerbank("987654321111111").maximumJoltageFromPair());
});

Deno.test("Batterybank 811111111111119 can find highest joltage", () => {
    assertEquals(89, new Powerbank("811111111111119").maximumJoltageFromPair());
});

Deno.test("Batterybank 234234234234278 can find highest joltage", () => {
    assertEquals(78, new Powerbank("234234234234278").maximumJoltageFromPair());
});


Deno.test("Batterybank 818181911112111 can find highest joltage", () => {
    assertEquals(92, new Powerbank("818181911112111").maximumJoltageFromPair());
});


Deno.test("Joltagesummerizer sums max joltage ", () => {
    const parser = new PowerBankParser(
        `
        987654321111111
        811111111111119
        234234234234278
        818181911112111
        `
    );
    const input = parser.parse();
    const summerizer = new Joltagesummerizer(input);
    assertEquals(357, summerizer.getTotalJoltageOutput());
});

Deno.test("Batterybank 987654321111111 with overriden limit can find highest joltage", () => {
    assertEquals(987654321111, new Powerbank("987654321111111").maximumJoltageWithSafetyOverride());
});

Deno.test("Batterybank 811111111111119 with overriden limit can find highest joltage", () => {
    assertEquals(811111111119, new Powerbank("811111111111119").maximumJoltageWithSafetyOverride());
});

Deno.test("Batterybank 234234234234278 with overriden limit can find highest joltage", () => {
    assertEquals(434234234278, new Powerbank("234234234234278").maximumJoltageWithSafetyOverride());
});

Deno.test("Batterybank 818181911112111 with overriden limit can find highest joltage", () => {
    assertEquals(888911112111, new Powerbank("818181911112111").maximumJoltageWithSafetyOverride());
});