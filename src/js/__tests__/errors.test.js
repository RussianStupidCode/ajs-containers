import ErrorRepository from '../errors';

test('get correct code description', () => {
  const code = 200;
  const errorRepository = new ErrorRepository();

  const actual = errorRepository.translate(code);
  expect(actual).toBe('ok');
});

test('get uncorrect code description', () => {
  const code = 287;
  const errorRepository = new ErrorRepository();

  const actual = errorRepository.translate(code);
  expect(actual).toBe('Unknown error');
});
