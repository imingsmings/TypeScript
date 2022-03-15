class Person {
  public name: string = 'noname';
  public age: number = 0;
  public phone: string = '123455';

  public addresses: Array<string> = ['北京', '上海'];
  public func: () => void = () => {};

  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`);
  }
}

const zs = new Person();
zs.name = 'zs';
zs.age = 12;
zs.phone = '123456';

zs.doEat('ls', 'Beijing');
