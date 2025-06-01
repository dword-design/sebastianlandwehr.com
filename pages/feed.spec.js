import { expect, test } from '@playwright/test';
import axios from 'axios';
import pretty from 'pretty';

test('init', async () => {
  const { data } = await axios.get('http://localhost:3000/feed');

  expect(
    pretty(data).replaceAll(
      /<lastBuildDate>.*?<\/lastBuildDate>/g,
      '<lastBuildDate>Foo</lastBuildDate>',
    ),
  ).toMatchSnapshot();
});
