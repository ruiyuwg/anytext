-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Parallelstore V1beta Client - Class GetInstanceRequest (0.8.3) Stay organized with collections Save and categorize content based on your preferences.

0.13.2 (latest) 0.13.1 0.12.1 0.11.3 0.10.0 0.9.0 0.8.3 0.7.1 0.6.1 0.5.0 0.4.0 0.3.1 0.2.0 0.1.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Parallelstore V1beta Client class GetInstanceRequest.

Get an instance's details.

Generated from protobuf message `google.cloud.parallelstore.v1beta.GetInstanceRequest`

## Namespace

Google \\ Cloud \\ Parallelstore \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.

### getName

Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`. Please see ParallelstoreClient::instanceName() for help formatting this field.

**Returns**

**Type**

**Description**

`[GetInstanceRequest](/php/docs/reference/cloud-parallelstore/0.8.3/V1beta.GetInstanceRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
