-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Vmware Engine V1 Client - Class ListPrivateCloudsResponse (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.3.0 (latest) 1.2.2 1.1.4 1.0.0 0.5.6 0.4.0 0.3.3 0.2.1 0.1.4

Reference documentation and code samples for the Google Cloud Vmware Engine V1 Client class ListPrivateCloudsResponse.

Response message for VmwareEngine.ListPrivateClouds

Generated from protobuf message `google.cloud.vmwareengine.v1.ListPrivateCloudsResponse`

## Namespace

Google \\ Cloud \\ VmwareEngine \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ private_clouds`

`array<[Google\Cloud\VmwareEngine\V1\PrivateCloud](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.PrivateCloud)>`  

A list of private clouds.

`↳ next_page_token`

`string`  

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`↳ unreachable`

`array`  

Locations that could not be reached when making an aggregated query using wildcards.

### getPrivateClouds

A list of private clouds.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPrivateClouds

A list of private clouds.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\VmwareEngine\V1\PrivateCloud](/php/docs/reference/cloud-vmware-engine/0.4.0/V1.PrivateCloud)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token, which can be sent as `page_token` to retrieve the next page.

If this field is omitted, there are no subsequent pages.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token, which can be sent as `page_token` to retrieve the next page.

If this field is omitted, there are no subsequent pages.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUnreachable

Locations that could not be reached when making an aggregated query using wildcards.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUnreachable

Locations that could not be reached when making an aggregated query using wildcards.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
