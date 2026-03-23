-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# REST Resource: projects.locations.instances.logProcessingPipelines Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: LogProcessingPipeline

LogProcessingPipeline is a configuration that describes how to process logs from a stream.

JSON representation

{
  "name": string,
  "displayName": string,
  "description": string,
  "processors": \[
    {
      object (`[Processor](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#Processor)`)
    }
  \],
  "streams": \[
    {
      object (`[Stream](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#Stream)`)
    }
  \],
  "customMetadata": \[
    {
      object (`[CustomMetadata](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#CustomMetadata)`)
    }
  \],
  "createTime": string,
  "updateTime": string,
  "etag": string
}

Fields

`name`

`string`

Identifier. The resource name of the LogProcessingPipeline. Format: projects/{project}/locations/{location}/instances/{instance}/logProcessingPipelines/{logProcessingPipeline}

`displayName`

`string`

Optional. The display name of the LogProcessingPipeline.

`description`

`string`

Optional. The description of the LogProcessingPipeline.

`processors[]`

``object (`[Processor](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#Processor)`)``

Required. An ordered list of processors that make up this pipeline. Logs flow through these ordered list of processors sequentially.

`streams[]`

``object (`[Stream](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#Stream)`)``

Output only. The streams, if any, that are associated with this LogProcessingPipeline.

`customMetadata[]`

``object (`[CustomMetadata](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#CustomMetadata)`)``

Optional. Custom metadata for the LogProcessingPipeline. This field is used to provide additional information about the LogProcessingPipeline that is not covered by the standard fields.

`createTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. The timestamp when this pipeline was created.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`updateTime`

``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. The timestamp when this pipeline was last updated.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`etag`

`string`

Output only. Checksum computed by the server based on the value of other fields (AIP-154). Output only in Get/List and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

## Processor

Processor is a configuration that describes how to process logs from a stream.

JSON representation

{

  // Union field `processor_config` can be only one of the following:
  "filterProcessor": {
    object (`[FilterProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#FilterProcessorConfig)`)
  },
  "transformProcessor": {
    object (`[TransformProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#TransformProcessorConfig)`)
  },
  "redactProcessor": {
    object (`[RedactProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#RedactProcessorConfig)`)
  }
  // End of list of possible types for union field `processor_config`.
}

Fields

Union field `processor_config`. Required. The specific configuration for this processor. The type determines the action performed by the processor. `processor_config` can be only one of the following:

`filterProcessor`

``object (`[FilterProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#FilterProcessorConfig)`)``

Configuration for the Filter processor.

`transformProcessor`

``object (`[TransformProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#TransformProcessorConfig)`)``

Configuration for the Transform processor.

`redactProcessor`

``object (`[RedactProcessorConfig](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#RedactProcessorConfig)`)``

Configuration for the Redact processor.

## FilterProcessorConfig

Configuration for the Filter processor which uses boolean expressions to decide whether to keep or drop log records.

JSON representation

{
  "include": {
    object (`[LogMatchProperties](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchProperties)`)
  },
  "exclude": {
    object (`[LogMatchProperties](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchProperties)`)
  },
  "logConditions": \[
    string
  \],
  "errorMode": enum (`[ErrorMode](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#ErrorMode)`)
}

Fields

`include`

``object (`[LogMatchProperties](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchProperties)`)``

Optional. Include match properties describe logs that should be included in the Collector Service pipeline, all other logs should be dropped from further processing. If both Include and Exclude are specified, Include filtering occurs first.

`exclude`

``object (`[LogMatchProperties](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchProperties)`)``

Optional. Exclude match properties describe logs that should be excluded from the Collector Service pipeline, all other logs should be included. If both Include and Exclude are specified, Include filtering occurs first.

`logConditions[]`

`string`

Optional. LogConditions is a list of OTTL conditions for an ottllog context. Logconditions are only applied to logs which have passed through the include and exclude filters. If any condition resolves to true, the log event will be dropped. Supports `and`, `or`, and `()`

`errorMode`

``enum (`[ErrorMode](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#ErrorMode)`)``

Optional. Determines how the processor treats errors that occur while processing a log condition. By default PROPAGATE will be used.

## LogMatchProperties

LogMatchProperties describes the properties of a log that should be matched.

JSON representation

{
  "logMatchType": enum (`[LogMatchType](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchType)`),
  "logBodies": \[
    string
  \]
}

Fields

`logMatchType`

``enum (`[LogMatchType](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#LogMatchType)`)``

Required. LogMatchType specifies the type of matching desired

`logBodies[]`

`string`

Optional. LogBodies is a list of strings that the log must match against

## LogMatchType

LogMatchType specifies the type of matching desired. It can be either strict string matching or regexp matching.

Enums

`LOG_MATCH_TYPE_UNSPECIFIED`

Unspecified log match type. Default value, should not be used.

`STRICT`

Strict string matching.

`REGEXP`

Regexp match.

## ErrorMode

Determines how the processor treats errors that occur while processing.

Enums

`ERROR_MODE_UNSPECIFIED`

Unspecified error mode. Default value, should not be used.

`PROPAGATE`

The processor returns the error up the pipeline. This will result in the payload being dropped from the collector.

`IGNORE`

