-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Datalabeling V1beta1 Client - Class GetExampleRequest (0.5.7) Stay organized with collections Save and categorize content based on your preferences.

0.7.2 (latest) 0.7.1 0.6.3 0.5.7 0.4.2 0.3.1 0.2.0 0.1.14

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Datalabeling V1beta1 Client class GetExampleRequest.

Request message for GetExample

Generated from protobuf message `google.cloud.datalabeling.v1beta1.GetExampleRequest`

## Namespace

Google \\ Cloud \\ DataLabeling \\ V1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. Name of example, format: projects/{project\_id}/datasets/{dataset\_id}/annotatedDatasets/ {annotated\_dataset\_id}/examples/{example\_id}

`↳ filter`

`string`  

Optional. An expression for filtering Examples. Filter by annotation\_spec.display\_name is supported. Format "annotation\_spec.display\_name = {display\_name}"

### getName

Required. Name of example, format: projects/{project\_id}/datasets/{dataset\_id}/annotatedDatasets/ {annotated\_dataset\_id}/examples/{example\_id}

**Returns**

**Type**

**Description**

`string`

### setName

Required. Name of example, format: projects/{project\_id}/datasets/{dataset\_id}/annotatedDatasets/ {annotated\_dataset\_id}/examples/{example\_id}

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

Optional. An expression for filtering Examples. Filter by annotation\_spec.display\_name is supported. Format "annotation\_spec.display\_name = {display\_name}"

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. An expression for filtering Examples. Filter by annotation\_spec.display\_name is supported. Format "annotation\_spec.display\_name = {display\_name}"

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

`name`

`string`  

Required. Name of example, format: projects/{project\_id}/datasets/{dataset\_id}/annotatedDatasets/ {annotated\_dataset\_id}/examples/{example\_id} Please see [DataLabelingServiceClient::exampleName()](/php/docs/reference/cloud-datalabeling/0.5.7/V1beta1.DataLabelingServiceClient#_Google_Cloud_DataLabeling_V1beta1_DataLabelingServiceClient__exampleName__) for help formatting this field.

`filter`

`string`  

Optional. An expression for filtering Examples. Filter by annotation\_spec.display\_name is supported. Format "annotation\_spec.display\_name = {display\_name}"

**Returns**

**Type**

**Description**

`[GetExampleRequest](/php/docs/reference/cloud-datalabeling/0.5.7/V1beta1.GetExampleRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
