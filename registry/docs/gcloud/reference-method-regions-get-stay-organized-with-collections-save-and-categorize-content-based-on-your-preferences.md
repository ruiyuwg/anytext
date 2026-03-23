-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [APIs & Reference](https://docs.cloud.google.com/compute/docs/apis)

Send feedback

# Method: regions.get Stay organized with collections Save and categorize content based on your preferences.

 

Returns the specified Region resource.

To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

This method fails if the quota information is unavailable for the region and if the organization policy constraint `[compute.requireBasicQuotaInResponse](/resource-manager/docs/organization-policy/org-policy-constraints)` is enforced. This constraint, when enforced, disables the fail-open behaviour when quota information (the `items.quotas` field) is unavailable for the region. It is recommended to use the default setting for the constraint unless your application requires the fail-closed behaviour for this method.

### HTTP request

`GET https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax. To know more about valid error responses that can be thrown by this HTTP request, please refer to the [service error catalog](/compute/docs/reference/rest/v1/errors)

### Path parameters

 

Parameters

`project`

`string`

Project ID for this request.

`region`

`string`

Name of the region resource to return.

### Request body

The request body must be empty.

### Response body

Represents a Region resource.

A region is a geographical area where a resource is located. For more information, read [Regions and Zones](/compute/docs/regions-zones/global-regional-zonal-resources).

If successful, the response body contains data with the following structure:

JSON representation

{
  "kind": string,
  "id": string,
  "creationTimestamp": string,
  "name": string,
  "description": string,
  "status": enum,
  "zones": \[
    string
  \],
  "quotas": \[
    {
      "metric": enum,
      "limit": number,
      "usage": number,
      "owner": string
    }
  \],
  "deprecated": {
    "state": enum,
    "replacement": string,
    "deprecated": string,
    "obsolete": string,
    "deleted": string
  },
  "selfLink": string,
  "supportsPzs": boolean,
  "quotaStatusWarning": {
    "code": enum,
    "message": string,
    "data": \[
      {
        "key": string,
        "value": string
      }
    \]
  }
}

 

Fields

`kind`

`string`

Output only. Type of the resource. Always `compute#region` for regions.

`id`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique identifier for the resource. This identifier is defined by the server.

`creationTimestamp`

`string`

Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`name`

`string`

Output only. Name of the resource.

`description`

`string`

Output only. Textual description of the resource.

`status`

`enum`

Output only. Status of the region, either `UP` or `DOWN`.

`zones[]`

`string`

Output only. A list of zones available in this region, in the form of resource URLs.

`quotas[]`

`object`

Output only. Quotas assigned to this region.

`quotas[].metric`

`enum`

Output only. Name of the quota metric.

`quotas[].limit`

`number`

Output only. Quota limit for this metric.

`quotas[].usage`

`number`

Output only. Current usage of this metric.

`quotas[].owner`

`string`

Output only. Owning resource. This is the resource on which this quota is applied.

`deprecated`

`object`

Output only. The deprecation status associated with this region.

`deprecated.state`

`enum`

The deprecation state of this resource. This can be `ACTIVE`, `DEPRECATED`, `OBSOLETE`, or `DELETED`. Operations which communicate the end of life date for an image, can use `ACTIVE`. Operations which create a new resource using a `DEPRECATED` resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use `OBSOLETE` or `DELETED` resources will be rejected and result in an error.

`deprecated.replacement`

`string`

The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.

`deprecated.deprecated`

`string`

An optional [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp on or after which the state of this resource is intended to change to `DEPRECATED`. This is only informational and the status will not change unless the client explicitly changes it.

`deprecated.obsolete`

`string`

An optional [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp on or after which the state of this resource is intended to change to `OBSOLETE`. This is only informational and the status will not change unless the client explicitly changes it.

`deprecated.deleted`

`string`

An optional [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp on or after which the state of this resource is intended to change to `DELETED`. This is only informational and the status will not change unless the client explicitly changes it.

`selfLink`

`string`

Output only. Server-defined URL for the resource.

`supportsPzs`

`boolean`

Output only. Reserved for future use.

Available from all

`quotaStatusWarning`

`object`

Output only. Warning of fetching the `quotas` field for this region. This field is populated only if fetching of the `quotas` field fails.

Available from all

`quotaStatusWarning.code`

`enum`

Output only. A warning code, if applicable. For example, Compute Engine returns `NO_RESULTS_ON_PAGE` if there are no results in the response.

`quotaStatusWarning.message`

`string`

Output only. A human-readable description of the warning code.

`quotaStatusWarning.data[]`

`object`

Output only. Metadata about this warning in `key: value` format. For example:

"data": \[  {  "key": "scope",  "value": "zones/us-east1-d"  }

`quotaStatusWarning.data[].key`

`string`

Output only. A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be `scope` and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).

`quotaStatusWarning.data[].value`

`string`

Output only. A warning data value corresponding to the key.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/compute.readonly`
-   `https://www.googleapis.com/auth/compute`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

In addition to any permissions specified on the fields above, authorization requires one or more of the following [IAM](https://cloud.google.com/iam/docs/) permissions:

-   `compute.regions.get`

To find predefined roles that contain those permissions, see [Compute Engine IAM Roles](/compute/docs/access/iam).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
