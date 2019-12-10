import { pikachuCalc } from "./pikachu";
import { data } from "./test.json";

test.each(data)("Basic Tests (%d, %d) Expected %d", (pika, candy, expected) => {
  expect(pikachuCalc(pika, candy)).toBe(expected);
});
