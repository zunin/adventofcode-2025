import { assertEquals } from "@std/assert/equals";
import { Serial } from "./Serial.ts";
import { SerialRange } from "./SerialRange.ts";
import { RangeParser } from "./RangeParser.ts";
import { InvalidSerialSummerizer } from "./InvalidSerialSummerizer.ts";

Deno.test("Parser can produce a range", () => {
    const parser = new RangeParser("11-22");
    assertEquals([new SerialRange(11, 22)], parser.parse())
});

Deno.test("Range can produce containing serials", () => {
    assertEquals(
        [
            new Serial(11),
            new Serial(12),
            new Serial(13),
            new Serial(14),
            new Serial(15),
            new Serial(16),
            new Serial(17),
            new Serial(18),
            new Serial(19),
            new Serial(20),
            new Serial(21),
            new Serial(22),
        ],
        new SerialRange(11, 22).getSerials()
    );
});

Deno.test("11 is invalid", () => {
    assertEquals(false, new Serial(11).isValid());
});

Deno.test("22 is invalid", () => {
    assertEquals(false, new Serial(22).isValid());
});

Deno.test("99 is invalid", () => {
    assertEquals(false, new Serial(99).isValid());
});

Deno.test("1010 is invalid", () => {
    assertEquals(false, new Serial(1010).isValid());
});

Deno.test("1188511885 is invalid", () => {
    assertEquals(false, new Serial(1188511885).isValid());
});

Deno.test("222222 is invalid", () => {
    assertEquals(false, new Serial(222222).isValid());
});

Deno.test("446446 is invalid", () => {
    assertEquals(false, new Serial(446446).isValid());
});

Deno.test("38593859 is invalid", () => {
    assertEquals(false, new Serial(38593859).isValid());
});

Deno.test("38593859 is invalid", () => {
    assertEquals(false, new Serial(38593859).isValid());
});

Deno.test("Sum of serials from example produces 1227775554", () => {
    const parser = new RangeParser("11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124");
    const sum = new InvalidSerialSummerizer(parser.parse()).sum();
    assertEquals(1227775554, sum);
});


Deno.test("Serial 1212121212 is invalid with extra silly rule", () => {
    assertEquals(false, new Serial(1212121212).isValidWithExtraSillyRule());
});