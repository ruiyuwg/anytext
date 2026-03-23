-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Network Connectivity V1 Client - Class UpdateSpokeRequest (2.5.3) Stay organized with collections Save and categorize content based on your preferences.

2.5.3 (latest) 2.5.2 2.4.0 2.3.0 2.2.2 2.1.2 2.0.2 1.5.5 1.4.2 1.3.0 1.2.0 1.1.1 1.0.5

Reference documentation and code samples for the Google Cloud Network Connectivity V1 Client class UpdateSpokeRequest.

Request for [HubService.UpdateSpoke](/php/docs/reference/cloud-network-connectivity/latest/V1.Client.HubServiceClient#_Google_Cloud_NetworkConnectivity_V1_Client_HubServiceClient__updateSpoke__) method.

Generated from protobuf message `google.cloud.networkconnectivity.v1.UpdateSpokeRequest`

## Namespace

Google \\ Cloud \\ NetworkConnectivity \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update\_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.

`↳ spoke`

`[Spoke](/php/docs/reference/cloud-network-connectivity/latest/V1.Spoke)`  

Required. The state that the spoke should be in after the update.

`↳ request_id`

`string`  

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### getUpdateMask

Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update\_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update\_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getSpoke

Required. The state that the spoke should be in after the update.

**Returns**

**Type**

**Description**

`[Spoke](/php/docs/reference/cloud-network-connectivity/latest/V1.Spoke)|null`

### hasSpoke

### clearSpoke

### setSpoke

Required. The state that the spoke should be in after the update.

**Parameter**

**Name**

**Description**

`var`

`[Spoke](/php/docs/reference/cloud-network-connectivity/latest/V1.Spoke)`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

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

**Parameters**

**Name**

**Description**

`spoke`

`[Spoke](/php/docs/reference/cloud-network-connectivity/latest/V1.Spoke)`  

Required. The state that the spoke should be in after the update.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update\_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.

**Returns**

**Type**

**Description**

`[UpdateSpokeRequest](/php/docs/reference/cloud-network-connectivity/latest/V1.UpdateSpokeRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
