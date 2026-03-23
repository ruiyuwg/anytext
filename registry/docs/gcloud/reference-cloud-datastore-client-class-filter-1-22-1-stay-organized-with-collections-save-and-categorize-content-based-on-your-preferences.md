-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Datastore Client - Class Filter (1.22.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.5 (latest) 2.0.4 1.34.2 1.33.1 1.32.3 1.31.0 1.30.0 1.29.2 1.28.2 1.26.0 1.25.0 1.24.4 1.23.0 1.22.1 1.21.2 1.19.0 1.18.1 1.17.1

Reference documentation and code samples for the Cloud Datastore Client class Filter.

Represents an interface to create composite and property filters for Google\\Cloud\\Datastore\\Query\\Query via static methods.

Each method returns an array representation of respective filter which is consumed by other filters or Query object.

Example:

```
$filter = Filter::where('CompanyName', '=', 'Google');
$query = $datastore->query();
$query->kind('Companies');
$query->filter($filter);
$results = $datastore->runQuery($query);
$finalResult = [];
foreach ($results as $result) {
    $finalResult[] = $result['companyName'];
}
```

Composite filters can be created by using other composite/property filters.

```
// Or filter
$filterType = 'or';
$filterOr = Filter::or([$filter, ...$filters]);
$query = $datastore->query();
$query->kind('Companies');
$query->filter($filter);
$results = $datastore->runQuery($query);
$finalResult = [];
foreach ($results as $result) {
    $finalResult[] = $result['companyName'];
}
```

Similaryly, `AND` filter can be created using `Filter::and` method.

## Namespace

Google \\ Cloud \\ Datastore \\ Query

## Methods

### static::where

Creates a property filter in array format.

**Parameters**

**Name**

**Description**

`property`

`string`  

Property name

`operator`

`string`  

Operator, one of ('=', '<', '<=', '>', '>=', '!=', 'IN', 'NOT IN')

`value`

`mixed`  

Value for operation on property

**Returns**

**Type**

**Description**

`array`

Returns array representation of a property filter.

### static::and

Creates an AND composite filter in array format.

**Parameter**

**Name**

**Description**

`filters`

`array`  

An array of filters(array representations) to AND upon.

**Returns**

**Type**

**Description**

`array`

Returns array representation of AND composite filter.

### static::or

Creates a OR composite filter in array format.

**Parameter**

**Name**

**Description**

`filters`

`array`  

An array of filters(array representations) to OR upon.

**Returns**

**Type**

**Description**

`array`

Returns array representation of OR composite filter.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
