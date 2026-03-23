When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Customize log driver output

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

The `tag` log option specifies how to format a tag that identifies the container's log messages. By default, the system uses the first 12 characters of the container ID. To override this behavior, specify a `tag` option:

```console
$ docker run --log-driver=fluentd --log-opt fluentd-address=myhost.local:24224 --log-opt tag="mailer"
```

Docker supports some special template markup you can use when specifying a tag's value:

Markup

Description

`{{.ID}}`

The first 12 characters of the container ID.

`{{.FullID}}`

The full container ID.

`{{.Name}}`

The container name.

`{{.ImageID}}`

The first 12 characters of the container's image ID.

`{{.ImageFullID}}`

The container's full image ID.

`{{.ImageName}}`

The name of the image used by the container.

`{{.DaemonName}}`

The name of the Docker program (`docker`).

For example, specifying a `--log-opt tag="{{.ImageName}}/{{.Name}}/{{.ID}}"` value yields `syslog` log lines like:

```text
Aug  7 18:33:19 HOSTNAME hello-world/foobar/5790672ab6a0[9103]: Hello from Docker.
```

At startup time, the system sets the `container_name` field and `{{.Name}}` in the tags. If you use `docker rename` to rename a container, the new name isn't reflected in the log messages. Instead, these messages continue to use the original container name.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/logging/log_tags.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2flogging%2flog_tags%2f\&labels=status%2Ftriage)
