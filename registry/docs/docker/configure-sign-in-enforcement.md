Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Configure sign-in enforcement

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Team Business

For: Administrators

You can enforce sign-in for Docker Desktop using several methods. Choose the method that best fits your organization's infrastructure and security requirements.

## [Choose your method](#choose-your-method)

Method

Platform

Registry key

Windows only

Configuration profiles

macOS only

`plist` file

macOS only

`registry.json`

All platforms

> Tip
>
> For macOS, configuration profiles offer the highest security because they're protected by Apple's System Integrity Protection (SIP).

## [Windows: Registry key method](#windows-registry-key-method)

Manual setup Group Policy deployment

To configure the registry key method manually:

1. Create the registry key:

   ```console
   $ HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Docker\Docker Desktop
   ```

2. Create a multi-string value name `allowedOrgs`.

3. Use your organization names as string data:

   - Use lowercase letters only
   - Add each organization on a separate line
   - Do not use spaces or commas as separators

4. Restart Docker Desktop.

5. Verify the `Sign in required!` prompt appears in Docker Desktop.

> Important
>
> You can add multiple organizations with Docker Desktop version 4.36 and later. With version 4.35 and earlier, adding multiple organizations causes sign-in enforcement to fail silently.

Deploy the registry key across your organization using Group Policy:

1. Create a registry script with the required key structure.
2. In Group Policy Management, create or edit a GPO.
3. Navigate to **Computer Configuration** > **Preferences** > **Windows Settings** > **Registry**.
4. Right-click **Registry** > **New** > **Registry Item**.
5. Configure the registry item:
   - Action: **Update**
   - Path: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Docker\Docker Desktop`
   - Value name: `allowedOrgs`
   - Value data: Your organization names
6. Link the GPO to the target Organizational Unit.
7. Test on a small group using `gpupdate/force`.
8. Deploy organization-wide after verification.

## [macOS: Configuration profiles method (recommended)](#macos-configuration-profiles-method-recommended)

Requires: Docker Desktop 4.36 and later

Configuration profiles provide the most secure enforcement method for macOS, as they're protected by Apple's System Integrity Protection.

The payload is a dictionary of key-values. Docker Desktop supports the following keys:

- `allowedOrgs`: Sets a list of organizations in one single string, where each organization is separated by a semi-colon.

In Docker Desktop version 4.48 and later, the following keys are also supported:

- `overrideProxyHTTP`: Sets the URL of the HTTP proxy that must be used for outgoing HTTP requests.
- `overrideProxyHTTPS`: Sets the URL of the HTTP proxy that must be used for outgoing HTTPS requests.
- `overrideProxyExclude`: Bypasses proxy settings for the specified hosts and domains. Uses a comma-separated list.
- `overrideProxyPAC`: Sets the file path where the PAC file is located. It has precedence over the remote PAC file on the selected proxy.
- `overrideProxyEmbeddedPAC`: Sets the content of an in-memory PAC file. It has precedence over `overrideProxyPAC`.

Overriding at least one of the proxy settings via Configuration profiles will automatically lock the settings as they're managed by macOS.

1. Create a file named `docker.mobileconfig` and include the following content:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">


      PayloadContent
      
         
            PayloadType
            com.docker.config
            PayloadVersion
            1
            PayloadIdentifier
            com.docker.config
            PayloadUUID
            eed295b0-a650-40b0-9dda-90efb12be3c7
            PayloadDisplayName
            Docker Desktop Configuration
            PayloadDescription
            Configuration profile to manage Docker Desktop settings.
            PayloadOrganization
            Your Company Name
            allowedOrgs
            first_org;second_org
            overrideProxyHTTP
            http://company.proxy:port
            overrideProxyHTTPS
            https://company.proxy:port
         
      
      PayloadType
      Configuration
      PayloadVersion
      1
      PayloadIdentifier
      com.yourcompany.docker.config
      PayloadUUID
      0deedb64-7dc9-46e5-b6bf-69d64a9561ce
      PayloadDisplayName
      Docker Desktop Config Profile
      PayloadDescription
      Config profile to enforce Docker Desktop settings for allowed organizations.
      PayloadOrganization
      Your Company Name


   ```

2. Replace placeholders:
   - Change `com.yourcompany.docker.config` to your company identifier
   - Replace `Your Company Name` with your organization name
   - Replace `PayloadUUID` with a randomly generated UUID
   - Update the `allowedOrgs` value with your organization names (separated by semicolons)
   - Replace `company.proxy:port` with http/https proxy server host(or IP address) and port

3. Deploy the profile using your MDM solution.

4. Verify the profile appears in **System Settings** > **General** > **Device Management** under **Device (Managed)**. Ensure the profile is listed with the correct name and settings.

