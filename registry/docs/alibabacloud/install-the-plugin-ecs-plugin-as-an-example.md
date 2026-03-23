Alibaba Cloud CLI 3.3.0 and later versions use a plugin-based architecture that separates the command-line capabilities for each cloud product into a standalone plugin. This lets you install only the plugins you need, update them independently, and keep the CLI core lightweight. All plugin names use kebab-case, and the CLI automatically serializes parameters to simplify API calls.

## Prerequisites

1.  Cloud Assistant CLI version 3.3.0 or later is installed. For more information, see [Install the CLI (Linux)](/help/en/cli/install-cli-on-linux).
    
2.  Configure credentials for Alibaba Cloud CLI. For more information, see [Configure credentials](/help/en/cli/configure-credentials).
    

## QuickStart

This section uses the `ecs` plugin as an example to show you how to install a plugin and list available regions.

```
# Install the plugin (ecs plugin as an example)
aliyun plugin install --names ecs

# Call an API to list regions
aliyun ecs describe-regions --accept-language zh-CN
```

You can run `aliyun ecs --help` to view all commands that are supported by the ECS plugin. The subsequent sections describe plugin naming conventions, installation and management, parameter usage, and advanced features.

## Plugin overview

Plugins package the API call capabilities of each cloud product into standalone executable programs that are uniformly scheduled by the CLI core. Key features include the following:

-   **On-demand installation**: You can install only the plugins you need to reduce the size of the CLI.
    
-   **Independent updates**: Plugins release versions independently. You do not need to upgrade the CLI core.
    
-   **Consistent naming**: Commands and parameters use kebab-case, such as `describe-instances` and `--accept-language`.
    
-   **Simplified parameters**: Low-level parameters are automatically serialized. You can use key-value pairs for input.
    
-   **Complete help**: You can run the --help command to view parameter types, descriptions, and whether they are required.
    

Plugins are installed to the `~/.aliyun/plugins` directory. The `manifest.json` file lists the installed plugins.

### **Plugin naming rules**

Plugin names follow the `aliyun-cli-<product-code>` format. The product code is the same as the product code on Alibaba Cloud OpenAPI. Examples include the following:

**Plugin name**

**Product code**

**Cloud product**

`aliyun-cli-ecs`

`ecs`

Elastic Computing Service

`aliyun-cli-fc`

`fc`

Function Compute

`aliyun-cli-rds`

`rds`

ApsaraDB RDS

You can use the full plugin name, such as `aliyun-cli-ecs`, or the product code, such as `ecs`, when you install, uninstall, or update a plugin. The names are not case-sensitive.

## Install plugins

### View and search plugins

You can view all available plugins in the remote index:

```
aliyun plugin list-remote
```

The following sample output is returned:

```
Total plugins available: 316

Name                                     Latest Version  Preview  Status         Local Version  Description
----                                     --------------  -------  ------         -------------  -----------
aliyun-cli-ecs                           0.1.0           No       Installed      0.1.0          Aliyun CLI plugin for Elastic Compute Service operations.
aliyun-cli-fc                            0.1.0           No       Installed      0.1.0          Aliyun CLI plugin for Function Compute 3.0 operations.
aliyun-cli-acc                           0.1.0           No       Not installed  -              Aliyun CLI plugin for acs operations.
```

To find the plugin that contains a specific command, you can use the search feature. The search feature supports prefix matching.

```
# Search for plugins containing ecs
aliyun plugin search ecs
# Search for commands that start with describe in the ecs product
aliyun plugin search "ecs describe"
```

**Note**

-   CLI plugins follow Semantic Versioning (SemVer). Versions 0.x.x are experimental and do not guarantee compatibility. Stable versions start from 1.0.0. Backward compatibility is guaranteed within the same major version. An increment in the major version may introduce breaking changes.
    
-   By default, the remote index is cached for one hour. To force a refresh, you can set the `ALIBABA_CLOUD_CLI_PLUGIN_NO_CACHE=true` environment variable.
    

### Execute Installation

Run the following command to install a plugin:

```
aliyun plugin install --names ecs
```

After the installation is complete, you can run `aliyun plugin list` to confirm the result.

```
Name                Version             Description
----                -------             -----------
aliyun-cli-ecs      0.1.0               Aliyun CLI plugin for Elastic Compute Service operations.
aliyun-cli-fc       0.1.0               Aliyun CLI plugin for Function Compute 3.0 operations.
```

You can use the following optional parameters as needed:

**Scenario**

**Example command**

**Description**

Install multiple plugins at once

`aliyun plugin install --names fc ecs`

Separate names with spaces

Install a specific version

`aliyun plugin install --names fc --version 1.0.0`

If not specified, install the latest stable version

**Note**