The processor ignores errors returned by statements, logs the error, and continues on to the next statement.

## TransformProcessorConfig

Configuration for the Transform processor

JSON representation

{
  "conditions": \[
    string
  \],
  "statements": \[
    string
  \],
  "errorMode": enum (`[ErrorMode](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#ErrorMode)`)
}

Fields

`conditions[]`

`string`

Optional. A list comprised of multiple where clauses, which will be processed as global conditions for the accompanying set of statements. The conditions are ORed together, which means only one condition needs to evaluate to true in order for the statements (including their individual Where clauses) to be executed.

`statements[]`

`string`

Optional. A list of OTTL statements.

`errorMode`

``enum (`[ErrorMode](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#ErrorMode)`)``

Optional. Determines how the processor treats errors that occur while processing a statement. By default PROPAGATE will be used.

## RedactProcessorConfig

Configuration for the Redact processor, which redacts sensitive data from log records based on a list of regular expressions. AllowedValues and BlockedValues are regular expressions that are used to match against the log record. If a value matches an AllowedValue, it is not masked. If a value matches a BlockedValue, it is masked. If a value matches both an AllowedValue and a BlockedValue, the AllowedValue takes precedence and the value is not masked.

JSON representation

{
  "allowedValues": \[
    string
  \],
  "blockedValues": \[
    string
  \],
  "allowAllKeys": boolean,
  "allowedKeys": \[
    string
  \],
  "blockedKeyPatterns": \[
    string
  \],
  "hashFunction": enum (`[HashFunction](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#HashFunction)`),
  "ignoredKeys": \[
    string
  \],
  "redactAllTypes": boolean
}

Fields

`allowedValues[]`

`string`

Optional. AllowedValues is a list of regular expressions for allowing values. Values that match are not masked.

`blockedValues[]`

`string`

Optional. BlockedValues is a list of regular expressions for blocking values. Values that match are masked. NOTE: AllowedValues precedes the BlockedValues;

`allowAllKeys`

`boolean`

Optional. AllowAllKeys is a flag to allow all attribute keys. Setting this to true disables the AllowedKeys list. The list of BlockedValues is applied regardless. If you just want to block values, set this to true.

`allowedKeys[]`

`string`

Optional. AllowedKeys is a list of allowed attribute keys. Attributes not on the list are removed. The list fails closed if it's empty. To allow all keys, you should explicitly set allowAllKeys to true.

`blockedKeyPatterns[]`

`string`

Optional. BlockedKeyPatterns is a list of blocked attribute key patterns. Attributes matching the regexes on the list are masked.

`hashFunction`

``enum (`[HashFunction](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines#HashFunction)`)``

`ignoredKeys[]`

`string`

Optional. IgnoredKeys is a list of attribute keys that are not redacted. Attributes in this list are allowed to pass through the filter without being changed or removed.

`redactAllTypes`

`boolean`

Optional. Redact all types of attributes, including those that are not strings, by converting to a string representation. By default only string values are redacted.

## HashFunction

HashFunction specifies the hash function to use for redaction.

Enums

`HASH_FUNCTION_UNSPECIFIED`

Unspecified hash function.

`SHA1`

SHA1 hash function.

`MD5`

MD5 hash function.

`SHA3`

SHA3 hash function.

`HASH_FUNCTION_NONE`

No hash function.

## Stream

Stream represents a stream for a log processing pipeline. A stream is defined by one of the following combinations of fields: - `feed` - `logType` - `logType` and `collectorId`

JSON representation

{
  "logType": string,
  "feed": string,
  "collectorId": string
}

Fields

`logType`

`string`

Optional. The LogType of the stream.

`feed`

`string`

Optional. The FeedID of the stream.

`collectorId`

`string`

Optional. The ID of the collector. Can be specified along with logType.

## CustomMetadata

Custom metadata for the LogProcessingPipeline.

JSON representation

{
  "key": string,
  "value": string
}

Fields

`key`

`string`

Required. The key of the metadata or label such as URL to edit the pipeline

`value`

`string`

Required. The actual value associated with the key or label

## Methods

### `[associateStreams](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/associateStreams)`

Maps a set of streams to a log processing pipeline.

### `[create](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/create)`

Create a new LogProcessingPipeline

### `[delete](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/delete)`

Deletes a LogProcessingPipeline configuration.

### `[dissociateStreams](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/dissociateStreams)`

Unmaps a set of streams from a log processing pipeline.

### `[fetchAssociatedPipeline](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/fetchAssociatedPipeline)`

Fetch LogProcessingPipeline, if any, is associated with a given stream.

### `[fetchSampleLogsByStreams](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/fetchSampleLogsByStreams)`

FetchSampleLogsByStreams previews sample unprocessed logs for a given log processing pipeline.

### `[get](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/get)`

Get details of a specific LogProcessingPipeline.

### `[list](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/list)`

Lists LogProcessingPipeline configurations in a given project, location and SecOps instance.

### `[patch](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/patch)`

Updates an existing LogProcessingPipeline configuration.

### `[testPipeline](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.logProcessingPipelines/testPipeline)`

TestPipeline previews processed logs for a given log processing pipeline for a given input sample logs.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-11-13 UTC.
