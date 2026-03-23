-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dms V1 Client - Class ListPrivateConnectionsResponse (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.6 1.5.5 1.4.2 1.3.0 1.2.1 1.1.0 1.0.5

Reference documentation and code samples for the Google Cloud Dms V1 Client class ListPrivateConnectionsResponse.

Response message for 'ListPrivateConnections' request.

Generated from protobuf message `google.cloud.clouddms.v1.ListPrivateConnectionsResponse`

## Namespace

Google \\ Cloud \\ CloudDms \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ private_connections`

`array<[Google\Cloud\CloudDms\V1\PrivateConnection](/php/docs/reference/cloud-dms/1.3.0/V1.PrivateConnection)>`  

List of private connections.

`↳ next_page_token`

`string`  

A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`↳ unreachable`

`array`  

Locations that could not be reached.

### getPrivateConnections

List of private connections.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPrivateConnections

List of private connections.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\CloudDms\V1\PrivateConnection](/php/docs/reference/cloud-dms/1.3.0/V1.PrivateConnection)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token which can be sent as `page_token` to retrieve the next page.

If this field is omitted, there are no subsequent pages.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token which can be sent as `page_token` to retrieve the next page.

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

Locations that could not be reached.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUnreachable

Locations that could not be reached.

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
