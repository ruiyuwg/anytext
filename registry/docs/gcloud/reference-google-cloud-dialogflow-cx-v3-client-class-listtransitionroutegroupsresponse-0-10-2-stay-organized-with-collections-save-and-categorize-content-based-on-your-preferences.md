-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class ListTransitionRouteGroupsResponse (0.10.2) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class ListTransitionRouteGroupsResponse.

The response message for [TransitionRouteGroups.ListTransitionRouteGroups](/php/docs/reference/cloud-dialogflow-cx/latest/V3.Client.TransitionRouteGroupsClient#_Google_Cloud_Dialogflow_Cx_V3_Client_TransitionRouteGroupsClient__listTransitionRouteGroups__).

Generated from protobuf message `google.cloud.dialogflow.cx.v3.ListTransitionRouteGroupsResponse`

## Namespace

Google \\ Cloud \\ Dialogflow \\ Cx \\ V3

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ transition_route_groups`

`array<[TransitionRouteGroup](/php/docs/reference/cloud-dialogflow-cx/latest/V3.TransitionRouteGroup)>`  

The list of transition route groups. There will be a maximum number of items returned based on the page\_size field in the request. The list may in some cases be empty or contain fewer entries than page\_size even if this isn't the last page.

`↳ next_page_token`

`string`  

Token to retrieve the next page of results, or empty if there are no more results in the list.

### getTransitionRouteGroups

The list of transition route groups. There will be a maximum number of items returned based on the page\_size field in the request. The list may in some cases be empty or contain fewer entries than page\_size even if this isn't the last page.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[TransitionRouteGroup](/php/docs/reference/cloud-dialogflow-cx/latest/V3.TransitionRouteGroup)>`

### setTransitionRouteGroups

The list of transition route groups. There will be a maximum number of items returned based on the page\_size field in the request. The list may in some cases be empty or contain fewer entries than page\_size even if this isn't the last page.

**Parameter**

**Name**

**Description**

`var`

`array<[TransitionRouteGroup](/php/docs/reference/cloud-dialogflow-cx/latest/V3.TransitionRouteGroup)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

Token to retrieve the next page of results, or empty if there are no more results in the list.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

Token to retrieve the next page of results, or empty if there are no more results in the list.

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
