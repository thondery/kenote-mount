const { loadModel } = require('../../')

function getMongooseDao (definition) {
  return definition
}

module.exports = loadModel(__dirname, getMongooseDao)