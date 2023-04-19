# Typesource

Your single source of application types.

Features:

* Concise and human readable
* Language agnostic
* Portable YAML format
* Can be used to generate JSDoc

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

### Generate types

When you're done adding your schemas run:

```
typesource generate
```

By default it will generate `yml` files for each of your types in the `./types` directory.

You can specify the directory like this:

```
typesource generate some/dir/types
```

ISC Licensed. Enjoy!
