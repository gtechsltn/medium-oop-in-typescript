export class Character {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

const char: Character = new Character('Unknown Name');

char.name = 'Elon';

console.log(char.name);
