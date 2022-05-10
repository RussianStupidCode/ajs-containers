export default class Settings {
  static admissibleSettings = new Map([
    ['theme', new Set(['dark', 'light', 'gray'])],
    ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
    ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
  ]);

  constructor() {
    this.default = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.user = new Map();
  }

  static checkSetting(name, value) {
    const settingsSet = Settings.admissibleSettings.get(name);

    if (settingsSet === undefined) {
      throw Error(`not find ${name} setting`);
    }

    if (!settingsSet.has(value)) {
      throw Error(`not find value setting "${value}" for ${name}`);
    }
  }

  set(name, value) {
    Settings.checkSetting(name, value);
    this.user.set(name, value);
  }

  get settings() {
    return new Map([...this.default, ...this.user]);
  }
}
