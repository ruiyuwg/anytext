-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [API & Referensi](https://docs.cloud.google.com/compute/docs/apis)

Send feedback

# REST Resource: zoneOperations Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: Operation

Represents an Operation resource.

Google Compute Engine has three Operation resources:

-   [Global](/compute/docs/reference/rest/v1/globalOperations)
-   [Regional](/compute/docs/reference/rest/v1/regionOperations)
-   [Zonal](/compute/docs/reference/rest/v1/zoneOperations)

You can use an operation resource to manage asynchronous API requests. For more information, read [Handling API responses](/compute/docs/api/how-tos/api-requests-responses#handling_api_responses).

Operations can be global, regional or zonal.

-   For global operations, use the `globalOperations` resource.
-   For regional operations, use the `regionOperations` resource.
-   For zonal operations, use the `zoneOperations` resource.

For more information, read [Global, Regional, and Zonal Resources](/compute/docs/regions-zones/global-regional-zonal-resources).

Note that completed Operation resources have a limited [retention period.](https://cloud.google.com/compute/docs/instances/viewing-compute-operations#operation-retention-period)

JSON representation

{
  "kind": string,
  "id": string,
  "creationTimestamp": string,
  "name": string,
  "zone": string,
  "clientOperationId": string,
  "operationType": string,
  "targetLink": string,
  "targetId": string,
  "status": enum,
  "statusMessage": string,
  "user": string,
  "progress": integer,
  "insertTime": string,
  "startTime": string,
  "endTime": string,
  "error": {
    "errors": \[
      {
        "code": string,
        "location": string,
        "message": string,
        "errorDetails": \[
          {
            "errorInfo": {
              "reason": string,
              "domain": string,
              "metadatas": {
                string: string,
                ...
              }
            },
            "quotaInfo": {
              "metricName": string,
              "limitName": string,
              "dimensions": {
                string: string,
                ...
              },
              "limit": number,
              "futureLimit": number,
              "rolloutStatus": enum
            },
            "help": {
              "links": \[
                {
                  "description": string,
                  "url": string
                }
              \]
            },
            "localizedMessage": {
              "locale": string,
              "message": string
            }
          }
        \]
      }
    \]
  },
  "warnings": \[
    {
      "code": enum,
      "message": string,
      "data": \[
        {
          "key": string,
          "value": string
        }
      \]
    }
  \],
  "httpErrorStatusCode": integer,
  "httpErrorMessage": string,
  "selfLink": string,
  "region": string,
  "description": string,
  "operationGroupId": string,

  // Union field `metadata` can be only one of the following:
  "setCommonInstanceMetadataOperationMetadata": {
    "clientOperationId": string,
    "perLocationOperations": {
      string: {
        "state": enum,
        "error": {
          "code": integer,
          "message": string,
          "details": \[
            {
              "@type": string,
              field1: ...,
              ...
            }
          \]
        }
      },
      ...
    }
  },
  "instancesBulkInsertOperationMetadata": {
    "perLocationStatus": {
      string: {
        "status": enum,
        "targetVmCount": integer,
        "createdVmCount": integer,
        "failedToCreateVmCount": integer,
        "deletedVmCount": integer
      },
      ...
    }
  },
  "getVersionOperationMetadata": {
    "inlineSbomInfo": {
      "currentComponentVersions": {
        string: string,
        ...
      },
      "targetComponentVersions": {
        string: string,
        ...
      }
    }
  }
  // End of list of possible types for union field `metadata`.
}

 

Fields

`kind`

`string`

Output only. Type of the resource. Always `compute#operation` for Operation resources.

`id`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique identifier for the operation. This identifier is defined by the server.

`creationTimestamp`

`string`

\[Deprecated\] This field is deprecated.

`name`

`string`

Output only. Name of the operation.

`zone`

`string`

Output only. The URL of the zone where the operation resides. Only applicable when performing per-zone operations.

`clientOperationId`

`string`

Output only. The value of `requestId` if you provided it in the request. Not present otherwise.

`operationType`

`string`

Output only. The type of operation, such as `insert`, `update`, or `delete`, and so on.

`targetLink`

`string`

Output only. The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the disk that the snapshot was created from.

`targetId`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique target ID, which identifies a specific incarnation of the target resource.

`status`

`enum`

Output only. The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.

`statusMessage`

`string`

Output only. An optional textual description of the current status of the operation.

`user`

`string`

Output only. User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`.

`progress`

`integer`

Output only. An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.

`insertTime`

`string`

Output only. The time that this operation was requested. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`startTime`

`string`

Output only. The time that this operation was started by the server. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`endTime`

`string`

Output only. The time that this operation was completed. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`error`

`object`

Output only. If errors are generated during processing of the operation, this field will be populated.

`error.errors[]`

`object`

Output only. The array of errors encountered while processing this operation.

`error.errors[].code`

`string`

Output only. The error type identifier for this error.

`error.errors[].location`

`string`

Output only. Indicates the field in the request that caused the error. This property is optional.

`error.errors[].message`

`string`

Output only. An optional, human-readable error message.

`error.errors[].errorDetails[]`

`object`

Output only. An optional list of messages that contain the error details. There is a set of defined message types to use for providing details.The syntax depends on the error code. For example, QuotaExceededInfo will have details when the error code is QUOTA\_EXCEEDED.

`error.errors[].errorDetails[].errorInfo`

`object`

`error.errors[].errorDetails[].errorInfo.reason`

`string`

The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `[A-Z][A-Z0-9_]+[A-Z0-9]`, which represents UPPER\_SNAKE\_CASE.

`error.errors[].errorDetails[].errorInfo.domain`

`string`

The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com".

`error.errors[].errorDetails[].errorInfo.metadatas`

`map (key: string, value: string)`

Additional structured details about this error.

Keys must match a regular expression of `[a-z][a-zA-Z0-9-_]+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request.

`error.errors[].errorDetails[].quotaInfo`

`object`

`error.errors[].errorDetails[].quotaInfo.metricName`

`string`

The Compute Engine quota metric name.

`error.errors[].errorDetails[].quotaInfo.limitName`

`string`

The name of the quota limit.

`error.errors[].errorDetails[].quotaInfo.dimensions`

`map (key: string, value: string)`

The map holding related quota dimensions.

`error.errors[].errorDetails[].quotaInfo.limit`

`number`

Current effective quota limit. The limit's unit depends on the quota type or metric.

`error.errors[].errorDetails[].quotaInfo.futureLimit`

`number`

Future quota limit being rolled out. The limit's unit depends on the quota type or metric.

`error.errors[].errorDetails[].quotaInfo.rolloutStatus`

`enum`

Rollout status of the future quota limit.

`error.errors[].errorDetails[].help`

`object`

`error.errors[].errorDetails[].help.links[]`

`object`

URL(s) pointing to additional information on handling the current error.

`error.errors[].errorDetails[].help.links[].description`

`string`

Describes what the link offers.

`error.errors[].errorDetails[].help.links[].url`

`string`

The URL of the link.

`error.errors[].errorDetails[].localizedMessage`

`object`

`error.errors[].errorDetails[].localizedMessage.locale`

`string`

The locale used following the specification defined at [https://www.rfc-editor.org/rfc/bcp/bcp47.txt](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Examples are: "en-US", "fr-CH", "es-MX"

`error.errors[].errorDetails[].localizedMessage.message`

`string`

The localized error message in the above locale.

`warnings[]`

`object`

Output only. If warning messages are generated during processing of the operation, this field will be populated.

`warnings[].code`

`enum`

Output only. A warning code, if applicable. For example, Compute Engine returns `NO_RESULTS_ON_PAGE` if there are no results in the response.

`warnings[].message`

`string`

Output only. A human-readable description of the warning code.

`warnings[].data[]`

`object`

Output only. Metadata about this warning in `key: value` format. For example:

"data": \[  {  "key": "scope",  "value": "zones/us-east1-d"  }

`warnings[].data[].key`

`string`

Output only. A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be `scope` and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).

`warnings[].data[].value`

`string`

Output only. A warning data value corresponding to the key.

`httpErrorStatusCode`

`integer`

Output only. If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.

`httpErrorMessage`

`string`

Output only. If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.

`selfLink`

`string`

Output only. Server-defined URL for the resource.

`region`

`string`

Output only. The URL of the region where the operation resides. Only applicable when performing regional operations.

`description`

`string`

Output only. A textual description of the operation, which is set when the operation is created.

`operationGroupId`

`string`

Output only. An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.

Union field `metadata`. Output only. Service-specific metadata attached to this operation. `metadata` can be only one of the following:

`setCommonInstanceMetadataOperationMetadata`

`object`

Output only. If the operation is for projects.setCommonInstanceMetadata, this field will contain information on all underlying zonal actions and their state.

`setCommonInstanceMetadataOperationMetadata.clientOperationId`

`string`

Output only. The client operation id.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[]`

`map (key: string, value: object)`

Output only. Status information per location (location name is key). Example key: zones/us-central1-a

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].state`

`enum`

Output only. Status of the action, which can be one of the following: `PROPAGATING`, `PROPAGATED`, `ABANDONED`, `FAILED`, or `DONE`.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error`

`object`

Output only. If state is `ABANDONED` or `FAILED`, this field is populated.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.code`

`integer`

The status code, which should be an enum value of `google.rpc.Code`.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.message`

`string`

A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the `google.rpc.Status.details` field, or localized by the client.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.details[]`

`object`

A list of messages that carry the error details. There is a common set of message types for APIs to use.

An object containing fields of an arbitrary type. An additional field `"@type"` contains a URI identifying the type. Example: `{ "id": 1234, "@type": "types.example.com/standard/id" }`.

`instancesBulkInsertOperationMetadata`

`object`

`instancesBulkInsertOperationMetadata.perLocationStatus[]`

`map (key: string, value: object)`

Status information per location (location name is key). Example key: zones/us-central1-a

`instancesBulkInsertOperationMetadata.perLocationStatus[].status`

`enum`

Output only. Creation status of BulkInsert operation - information if the flow is rolling forward or rolling back.

`instancesBulkInsertOperationMetadata.perLocationStatus[].targetVmCount`

`integer`

Output only. Count of VMs originally planned to be created.

`instancesBulkInsertOperationMetadata.perLocationStatus[].createdVmCount`

`integer`

Output only. Count of VMs successfully created so far.

`instancesBulkInsertOperationMetadata.perLocationStatus[].failedToCreateVmCount`

`integer`

Output only. Count of VMs that started creating but encountered an error.

`instancesBulkInsertOperationMetadata.perLocationStatus[].deletedVmCount`

`integer`

Output only. Count of VMs that got deleted during rollback.

`getVersionOperationMetadata`

`object`

`getVersionOperationMetadata.inlineSbomInfo`

`object`

`getVersionOperationMetadata.inlineSbomInfo.currentComponentVersions`

`map (key: string, value: string)`

SBOM versions currently applied to the resource. The key is the component name and the value is the version.

`getVersionOperationMetadata.inlineSbomInfo.targetComponentVersions`

`map (key: string, value: string)`

SBOM versions scheduled for the next maintenance. The key is the component name and the value is the version.

 

## Methods

### `[delete](/compute/docs/reference/rest/v1/zoneOperations/delete)`

Deletes the specified zone-specific Operations resource.

### `[get](/compute/docs/reference/rest/v1/zoneOperations/get)`

Retrieves the specified zone-specific Operations resource.

### `[list](/compute/docs/reference/rest/v1/zoneOperations/list)`

Retrieves a list of Operation resources contained within the specified zone.

### `[wait](/compute/docs/reference/rest/v1/zoneOperations/wait)`

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
