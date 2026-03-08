Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Enable Enhanced Container Isolation

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

For: Administrators

ECI prevents malicious containers from compromising Docker Desktop while maintaining full developer productivity.

This page shows you how to turn on Enhanced Container Isolation (ECI) and verify it's working correctly.

## [Prerequisites](#prerequisites)

Before you begin, you must have:

- A Docker Business subscription
- Docker Desktop 4.13 or later
- [Enforced sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/) (for administrators managing organization-wide settings only)

## [Enable Enhanced Container Isolation](#enable-enhanced-container-isolation)

### [For developers](#for-developers)

Turn on ECI in your Docker Desktop settings:

1. Sign in to your organization in Docker Desktop. Your organization must have a Docker Business subscription.

2. Stop and remove all existing containers:

   ```console
   $ docker stop $(docker ps -q)
   $ docker rm $(docker ps -aq)
   ```

3. In Docker Desktop, go to **Settings** > **General**.

4. Select the **Use Enhanced Container Isolation** checkbox.

5. Select **Apply and restart**.

> Important
>
> ECI doesn't protect containers created before turning on the feature. Remove existing containers before turning on ECI.

### [For administrators](#for-administrators)

Configure Enhanced Container Isolation organization-wide using Settings Management:

Admin Console JSON file

1. Sign in to [Docker Home](https://app.docker.com) and select your organization from the top-left account drop-down.

2. Go to **Admin Console** > **Desktop Settings Management**.

3. [Create or edit a setting policy](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/configure-admin-console/).

4. Set **Enhanced Container Isolation** to **Always enabled**.

5. Create an [`admin-settings.json` file](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/configure-json-file/) and add:

   ```json
   {
     "configurationFileVersion": 2,
     "enhancedContainerIsolation": {
       "value": true,
       "locked": true
     }
   }
   ```

6. Configure the following as needed:

   - `"value": true`: Turns on ECI by default (required)
   - `"locked": true`: Prevents developers from turning off ECI
   - `"locked": false`: Allows developers to control the setting

### [Apply the configuration](#apply-the-configuration)

For ECI settings to take effect:

- New installations: Users launch Docker Desktop and sign in
- Existing installations: Users must fully quit Docker Desktop and relaunch

> Important
>
> Restarting from the Docker Desktop menu isn't sufficient. Users must completely quit and reopen Docker Desktop.

You can also configure [Docker socket mount permissions](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/config/) for trusted images that need Docker API access.

## [Verify Enhanced Container Isolation is active](#verify-enhanced-container-isolation-is-active)

After turning on ECI, verify it's working correctly using these methods.

### [Check user namespace mapping](#check-user-namespace-mapping)

Run a container and examine the user namespace mapping:

```console
$ docker run --rm alpine cat /proc/self/uid_map
```

With ECI turned on:

```text
0     100000      65536
```

This shows the container's root user (0) maps to an unprivileged user (100000) in the Docker Desktop VM, with a range of 64K user IDs. Each container gets an exclusive user ID range for isolation.

With ECI turned off:

```text
0          0 4294967295
```

This shows the container root user (0) maps directly to the VM root user (0), providing less isolation.

### [Check container runtime](#check-container-runtime)

Verify the container runtime being used:

```console
$ docker inspect --format='{{.HostConfig.Runtime}}' <container_name>
```

With ECI turned on, it turns `sysbox-runc`. With ECI turned off, it returns `runc`.

### [Test security restrictions](#test-security-restrictions)

Verify that ECI security restrictions are active.

Test namespace sharing:

```console
$ docker run -it --rm --pid=host alpine
```

With ECI turned on, this command fails with an error about Sysbox containers not being able to share namespaces with the host.

Test Docker socket access:

```console
$ docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock alpine
```

With ECI turned on, this command fails unless you've configured Docker socket exceptions for trusted images.

## [What users see with enforced ECI](#what-users-see-with-enforced-eci)

When administrators enforce Enhanced Container Isolation through Settings Management:

- The **Use Enhanced Container Isolation** setting appears turned on in Docker Desktop settings.
- If set to `"locked": true`, the setting is locked and greyed out.
- All new containers automatically use Linux user namespaces.
- Existing development workflows continue to work without modification.
- Users see `sysbox-runc` as the container runtime in `docker inspect` output.

## [Next steps](#next-steps)

- Review [Configure Docker socket exceptions and advanced settings](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/config/).
- Review [Enhanced Container Isolation limitations](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/limitations/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/hardened-desktop/enhanced-container-isolation/enable-eci.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fhardened-desktop%2fenhanced-container-isolation%2fenable-eci%2f\&labels=status%2Ftriage)

Table of contents
