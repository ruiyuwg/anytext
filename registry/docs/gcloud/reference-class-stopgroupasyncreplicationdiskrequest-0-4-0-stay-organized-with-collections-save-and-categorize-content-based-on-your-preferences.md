-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback

# Class StopGroupAsyncReplicationDiskRequest (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.4.0 (latest)](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.types.StopGroupAsyncReplicationDiskRequest)
-   [0.3.0](/python/docs/reference/google-cloud-compute-v1beta/0.3.0/google.cloud.compute_v1beta.types.StopGroupAsyncReplicationDiskRequest)
-   [0.2.0](/python/docs/reference/google-cloud-compute-v1beta/0.2.0/google.cloud.compute_v1beta.types.StopGroupAsyncReplicationDiskRequest)
-   [0.1.8](/python/docs/reference/google-cloud-compute-v1beta/0.1.8/google.cloud.compute_v1beta.types.StopGroupAsyncReplicationDiskRequest)

```
StopGroupAsyncReplicationDiskRequest(
    mapping=None, *, ignore_unknown_fields=False, **kwargs
)
```

A request message for Disks.StopGroupAsyncReplication. See the method description for details.

.. \_oneof: [https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields](https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields)

## Attributes

**Name**

**Description**

`disks_stop_group_async_replication_resource_resource`

`[google.cloud.compute_v1beta.types.DisksStopGroupAsyncReplicationResource](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.types.DisksStopGroupAsyncReplicationResource)`  
The body resource for this request

`project`

`str`  
Project ID for this request.

`request_id`

`str`  
An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000). This field is a member of `oneof`\_ `_request_id`.

`zone`

`str`  
The name of the zone for this request. This must be the zone of the primary or secondary disks in the consistency group.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
