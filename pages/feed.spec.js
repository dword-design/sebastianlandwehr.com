import { expect, test } from '@playwright/test';
import axios from 'axios';
import pretty from 'pretty';

test('init', async () =>
  expect(
    pretty((await axios.get('http://localhost:3000/feed')).data).replace(
      /<lastBuildDate>.*?<\/lastBuildDate>/g,
      '<lastBuildDate>Foo</lastBuildDate>',
    ),
  ).toMatchSnapshot());
