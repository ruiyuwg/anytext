Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Format command and log output

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker supports [Go templates](https://golang.org/pkg/text/template/) which you can use to manipulate the output format of certain commands and log drivers.

Docker provides a set of basic functions to manipulate template elements. All of these examples use the `docker inspect` command, but many other CLI commands have a `--format` flag, and many of the CLI command references include examples of customizing the output format.

> Note
>
> When using the `--format` flag, you need to observe your shell environment. In a POSIX shell, you can run the following with a single quote:
>
> ```console
> $ docker inspect --format '{{join .Args " , "}}'
> ```
>
> Otherwise, in a Windows shell (for example, PowerShell), you need to use single quotes, but escape the double quotes inside the parameters as follows:
>
> ```console
> $ docker inspect --format '{{join .Args \" , \"}}'
> ```

## [join](#join)

`join` concatenates a list of strings to create a single string. It puts a separator between each element in the list.

```console
$ docker inspect --format '{{join .Args " , "}}' container
```

## [table](#table)

`table` specifies which fields you want to see its output.

```console
$ docker image list --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}\t{{.Size}}"
```

## [json](#json)

`json` encodes an element as a json string.

```console
$ docker inspect --format '{{json .Mounts}}' container
```

## [lower](#lower)

`lower` transforms a string into its lowercase representation.

```console
$ docker inspect --format "{{lower .Name}}" container
```

## [split](#split)

`split` slices a string into a list of strings separated by a separator.

```console
$ docker inspect --format '{{split .Image ":"}}' container
```

## [title](#title)

`title` capitalizes the first character of a string.

```console
$ docker inspect --format "{{title .Name}}" container
```

## [upper](#upper)

`upper` transforms a string into its uppercase representation.

```console
$ docker inspect --format "{{upper .Name}}" container
```

## [pad](#pad)

`pad` adds whitespace padding to a string. You can specify the number of spaces to add before and after the string.

```console
$ docker image list --format '{{pad .Repository 5 10}}'
```

This example adds 5 spaces before the image repository name and 10 spaces after.

## [truncate](#truncate)

`truncate` shortens a string to a specified length. If the string is shorter than the specified length, it remains unchanged.

```console
$ docker image list --format '{{truncate .Repository 15}}'
```

This example displays the image repository name, truncating it to the first 15 characters if it's longer.

## [println](#println)

`println` prints each value on a new line.

```console
$ docker inspect --format='{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}' container
```

## [Hint](#hint)

To find out what data can be printed, show all content as json:

```console
$ docker container ls --format='{{json .}}'
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/cli/formatting.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fcli%2fformatting%2f\&labels=status%2Ftriage)

Table of contents
