-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Integration Connectors](https://docs.cloud.google.com/integration-connectors/docs)
-   [Reference](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)

Send feedback

# ConfigVariableTemplate Stay organized with collections Save and categorize content based on your preferences.

 

ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.

JSON representation

{
  "key": string,
  "valueType": enum (`[ValueType](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#ValueType)`),
  "displayName": string,
  "description": string,
  "validationRegex": string,
  "required": boolean,
  "roleGrant": {
    object (`[RoleGrant](/integration-connectors/docs/reference/rest/v1/RoleGrant)`)
  },
  "enumOptions": \[
    {
      object (`[EnumOption](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#EnumOption)`)
    }
  \],
  "authorizationCodeLink": {
    object (`[AuthorizationCodeLink](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#AuthorizationCodeLink)`)
  },
  "state": enum (`[State](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#State)`),
  "isAdvanced": boolean,
  "requiredCondition": {
    object (`[LogicalExpression](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LogicalExpression)`)
  },
  "locationType": enum (`[LocationType](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LocationType)`),
  "enumSource": enum (`[EnumSource](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#EnumSource)`),
  "multipleSelectConfig": {
    object (`[MultipleSelectConfig](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#MultipleSelectConfig)`)
  }
}

 

Fields

`key`

`string`

Optional. Key of the config variable.

`valueType`

``enum (`[ValueType](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#ValueType)`)``

Optional. Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation.

`displayName`

`string`

Optional. Display name of the parameter.

`description`

`string`

Optional. Description.

`validationRegex`

`string`

Optional. Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`.

`required`

`boolean`

Optional. Flag represents that this `ConfigVariable` must be provided for a connection.

`roleGrant`

``object (`[RoleGrant](/integration-connectors/docs/reference/rest/v1/RoleGrant)`)``

Optional. Role grant configuration for the config variable.

`enumOptions[]`

``object (`[EnumOption](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#EnumOption)`)``

Optional. Enum options. To be populated if `ValueType` is `ENUM`

`authorizationCodeLink`

``object (`[AuthorizationCodeLink](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#AuthorizationCodeLink)`)``

Optional. Authorization code link options. To be populated if `ValueType` is `AUTHORIZATION_CODE`

`state`

``enum (`[State](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#State)`)``

Output only. State of the config variable.

`isAdvanced`

`boolean`

Optional. Indicates if current template is part of advanced settings

`requiredCondition`

``object (`[LogicalExpression](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LogicalExpression)`)``

Optional. Condition under which a field would be required. The condition can be represented in the form of a logical expression.

`locationType`

``enum (`[LocationType](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LocationType)`)``

Optional. Location Tyep denotes where this value should be sent in BYOC connections.

`enumSource`

``enum (`[EnumSource](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#EnumSource)`)``

Optional. enum source denotes the source of api to fill the enum options

`multipleSelectConfig`

``object (`[MultipleSelectConfig](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#MultipleSelectConfig)`)``

Optional. MultipleSelectConfig represents the multiple options for a config variable.

## ValueType

ValueType indicates the data type of the value.

 

Enums

`VALUE_TYPE_UNSPECIFIED`

Value type is not specified.

`STRING`

Value type is string.

`INT`

Value type is integer.

`BOOL`

Value type is boolean.

`SECRET`

Value type is secret.

`ENUM`

Value type is enum.

`AUTHORIZATION_CODE`

Value type is authorization code.

`ENCRYPTION_KEY`

Encryption Key.

`MULTIPLE_SELECT`

Value type is multiple select.

## EnumOption

EnumOption definition

JSON representation

{
  "id": string,
  "displayName": string
}

 

Fields

`id`

`string`

Optional. Id of the option.

`displayName`

`string`

Optional. Display name of the option.

## AuthorizationCodeLink

This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.

JSON representation

{
  "uri": string,
  "scopes": \[
    string
  \],
  "clientId": string,
  "clientSecret": {
    object (`[Secret](/integration-connectors/docs/reference/rest/v1/Secret)`)
  },
  "enablePkce": boolean,
  "omitQueryParams": boolean
}

 

Fields

`uri`

`string`

Optional. The base URI the user must click to trigger the authorization code login flow.

`scopes[]`

`string`

Optional. The scopes for which the user will authorize Google Cloud Connectors on the connector data source.

`clientId`

`string`

Optional. The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source.

`clientSecret`

``object (`[Secret](/integration-connectors/docs/reference/rest/v1/Secret)`)``

Optional. The client secret assigned to the Google Cloud Connectors OAuth app for the connector data source.

`enablePkce`

`boolean`

Optional. Whether to enable PKCE for the auth code flow.

`omitQueryParams`

`boolean`

Optional. Omit query params from the redirect URI.

## State

Indicates the state of the config variable.

 

Enums

`STATE_UNSPECIFIED`

Status is unspecified.

`ACTIVE`

Config variable is active

`DEPRECATED`

Config variable is deprecated.

## LogicalExpression

Struct for representing boolean expressions.

JSON representation

{
  "fieldComparisons": \[
    {
      object (`[FieldComparison](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#FieldComparison)`)
    }
  \],
  "logicalExpressions": \[
    {
      object (`[LogicalExpression](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LogicalExpression)`)
    }
  \],
  "logicalOperator": enum (`[Operator](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#Operator)`)
}

 

Fields

`fieldComparisons[]`

``object (`[FieldComparison](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#FieldComparison)`)``

Optional. A list of fields to be compared.

`logicalExpressions[]`

``object (`[LogicalExpression](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#LogicalExpression)`)``

Optional. A list of nested conditions to be compared.

`logicalOperator`

``enum (`[Operator](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#Operator)`)``

Optional. The logical operator to use between the fields and conditions.

## FieldComparison

Field that needs to be compared.

JSON representation

{
  "key": string,
  "comparator": enum (`[Comparator](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#Comparator)`),

  // Union field `value` can be only one of the following:
  "stringValue": string,
  "boolValue": boolean,
  "intValue": string
  // End of list of possible types for union field `value`.
}

 

Fields

`key`

`string`

Optional. Key of the field.

`comparator`

``enum (`[Comparator](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#Comparator)`)``

Optional. Comparator to use for comparing the field value.

Union field `value`. Value to compare against. `value` can be only one of the following:

`stringValue`

`string`

String value

`boolValue`

`boolean`

Boolean value

`intValue`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Integer value

## Comparator

Representation of the different comparators that can be used.

 

Enums

`COMPARATOR_UNSPECIFIED`

The default value.

`EQUALS`

The field value must be equal to the specified value.

`NOT_EQUALS`

The field value must not be equal to the specified value.

## Operator

Representation of the different logical operators that can be used.

 

Enums

`OPERATOR_UNSPECIFIED`

The default value.

`AND`

AND operator; The conditions must all be true.

`OR`

OR operator; At least one of the conditions must be true.

## LocationType

Location Type are the options where this value should be sent in BYOC connections.

 

Enums

`LOCATION_TYPE_UNSPECIFIED`

Location type unspecified.

`HEADER`

Request header.

`PAYLOAD`

Request Payload.

`QUERY_PARAM`

Request query param.

`PATH_PARAM`

Request path param.

## EnumSource

Api source used to fill the enum options

 

Enums

`ENUM_SOURCE_UNSPECIFIED`

Api type unspecified.

`EVENT_TYPES_API`

list event types.

## MultipleSelectConfig

MultipleSelectConfig represents the multiple options for a config variable.

JSON representation

{
  "valueSeparator": string,
  "multipleSelectOptions": \[
    {
      object (`[MultipleSelectOption](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#MultipleSelectOption)`)
    }
  \],
  "allowCustomValues": boolean
}

 

Fields

`valueSeparator`

`string`

Required. Value separator. Only "," can be used for OAuth auth code flow scope field.

`multipleSelectOptions[]`

``object (`[MultipleSelectOption](/integration-connectors/docs/reference/rest/v1/ConfigVariableTemplate#MultipleSelectOption)`)``

Required. Multiple select options.

`allowCustomValues`

`boolean`

Optional. Allow custom values.

## MultipleSelectOption

MultiplSelecteOption represents the single option for a config variable.

JSON representation

{
  "description": string,
  "displayName": string,
  "key": string,
  "preselected": boolean
}

 

Fields

`description`

`string`

Optional. Value of the option.

`displayName`

`string`

Required. Display name of the option.

`key`

`string`

Required. Key of the option.

`preselected`

`boolean`

Optional. Indicates if the option is preselected.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
