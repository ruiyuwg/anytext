## Using JSON Schema files in your editor

[Section titled “Using JSON Schema files in your editor”](#using-json-schema-files-in-your-editor)

**Added in:** `astro@4.13.0`

Astro auto-generates [JSON Schema](https://json-schema.org/) files for collections, which you can use in your editor to get IntelliSense and type-checking for data files.

A JSON Schema file is generated for each collection in your project and output to the `.astro/collections/` directory. For example, if you have two collections, one named `authors` and another named `posts`, Astro will generate `.astro/collections/authors.schema.json` and `.astro/collections/posts.schema.json`.

### Use JSON Schemas in JSON files

You can manually point to an Astro-generated schema by setting the `$schema` field in your JSON file. The value should be a relative file path from the data file to the schema. In the following example, a data file in `src/data/authors/` uses the schema generated for the `authors` collection:

src/data/authors/armand.json

```diff
{
  +"$schema": "../../../.astro/collections/authors.schema.json",
  "name": "Armand",
  "skills": ["Astro", "Starlight"]
}
```

#### Use a schema for a group of JSON files in VS Code

In VS Code, you can configure a schema to apply to all files in a collection using the [`json.schemas` setting](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings). In the following example, all files in the `src/data/authors/` directory will use the schema generated for the `authors` collection:

```json
{
  "json.schemas": [
    {
      "fileMatch": ["/src/data/authors/**"],
      "url": "./.astro/collections/authors.schema.json"
    }
  ]
}
```

### Use schemas in YAML files in VS Code

In VS Code, you can add support for using JSON schemas in YAML files using the [Red Hat YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) extension. With this extension installed, you can reference a schema in a YAML file using a special comment syntax:

src/data/authors/armand.yml

```diff
+# yaml-language-server: $schema=../../../.astro/collections/authors.schema.json
name: Armand
skills:
  - Astro
  - Starlight
```

#### Use schemas for a group of YAML files in VS Code

With the Red Hat YAML extension, you can configure a schema to apply to all YAML files in a collection using the `yaml.schemas` setting. In the following example, all YAML files in the `src/data/authors/` directory will use the schema generated for the `authors` collection:

```json
{
  "yaml.schemas": {
    "./.astro/collections/authors.schema.json": ["/src/content/authors/*.yml"]
  }
}
```

See [“Associating schemas”](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml#associating-schemas) in the Red Hat YAML extension documentation for more details.
