import Settings from '../settings';

test('uncorrect set setting', () => {
  const settings = new Settings();
  let errorMessage = 'empty';

  const name = 'difficul';
  const value = 'easy';

  try {
    settings.set(name, value);
  } catch (error) {
    errorMessage = String(error);
  }

  expect(errorMessage).toBe(`Error: not find ${name} setting`);
});

test('uncorrect set setting', () => {
  const settings = new Settings();
  let errorMessage = 'empty';

  const name = 'difficulty';
  const value = 'eas';

  try {
    settings.set(name, value);
  } catch (error) {
    errorMessage = String(error);
  }

  expect(errorMessage).toBe(`Error: not find value setting "${value}" for ${name}`);
});

test('correct set setting', () => {
  const settings = new Settings();

  const name = 'difficulty';
  const value = 'hard';

  settings.set(name, value);

  expect(settings.user).toEqual(new Map([['difficulty', 'hard']]));
});

test('get settings', () => {
  const settings = new Settings();

  const name = 'difficulty';
  const value = 'hard';

  settings.set(name, value);

  const actual = settings.settings;

  expect(actual).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'hard']]));
});
