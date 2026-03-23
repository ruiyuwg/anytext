-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Document Ai V1 Client - Class Barcode (1.1.1) Stay organized with collections Save and categorize content based on your preferences.

2.6.1 (latest) 2.6.0 2.5.1 2.4.1 2.3.0 2.2.2 2.1.3 2.0.0 1.14.0 1.13.1 1.12.2 1.9.0 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.2 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Document Ai V1 Client class Barcode.

Encodes the detailed information of a barcode.

Generated from protobuf message `google.cloud.documentai.v1.Barcode`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ format`

`string`  

Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.

`↳ value_format`

`string`  

Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.

`↳ raw_value`

`string`  

Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.

### getFormat

Format of a barcode.

The supported formats are:

-   `CODE_128`: Code 128 type.
-   `CODE_39`: Code 39 type.
-   `CODE_93`: Code 93 type.
-   `CODABAR`: Codabar type.
-   `DATA_MATRIX`: 2D Data Matrix type.
-   `ITF`: ITF type.
-   `EAN_13`: EAN-13 type.
-   `EAN_8`: EAN-8 type.
-   `QR_CODE`: 2D QR code type.
-   `UPC_A`: UPC-A type.
-   `UPC_E`: UPC-E type.
-   `PDF417`: PDF417 type.
-   `AZTEC`: 2D Aztec code type.
-   `DATABAR`: GS1 DataBar code type.

**Returns**

**Type**

**Description**

`string`

### setFormat

Format of a barcode.

The supported formats are:

-   `CODE_128`: Code 128 type.
-   `CODE_39`: Code 39 type.
-   `CODE_93`: Code 93 type.
-   `CODABAR`: Codabar type.
-   `DATA_MATRIX`: 2D Data Matrix type.
-   `ITF`: ITF type.
-   `EAN_13`: EAN-13 type.
-   `EAN_8`: EAN-8 type.
-   `QR_CODE`: 2D QR code type.
-   `UPC_A`: UPC-A type.
-   `UPC_E`: UPC-E type.
-   `PDF417`: PDF417 type.
-   `AZTEC`: 2D Aztec code type.
-   `DATABAR`: GS1 DataBar code type.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValueFormat

Value format describes the format of the value that a barcode encodes.

The supported formats are:

-   `CONTACT_INFO`: Contact information.
-   `EMAIL`: Email address.
-   `ISBN`: ISBN identifier.
-   `PHONE`: Phone number.
-   `PRODUCT`: Product.
-   `SMS`: SMS message.
-   `TEXT`: Text string.
-   `URL`: URL address.
-   `WIFI`: Wifi information.
-   `GEO`: Geo-localization.
-   `CALENDAR_EVENT`: Calendar event.
-   `DRIVER_LICENSE`: Driver's license.

**Returns**

**Type**

**Description**

`string`

### setValueFormat

Value format describes the format of the value that a barcode encodes.

The supported formats are:

-   `CONTACT_INFO`: Contact information.
-   `EMAIL`: Email address.
-   `ISBN`: ISBN identifier.
-   `PHONE`: Phone number.
-   `PRODUCT`: Product.
-   `SMS`: SMS message.
-   `TEXT`: Text string.
-   `URL`: URL address.
-   `WIFI`: Wifi information.
-   `GEO`: Geo-localization.
-   `CALENDAR_EVENT`: Calendar event.
-   `DRIVER_LICENSE`: Driver's license.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRawValue

Raw value encoded in the barcode.

For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.

**Returns**

**Type**

**Description**

`string`

### setRawValue

Raw value encoded in the barcode.

For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.

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
