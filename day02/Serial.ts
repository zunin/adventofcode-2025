export class Serial {
  constructor(private serial: number) {
  }

  isRepeatedTwice(): boolean {
    const serialName = this.serial.toString();
    const half = Math.ceil(serialName.length / 2);
    const head = serialName.slice(0, half);
    const tail = serialName.slice(half, serialName.length);

    return head == tail;
  }

  isRepeatedAtLeaseTwice(): boolean {
    const serialName = this.serial.toString();
    return serialName.split('').reduce((isRepeated, _, index, arr) => {
      if(isRepeated) {
        return isRepeated;
      }
      const token = arr.slice(0, index).join('');
      const remainder = arr.slice(index, arr.length).join('');
      return isRepeated || (remainder.replaceAll(token, '') == "");
    }, false)
  }

  isValidWithExtraSillyRule() {
    return !this.isRepeatedAtLeaseTwice();
  }

  isValid(): boolean {
    return !this.isRepeatedTwice();
  }

  getSerial(): number {
    return this.serial;
  }
}
