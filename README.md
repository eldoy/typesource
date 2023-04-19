# Typesource

Your single source of application types.

Features:

* Concise and human readable
* Portable YAML format
* Language agnostic
* Can be used to generate JSDoc or other type declarations

### Install

```
npm i -g typesource
```

### Usage

Define your types in the `schema` directory of your application.

Create a file called `types.yml` and add your types like this:

```yml
company:
  desc: This is the company type
  fields:
    name: string
    number: integer?
```

This defines a company type with a required `name` attribute as a string, and an optional `number` attribute as an integer.

### Extending types

You can extend types using the `base` attribute:

```yml
company_public:
  base: company
  fields:
    phone: string
```

### Multiple schemas

You can add multiple types in one schema file, the file name is irrelevant.

For example, you might want to add this to a `company.yml` schema file to express variations of the `company` type:

```yml
company:
  fields:
    name: string

company_public:
  base: company
  fields:
    phone: string
```

### Field description

To add descriptions to your types, use the object notation:

```yml
company:
  fields:
    name:
      type: string
      desc: This is the description
```

### Generate types

When you're done adding your schemas run:

```
typesource generate schemas types
```

The first parameter, `schemas`, is the directory where your schemas are stored. The second parameter, `types` is the directory where you want the types to be written.

ISC Licensed. Enjoy!
