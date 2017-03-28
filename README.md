# kenote-mount
mount the directory into an alias

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![Gratipay][licensed-image]][licensed-url]


[npm-image]: https://img.shields.io/npm/v/kenote-mount.svg
[npm-url]: https://www.npmjs.org/package/kenote-mount
[downloads-image]: https://img.shields.io/npm/dm/kenote-mount.svg
[downloads-url]: https://npmjs.org/package/kenote-mount
[travis-image]: https://travis-ci.org/thondery/kenote-mount.svg?branch=master
[travis-url]: https://travis-ci.org/thondery/kenote-mount
[codecov-image]: https://img.shields.io/codecov/c/github/thondery/kenote-mount/master.svg
[codecov-url]:   https://codecov.io/github/thondery/kenote-mount?branch=master
[dependencies-image]: https://david-dm.org/thondery/kenote-mount/status.svg
[dependencies-url]: https://david-dm.org/thondery/kenote-mount
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-mount/blob/master/LICENSE

## Install

```bash
npm install --save kenote-mount
```

## Usage

```javascript
// mounts

const path = require('path')
const { mounts } = require('kenote-mount')
const { userProxy, bookProxy } = mounts(path.resolve(__dirname, 'proxys'), 'Proxy')

userProxy.login(...)
bookProxy.find(...)

// loadModel

const mongoose = require('mongoose')
const MongooseDao = require('mongoosedao')
const { loadModel } = require('kenote-mount')
const Schema = mongoose.Schema

function getMongooseDao (definition, name) {
  let schema = new Schema(definition)
  let model = mongoose.model(name, schema)
  return new MongooseDao(model)
}

module.exports = loadModel(__dirname, getMongooseDao)
```

## License

this repo is released under the [MIT License](https://github.com/thondery/kenote-mount/blob/master/LICENSE).