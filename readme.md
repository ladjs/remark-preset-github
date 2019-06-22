# remark-preset-github

GitHub markdown and prose style.

[Learn more about presets in unified's docs][docs].

> **NOTE**: Feel free to open an issue if something isn't working right.


## Installation

[npm][npm-install]:

```sh
npm install remark-cli remark-preset-github --save
```

Now add the following to your `package.json`:

```js
  "scripts": {
    "build-md": "remark ."
    "test": "npm run build-md && ..."
  },
  "remarkConfig": {
    "plugins": [
      "preset-github"
    ]
  },
```

From now on, `npm test` also checks markdown.

```sh
npm test
```


## Checks

###### Markdown

* Adds a [license section][remark-license]
* Adds a [contributors section][remark-contributors]
* Extends [`remark-preset-lint-recommended`][lint-recommended],
  and adds a strict code-style (see [`index.js`][index])
* Checks [broken local links][validate-links]
* Markdown is compiled with asterisk list-item bullets (`*`),
  and fenced code blocks (note: set `output: true` in your config to
  benefit from this)
* How remark compiles can be configured inline with [comments][comments]
* `Table of Contents` headers are kept up to date, with a depth of `3`
  (if `output: true`)
* [GH references][github], like mentions or issue references, are
  linked (if `output: true`)

###### Natural Language

See [`retext-preset-github`][retext-preset] for more info.

* [English][english] parsing
* Two [spaces][spaces] between sentences
* Checks ["indefinite articles"][articles]: "a" or "an"
* Checks [quotes and apostrophes][quotes] (`“”` > `""`)
* Checks accidental [repeated words][repeated]
* Checks [diacritics][diacritics]
* Checks [redundant acronyms][ras]
* Checks incorrectly placed apostrophes in [contractions][contractions]


## Contributors

| Name           | website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <https://niftylettuce.com> |


## License

[MIT](LICENSE) © Titus Wormer


## 

[npm-install]: https://docs.npmjs.com/cli/install

[index]: ./index.js

[lint-recommended]: https://github.com/wooorm/remark-lint/tree/master/packages/remark-preset-lint-recommended

[validate-links]: https://github.com/wooorm/remark-validate-links

[github]: https://github.com/wooorm/remark-github

[comments]: https://github.com/wooorm/remark-comment-config

[retext-preset]: https://github.com/niftylettuce/retext-preset-github

[english]: https://github.com/wooorm/retext/tree/master/packages/retext-english

[spaces]: https://github.com/wooorm/retext-sentence-spacing

[articles]: https://github.com/wooorm/retext-indefinite-article

[quotes]: https://github.com/wooorm/retext-quotes

[repeated]: https://github.com/wooorm/retext-repeated-words

[contractions]: https://github.com/wooorm/retext-contractions

[diacritics]: https://github.com/wooorm/retext-diacritics

[ras]: https://github.com/wooorm/retext-redundant-acronyms

[docs]: https://github.com/unifiedjs/unified#preset

[remark-license]: https://github.com/wooorm/remark-license

[remark-contributors]: https://github.com/hughsk/remark-contributors
