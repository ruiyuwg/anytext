When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx dial-stdio

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Proxy current stdio streams to builder instance

Usage

`docker buildx dial-stdio`

## [Description](#description)

dial-stdio uses the stdin and stdout streams of the command to proxy to the configured builder instance. It is not intended to be used by humans, but rather by other tools that want to interact with the builder instance via BuildKit API.

## [Options](#options)

Option

Default

Description

`--platform`

Target platform: this is used for node selection

`--progress`

`none`

Set type of progress output (`auto`, `plain`, `rawjson`, `tty`). Use plain to show container output

## [Examples](#examples)

Example go program that uses the dial-stdio command wire up a buildkit client. This is, for example, use only and may not be suitable for production use.

```go
client.New(ctx, "", client.WithContextDialer(func(context.Context, string) (net.Conn, error) {
    c1, c2 := net.Pipe()
    cmd := exec.Command("docker", "buildx", "dial-stdio")
    cmd.Stdin = c1
    cmd.Stdout = c1

    if err := cmd.Start(); err != nil {
        c1.Close()
        c2.Close()
        return nil, err
    }

    go func() {
        cmd.Wait()
        c2.Close()
    }()

    return c2
}))
```

Table of contents
