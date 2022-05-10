export default class ErrorRepository {
  constructor() {
    this.codes = new Map([[200, 'ok'], [300, 'redirect'], [400, 'client error'], [500, 'server error']]);
  }

  translate(code) {
    const description = this.codes.get(code);

    if (description === undefined) {
      return 'Unknown error';
    }

    return description;
  }
}
