const path = require('path')
const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.user('api/v1/madlibs')

module.exports = server
