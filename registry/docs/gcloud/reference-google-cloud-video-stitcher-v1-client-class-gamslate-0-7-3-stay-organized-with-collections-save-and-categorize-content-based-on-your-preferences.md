-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Video Stitcher V1 Client - Class GamSlate (0.7.3) Stay organized with collections Save and categorize content based on your preferences.

1.2.0 (latest) 1.1.2 1.0.4 0.9.1 0.8.4 0.7.3 0.6.2 0.5.1 0.3.4

Reference documentation and code samples for the Google Cloud Video Stitcher V1 Client class GamSlate.

GamSlate object has Google Ad Manager (GAM) related properties for the slate.

Generated from protobuf message `google.cloud.video.stitcher.v1.Slate.GamSlate`

## Namespace

Google \\ Cloud \\ Video \\ Stitcher \\ V1 \\ Slate

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ network_code`

`string`  

Required. Ad Manager network code to associate with the live config.

`↳ gam_slate_id`

`int|string`  

Output only. The identifier generated for the slate by GAM.

### getNetworkCode

Required. Ad Manager network code to associate with the live config.

**Returns**

**Type**

**Description**

`string`

### setNetworkCode

Required. Ad Manager network code to associate with the live config.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getGamSlateId

Output only. The identifier generated for the slate by GAM.

**Returns**

**Type**

**Description**

`int|string`

### setGamSlateId

Output only. The identifier generated for the slate by GAM.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
