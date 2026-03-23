-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Chat V1 Client - Class Column (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

0.17.1 (latest) 0.17.0 0.16.1 0.15.0 0.14.0 0.13.1 0.12.1 0.11.2 0.10.0 0.9.0 0.8.1 0.7.2 0.6.1 0.5.0 0.4.0 0.3.0 0.2.0 0.1.4

Reference documentation and code samples for the Google Apps Chat V1 Client class Column.

A column.

[Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in Developer Preview.

Generated from protobuf message `google.apps.card.v1.Columns.Column`

## Namespace

Google \\ Apps \\ Card \\ V1 \\ Columns

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ horizontal_size_style`

`int`  

Specifies how a column fills the width of the card.

`↳ horizontal_alignment`

`int`  

Specifies whether widgets align to the left, right, or center of a column.

`↳ vertical_alignment`

`int`  

Specifies whether widgets align to the top, bottom, or center of a column.

`↳ widgets`

`array<[Google\Apps\Card\V1\Columns\Column\Widgets](/php/docs/reference/apps-chat/0.4.0/Card.V1.Columns.Column.Widgets)>`  

An array of widgets included in a column. Widgets appear in the order that they are specified.

### getHorizontalSizeStyle

Specifies how a column fills the width of the card.

**Returns**

**Type**

**Description**

`int`

### setHorizontalSizeStyle

Specifies how a column fills the width of the card.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getHorizontalAlignment

Specifies whether widgets align to the left, right, or center of a column.

**Returns**

**Type**

**Description**

`int`

### setHorizontalAlignment

Specifies whether widgets align to the left, right, or center of a column.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getVerticalAlignment

Specifies whether widgets align to the top, bottom, or center of a column.

**Returns**

**Type**

**Description**

`int`

### setVerticalAlignment

Specifies whether widgets align to the top, bottom, or center of a column.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getWidgets

An array of widgets included in a column. Widgets appear in the order that they are specified.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setWidgets

An array of widgets included in a column. Widgets appear in the order that they are specified.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Apps\Card\V1\Columns\Column\Widgets](/php/docs/reference/apps-chat/0.4.0/Card.V1.Columns.Column.Widgets)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
