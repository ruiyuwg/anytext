-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class ServerConfig (1.18.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class ServerConfig.

Kubernetes Engine service configuration.

Generated from protobuf message `google.container.v1.ServerConfig`

## Namespace

Google \\ Cloud \\ Container \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ default_cluster_version`

`string`  

Version of Kubernetes the service deploys by default.

`↳ valid_node_versions`

`array`  

List of valid node upgrade target versions, in descending order.

`↳ default_image_type`

`string`  

Default image type.

`↳ valid_image_types`

`array`  

List of valid image types.

`↳ valid_master_versions`

`array`  

List of valid master versions, in descending order.

`↳ channels`

`array<[Google\Cloud\Container\V1\ServerConfig\ReleaseChannelConfig](/php/docs/reference/cloud-container/1.18.0/V1.ServerConfig.ReleaseChannelConfig)>`  

List of release channel configurations.

### getDefaultClusterVersion

Version of Kubernetes the service deploys by default.

**Returns**

**Type**

**Description**

`string`

### setDefaultClusterVersion

Version of Kubernetes the service deploys by default.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidNodeVersions

List of valid node upgrade target versions, in descending order.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setValidNodeVersions

List of valid node upgrade target versions, in descending order.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultImageType

Default image type.

**Returns**

**Type**

**Description**

`string`

### setDefaultImageType

Default image type.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidImageTypes

List of valid image types.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setValidImageTypes

List of valid image types.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getValidMasterVersions

List of valid master versions, in descending order.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setValidMasterVersions

List of valid master versions, in descending order.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getChannels

List of release channel configurations.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setChannels

List of release channel configurations.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Container\V1\ServerConfig\ReleaseChannelConfig](/php/docs/reference/cloud-container/1.18.0/V1.ServerConfig.ReleaseChannelConfig)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
