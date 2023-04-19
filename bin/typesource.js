#!/usr/bin/env node
const { exists, mkdir, read, write } = require('extras')
const path = require('path')

const command = process.argv[2]
if (!command) {
  console.log(`\nUsage:`)
  console.log(`\n  typesource generate <dir>`)
}

const dir = process.argv[3] || 'types'

if (!exists(dir)) {
  mkdir(dir)
}