Some MDM solutions let you specify the payload as a plain dictionary of key-value settings without the full `.mobileconfig` wrapper:

```xml
<dict>
   <key>allowedOrgs</key>
   <string>first_org;second_org</string>
   <key>overrideProxyHTTP</key>
   <string>http://company.proxy:port</string>
   <key>overrideProxyHTTPS</key>
   <string>https://company.proxy:port</string>
</dict>
```

## [macOS: plist file method](#macos-plist-file-method)

Use this alternative method for macOS with Docker Desktop version 4.32 and later.

Manual creation Shell script deployment

1. Create the file `/Library/Application Support/com.docker.docker/desktop.plist`.

2. Add this content, replacing `myorg1` and `myorg2` with your organization names:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

     
         allowedOrgs
         
             myorg1
             myorg2
         
     

   ```

3. Set file permissions to prevent editing by non-administrator users.

4. Restart Docker Desktop.

5. Verify the `Sign in required!` prompt appears in Docker Desktop.

Create and deploy a script for organization-wide distribution:

```bash
#!/bin/bash

# Create directory if it doesn't exist
sudo mkdir -p "/Library/Application Support/com.docker.docker"

# Write the plist file
sudo defaults write "/Library/Application Support/com.docker.docker/desktop.plist" allowedOrgs -array "myorg1" "myorg2"

# Set appropriate permissions
sudo chmod 644 "/Library/Application Support/com.docker.docker/desktop.plist"
sudo chown root:admin "/Library/Application Support/com.docker.docker/desktop.plist"
```

Deploy this script using SSH, remote support tools, or your preferred deployment method.

## [All platforms: registry.json method](#all-platforms-registryjson-method)

The registry.json method works across all platforms and offers flexible deployment options.

### [File locations](#file-locations)

Create the `registry.json` file (UTF-8 without BOM) at the appropriate location:

Platform

Location

Windows

`/ProgramData/DockerDesktop/registry.json`

Mac

`/Library/Application Support/com.docker.docker/registry.json`

Linux

`/usr/share/docker-desktop/registry/registry.json`

### [Basic setup](#basic-setup)

Manual creation Command line setup Installation-time setup

1. Ensure users are members of your Docker organization.

2. Create the `registry.json` file at the appropriate location for your platform.

3. Add this content, replacing organization names with your own:

   ```json
   {
      "allowedOrgs": ["myorg1", "myorg2"]
   }
   ```

4. Set file permissions to prevent user editing.

5. Restart Docker Desktop.

6. Verify the `Sign in required!` prompt appears in Docker Desktop.

> Tip
>
> If users have issues starting Docker Desktop after enforcing sign-in, they may need to update to the latest version.

#### [Windows (PowerShell as Administrator)](#windows-powershell-as-administrator)

```shell
Set-Content /ProgramData/DockerDesktop/registry.json '{"allowedOrgs":["myorg1","myorg2"]}'
```

#### [macOS](#macos)

```console
sudo mkdir -p "/Library/Application Support/com.docker.docker"
echo '{"allowedOrgs":["myorg1","myorg2"]}' | sudo tee "/Library/Application Support/com.docker.docker/registry.json"
```

#### [Linux](#linux)

```console
sudo mkdir -p /usr/share/docker-desktop/registry
echo '{"allowedOrgs":["myorg1","myorg2"]}' | sudo tee /usr/share/docker-desktop/registry/registry.json
```

Create the registry.json file during Docker Desktop installation:

#### [Windows](#windows)

```shell
# PowerShell
Start-Process '.\Docker Desktop Installer.exe' -Wait 'install --allowed-org=myorg'

# Command Prompt
"Docker Desktop Installer.exe" install --allowed-org=myorg
```

#### [macOS](#macos)

```console
sudo hdiutil attach Docker.dmg
sudo /Volumes/Docker/Docker.app/Contents/MacOS/install --allowed-org=myorg
sudo hdiutil detach /Volumes/Docker
```

## [Method precedence](#method-precedence)

When multiple configuration methods exist on the same system, Docker Desktop uses this precedence order:

1. Registry key (Windows only)
2. Configuration profiles (macOS only)
3. plist file (macOS only)
4. registry.json file

## [Troubleshoot sign-in enforcement](#troubleshoot-sign-in-enforcement)

If sign-in enforcement doesn't work:

- Verify file locations and permissions
- Check that organization names use lowercase letters
- Restart Docker Desktop or reboot the system
- Confirm users are members of the specified organizations
- Update Docker Desktop to the latest version

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/enforce-sign-in/methods.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fenforce-sign-in%2fmethods%2f\&labels=status%2Ftriage)

Table of contents
