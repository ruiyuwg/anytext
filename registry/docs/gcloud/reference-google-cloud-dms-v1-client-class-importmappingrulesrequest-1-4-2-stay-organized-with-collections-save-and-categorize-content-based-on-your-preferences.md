-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dms V1 Client - Class ImportMappingRulesRequest (1.4.2) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.6 1.5.5 1.4.2 1.3.0 1.2.1 1.1.0 1.0.5

Reference documentation and code samples for the Google Cloud Dms V1 Client class ImportMappingRulesRequest.

Request message for 'ImportMappingRules' request.

Generated from protobuf message `google.cloud.clouddms.v1.ImportMappingRulesRequest`

## Namespace

Google \\ Cloud \\ CloudDms \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion\_workspace}.

`↳ rules_format`

`int`  

Required. The format of the rules content file.

`↳ rules_files`

`array<[Google\Cloud\CloudDms\V1\ImportMappingRulesRequest\RulesFile](/php/docs/reference/cloud-dms/1.4.2/V1.ImportMappingRulesRequest.RulesFile)>`  

Required. One or more rules files.

`↳ auto_commit`

`bool`  

Required. Should the conversion workspace be committed automatically after the import operation.

### getParent

Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion\_workspace}.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion\_workspace}.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRulesFormat

Required. The format of the rules content file.

**Returns**

**Type**

**Description**

`int`

### setRulesFormat

Required. The format of the rules content file.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getRulesFiles

Required. One or more rules files.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setRulesFiles

Required. One or more rules files.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\CloudDms\V1\ImportMappingRulesRequest\RulesFile](/php/docs/reference/cloud-dms/1.4.2/V1.ImportMappingRulesRequest.RulesFile)>`  

**Returns**

**Type**

**Description**

`$this`

### getAutoCommit

Required. Should the conversion workspace be committed automatically after the import operation.

**Returns**

**Type**

**Description**

`bool`

### setAutoCommit

Required. Should the conversion workspace be committed automatically after the import operation.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
