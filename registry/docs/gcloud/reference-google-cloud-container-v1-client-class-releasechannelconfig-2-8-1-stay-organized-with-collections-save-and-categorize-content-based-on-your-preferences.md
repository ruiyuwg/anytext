-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class ReleaseChannelConfig (2.8.1) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class ReleaseChannelConfig.

ReleaseChannelConfig exposes configuration for a release channel.

Generated from protobuf message `google.container.v1.ServerConfig.ReleaseChannelConfig`

## Namespace

Google \\ Cloud \\ Container \\ V1 \\ ServerConfig

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ channel`

`int`  

The release channel this configuration applies to.

`↳ default_version`

`string`  

The default version for newly created clusters on the channel.

`↳ valid_versions`

`string[]`  

List of valid versions for the channel.

`↳ upgrade_target_version`

`string`  

The auto upgrade target version for clusters on the channel.

### getChannel

The release channel this configuration applies to.

**Returns**

**Type**

**Description**

`int`

Enum of type [Channel](/php/docs/reference/cloud-container/latest/V1.ReleaseChannel.Channel).

### setChannel

The release channel this configuration applies to.

**Parameter**

**Name**

**Description**

`var`

`int`  

Enum of type [Channel](/php/docs/reference/cloud-container/latest/V1.ReleaseChannel.Channel).

**Returns**

**Type**

**Description**

`$this`

### getDefaultVersion

The default version for newly created clusters on the channel.

**Returns**

**Type**

**Description**

`string`

### setDefaultVersion

The default version for newly created clusters on the channel.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidVersions

List of valid versions for the channel.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<string>`

### setValidVersions

List of valid versions for the channel.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getUpgradeTargetVersion

The auto upgrade target version for clusters on the channel.

**Returns**

**Type**

**Description**

`string`

### setUpgradeTargetVersion

The auto upgrade target version for clusters on the channel.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
