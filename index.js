const { read, write, tree } = require('extras')

const DEFAULT_OPTIONS = {
  input: 'schemas',
  output: 'types'
}

module.exports = function typesource(opt = {}) {
  opt = { ...DEFAULT_OPTIONS, ...opt }
  const { input, output } = opt

  const schemas = tree(input)

  // Collect types
  const types = {}
  for (const schema of schemas) {
    const data = read(schema)
    for (const type in data) {
      types[type] = data[type]
    }
  }

  // Expand
  for (const type in types) {
    const obj = types[type]
    if (obj.base) {
      if (!types[obj.base]) {
        console.log(
          `Base ${obj.base} in type ${type} does not exist in schema.`
        )
        process.exit()
      }
      obj.fields = { ...types[obj.base].fields, ...obj.fields }
      delete obj.base
    }
  }

  // Write
  for (const type in types) {
    const result = { [type]: types[type] }
    console.log(`\n${JSON.stringify(result, null, 2)}`)
    write(`${output}/${type}.yml`, result)
  }

  console.log(`\nTypes written to ${output}.\n`)
}