The CLI automatically detects your operating system and architecture, such as `darwin-arm64` and `linux-amd64`, and downloads the matching plugin package. If a plugin fails to be installed during a batch installation, the other plugins can still be installed. Some plugins require a minimum CLI version. If your CLI version does not meet the requirement, the CLI prompts you to upgrade.

## Use plugins

Product plugins use kebab-case naming. The CLI passes credentials, such as AccessKey and Security Token Service token, and the region and timeout settings from your current profile to the plugin. Options such as `--profile` and `--region` are also available for plugin commands. You do not need to perform separate configurations.

The command format is as follows:

```
aliyun <product-code> <command> [--parameter-name value ...]
```

### Usage examples

#### **View plugin help**

You can run `aliyun <product-code> --help` or `aliyun <product-code> <command> --help` to view help information. For example, to list all commands that are supported by `ecs`, run the following command:

```
aliyun ecs --help
```

You can view the parameters for a specific command in the `ecs` plugin:

```
aliyun ecs describe-regions --help
```

Sample output:

```
......
  --accept-language         string, Filter results by Chinese, English, or Japanese. For more information, see [RFC
                            7231](https://tools.ietf.org/html/rfc7231). Valid values:
                            - zh-CN: Simplified Chinese.
                            - zh-TW: Traditional Chinese.
                            - en-US: English.
                            - ja: Japanese.
                            - fr: French.
                            - de: German.
                            - ko: Korean.
                            Default value: zh-CN
  --instance-charge-type    string, The billing method for the instance. For more information, see https://help.aliyun.
                            com/document_detail/25398.html. Valid values:
                            - PrePaid: Subscription. Confirm your account supports balance payment or credit payment. Otherwise, the error InvalidPayMethod occurs.
                            - PostPaid: Pay-as-you-go.
                            - SpotWithPriceLimit: Set a maximum price.
                            - SpotAsPriceGo: Let the system set the bid. The highest price is the pay-as-you-go price.
                            Default value: PostPaid
......
```

The help text shows the type, description, and whether each parameter is required.

#### List regions

Run the following command to list regions:

```
aliyun ecs describe-regions --accept-language zh-CN
```

The following sample output is returned:

```
{
  "Regions": {
     "Region": [
	{
	   "LocalName": "China (Qingdao)",
	   "RegionEndpoint": "ecs.cn-qingdao.aliyuncs.com",
	   "RegionId": "cn-qingdao"
			},
	{
	   "LocalName": "China (Beijing)",
	   "RegionEndpoint": "ecs.cn-beijing.aliyuncs.com",
	   "RegionId": "cn-beijing"
	},
......
```

### Advanced usage

#### **Structured parameter input**

Plugins handle parameter serialization automatically. You can use the same input method regardless of the parameter style of the API, such as repeatList, flat, or JSON:

-   Array parameters: If a parameter accepts an array, you can repeat the parameter. For example, `attribute-name`.
    
    ```
    aliyun ecs describe-account-attributes\
          --biz-region-id cn-hangzhou\
          --attribute-name max-security-groups\
          --attribute-name instance-network-type
    ```
    
-   Object parameters: Use the `key=value` format for objects. For example, `tag`.
    
    ```
    aliyun ecs describe-instances --biz-region-id cn-hangzhou\
           --tag key=env value=prod
    ```
    

#### **Multiple API versions**

Some cloud products support multiple API versions. You can run `aliyun plugin list` to list the installed plugins. Plugins that have `multi-version` in their descriptions support multiple API versions. For example:

```
Name                Version             Description
----                -------             -----------
aliyun-cli-ecs      0.1.0               Aliyun CLI plugin for Elastic Compute Service operations.
aliyun-cli-ess      0.1.0               Aliyun CLI plugin for Auto Scaling operations with multi-version API support.
aliyun-cli-fc       0.1.0               Aliyun CLI plugin for Function Compute 3.0 operations.
```

For plugins that support multiple API versions, you can use the `--api-version` parameter to specify the version that you want to use:

-   Use the default API version:
    
    ```
    aliyun ess describe-scaling-groups --biz-region-id cn-hangzhou
    ```
    
-   Specify an API version using the `--api-version` parameter:
    
    ```
    aliyun ess describe-scaling-groups --api-version 2022-02-22 --biz-region-id cn-hangzhou
    ```
    
-   List the supported API versions:
    
    ```
    aliyun ess list-api-versions 
    ```
    

If you frequently use a specific API version, you can set it as the default version using an environment variable. This way, you do not need to specify the `--api-version` parameter every time you run a command. The format of the environment variable is `ALIBABA_CLOUD_<PRODUCT_CODE>_API_VERSION`. Replace `<PRODUCT_CODE>` with the product code in uppercase. For example:

```
# Add the environment variable and apply it
echo 'export ALIBABA_CLOUD_ESS_API_VERSION=2022-02-22' >> ~/.bashrc
source ~/.bashrc
```

After you set the environment variable, commands use the specified API version by default. If you specify the `--api-version` parameter in a command, the parameter takes precedence over the environment variable.

