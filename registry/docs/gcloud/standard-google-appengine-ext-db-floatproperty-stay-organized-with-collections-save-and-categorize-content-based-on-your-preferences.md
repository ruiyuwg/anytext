-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Referencia](https://docs.cloud.google.com/appengine/docs/standard/apis)

Send feedback

# google.appengine.ext.db.FloatProperty Stay organized with collections Save and categorize content based on your preferences.

            

 [![](https://www.tensorflow.org/images/GitHub-Mark-32px.png) View source on GitHub](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L3298-L3325)

A float property.

Inherits From: [`Property`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/ext/db/Property), [`expected_type`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/validation/Validator/expected_type)

```
google.appengine.ext.db.FloatProperty(
    verbose_name=None,
    name=None,
    default=None,
    required=False,
    validator=None,
    choices=None,
    indexed=True
)
```

## Args

`verbose_name`

User friendly name of property.

`name`

Storage name for property. By default, uses attribute name as it is assigned in the `Model` sub-class.

`default`

Default value for property if none is assigned.

`required`

Whether property is required.

`validator`

User provided method used for validation.

`choices`

User provided set of valid property values.

`indexed`

Whether property is indexed.

## Child Classes

[`class data_type`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/ext/db/FloatProperty/data_type)

## Methods

### `datastore_type`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L772-L775)

```
datastore_type()
```

Deprecated backwards-compatible accessor method for `self.data_type`.

### `default_value`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L628-L634)

```
default_value()
```

Default value for unassigned values.

Returns

Default value as provided by `__init__(default)`.

### `empty`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L3317-L3325)

```
empty(
    value
)
```

Is `float` property empty.

`0.0` is not an empty value.

Returns

`True` if value is `None`, else `False`.

### `get_updated_value_for_datastore`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L699-L714)

```
get_updated_value_for_datastore(
    model_instance
)
```

Determine new value for auto-updated property.

Some properies (e.g. `DateTimeProperty`, `UserProperty`) optionally update their value on every `put()`. This call must return the new desired value for such properties. For all other properties, this call must return `AUTO_UPDATE_UNCHANGED`.

Args

`model_instance`

Instance to get new value for.

Returns

Datastore representation of the new model value in a form that is appropriate for storing in the datastore, or `AUTO_UPDATE_UNCHANGED`.

### `get_value_for_datastore`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L678-L697)

```
get_value_for_datastore(
    model_instance
)
```

Datastore representation of this property.

Looks for this property in the given model instance, and returns the proper datastore representation of the value that can be stored in a datastore entity. Most critically, it will fetch the datastore key value for reference properties.

Some properies (e.g. `DateTimeProperty`, `UserProperty`) optionally update their value on every `put()`. This call must return the current value for such properties (`get_updated_value_for_datastore` returns the new value).

Args

`model_instance`

Instance to fetch datastore value from.

Returns

Datastore representation of the model value in a form that is appropriate for storing in the datastore.

### `make_value_from_datastore`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L720-L740)

```
make_value_from_datastore(
    value
)
```

Native representation of this property.

Given a value retrieved from a datastore entity, return a value, possibly converted, to be stored on the model instance. Usually this returns the value unchanged, but a property class may override this when it uses a different datatype on the model instance than on the entity.

This API is not quite symmetric with `get_value_for_datastore()`, because the model instance on which to store the converted value may not exist yet -- we may be collecting values to be passed to a model constructor.

Args

`value`

Value retrieved from the datastore entity.

Returns

The value converted for use as a model instance attribute.

### `make_value_from_datastore_index_value`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L716-L718)

```
make_value_from_datastore_index_value(
    index_value
)
```

### `validate`

[View source](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/ext/db/__init__.py#L3301-L3313)

```
validate(
    value
)
```

Validate `float`.

Returns

A valid value.

Raises

`BadValueError` if property is not instance of 'float'.

## Class Variables

creation\_counter

`2`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-16 UTC.
