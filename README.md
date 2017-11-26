# egg-passport-google

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-google.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-google
[travis-image]: https://img.shields.io/travis/sinchang/egg-passport-google.svg?style=flat-square
[travis-url]: https://travis-ci.org/sinchang/egg-passport-google
[codecov-image]: https://img.shields.io/codecov/c/github/sinchang/egg-passport-google.svg?style=flat-square
[codecov-url]: https://codecov.io/github/sinchang/egg-passport-google?branch=master
[david-image]: https://img.shields.io/david/sinchang/egg-passport-google.svg?style=flat-square
[david-url]: https://david-dm.org/sinchang/egg-passport-google
[snyk-image]: https://snyk.io/test/npm/egg-passport-google/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-google
[download-image]: https://img.shields.io/npm/dm/egg-passport-google.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-google

google passport plugin for egg. only support OAuth 2.0.

## Install

```bash
$ npm i egg-passport-google --save
```

## Usage

```js
// config/plugin.js
exports.passportGoogle = {
  enable: true,
  package: 'egg-passport-google',
};
```

## Configuration

```js
// config/config.default.js
exports.passportGoogle = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/sinchang/egg-passport-google/issues).

## License

[MIT](LICENSE.txt)
