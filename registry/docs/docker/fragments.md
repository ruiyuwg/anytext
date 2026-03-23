When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Fragments

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

With Compose, you can use built-in [YAML](https://www.yaml.org/spec/1.2/spec.html#id2765878) features to make your Compose file neater and more efficient. Anchors and aliases let you create reusable blocks. This is useful if you start to find common configurations that span multiple services. Having reusable blocks minimizes potential mistakes.

Anchors are created using the `&` sign. The sign is followed by an alias name. You can use this alias with the `*` sign later to reference the value following the anchor. Make sure there is no space between the `&` and the `*` characters and the following alias name.

You can use more than one anchor and alias in a single Compose file.

## [Example 1](#example-1)

```yml
volumes:
  db-data: &default-volume
    driver: default
  metrics: *default-volume
```

In the example above, a `default-volume` anchor is created based on the `db-data` volume. It is later reused by the alias `*default-volume` to define the `metrics` volume.

Anchor resolution takes place before [variables interpolation](https://docs.docker.com/reference/compose-file/interpolation/), so variables can't be used to set anchors or aliases.

## [Example 2](#example-2)

```yml
services:
  first:
    image: my-image:latest
    environment: &env
      - CONFIG_KEY
      - EXAMPLE_KEY
      - DEMO_VAR
  second:
    image: another-image:latest
    environment: *env
```

If you have an anchor that you want to use in more than one service, use it in conjunction with an [extension](https://docs.docker.com/reference/compose-file/extension/) to make your Compose file easier to maintain.

## [Example 3](#example-3)

You may want to partially override values. Compose follows the rule outlined by [YAML merge type](https://yaml.org/type/merge.html).

In the following example, `metrics` volume specification uses alias to avoid repetition but overrides `name` attribute:

```yml
services:
  backend:
    image: example/database
    volumes:
      - db-data
      - metrics
volumes:
  db-data: &default-volume
    driver: default
    name: "data"
  metrics:
    <<: *default-volume
    name: "metrics"
```

## [Example 4](#example-4)

You can also extend the anchor to add additional values.

```yml
services:
  first:
    image: my-image:latest
    environment: &env
      FOO: BAR
      ZOT: QUIX
  second:
    image: another-image:latest
    environment:
      <<: *env
      YET_ANOTHER: VARIABLE
```

> Note
>
> [YAML merge](https://yaml.org/type/merge.html) only applies to mappings, and can't be used with sequences.

In example above, the environment variables must be declared using the `FOO: BAR` mapping syntax, while the sequence syntax `- FOO=BAR` is only valid when no fragments are involved.

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/compose-file/fragments.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fcompose-file%2ffragments%2f\&labels=status%2Ftriage)

Table of contents
