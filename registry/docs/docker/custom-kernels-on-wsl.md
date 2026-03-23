When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Custom kernels on WSL

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

> Warning
>
> Using a custom kernel with Docker Desktop on WSL 2 is not officially supported and may cause issues with Docker Desktop startup or operation.

Docker Desktop depends on several kernel features built into the default WSL 2 Linux kernel distributed by Microsoft.

However, in some cases it may be necessary to run custom kernels; Docker Desktop does not block their use, and some users have reported success using them.

## [Recommendations if you must use a custom kernel](#recommendations-if-you-must-use-a-custom-kernel)

If you choose to use a custom kernel, start from the kernel tree distributed by Microsoft from their [official repository](https://github.com/microsoft/WSL2-Linux-Kernel) and then add the features you need on top of that.

Also:

- Use the same kernel version as the one distributed by the latest WSL2 release. You can find the version by running `wsl.exe --system uname -r` in a terminal.
- Make sure that your kernel build environment includes `pahole` and its version is properly reflected in the corresponding kernel config (`CONFIG_PAHOLE_VERSION`).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/features/wsl/custom-kernels.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2ffeatures%2fwsl%2fcustom-kernels%2f\&labels=status%2Ftriage)

Table of contents
