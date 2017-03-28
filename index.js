const fs = require('fs')
const path = require('path')
const _ = require('lodash')

exports.mounts = function (dir, suffix = null) {
  let obj = {}
  suffix = getAlias((suffix || dir).toLowerCase())
  let files = fs.readdirSync(dir)
  files.map( file => {
    let fileName = file.replace(/\.(js|jsx|es|ts|tsx)$/i, '')
    if (fileName !== 'index') {
      obj[`${getHump(fileName)}${suffix}`] = require(path.resolve(dir, file))
    }
  })
  return obj
}

exports.loadModel = function (dir, func) {
  let model = {}
  let files = fs.readdirSync(dir)
  files.map( file => {
    let fileName = file.replace(/\.(js|jsx|es|ts|tsx)$/i, '')
    if (fileName !== 'index') {
      let definition = require(path.resolve(dir, file))
      model[`${getHump(fileName)}Dao`] = func(definition, fileName)
    }
  })
  return model
}

function getAlias (dir) {
  return _.upperFirst(dir.match(/[\w\-]+$/)[0].replace(/[\-\_](\w)/g, (x) => x.slice(1).toUpperCase() ))
}

function getHump (name) {
  return name.toLowerCase().replace(/[\-\_](\w)/g, (x) => x.slice(1).toUpperCase() )
}

exports.hump = getHump