import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Character)) {
      throw TypeError('');
    }

    if (this.members.has(character)) {
      throw Error('');
    }

    this.members.add(character);
  }

  addAll(...characters) {
    if (characters.some((el) => !(el instanceof Character))) {
      throw TypeError('');
    }

    characters.forEach((el) => this.members.add(el));
  }

  toArray() {
    return [...this.members];
  }
}
