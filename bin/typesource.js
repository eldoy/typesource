#!/usr/bin/env node
const typesource = require('../index.js')

const command = process.argv[2]
if (!command) {
  console.log(`\nUsage:`)
  console.log(`\n  typesource generate <inputdir> <outputdir>`)
}

const input = process.argv[3] || 'schemas'
const output = process.argv[4] || 'types'

typesource({ input, output })
