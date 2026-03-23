When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Daemon proxy configuration

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

If your organization uses a proxy server to connect to the internet, you may need to configure the Docker daemon to use the proxy server. The daemon uses a proxy server to access images stored on Docker Hub and other registries, and to reach other nodes in a Docker swarm.

This page describes how to configure a proxy for the Docker daemon. For instructions on configuring proxy settings for the Docker CLI, see [Configure Docker CLI to use a proxy server](https://docs.docker.com/engine/cli/proxy/).

> Important
>
> Proxy configurations specified in the `daemon.json` are ignored by Docker Desktop. If you use Docker Desktop, you can configure proxies using the [Docker Desktop settings](https://docs.docker.com/desktop/settings-and-maintenance/settings/#proxies).

There are two ways you can configure these settings:

- [Configuring the daemon](#daemon-configuration) through a configuration file or CLI flags
- Setting [environment variables](#environment-variables) on the system

Configuring the daemon directly takes precedence over environment variables.

## [Daemon configuration](#daemon-configuration)

You may configure proxy behavior for the daemon in the `daemon.json` file, or using CLI flags for the `--http-proxy` or `--https-proxy` flags for the `dockerd` command. Configuration using `daemon.json` is recommended.

```json
{
  "proxies": {
    "http-proxy": "http://proxy.example.com:3128",
    "https-proxy": "https://proxy.example.com:3129",
    "no-proxy": "*.test.example.com,.example.org,127.0.0.0/8"
  }
}
```

After changing the configuration file, restart the daemon for the proxy configuration to take effect:

```console
$ sudo systemctl restart docker
```

## [Environment variables](#environment-variables)

The Docker daemon checks the following environment variables in its start-up environment to configure HTTP or HTTPS proxy behavior:

- `HTTP_PROXY`
- `http_proxy`
- `HTTPS_PROXY`
- `https_proxy`
- `NO_PROXY`
- `no_proxy`

### [systemd unit file](#systemd-unit-file)

If you're running the Docker daemon as a systemd service, you can create a systemd drop-in file that sets the variables for the `docker` service.

> **Note for rootless mode**
>
> The location of systemd configuration files are different when running Docker in [rootless mode](https://docs.docker.com/engine/security/rootless/). When running in rootless mode, Docker is started as a user-mode systemd service, and uses files stored in each users' home directory in `~/.config/systemd/<user>/docker.service.d/`. In addition, `systemctl` must be executed without `sudo` and with the `--user` flag. Select the "Rootless mode" tab if you are running Docker in rootless mode.

Regular install Rootless mode

1. Create a systemd drop-in directory for the `docker` service:

   ```console
   $ sudo mkdir -p /etc/systemd/system/docker.service.d
   ```

2. Create a file named `/etc/systemd/system/docker.service.d/http-proxy.conf` that adds the `HTTP_PROXY` environment variable:

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   ```

   If you are behind an HTTPS proxy server, set the `HTTPS_PROXY` environment variable:

   ```systemd
   [Service]
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   ```

   Multiple environment variables can be set; to set both a non-HTTPS and a HTTPs proxy;

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   ```

   > Note
   >
   > Special characters in the proxy value, such as `#?!()[]{}`, must be double escaped using `%%`. For example:
   >
   > ```systemd
   > [Service]
   > Environment="HTTP_PROXY=http://domain%%5Cuser:complex%%23pass@proxy.example.com:3128/"
   > ```

3. If you have internal Docker registries that you need to contact without proxying, you can specify them via the `NO_PROXY` environment variable.

   The `NO_PROXY` variable specifies a string that contains comma-separated values for hosts that should be excluded from proxying. These are the options you can specify to exclude hosts:

   - IP address prefix (`1.2.3.4`)
   - Domain name, or a special DNS label (`*`)
   - A domain name matches that name and all subdomains. A domain name with a leading "." matches subdomains only. For example, given the domains `foo.example.com` and `example.com`:
     - `example.com` matches `example.com` and `foo.example.com`, and
     - `.example.com` matches only `foo.example.com`
   - A single asterisk (`*`) indicates that no proxying should be done
   - Literal port numbers are accepted by IP address prefixes (`1.2.3.4:80`) and domain names (`foo.example.com:80`)

   Example:

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   Environment="NO_PROXY=localhost,127.0.0.1,docker-registry.example.com,.corp"
   ```

4. Flush changes and restart Docker

   ```console
   $ sudo systemctl daemon-reload
   $ sudo systemctl restart docker
   ```

5. Verify that the configuration has been loaded and matches the changes you made, for example:

   ```console
   $ sudo systemctl show --property=Environment docker

   Environment=HTTP_PROXY=http://proxy.example.com:3128 HTTPS_PROXY=https://proxy.example.com:3129 NO_PROXY=localhost,127.0.0.1,docker-registry.example.com,.corp
   ```

6. Create a systemd drop-in directory for the `docker` service:

   ```console
   $ mkdir -p ~/.config/systemd/user/docker.service.d
   ```

7. Create a file named `~/.config/systemd/user/docker.service.d/http-proxy.conf` that adds the `HTTP_PROXY` environment variable:

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   ```

   If you are behind an HTTPS proxy server, set the `HTTPS_PROXY` environment variable:

   ```systemd
   [Service]
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   ```

   Multiple environment variables can be set; to set both a non-HTTPS and a HTTPs proxy;

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   ```

   > Note
   >
   > Special characters in the proxy value, such as `#?!()[]{}`, must be double escaped using `%%`. For example:
   >
   > ```systemd
   > [Service]
   > Environment="HTTP_PROXY=http://domain%%5Cuser:complex%%23pass@proxy.example.com:3128/"
   > ```

8. If you have internal Docker registries that you need to contact without proxying, you can specify them via the `NO_PROXY` environment variable.

   The `NO_PROXY` variable specifies a string that contains comma-separated values for hosts that should be excluded from proxying. These are the options you can specify to exclude hosts:

   - IP address prefix (`1.2.3.4`)
   - Domain name, or a special DNS label (`*`)
   - A domain name matches that name and all subdomains. A domain name with a leading "." matches subdomains only. For example, given the domains `foo.example.com` and `example.com`:
     - `example.com` matches `example.com` and `foo.example.com`, and
     - `.example.com` matches only `foo.example.com`
   - A single asterisk (`*`) indicates that no proxying should be done
   - Literal port numbers are accepted by IP address prefixes (`1.2.3.4:80`) and domain names (`foo.example.com:80`)

   Example:

   ```systemd
   [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:3128"
   Environment="HTTPS_PROXY=https://proxy.example.com:3129"
   Environment="NO_PROXY=localhost,127.0.0.1,docker-registry.example.com,.corp"
   ```

9. Flush changes and restart Docker

   ```console
   $ systemctl --user daemon-reload
   $ systemctl --user restart docker
   ```

10. Verify that the configuration has been loaded and matches the changes you made, for example:

    ```console
    $ systemctl --user show --property=Environment docker

    Environment=HTTP_PROXY=http://proxy.example.com:3128 HTTPS_PROXY=https://proxy.example.com:3129 NO_PROXY=localhost,127.0.0.1,docker-registry.example.com,.corp
    ```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/daemon/proxy.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fdaemon%2fproxy%2f\&labels=status%2Ftriage)

Table of contents
