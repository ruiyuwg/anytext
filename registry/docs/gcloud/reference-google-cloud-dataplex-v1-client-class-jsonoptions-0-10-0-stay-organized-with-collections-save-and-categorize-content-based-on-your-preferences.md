-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class JsonOptions (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class JsonOptions.

Describe JSON data format.

Generated from protobuf message `google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1 \\ Zone \\ DiscoverySpec

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ encoding`

`string`  

Optional. The character encoding of the data. The default is UTF-8.

`↳ disable_type_inference`

`bool`  

Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

### getEncoding

Optional. The character encoding of the data. The default is UTF-8.

**Returns**

**Type**

**Description**

`string`

### setEncoding

Optional. The character encoding of the data. The default is UTF-8.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisableTypeInference

Optional. Whether to disable the inference of data type for Json data.

If true, all columns will be registered as their primitive types (strings, number or boolean).

**Returns**

**Type**

**Description**

`bool`

### setDisableTypeInference

Optional. Whether to disable the inference of data type for Json data.

If true, all columns will be registered as their primitive types (strings, number or boolean).

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
