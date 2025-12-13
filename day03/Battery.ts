
export class Battery {
  constructor(public position: number, public label: number) { }

  getJoltage(battery: Battery): number {
    return parseInt(this.label.toString() + battery.label.toString());
  }
}
