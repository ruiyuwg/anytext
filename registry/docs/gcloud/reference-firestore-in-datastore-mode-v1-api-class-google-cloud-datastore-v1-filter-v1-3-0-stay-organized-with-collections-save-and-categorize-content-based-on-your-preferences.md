-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Firestore in Datastore mode V1 API - Class Google::Cloud::Datastore::V1::Filter (v1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-datastore-v1/latest/Google-Cloud-Datastore-V1-Filter)
-   [1.5.0](/ruby/docs/reference/google-cloud-datastore-v1/1.5.0/Google-Cloud-Datastore-V1-Filter)
-   [1.4.1](/ruby/docs/reference/google-cloud-datastore-v1/1.4.1/Google-Cloud-Datastore-V1-Filter)
-   [1.3.1](/ruby/docs/reference/google-cloud-datastore-v1/1.3.1/Google-Cloud-Datastore-V1-Filter)
-   [1.2.0](/ruby/docs/reference/google-cloud-datastore-v1/1.2.0/Google-Cloud-Datastore-V1-Filter)
-   [1.1.0](/ruby/docs/reference/google-cloud-datastore-v1/1.1.0/Google-Cloud-Datastore-V1-Filter)
-   [1.0.1](/ruby/docs/reference/google-cloud-datastore-v1/1.0.1/Google-Cloud-Datastore-V1-Filter)
-   [0.19.0](/ruby/docs/reference/google-cloud-datastore-v1/0.19.0/Google-Cloud-Datastore-V1-Filter)
-   [0.18.0](/ruby/docs/reference/google-cloud-datastore-v1/0.18.0/Google-Cloud-Datastore-V1-Filter)
-   [0.17.0](/ruby/docs/reference/google-cloud-datastore-v1/0.17.0/Google-Cloud-Datastore-V1-Filter)
-   [0.16.3](/ruby/docs/reference/google-cloud-datastore-v1/0.16.3/Google-Cloud-Datastore-V1-Filter)
-   [0.15.0](/ruby/docs/reference/google-cloud-datastore-v1/0.15.0/Google-Cloud-Datastore-V1-Filter)
-   [0.14.0](/ruby/docs/reference/google-cloud-datastore-v1/0.14.0/Google-Cloud-Datastore-V1-Filter)
-   [0.13.1](/ruby/docs/reference/google-cloud-datastore-v1/0.13.1/Google-Cloud-Datastore-V1-Filter)
-   [0.12.0](/ruby/docs/reference/google-cloud-datastore-v1/0.12.0/Google-Cloud-Datastore-V1-Filter)
-   [0.11.1](/ruby/docs/reference/google-cloud-datastore-v1/0.11.1/Google-Cloud-Datastore-V1-Filter)
-   [0.10.0](/ruby/docs/reference/google-cloud-datastore-v1/0.10.0/Google-Cloud-Datastore-V1-Filter)
-   [0.9.0](/ruby/docs/reference/google-cloud-datastore-v1/0.9.0/Google-Cloud-Datastore-V1-Filter)
-   [0.8.0](/ruby/docs/reference/google-cloud-datastore-v1/0.8.0/Google-Cloud-Datastore-V1-Filter)
-   [0.7.0](/ruby/docs/reference/google-cloud-datastore-v1/0.7.0/Google-Cloud-Datastore-V1-Filter)
-   [0.6.0](/ruby/docs/reference/google-cloud-datastore-v1/0.6.0/Google-Cloud-Datastore-V1-Filter)
-   [0.5.0](/ruby/docs/reference/google-cloud-datastore-v1/0.5.0/Google-Cloud-Datastore-V1-Filter)
-   [0.4.0](/ruby/docs/reference/google-cloud-datastore-v1/0.4.0/Google-Cloud-Datastore-V1-Filter)
-   [0.3.5](/ruby/docs/reference/google-cloud-datastore-v1/0.3.5/Google-Cloud-Datastore-V1-Filter)

Reference documentation and code samples for the Firestore in Datastore mode V1 API class Google::Cloud::Datastore::V1::Filter.

A holder for any type of filter.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #composite\_filter

```
def composite_filter() -> ::Google::Cloud::Datastore::V1::CompositeFilter
```

**Returns**

-   ([::Google::Cloud::Datastore::V1::CompositeFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-CompositeFilter)) — A composite filter.
    
    Note: The following fields are mutually exclusive: `composite_filter`, `property_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

### #composite\_filter=

```
def composite_filter=(value) -> ::Google::Cloud::Datastore::V1::CompositeFilter
```

**Parameter**

-   **value** ([::Google::Cloud::Datastore::V1::CompositeFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-CompositeFilter)) — A composite filter.
    
    Note: The following fields are mutually exclusive: `composite_filter`, `property_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

**Returns**

-   ([::Google::Cloud::Datastore::V1::CompositeFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-CompositeFilter)) — A composite filter.
    
    Note: The following fields are mutually exclusive: `composite_filter`, `property_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

### #property\_filter

```
def property_filter() -> ::Google::Cloud::Datastore::V1::PropertyFilter
```

**Returns**

-   ([::Google::Cloud::Datastore::V1::PropertyFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-PropertyFilter)) — A filter on a property.
    
    Note: The following fields are mutually exclusive: `property_filter`, `composite_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

### #property\_filter=

```
def property_filter=(value) -> ::Google::Cloud::Datastore::V1::PropertyFilter
```

**Parameter**

-   **value** ([::Google::Cloud::Datastore::V1::PropertyFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-PropertyFilter)) — A filter on a property.
    
    Note: The following fields are mutually exclusive: `property_filter`, `composite_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

**Returns**

-   ([::Google::Cloud::Datastore::V1::PropertyFilter](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastore-v1/1.3.0/Google-Cloud-Datastore-V1-PropertyFilter)) — A filter on a property.
    
    Note: The following fields are mutually exclusive: `property_filter`, `composite_filter`. If a field in that set is populated, all other fields in the set will automatically be cleared.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
