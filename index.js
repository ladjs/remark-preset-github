const unified = require('unified');
const english = require('retext-english');
const preset = require('retext-preset-github');

exports.settings = {
  bullet: '*',
  fences: true,
  listItemIndent: 1,
  rule: '-',
  ruleSpaces: false
};

exports.plugins = [
  [require('remark-retext'), unified().use(english).use(preset)],
  require('remark-preset-lint-recommended'),
  [require('remark-lint-list-item-indent'), 'space'],
  require('remark-comment-config'),
  [require('remark-lint-blockquote-indentation'), 2],
  [
    require('remark-lint-checkbox-character-style'),
    { checked: 'x', unchecked: ' ' }
  ],
  require('remark-lint-checkbox-content-indent'),
  [require('remark-lint-code-block-style'), 'fenced'],
  require('remark-lint-definition-case'),
  require('remark-lint-definition-spacing'),
  [require('remark-lint-emphasis-marker'), '*'],
  require('remark-lint-fenced-code-flag'),
  [require('remark-lint-fenced-code-marker'), '`'],
  [require('remark-lint-file-extension'), 'md'],
  require('remark-lint-final-definition'),
  require('remark-lint-first-heading-level'),
  [require('remark-lint-heading-style'), 'atx'],
  require('remark-lint-no-duplicate-definitions'),
  require('remark-lint-no-emphasis-as-heading'),
  require('remark-lint-no-file-name-articles'),
  require('remark-lint-no-file-name-consecutive-dashes'),
  require('remark-lint-no-file-name-irregular-characters'),
  require('remark-lint-no-file-name-mixed-case'),
  require('remark-lint-no-file-name-outer-dashes'),
  require('remark-lint-no-heading-content-indent'),
  require('remark-lint-no-heading-indent'),
  require('remark-lint-no-heading-punctuation'),
  [require('remark-lint-no-missing-blank-lines'), { exceptTightLists: true }],
  require('remark-lint-no-multiple-toplevel-headings'),
  require('remark-lint-no-shell-dollars'),
  require('remark-lint-no-table-indentation'),
  require('remark-lint-no-tabs'),
  [require('remark-lint-ordered-list-marker-value'), 'ordered'],
  [require('remark-lint-rule-style'), '---'],
  [require('remark-lint-strong-marker'), '*'],
  [require('remark-lint-table-cell-padding'), 'padded'],
  require('remark-lint-table-pipe-alignment'),
  require('remark-lint-table-pipes'),
  [require('remark-lint-unordered-list-marker-style'), '*'],
  [require('remark-toc'), { maxDepth: 3, tight: true }],
  require('remark-heading-gap'),
  require('remark-gfm'),
  require('remark-contributors'),
  require('remark-license')
];
