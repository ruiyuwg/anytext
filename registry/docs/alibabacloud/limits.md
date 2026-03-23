EventBridge is subject to the following quotas and constraints. To prevent program exceptions, do not exceed these limits when you use EventBridge.

**Note**

**Note:** The limits on the number of event buses, event rules, and event streams apply per region.

## Event buses

**Item**

**Limit**

Default event buses per region

1

Custom event buses per region

50

Event rules per event bus

50

Throughput on the default event bus

10,000 events per second

Throughput on a custom event bus

3,000 events per second per bus

### Event bus naming rules

-   Maximum length: 127 characters.
    
-   Must start with a letter or digit. Can contain letters, digits, and hyphens (`-`).
    
-   The keyword `default` is reserved and cannot be used as an event bus name.
    
-   Names cannot start with `eventbridge-reserved-`.
    

## Event rules

**Item**

**Limit**

Event targets per event rule

5

Expressions per field in `stringExpression` mode

5 (map structure)

### Event target constraints

-   Event targets must be in the same region as EventBridge.
    
-   Event targets must be service instances owned by your Alibaba Cloud account.
    
-   Each event target ID must be unique.
    

### Event rule naming rules

-   Maximum length: 127 characters.
    
-   Must start with a letter or digit. Can contain letters, digits, and hyphens (`-`).
    
-   Names cannot start with `eventbridge-reserved-`.
    

### Event content transform

**Item**

**Limit**

Template size

10,240 characters

Value size

10,240 characters

## Events

### Event message size

**Item**

**Limit**

Single event message

256 KB

Messages per batch

16

Total batch size

1 MB

### Event field constraints

**Field**

**Maximum length**

**Format**

`id`

128 characters

Must start with a letter or digit. Can contain letters, digits, and hyphens (`-`).

`source`

128 characters

\--

`subject`

512 characters

\--

`type`

64 characters

\--

## Schemas

**Item**

**Limit**

Schema versions

1,000

### Schema naming rules

-   Maximum length: 128 characters. Names that exceed this limit are automatically truncated.
    
-   Can contain letters, digits, hyphens (`-`), underscores (`_`), and periods (`.`).
    

## Event streams

**Item**

**Limit**

Event streams per region

50\. You can request a quota increase in the range of \[51, 10000\] in [Quota Center](https://quotas.console.alibabacloud.com/products/eventbridge/quotas). For details, see [Submit an application to increase a quota](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota).

Expressions per field in `stringExpression` mode

5 (map structure)

### Event stream content transform

**Item**

**Limit**

Template size

10,240 characters

Value size

10,240 characters

### Event stream naming rules

-   Maximum length: 127 characters. Names that exceed this limit are automatically truncated.
    
-   Must start with a letter or digit. Can contain letters, digits, and hyphens (`-`).
    

## Event sources

### Event source naming rules

-   Maximum length: 127 characters. Names that exceed this limit are automatically truncated.
    
-   Can contain letters, digits, hyphens (`-`), and periods (`.`).
    

## Event store

### Data catalogs

**Item**

**Limit**

Data catalogs per region

50

Namespaces per data catalog

50

Query concurrency per data catalog (shared edition)

5 concurrent queries

-   Data catalog names must be unique within the same region.
    
-   Namespace names must be unique within the same data catalog.
    

### Naming rules for event store resources

The following naming rules apply to data catalogs, namespaces, and event tables:

-   Maximum length: 127 characters.
    
-   Must start with a letter or digit. Can contain letters, digits, and hyphens (`-`).
    

## Luma

**Item**

**Limit**

Agents per region

50

Query concurrency per region

5 concurrent queries. You can request an increase in [Quota Center](https://quotas.console.alibabacloud.com/products/eventbridge/quotas).

-   Agent names must be unique within the same region.
