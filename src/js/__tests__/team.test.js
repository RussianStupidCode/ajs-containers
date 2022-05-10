import Character from '../character';
import Team from '../team';

test('add uncorrect type', () => {
  const char = 'john';
  const team = new Team();
  let messageError = 'empty';

  try {
    team.add(char);
  } catch (error) {
    messageError = String(error);
  }

  expect(messageError).toBe('TypeError');
});

test('add exist character', () => {
  const char = new Character('john');
  const team = new Team();
  let messageError = 'empty';

  try {
    team.add(char);
    team.add(char);
  } catch (error) {
    messageError = String(error);
  }

  expect(messageError).toBe('Error');
});

test('add character', () => {
  const char = new Character('john');
  const team = new Team();

  team.add(char);

  expect(team.members).toEqual(new Set([char]));
});

test('add correct characters list', () => {
  const firstChar = new Character('john');
  const secondChar = new Character('smith');
  const team = new Team();

  team.addAll(firstChar, secondChar, firstChar);

  expect(team.members).toEqual(new Set([firstChar, secondChar]));
});

test('add uncorrect characters list', () => {
  const firstChar = new Character('john');
  const secondChar = 'smith';
  const team = new Team();
  let messageError = 'empty';

  try {
    team.addAll(firstChar, secondChar, firstChar);
  } catch (error) {
    messageError = String(error);
  }

  expect(messageError).toBe('TypeError');
});

test('toArray', () => {
  const firstChar = new Character('john');
  const secondChar = new Character('smith');
  const team = new Team();

  team.members = new Set([firstChar, secondChar]);

  expect(team.toArray()).toEqual([firstChar, secondChar]);
});
