-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Vision V1 Client - Class ObjectAnnotation (1.7.6) Stay organized with collections Save and categorize content based on your preferences.

2.2.0 (latest) 2.1.3 2.0.3 1.10.3 1.9.4 1.8.0 1.7.6 1.6.8

Reference documentation and code samples for the Cloud Vision V1 Client class ObjectAnnotation.

Prediction for what the object in the bounding box is.

Generated from protobuf message `google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation`

## Namespace

Google \\ Cloud \\ Vision \\ V1 \\ ProductSearchResults

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ mid`

`string`  

Object ID that should align with EntityAnnotation mid.

`↳ language_code`

`string`  

The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [http://www.unicode.org/reports/tr35/#Unicode\_locale\_identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).

`↳ name`

`string`  

Object name, expressed in its `language_code` language.

`↳ score`

`float`  

Score of the result. Range \[0, 1\].

### getMid

Object ID that should align with EntityAnnotation mid.

**Returns**

**Type**

**Description**

`string`

### setMid

Object ID that should align with EntityAnnotation mid.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLanguageCode

The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [http://www.unicode.org/reports/tr35/#Unicode\_locale\_identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).

**Returns**

**Type**

**Description**

`string`

### setLanguageCode

The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [http://www.unicode.org/reports/tr35/#Unicode\_locale\_identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getName

Object name, expressed in its `language_code` language.

**Returns**

**Type**

**Description**

`string`

### setName

Object name, expressed in its `language_code` language.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getScore

Score of the result. Range \[0, 1\].

**Returns**

**Type**

**Description**

`float`

### setScore

Score of the result. Range \[0, 1\].

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
