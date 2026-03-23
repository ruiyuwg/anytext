When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# General FAQs for Desktop

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

### [Can I use Docker Desktop offline?](#can-i-use-docker-desktop-offline)

Yes, you can use Docker Desktop offline. However, you cannot access features that require an active internet connection. Additionally, any functionality that requires you to sign in won't work while using Docker Desktop offline or in air-gapped environments. This includes:

- The resources in the [Learning Center](https://docs.docker.com/desktop/use-desktop/)
- Pulling or pushing an image to Docker Hub
- [Image Access Management](https://docs.docker.com/security/access-tokens/)
- [Static vulnerability scanning](https://docs.docker.com/docker-hub/repos/manage/vulnerability-scanning/)
- Viewing remote images in the Docker Dashboard
- Docker Build when using [BuildKit](https://docs.docker.com/build/buildkit/#getting-started). You can work around this by disabling BuildKit. Run `DOCKER_BUILDKIT=0 docker build .` to disable BuildKit.
- [Kubernetes](https://docs.docker.com/desktop/use-desktop/kubernetes/) (Images are download when you enable Kubernetes for the first time)
- Checking for updates
- [In-app diagnostics](https://docs.docker.com/desktop/troubleshoot-and-support/troubleshoot/#diagnose-from-the-app) (including the [Self-diagnose tool](https://docs.docker.com/desktop/troubleshoot-and-support/troubleshoot/#diagnose-from-the-app))
- Sending usage statistics
- When `networkMode` is set to `mirrored`

### [How do I connect to the remote Docker Engine API?](#how-do-i-connect-to-the-remote-docker-engine-api)

To connect to the remote Engine API, you might need to provide the location of the Engine API for Docker clients and development tools.

Mac and Windows WSL 2 users can connect to the Docker Engine through a Unix socket: `unix:///var/run/docker.sock`.

If you are working with applications like [Apache Maven](https://maven.apache.org/) that expect settings for `DOCKER_HOST` and `DOCKER_CERT_PATH` environment variables, specify these to connect to Docker instances through Unix sockets.

For example:

```console
$ export DOCKER_HOST=unix:///var/run/docker.sock
```

Docker Desktop Windows users can connect to the Docker Engine through a **named pipe**: `npipe:////./pipe/docker_engine`, or **TCP socket** at this URL: `tcp://localhost:2375`.

For details, see [Docker Engine API](https://docs.docker.com/reference/api/engine/).

See the [Linux FAQs](https://docs.docker.com/desktop/troubleshoot-and-support/faqs/linuxfaqs/) for Linux specific setup.

### [How do I connect from a container to a service on the host?](#how-do-i-connect-from-a-container-to-a-service-on-the-host)

The host has a changing IP address, or none if you have no network access. It is recommend that you connect to the special DNS name `host.docker.internal`, which resolves to the internal IP address used by the host.

For more information and examples, see [how to connect from a container to a service on the host](https://docs.docker.com/desktop/features/networking/#connect-a-container-to-a-service-on-the-host).

### [Can I pass through a USB device to a container?](#can-i-pass-through-a-usb-device-to-a-container)

Docker Desktop does not support direct USB device passthrough. However, you can use USB over IP to connect common USB devices to the Docker Desktop VM and in turn be forwarded to a container. For more details, see [Using USB/IP with Docker Desktop](https://docs.docker.com/desktop/features/usbip/).

### [How do I verify Docker Desktop is using a proxy server ?](#how-do-i-verify-docker-desktop-is-using-a-proxy-server-)

To verify, look at the most recent events logged in `httpproxy.log`. This is located at `~/Library/Containers/com.docker.docker/Data/log/host` on macOS or `%LOCALAPPDATA%/Docker/log/host/` on Windows.

The following shows a few examples of what you can expect to see:

- Docker Desktop using app level settings (proxy mode manual) for proxy:

  ```console
  host will use proxy: app settings http_proxy=http://172.211.16.3:3128 https_proxy=http://172.211.16.3:3128
  Linux will use proxy: app settings http_proxy=http://172.211.16.3:3128 https_proxy=http://172.211.16.3:3128
  ```

- Docker Desktop using system level settings (proxy mode system) for proxy:

  ```console
  host will use proxy: static system http_proxy=http://172.211.16.3:3128 https_proxy=http://172.211.16.3:3128 no_proxy=
  Linux will use proxy: static system http_proxy=http://172.211.16.3:3128 https_proxy=http://172.211.16.3:3128 no_proxy=
  ```

- Docker Desktop is not configured to use a proxy server:

  ```console
  host will use proxy: disabled
  Linux will use proxy: disabled
  ```

- Docker Desktop is configured to use app level settings (proxy mode manual) and using a PAC file:

  ```console
  using a proxy PAC file: http://127.0.0.1:8081/proxy.pac
  host will use proxy: app settings from PAC file http://127.0.0.1:8081/proxy.pac
  Linux will use proxy: app settings from PAC file http://127.0.0.1:8081/proxy.pac
  ```

- Connect request using the configured proxy server:

  ```console
  CONNECT desktop.docker.com:443: host connecting via static system HTTPS proxy http://172.211.16.3:3128
  ```

### [How do I run Docker Desktop without administrator privileges?](#how-do-i-run-docker-desktop-without-administrator-privileges)

Docker Desktop requires administrator privileges only for installation. Once installed, administrator privileges are not needed to run it. However, for non-admin users to run Docker Desktop, it must be installed using a specific installer flag and meet certain prerequisites, which vary by platform.

Mac Windows

To run Docker Desktop on Mac without requiring administrator privileges, install via the command line and pass the `—user=<userid>` installer flag:

```console
$ /Applications/Docker.app/Contents/MacOS/install --user=<userid>
```

You can then sign in to your machine with the user ID specified, and launch Docker Desktop.

> Note
>
> Before launching Docker Desktop, if a `settings-store.json` file (or `settings.json` for Docker Desktop versions 4.34 and earlier) already exists in the `~/Library/Group Containers/group.com.docker/` directory, you will see a **Finish setting up Docker Desktop** window that prompts for administrator privileges when you select **Finish**. To avoid this, ensure you delete the `settings-store.json` file (or `settings.json` for Docker Desktop versions 4.34 and earlier) left behind from any previous installations before launching the application.

> Note
>
> If you are using the WSL 2 backend, first make sure that you meet the [minimum required version](https://docs.docker.com/desktop/features/wsl/best-practices/) for WSL 2. Otherwise, update WSL 2 first.

To run Docker Desktop on Windows without requiring administrator privileges, install via the command line and pass the `—always-run-service` installer flag.

```console
$ "Docker Desktop Installer.exe" install —always-run-service
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/troubleshoot-and-support/faqs/general.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2ftroubleshoot-and-support%2ffaqs%2fgeneral%2f\&labels=status%2Ftriage)

Table of contents
