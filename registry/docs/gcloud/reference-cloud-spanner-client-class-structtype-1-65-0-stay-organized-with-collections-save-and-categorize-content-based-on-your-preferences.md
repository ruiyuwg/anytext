-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner Client - Class StructType (1.65.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner Client class StructType.

Represents a Struct Query Parameter type declaration.

Example:

```
use Google\Cloud\Spanner\StructType;
use Google\Cloud\Spanner\Database;
use Google\Cloud\Spanner\SpannerClient;

$spanner = new SpannerClient();
$database = $spanner->connect('my-instance', 'my-database');

$res = $database->execute('SELECT @userStruct.firstName, @userStruct.lastName', [
    'parameters' => [
        'userStruct' => [
            'firstName' => 'John',
            'lastName' => 'Testuser'
        ]
    ],
    'types' => [
        'userStruct' => (new StructType())
            ->add('firstName', Database::TYPE_STRING)
            ->add('lastName', Database::TYPE_STRING)
    ]
])->rows()->current();

$fullName = $res['firstName'] . ' ' . $res['lastName']; // `John Testuser`
```

## Namespace

Google \\ Cloud \\ Spanner

## Methods

### \_\_construct

Example:

```
use Google\Cloud\Spanner\ArrayType;
use Google\Cloud\Spanner\Database;
use Google\Cloud\Spanner\StructType;

$structType = new StructType([
    [
        'name' => 'stringField',
        'type' => Database::TYPE_STRING
    ],
    [
        'name' => 'arrayField',
        'type' => Database::TYPE_ARRAY,
        'child' => new ArrayType(Database::TYPE_STRING)
    ]
]);
```

**Parameter**

**Name**

**Description**

`fields`

`array[]`  

An array containing a field definition. Each field must be of form `[(string|null) $name, (int) $type, (ArrayType|StructType|null) $child]`.

### add

Add a struct field definition.

Unnamed struct fields may be defined by providing `null` as the first argument value, however you may find it more convenient to use the provided [Google\\Cloud\\Spanner\\StructType::addUnnamed()](/php/docs/reference/cloud-spanner/1.65.0/StructType#_Google_Cloud_Spanner_StructType__addUnnamed__) method.

Example:

```
$structType->add('firstName', Database::TYPE_STRING);
```

```
// If a field is a struct or array, it must be explicitly defined.
use Google\Cloud\Spanner\ArrayType;
use Google\Cloud\Spanner\Database;
use Google\Cloud\Spanner\StructType;

// Create a struct which will be nested later.
$customer = (new StructType)
    ->add('name', Database::TYPE_STRING)
    ->add('phone', Database::TYPE_STRING)
    ->add('email', Database::TYPE_STRING)
    ->add('lastOrderDate', Database::TYPE_DATE);

// Create an array to nest within the customer type definition.
$orderIds = new ArrayType(Database::TYPE_INT64);
$customer->add('orderIds', $orderIds);

// Add the customer definition to the parameter definition.
$structType->add('customer', $customer);
```

**Parameters**

**Name**

**Description**

`name`

`string|null`  

The field name.

`type`

`int|[Google\Cloud\Spanner\ArrayType](/php/docs/reference/cloud-spanner/1.65.0/ArrayType)|[Google\Cloud\Spanner\StructType](/php/docs/reference/cloud-spanner/1.65.0/StructType)`  

$type A value type code or nested struct or array definition. Accepted integer values are defined as constants on [Google\\Cloud\\Spanner\\Database](/php/docs/reference/cloud-spanner/1.65.0/Database), and are as follows: `Database::TYPE_BOOL`, `Database::TYPE_INT64`, `Database::TYPE_FLOAT64`, `Database::TYPE_TIMESTAMP`, `Database::TYPE_DATE`, `Database::TYPE_STRING` and `Database::TYPE_BYTES`

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\StructType](/php/docs/reference/cloud-spanner/1.65.0/StructType)`

The current instance, for chaining additional field definitions.

### addUnnamed

Add a struct field with no name.

Example:

```
$structType->addUnnamed(Database::TYPE_STRING);
```

**Parameter**

**Name**

**Description**

`type`

`int|[Google\Cloud\Spanner\ArrayType](/php/docs/reference/cloud-spanner/1.65.0/ArrayType)|[Google\Cloud\Spanner\StructType](/php/docs/reference/cloud-spanner/1.65.0/StructType)`  

$type A value type code or nested struct or array definition. Accepted integer values are defined as constants on [Google\\Cloud\\Spanner\\Database](/php/docs/reference/cloud-spanner/1.65.0/Database), and are as follows: `Database::TYPE_BOOL`, `Database::TYPE_INT64`, `Database::TYPE_FLOAT64`, `Database::TYPE_TIMESTAMP`, `Database::TYPE_DATE`, `Database::TYPE_STRING` and `Database::TYPE_BYTES`

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\StructType](/php/docs/reference/cloud-spanner/1.65.0/StructType)`

The current instance, for chaining additional field definitions.

### fields

Fetch the defined fields list.

**Returns**

**Type**

**Description**

`array[]`

An array containing a field definition. Each field is of form \`\[(string|null) $name, (int) $type, (ArrayType|StructType|null) $child\]\`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
