-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Chat V1 Client - Class OpenLink (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

0.17.1 (latest) 0.17.0 0.16.1 0.15.0 0.14.0 0.13.1 0.12.1 0.11.2 0.10.0 0.9.0 0.8.1 0.7.2 0.6.1 0.5.0 0.4.0 0.3.0 0.2.0 0.1.4

Reference documentation and code samples for the Google Apps Chat V1 Client class OpenLink.

Represents an `onClick` event that opens a hyperlink.

[Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

Generated from protobuf message `google.apps.card.v1.OpenLink`

## Namespace

Google \\ Apps \\ Card \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ url`

`string`  

The URL to open.

`↳ open_as`

`int`  

How to open a link. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

`↳ on_close`

`int`  

Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

### getUrl

The URL to open.

**Returns**

**Type**

**Description**

`string`

### setUrl

The URL to open.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOpenAs

How to open a link.

[Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

**Returns**

**Type**

**Description**

`int`

### setOpenAs

How to open a link.

[Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getOnClose

Whether the client forgets about a link after opening it, or observes it until the window closes.

[Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

**Returns**

**Type**

**Description**

`int`

### setOnClose

Whether the client forgets about a link after opening it, or observes it until the window closes.

[Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
