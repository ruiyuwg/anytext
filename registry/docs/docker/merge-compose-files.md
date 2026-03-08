Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Merge Compose files

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Compose lets you define a Compose application model through multiple Compose files. When doing so, Compose follows certain rules to merge Compose files.

These rules are outlined below.

## [Mapping](#mapping)

A YAML `mapping` gets merged by adding missing entries and merging the conflicting ones.

Merging the following example YAML trees:

```yaml
services:
  foo:
    key1: value1
    key2: value2
```

```yaml
services:
  foo:
    key2: VALUE
    key3: value3
```

Results in a Compose application model equivalent to the YAML tree:

```yaml
services:
  foo:
    key1: value1
    key2: VALUE
    key3: value3
```

## [Sequence](#sequence)

A YAML `sequence` is merged by appending values from the overriding Compose file to the previous one.

Merging the following example YAML trees:

```yaml
services:
  foo:
    DNS:
      - 1.1.1.1
```

```yaml
services:
  foo:
    DNS: 
      - 8.8.8.8
```

Results in a Compose application model equivalent to the YAML tree:

```yaml
services:
  foo:
    DNS:
      - 1.1.1.1
      - 8.8.8.8
```

## [Exceptions](#exceptions)

### [Shell commands](#shell-commands)

When merging Compose files that use the services attributes [command](https://docs.docker.com/reference/compose-file/services/#command), [entrypoint](https://docs.docker.com/reference/compose-file/services/#entrypoint) and [healthcheck: `test`](https://docs.docker.com/reference/compose-file/services/#healthcheck), the value is overridden by the latest Compose file, and not appended.

Merging the following example YAML trees:

```yaml
services:
  foo:
    command: ["echo", "foo"]
```

```yaml
services:
  foo:
    command: ["echo", "bar"]
```

Results in a Compose application model equivalent to the YAML tree:

```yaml
services:
  foo:
    command: ["echo", "bar"]
```

### [Unique resources](#unique-resources)

Applies to the [ports](https://docs.docker.com/reference/compose-file/services/#ports), [volumes](https://docs.docker.com/reference/compose-file/services/#volumes), [secrets](https://docs.docker.com/reference/compose-file/services/#secrets) and [configs](https://docs.docker.com/reference/compose-file/services/#configs) services attributes. While these types are modeled in a Compose file as a sequence, they have special uniqueness requirements:

Attribute

Unique key

volumes

target

secrets

target

configs

target

ports

{ip, target, published, protocol}

When merging Compose files, Compose appends new entries that do not violate a uniqueness constraint and merge entries that share a unique key.

Merging the following example YAML trees:

```yaml
services:
  foo:
    volumes:
      - foo:/work
```

```yaml
services:
  foo:
    volumes:
      - bar:/work
```

Results in a Compose application model equivalent to the YAML tree:

```yaml
services:
  foo:
    volumes:
      - bar:/work
```

### [Reset value](#reset-value)

In addition to the previously described mechanism, an override Compose file can also be used to remove elements from your application model. For this purpose, the custom [YAML tag](https://yaml.org/spec/1.2.2/#24-tags) `!reset` can be set to override a value set by the overridden Compose file. A valid value for attribute must be provided, but will be ignored and target attribute will be set with type's default value or `null`.

For readability, it is recommended to explicitly set the attribute value to the null (`null`) or empty array `[]` (with `!reset null` or `!reset []`) so that it is clear that resulting attribute will be cleared.

A base `compose.yaml` file:

```yaml
services:
  app:
    image: myapp
    ports:
      - "8080:80" 
    environment:
      FOO: BAR           
```

And a `compose.override.yaml` file:

```yaml
services:
  app:
    image: myapp
    ports: !reset []
    environment:
      FOO: !reset null
```

Results in:

```yaml
services:
  app:
    image: myapp
```

### [Replace value](#replace-value)

Requires: Docker Compose [2.24.4](https://github.com/docker/compose/releases/tag/v2.24.4) and later

While `!reset` can be used to remove a declaration from a Compose file using an override file, `!override` allows you to fully replace an attribute, bypassing the standard merge rules. A typical example is to fully replace a resource definition, to rely on a distinct model but using the same name.

A base `compose.yaml` file:

```yaml
services:
  app:
    image: myapp
    ports:
      - "8080:80"
```

To remove the original port, but expose a new one, the following override file is used:

```yaml
services:
  app:
    ports: !override
      - "8443:443" 
```

This results in:

```yaml
services:
  app:
    image: myapp
    ports:
      - "8443:443" 
```

If `!override` had not been used, both `8080:80` and `8443:443` would be exposed as per the [merging rules outlined above](#sequence).

## [Additional resources](#additional-resources)

For more information on how merge can be used to create a composite Compose file, see [Working with multiple Compose files](https://docs.docker.com/compose/how-tos/multiple-compose-files/)

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/compose-file/merge.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fcompose-file%2fmerge%2f\&labels=status%2Ftriage)

Table of contents
