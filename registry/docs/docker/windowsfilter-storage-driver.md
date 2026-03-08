Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# windowsfilter storage driver

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The windowsfilter storage driver is the default storage driver for Docker Engine on Windows. The windowsfilter driver uses Windows-native file system layers to for storing Docker layers and volume data on disk. The windowsfilter storage driver only works on file systems formatted with NTFS.

## [Configure the windowsfilter storage driver](#configure-the-windowsfilter-storage-driver)

For most use case, no configuring the windowsfilter storage driver is not necessary.

The default storage limit for Docker Engine on Windows is 127GB. To use a different storage size, set the `size` option for the windowsfilter storage driver. See [windowsfilter options](https://docs.docker.com/reference/cli/dockerd/#windowsfilter-options).

Data is stored on the Docker host in `image` and `windowsfilter` subdirectories within `C:\ProgramData\docker` by default. You can change the storage location by configuring the `data-root` option in the [Daemon configuration file](https://docs.docker.com/reference/cli/dockerd/#on-windows):

```json
{
  "data-root": "d:\\docker"
}
```

You must restart the daemon for the configuration change to take effect.

## [Additional information](#additional-information)

For more information about how container storage works on Windows, refer to Microsoft's [Containers on Windows documentation](https://learn.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/container-storage).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/storage/drivers/windowsfilter-driver.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fstorage%2fdrivers%2fwindowsfilter-driver%2f\&labels=status%2Ftriage)

Table of contents
