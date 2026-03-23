-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Channel Services](https://docs.cloud.google.com/channel/docs)
-   [APIs & Reference](https://docs.cloud.google.com/channel/docs/reference/libraries)

Send feedback

# Method: accounts.channelPartnerLinks.channelPartnerRepricingConfigs.delete Stay organized with collections Save and categorize content based on your preferences.

 

Deletes the given `[ChannelPartnerRepricingConfig](/channel/docs/reference/rest/v1alpha1/accounts.channelPartnerLinks.channelPartnerRepricingConfigs#ChannelPartnerRepricingConfig)` permanently. You can only delete configs if their `[RepricingConfig.effective_invoice_month](/channel/docs/reference/rest/v1alpha1/RepricingConfig#FIELDS.effective_invoice_month)` is set to a date after the current month.

Possible error codes:

-   PERMISSION\_DENIED: The account making the request does not own this customer.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   FAILED\_PRECONDITION: The `[ChannelPartnerRepricingConfig](/channel/docs/reference/rest/v1alpha1/accounts.channelPartnerLinks.channelPartnerRepricingConfigs#ChannelPartnerRepricingConfig)` is active or in the past.
-   NOT\_FOUND: No `[ChannelPartnerRepricingConfig](/channel/docs/reference/rest/v1alpha1/accounts.channelPartnerLinks.channelPartnerRepricingConfigs#ChannelPartnerRepricingConfig)` found for the name in the request.

### HTTP request

`DELETE https://cloudchannel.googleapis.com/v1alpha1/{name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The resource name of the channel partner repricing config rule to delete.

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-19 UTC.
