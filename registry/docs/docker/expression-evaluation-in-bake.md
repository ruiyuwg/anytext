When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Expression evaluation in Bake

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Bake files in the HCL format support expression evaluation, which lets you perform arithmetic operations, conditionally set values, and more.

## [Arithmetic operations](#arithmetic-operations)

You can perform arithmetic operations in expressions. The following example shows how to multiply two numbers.

docker-bake.hcl

```hcl
sum = 7*6

target "default" {
  args = {
    answer = sum
  }
}
```

Printing the Bake file with the `--print` flag shows the evaluated value for the `answer` build argument.

```console
$ docker buildx bake --print
```

```json
{
  "target": {
    "default": {
      "context": ".",
      "dockerfile": "Dockerfile",
      "args": {
        "answer": "42"
      }
    }
  }
}
```

## [Ternary operators](#ternary-operators)

You can use ternary operators to conditionally register a value.

The following example adds a tag only when a variable is not empty, using the built-in `notequal` [function](https://docs.docker.com/build/bake/funcs/).

docker-bake.hcl

```hcl
variable "TAG" {}

target "default" {
  context="."
  dockerfile="Dockerfile"
  tags = [
    "my-image:latest",
    notequal("",TAG) ? "my-image:${TAG}": ""
  ]
}
```

In this case, `TAG` is an empty string, so the resulting build configuration only contains the hard-coded `my-image:latest` tag.

```console
$ docker buildx bake --print
```

```json
{
  "target": {
    "default": {
      "context": ".",
      "dockerfile": "Dockerfile",
      "tags": ["my-image:latest"]
    }
  }
}
```

## [Expressions with variables](#expressions-with-variables)

You can use expressions with [variables](https://docs.docker.com/build/bake/variables/) to conditionally set values, or to perform arithmetic operations.

The following example uses expressions to set values based on the value of variables. The `v1` build argument is set to "higher" if the variable `FOO` is greater than 5, otherwise it is set to "lower". The `v2` build argument is set to "yes" if the `IS_FOO` variable is true, otherwise it is set to "no".

docker-bake.hcl

```hcl
variable "FOO" {
  default = 3
}

variable "IS_FOO" {
  default = true
}

target "app" {
  args = {
    v1 = FOO > 5 ? "higher" : "lower"
    v2 = IS_FOO ? "yes" : "no"
  }
}
```

Printing the Bake file with the `--print` flag shows the evaluated values for the `v1` and `v2` build arguments.

```console
$ docker buildx bake --print app
```

```json
{
  "group": {
    "default": {
      "targets": ["app"]
    }
  },
  "target": {
    "app": {
      "context": ".",
      "dockerfile": "Dockerfile",
      "args": {
        "v1": "lower",
        "v2": "yes"
      }
    }
  }
}
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/bake/expressions.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fbake%2fexpressions%2f\&labels=status%2Ftriage)

Table of contents
