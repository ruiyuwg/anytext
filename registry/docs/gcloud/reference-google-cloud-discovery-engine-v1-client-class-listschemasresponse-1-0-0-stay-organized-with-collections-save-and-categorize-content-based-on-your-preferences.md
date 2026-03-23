-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Discovery Engine V1 Client - Class ListSchemasResponse (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

1.11.1 (latest) 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.1 1.5.1 1.4.0 1.3.3 1.2.0 1.1.0 1.0.0 0.11.3 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.1

Reference documentation and code samples for the Google Cloud Discovery Engine V1 Client class ListSchemasResponse.

Response message for [SchemaService.ListSchemas](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Client.SchemaServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_SchemaServiceClient__listSchemas__) method.

Generated from protobuf message `google.cloud.discoveryengine.v1.ListSchemasResponse`

## Namespace

Google \\ Cloud \\ DiscoveryEngine \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ schemas`

`array<[Google\Cloud\DiscoveryEngine\V1\Schema](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Schema)>`  

The [Schema](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Schema)s.

`↳ next_page_token`

`string`  

A token that can be sent as [ListSchemasRequest.page\_token](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.ListSchemasRequest#_Google_Cloud_DiscoveryEngine_V1_ListSchemasRequest__getPageToken__) to retrieve the next page. If this field is omitted, there are no subsequent pages.

### getSchemas

The [Schema](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Schema)s.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSchemas

The [Schema](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Schema)s.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\DiscoveryEngine\V1\Schema](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.Schema)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token that can be sent as [ListSchemasRequest.page\_token](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.ListSchemasRequest#_Google_Cloud_DiscoveryEngine_V1_ListSchemasRequest__getPageToken__) to retrieve the next page. If this field is omitted, there are no subsequent pages.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token that can be sent as [ListSchemasRequest.page\_token](/php/docs/reference/cloud-discoveryengine/1.0.0/V1.ListSchemasRequest#_Google_Cloud_DiscoveryEngine_V1_ListSchemasRequest__getPageToken__) to retrieve the next page. If this field is omitted, there are no subsequent pages.

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
