When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Explore the Logs view in Docker Desktop

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Beta

Requires: Docker Desktop [4.65](https://docs.docker.com/desktop/release-notes/#4650) or later

The **Logs** view provides a unified, real-time log stream from all running containers and Kubernetes nodes in Docker Desktop. Unlike the logs accessible from the [**Containers** view](https://docs.docker.com/desktop/use-desktop/container/), the **Logs** view lets you monitor and search log output across your entire environment from a single interface.

## [Log entries](#log-entries)

Each log entry in the table view shows:

Column

Description

**Timestamp**

The date and time the log line was emitted, for example `2026-02-26 11:18:53`.

**Object**

The container or node that produced the log line.

**Message**

The full log message, including any status codes such as `[ OK ]`.

Selecting the expand arrow to the left of a row reveals the full message for that entry.

## [Search and filter logs](#search-and-filter-logs)

Use the **Search** field at the top of the Logs view to find specific entries. The search bar supports:

- Plain-text terms for exact match searches
- Regular expressions (for example, `/error|warn/`)

You can save your search terms for easy-access later.

To refine the log stream further, select the **Filter** icon in the toolbar to open the container filter panel. From here you can:

- Check individual running containers to show only their output
- Check **Running containers** or **Stopped containers** to show or hide entire groups
- Use **Select all** or **Clear all** to quickly toggle every container at once

## [Display options](#display-options)

Select the **Display options** icon in the toolbar to toggle the following:

- **View build logs**: Include or exclude build-related log output in the stream
- **Table view**: Switch between a structured table layout and a plain log stream

The table view is useful when you need to correlate events across multiple containers because each row clearly shows which container emitted a given message and when.

## [Feedback](#feedback)

Select **Give feedback** at the top of the view to share suggestions or report issues.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/use-desktop/logs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2fuse-desktop%2flogs%2f\&labels=status%2Ftriage)

Table of contents
