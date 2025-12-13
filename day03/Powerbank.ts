import { Battery } from "./Battery.ts";

export class Powerbank {
  batteries: Array<Battery>;
  constructor(input: string) {
    this.batteries = input
      .split("")
      .map((character, index) => new Battery(index, parseInt(character)));
  }

  maximumJoltageFromPair(): number {
    return Math.max(
      this.batteries.reduce((currentMaxJoltage, current, index, array) => {
        const possibleCombinations = array.slice(index + 1, array.length)
          .map((other) => current.getJoltage(other))
          .sort();
        return Math.max(...possibleCombinations, currentMaxJoltage);
      }, 0),
    );
  }

  private itr(array: Battery[], combinations: number): Array<Array<Battery>> {
    return array.reduce((prev, current, index) => {
      if (combinations === 1) {
        return prev.concat([current]);
      }
      const next = this.itr(
        array.slice(index + 1, array.length),
        combinations - 1,
      )
        .map((combination) => {
          return [current].concat(combination);
        });

      return prev.concat(next);
    }, [] as Array<Array<Battery>>);
  }

  iterateBatteries(): Array<Array<Battery>> {
    const output = [] as Array<Array<Battery>>;
    for (const combination of this.itr(this.batteries, 12)) {
      output.push(combination);
    }
    return output;
  }

  maximumJoltageWithSafetyOverride(): number {
    return Math.max(
      this.iterateBatteries().reduce((currentMaxJoltage, currentBatteries) => {
        const currentJoltage = currentBatteries.map((battery) => {
          return battery.label.toString();
        }).join("");
        return Math.max(currentMaxJoltage, parseInt(currentJoltage));
      }, 0),
    );
  }
}
