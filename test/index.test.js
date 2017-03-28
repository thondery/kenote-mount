const chai = require('chai')
const { mounts, loadModel, hump } = require('../')
const path = require('path')
//const { userDao, bookDao } = require('./model')
//console.log(path.resolve(__dirname))

const should = chai.should()

describe('Test -> Start', () => {

  describe('\n    Function => hump \n', () => {
    it('should user => user', done => {
      let humpName = hump('user')
      humpName.should.equal('user')
      done()
    })
    it('should USER => user', done => {
      let humpName = hump('USER')
      humpName.should.equal('user')
      done()
    })
    it('should uSer => user', done => {
      let humpName = hump('uSer')
      humpName.should.equal('user')
      done()
    })
    it('should layout-user => layoutUser', done => {
      let humpName = hump('layout-user')
      humpName.should.equal('layoutUser')
      done()
    })
    it('should layout_user => layoutUser', done => {
      let humpName = hump('layout_user')
      humpName.should.equal('layoutUser')
      done()
    })
  })

  describe('\n    Function => mounts \n', () => {
    it('should auto suffix', done => {
      let { userProxys } = mounts(path.resolve(__dirname, 'proxys'))
      let loginInfo = userProxys.login('admin', 'password')
      loginInfo.should.be.an('object')
      loginInfo.username.should.equal('admin')
      loginInfo.password.should.equal('password')
      done()
    })
    it('should auto suffix', done => {
      let { bookProxys } = mounts(path.resolve(__dirname, 'proxys'))
      let books = bookProxys.find()
      books.should.be.an('array')
      books[0].should.be.an('object')
      books[0].name.should.equal('bookname')
      done()
    })
    it('should set suffix', done => {
      let { userProxy } = mounts(path.resolve(__dirname, 'proxys'), 'Proxy')
      let loginInfo = userProxy.login('admin', 'password')
      loginInfo.should.be.an('object')
      loginInfo.username.should.equal('admin')
      loginInfo.password.should.equal('password')
      done()
    })
    it('should set suffix', done => {
      let { bookProxy } = mounts(path.resolve(__dirname, 'proxys'), 'Proxy')
      let books = bookProxy.find()
      books.should.be.an('array')
      books[0].should.be.an('object')
      books[0].name.should.equal('bookname')
      done()
    })
  })

  describe('\n    Function => loadModel \n', () => {
    it('should loadModel', done => {
      let { userDao, bookDao } = require('./model')
      userDao.should.be.an('object')
      userDao.name.should.equal('user')
      bookDao.should.be.an('object')
      bookDao.name.should.equal('book')
      done()
    })
  })
})