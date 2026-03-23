Manage service versions in Function Compute by using the Serverless Devs FC component CLI. The FC component wraps the Function Compute API to publish, delete, and list service versions from the command line.

## Command summary

**Command**

**API operation**

**Description**

`PublishServiceVersion`

[PublishServiceVersion](/help/en/functioncompute/fc-2-0/developer-reference/api-publishserviceversion)

Create a snapshot of a service as a numbered version.

`DeleteServiceVersion`

[DeleteServiceVersion](/help/en/functioncompute/fc-2-0/developer-reference/api-deleteserviceversion)

Delete a specific service version.

`ListServiceVersions`

[ListServiceVersions](/help/en/functioncompute/fc-2-0/developer-reference/api-listserviceversions)

List all versions of a service.

## Prerequisites

Before you begin, make sure that you have:

-   [Serverless Devs and Docker installed](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker)
    
-   [Serverless Devs configured](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs)
    
-   [A service created](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    

## Common parameters

The following parameters apply to all version-related commands. They are omitted from the individual command parameter tables.

**Parameter**

**Type**

**Required**

**Description**

`--region`

String

Yes

The region where the service is deployed. Example: `cn-hangzhou`.

`--access` or `-a`

String

No

The Serverless Devs access alias for authentication.

`--apiVersion`

String

No

The Function Compute API version. Valid values: `20210416`, `20160815`.

## Base syntax

All version-related commands follow this pattern:

```
sudo s cli fc api <Operation> --region <region-id> [--access <access-alias>] [--apiVersion <api-version>] [operation-specific-parameters]
```

* * *

## PublishServiceVersion

Publish a new version of a service. This creates an immutable snapshot of the current service configuration.

### Synopsis

```
sudo s cli fc api PublishServiceVersion --region <region-id> \
  --path '{"serviceName": "<service-name>"}' \
  --body '{"description": "<description>"}'
```

### Parameters

**Path parameters**

**Parameter**

**Type**

**Required**

**Description**

`serviceName`

String

Yes

The name of the service to publish a version for.

**Body parameters**

**Parameter**

**Type**

**Required**

**Description**

`description`

String

No

The description of the service version.

### Examples

**Publish a version with a description**

```
sudo s cli fc api PublishServiceVersion --region cn-hangzhou --access default \
  --path '{"serviceName": "mytest"}' \
  --body '{"description": "myversion"}'
```

Sample output:

```
{
  "versionId": 1,
  "description": "myversion",
  "createdTime": "2026-02-15T19:44:46Z",
  "lastModifiedTime": "2026-02-15T19:44:46Z"
}
```

> The sample output is for reference only. Actual field values vary based on your service configuration.

For more information about this API operation, see [PublishServiceVersion](/help/en/functioncompute/fc-2-0/developer-reference/api-publishserviceversion#doc-api-FC-PublishServiceVersion).

* * *

## DeleteServiceVersion

Delete a specific version of a service.

### Synopsis

```
sudo s cli fc api DeleteServiceVersion --region <region-id> \
  --path '{"serviceName": "<service-name>", "versionId": "<version-id>"}'
```

### Parameters

**Path parameters**

**Parameter**

**Type**

**Required**

**Description**

`serviceName`

String

Yes

The name of the service.

`versionId`

String

Yes

The ID of the version to delete.

### Examples

**Delete version 1 of a service**

```
sudo s cli fc api DeleteServiceVersion --region cn-hangzhou --access default \
  --path '{"serviceName": "mytest", "versionId": "1"}'
```

This command produces no output on success.

For more information about this API operation, see [DeleteServiceVersion](/help/en/functioncompute/fc-2-0/developer-reference/api-deleteserviceversion#doc-api-FC-DeleteServiceVersion).

* * *

## ListServiceVersions

List all published versions of a service. Results are paginated.

### Synopsis

```
sudo s cli fc api ListServiceVersions --region <region-id> \
  --path '{"serviceName": "<service-name>"}' \
  --query '{"limit": "<count>", "nextToken": "<token>", "startKey": "<start-key>", "direction": "<FORWARD|BACKWARD>"}'
```

### Parameters

**Path parameters**

**Parameter**

**Type**

**Required**

**Description**

`serviceName`

String

Yes

The name of the service.

**Query parameters**

**Parameter**

**Type**

**Required**

**Description**

`limit`

String

No

The maximum number of versions to return per request.

`nextToken`

String

No

A pagination token from a previous response. Include this token to retrieve the next page. Omit for the first request.

`startKey`

String

No

Return results in alphabetical order starting from this key (inclusive).

`direction`

String

No

The sort order of the returned versions. Valid values: `FORWARD` (ascending), `BACKWARD` (descending). Default: `BACKWARD`.

### Examples

**List the first 10 versions in ascending order**

```
sudo s cli fc api ListServiceVersions --region cn-hangzhou --access default \
  --path '{"serviceName": "mytest"}' \
  --query '{"limit": "10", "direction": "FORWARD"}'
```

Sample output:

```
{
  "versions": [
    {
      "versionId": 1,
      "description": "initial version",
      "createdTime": "2026-02-15T19:44:46Z",
      "lastModifiedTime": "2026-02-15T19:44:46Z"
    },
    {
      "versionId": 2,
      "description": "updated config",
      "createdTime": "2026-02-15T19:50:15Z",
      "lastModifiedTime": "2026-02-15T19:50:15Z"
    }
  ],
  "nextToken": null,
  "direction": "FORWARD"
}
```

> The sample output is for reference only. Actual field values vary based on your service configuration. If the response includes a non-null `nextToken` value, pass it in the next request to retrieve more results.

**List all versions with default settings**

```
sudo s cli fc api ListServiceVersions --region cn-hangzhou --access default \
  --path '{"serviceName": "mytest"}'
```

For more information about this API operation, see [ListServiceVersions](/help/en/functioncompute/fc-2-0/developer-reference/api-listserviceversions#doc-api-FC-ListServiceVersions).
