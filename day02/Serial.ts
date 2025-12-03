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


  isValid(): boolean {
    return !this.isRepeatedTwice();
  }

  getSerial(): number {
    return this.serial;
  }
}