## Update and uninstall plugins

### **Update plugins**

You can update the specified plugin:

```
aliyun plugin update --name ecs
```

You can update all installed plugins.

```
aliyun plugin update
```

If the plugin is already up-to-date, the CLI indicates that no update is required. To update the plugin to a pre-release version, you can add the `--enable-pre` parameter.

### **Uninstall plugins**

```
aliyun plugin uninstall --name ecs
```

After the operation is complete, you can run `aliyun plugin list` to confirm the result.

## Configure automatic plugin installation

When you run a command for a cloud product, the CLI can automatically install the required plugin if it is not installed. You can enable this feature in non-interactive environments, such as CI/CD pipelines or scripts. You can also enable this feature if you use many different cloud products. This prevents interruptions and repeated manual installations.

### **How to enable**

You can enable this feature by running the following command:

```
aliyun configure set --auto-plugin-install true
```

Or, enable by setting an environment variable (Linux example):

```
# Add the environment variable and apply it
echo 'export ALIBABA_CLOUD_CLI_PLUGIN_AUTO_INSTALL=true' >> ~/.bashrc
source ~/.bashrc
```

After you configure the settings, you can run `aliyun configure get` to verify the configuration.

To enable automatic installation of pre-release versions:

```
aliyun configure set --auto-plugin-install-enable-pre true
```

Or configure the setting using an environment variable. For example, on Linux:

```
# Add the environment variable and apply it
echo 'export ALIBABA_CLOUD_CLI_PLUGIN_AUTO_INSTALL_ENABLE_PRE=true' >> ~/.bashrc
source ~/.bashrc
```

### **Installation strategy**

The command-line interface (CLI) selects policies based on the running environment.

**Scenario**

**Behavior**

Automatic installation enabled

Install the plugin automatically and continue running the command

Interactive terminal and automatic installation disabled

Prompt to confirm installation

Non-interactive environment (script, pipeline)

Show an installation prompt but do not install automatically

The following is a sample output of an automatic installation:

```
# Run without ecs plugin installed
aliyun ecs describe-regions --accept-language zh-CN
# Automatic installation output
Plugin 'aliyun-cli-ecs' is required for command 'ecs describe-regions' but not installed.
Auto-installing plugin 'aliyun-cli-ecs' (including pre-release versions)...
Downloading aliyun-cli-ecs 0.1.0...
Plugin aliyun-cli-ecs 0.1.0 installed successfully!
......
```

Sample output for an interactive installation (automatic installation disabled):

```
# Run without ecs plugin installed
aliyun ecs describe-regions --accept-language zh-CN
# Interactive installation output
Plugin 'aliyun-cli-ecs' is required for command 'ecs describe-regions' but not installed.
Tip: Run 'aliyun configure set --auto-plugin-install true' to skip this prompt.
Do you want to install it? [Y/n]: y
Installing plugin 'aliyun-cli-ecs' (including pre-release versions)...
Downloading aliyun-cli-ecs 0.1.0...
Plugin aliyun-cli-ecs 0.1.0 installed successfully!
......
```

## Appendix

### Plugin command reference

**Command**

**Description**

`aliyun plugin list`

List installed plugins

`aliyun plugin list-remote`

List available remote plugins

`aliyun plugin search <command-name>`

Search for the plugin that contains a command

`aliyun plugin install --names <name> [--version <version>] [--enable-pre]`

Install a plugin

`aliyun plugin update [--name <name>] [--enable-pre]`

Update a plugin

`aliyun plugin uninstall --name <name>`

Uninstall a plugin

### Plugin environment variables

You can use the following environment variables to control the behavior of plugins:

**Environment variable**

**Description**

`ALIBABA_CLOUD_CLI_PLUGINS_DIR`

Custom plugin directory. Default: `~/.aliyun/plugins`

`ALIBABA_CLOUD_CLI_PLUGIN_NO_CACHE`

Set to `true` to disable remote index caching

`ALIBABA_CLOUD_CLI_PLUGIN_AUTO_INSTALL`

Set to `true` to enable automatic installation

`ALIBABA_CLOUD_CLI_PLUGIN_AUTO_INSTALL_ENABLE_PRE`

Set to `true` to allow automatic installation of pre-release versions

`ALIBABA_CLOUD_<PRODUCT_CODE>_API_VERSION`

Set the default API version for a product plugin. Example: `ALIBABA_CLOUD_ESS_API_VERSION=2022-02-22`

`ALIBABA_CLOUD_CLI_MAX_LINE_LENGTH`

Adjust the line length for parameter help text.

## FAQ

#### **Plugin installation shows “no stable version available”**

This message indicates that only pre-release versions are available for the plugin. To install a pre-release version, you can add the `--enable-pre` parameter to the installation command:

```
aliyun plugin install --names <plugin-name> --enable-pre
```
