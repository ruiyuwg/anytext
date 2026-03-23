-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Reference](https://docs.cloud.google.com/appengine/docs/standard/apis)

Send feedback

# google.appengine.api.capabilities.CapabilitySet Stay organized with collections Save and categorize content based on your preferences.

     

 [![](https://www.tensorflow.org/images/GitHub-Mark-32px.png) View source on GitHub](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/api/capabilities/__init__.py#L72-L200)

Encapsulates one or more capabilities.

Inherits From: [`expected_type`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/validation/Validator/expected_type)

```
google.appengine.api.capabilities.CapabilitySet(
    package,
    capabilities=None,
    methods=None,
    stub_map=google.appengine.api.apiproxy_stub_map
)
```

Capabilities can either be named explicitly, or inferred from the list of methods provided. If no capabilities or methods are provided, this will check whether the entire package is enabled.

## Args

`capabilities`

List of strings

`methods`

List of strings

## Methods

### `admin_message`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/api/capabilities/__init__.py#L154-L169)

```
admin_message()
```

Retrieves any administrator notice messages for these capabilities.

Returns

A string containing one or more administrator messages, or an empty string.

Raises

`UnknownCapabilityError`

If a specified capability was not recognized.

### `is_enabled`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/api/capabilities/__init__.py#L97-L110)

```
is_enabled()
```

Tests whether the capabilities are currently enabled.

Returns

`True` if API calls that require these capabilities will succeed.

Raises

`UnknownCapabilityError`

If a specified capability was not recognized.

### `will_remain_enabled_for`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/api/capabilities/__init__.py#L112-L152)

```
will_remain_enabled_for(
    time=60
)
```

Returns whether a capability will remain enabled.

DEPRECATED: Use `is_enabled()` instead. This method was never fully implemented.

Args

`time`

Number of seconds in the future to look when checking for scheduled downtime.

Returns

`True` if there is no scheduled downtime for the specified capability within the amount of time specified.

Raises

`UnknownCapabilityError`

If a specified capability was not recognized.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-16 UTC.
