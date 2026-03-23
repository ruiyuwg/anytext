-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback

# Module pagers (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.4.0 (latest)](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.services.region_health_checks.pagers)
-   [0.3.0](/python/docs/reference/google-cloud-compute-v1beta/0.3.0/google.cloud.compute_v1beta.services.region_health_checks.pagers)
-   [0.2.0](/python/docs/reference/google-cloud-compute-v1beta/0.2.0/google.cloud.compute_v1beta.services.region_health_checks.pagers)
-   [0.1.8](/python/docs/reference/google-cloud-compute-v1beta/0.1.8/google.cloud.compute_v1beta.services.region_health_checks.pagers)

API documentation for `compute_v1beta.services.region_health_checks.pagers` module.

## Classes

### [ListPager](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.services.region_health_checks.pagers.ListPager)

```
ListPager(
    method: typing.Callable[
        [...], google.cloud.compute_v1beta.types.compute.HealthCheckList
    ],
    request: google.cloud.compute_v1beta.types.compute.ListRegionHealthChecksRequest,
    response: google.cloud.compute_v1beta.types.compute.HealthCheckList,
    *,
    retry: typing.Optional[
        typing.Union[
            google.api_core.retry.retry_unary.Retry,
            google.api_core.gapic_v1.method._MethodDefault,
        ]
    ] = _MethodDefault._DEFAULT_VALUE,
    timeout: typing.Union[float, object] = _MethodDefault._DEFAULT_VALUE,
    metadata: typing.Sequence[typing.Tuple[str, typing.Union[str, bytes]]] = ()
)
```

A pager for iterating through `list` requests.

This class thinly wraps an initial [HealthCheckList](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.types.HealthCheckList) object, and provides an `__iter__` method to iterate through its `items` field.

If there are more pages, the `__iter__` method will make additional `List` requests and continue to iterate through the `items` field on the corresponding responses.

All the usual [HealthCheckList](/python/docs/reference/google-cloud-compute-v1beta/latest/google.cloud.compute_v1beta.types.HealthCheckList) attributes are available on the pager. If multiple requests are made, only the most recent response is retained, and thus used for attribute lookup.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
