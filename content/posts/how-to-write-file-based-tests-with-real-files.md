---
title: How to Write File-Based Tests With Real Files
---

Hey guys, this post is about writing tests for projects that access the file system by reading and writing files to disk.

A lot of my past projects in some way had to do with file access. I started to test with mocking libraries like [mock-fs](https://github.com/tschaub/mock-fs), but soon recognized that they do not work for all cases, and sometimes you are using third party libraries internally that you cannot mock easily. So I thought of a different solution and the one I'm using right now for most projects actually uses real files.

## with-local-tmp-dir and output-files

Why not use real files for testing instead of mocking? I built an NPM package called [with-local-tmp-dir](https://github.com/dword-design/with-local-tmp-dir) that basically creates a temporary subfolder inside cwd, `cd`s into it, runs a function, and `cd`s back to the previous cwd afterwards. In this function you can create files and pretty much anything, run your unit under test. Afterwards the folder is removed and everything is cleaned up. You actually do not solely need to use it for tests, you can use it anywhere, but it's mostly useful for tests.

I also wrote another helper package [output-files](https://github.com/dword-design/output-files) that creates a whole file tree at once by passing an object. It's much easier than writing a lot of `fs.writeFile` calls to create many files.

## Let's Test a Scaffolding Tool!

Alright, let's dive into it! First of all you need a testing framework. I'm going to use [Mocha](https://github.com/mochajs/mocha) here, but you can also use [Jest](https://github.com/facebook/jest) or any other framework of your choice. I'm also using [expect](https://github.com/mjackson/expect) for assertions. After that, we'll install some packages that we need to write our tests:

* [with-local-tmp-dir](https://github.com/dword-design/with-local-tmp-dir) to create our temporary testing folder.
* [output-files](https://github.com/dword-design/output-files) to create multiple files at once.
* [fs-extra](https://github.com/jprichardson/node-fs-extra) to read files after running the scaffolding tool.
* [endent](https://github.com/zhouhanseng/endent) to declare multi-line strings.

```bash
$ npm install --save-dev with-local-tmp-dir output-files fs-extra endent
```

We are going to test a small scaffolding tool that writes config files to disk. If a file already exists, it is not overwritten. Otherwise a default file is created. It's actually not important how it works but how we test it 😀.

## Writing Our First Test

Let's add a test file:

```js
// index.spec.js

const withLocalTmpDir = require('with-local-tmp-dir')
const endent = require('endent')
const expect = require('expect')
const fs = require('fs-extra')

const scaffold = require('.')

it('no existing files', () => withLocalTmpDir(async () => {
  await scaffold()
  expect(await fs.readFile('README.md', 'utf8')).toEqual(endent`
    ## Package

    This is a test package and the doc needs to be written ...
  `)
  expect(await fs.readFile('.configrc.json', 'utf8')).toEqual(endent`
    {
      "name": "Package"
    }
  `)
}))
```

And we can run our test via:

```bash
$ mocha index.spec.js
```

Pretty neat already, we have tested if the scaffolding tool creates a `README.md` and a `.configrc.json` file and checks if the contents are correct!

## Writing Files Beforehand

Let's add another test that checks if the files are preserved if they are already existing. We are going to use `output-files` to write those files.

```js
// index.spec.js

const withLocalTmpDir = require('with-local-tmp-dir')
const outputFiles = require('output-files')
const endent = require('endent')
const expect = require('expect')
const fs = require('fs-extra')

const scaffold = require('.')

it('existing files', () => withLocalTmpDir(async () => {
  await outputFiles({
    'README.md': endent`
      ## My Package

      Here is how to use this package.
    `,
    '.configrc.json': endent`
      {
        "name": "My Package"
      }
    `
  })
  await scaffold()
  expect(await fs.readFile('README.md', 'utf8')).toEqual(endent`
    ## My Package

    Here is how to use this package.
  `)
  expect(await fs.readFile('.configrc.json', 'utf8')).toEqual(endent`
    {
      "name": "My Package"
    }
  `)
}))
```

Great, that's already most of the work! Of course you can go into detail now and write more tests, but technically that's all it needs. You see, writing file-based tests with these packages is not a lot of more work than without them and you can use real files for your tests 🚀.

## Writing Git-Based Tests

The test setup actually opens up another door: Using Git repositories for tests! I know this sounds a bit scary at first, but now that we can write files to disk for our tests, why not `git init` a git repository?

Let's assume that our scaffolding tool makes use of the currently checked out Git repository and puts the origin URL into the `.configrc.json` file. Now we can test if this works by actually instantiating a Git repository in our testing folder. We need another package for running child processes, run `npm install --save-dev execa`.

```js
// index.spec.js

const withLocalTmpDir = require('with-local-tmp-dir')
const endent = require('endent')
const expect = require('expect')
const fs = require('fs-extra')
const execa = require('execa')

const scaffold = require('.')

it('uses repository url', () => withLocalTmpDir(async () => {
  await execa.command('git init')
  await execa.command('git config user.email "foo@bar.de"')
  await execa.command('git config user.name "foo"')
  await execa.command('git remote add origin git@github.com:foo/bar.git')
  await scaffold()
  expect(await fs.readFile('README.md', 'utf8')).toEqual(endent`
    ## Package

    This is a test package and the doc needs to be written ...
  `)
  expect(await fs.readFile('.configrc.json', 'utf8')).toEqual(endent`
    {
      "name": "Package",
      "repo": "git@github.com:foo/bar.git"
    }
  `)
}))
```

You see there are plenty of possibilities! 🥳 What do you think about this? Let me know in the comments! Also, if you like [with-local-tmp-dir](https://github.com/dword-design/with-local-tmp-dir) and [output-files](https://github.com/dword-design/output-files), give it a star on GitHub 🌟.

**If you like what I'm doing, follow me on [Twitter](https://twitter.com/DwordDesign) or check out my [website](https://dword-design.de). Also consider donating at [Buy Me a Coffee](https://www.buymeacoffee.com/dword), [PayPal](https://www.paypal.com/paypalme/SebastianLandwehr) or [Patreon](https://www.patreon.com/dworddesign). Thank you so much! ❤️**