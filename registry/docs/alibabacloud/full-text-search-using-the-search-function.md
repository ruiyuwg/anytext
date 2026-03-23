The `search()` function performs full-text search on log data within SQL analytic statements. This topic covers syntax, usage examples, limits, best practices, and FAQ.

## Prerequisites

-   A Standard LogStore is created. For more information, see [Manage a LogStore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   Log data has been collected. For more information, see [Data ingestion overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   An [index](/help/en/sls/create-indexes#task-jqz-v55-cfb) is created and scan mode is disabled.
    

## Examples

### Combine with SQL predicates

Combine the `search()` function with standard SQL predicates by using the AND operator for more precise filtering.

```
-- search + comparison operator
* | SELECT * FROM log
  WHERE search('status: 200') AND request_time > 100

-- search + IN clause
* | SELECT * FROM log
  WHERE search('request_method: GET') AND status IN (200, 301, 302)

-- search + LIKE
* | SELECT * FROM log
  WHERE search('status: 200') AND http_user_agent LIKE '%Chrome%'

-- search + BETWEEN
* | SELECT * FROM log
  WHERE search('request_method: POST') AND request_time BETWEEN 100 AND 500

-- search + complex condition combination (OR cannot include search)
* | SELECT * FROM log
  WHERE search('request_method: GET')
    AND (status = 200 OR status = 302)
    AND request_time > 50
```

-   Only the AND operator can connect the `search()` function with other SQL predicates.
    
-   The `search()` function cannot appear at any level of an OR expression. For example, `search('error') OR status = 500` is **not allowed**.
    
-   The OR operator is allowed for other SQL predicate conditions that do not include the `search()` function. For example, `search('error') AND (status = 500 OR status = 502)` is allowed.
    

### Multi-table JOIN scenarios

The `search()` function supports multi-LogStore JOIN scenarios. Each subquery in the JOIN independently applies its own `search()` filter condition without interference.

**Note**

Each subquery can contain only one `search()` function. A multi-table JOIN can contain multiple `search()` functions because each `search()` function belongs to a different subquery.

#### Sample data

The following examples use an orders table (orders LogStore) and a users table (users LogStore).

**Schema of the orders table (orders LogStore):**

**Field name**

**Field type**

**Description**

order\_id

long

Order ID

user\_id

long

User ID, associated with the users table

status

text

Order status, such as completed, pending, or cancelled

amount

double

Order amount

order\_type

text

Order type, such as normal or vip

**Schema of the users table (users LogStore):**

**Field name**

**Field type**

**Description**

user\_id

long

User ID, primary key

username

text

Username

region

text

The region where the user is located, such as hangzhou, shanghai, or beijing

email

text

User's email

age

long

User's age

#### INNER JOIN

Query completed orders (status = completed) with matching users in the hangzhou region.

```
* | SELECT o.order_id, o.status, o.amount, u.username, u.region
    FROM (
        SELECT * FROM orders.log
        WHERE search('status: completed')
    ) o
    JOIN (
        SELECT * FROM users.log
        WHERE search('region: hangzhou')
    ) u
    ON o.user_id = u.user_id
    ORDER BY o.order_id
```

#### LEFT JOIN

Return all completed orders and match only users in the shanghai region. Orders without a matching user show null for user-related fields.

```
* | SELECT o.order_id, o.status, u.username, u.region
    FROM (
        SELECT * FROM orders.log
        WHERE search('status: completed')
    ) o
    LEFT JOIN (
        SELECT * FROM users.log
        WHERE search('region: shanghai')
    ) u
    ON o.user_id = u.user_id
    ORDER BY o.order_id
```

#### Self-join

In a self-join on the same LogStore, apply different query conditions to subqueries with different aliases.

The following example uses an employees table (employees LogStore) with this schema:

**Field name**

**Field type**

**Description**

employee\_id

long

Employee ID

employee\_name

text

Employee name

department

text

Department, such as engineering or finance

level

text

Level, such as junior or senior

manager\_id

long

The employee\_id of the manager

Query employees in the engineering department along with their senior-level managers:

```
* | SELECT e.employee_name AS employee, e.department,
           m.employee_name AS manager, m.level AS manager_level
    FROM (
        SELECT * FROM employees.log
        WHERE search('department: engineering')
    ) e
    JOIN (
        SELECT * FROM employees.log
        WHERE search('level: senior')
    ) m
    ON e.manager_id = m.employee_id
    ORDER BY e.employee_name
```

## Limits

**Limit**

**Description**

Single instance limit

Each subquery (the underlying SELECT statement) can contain only one `search()` function. To apply multiple query conditions, merge them into a single `search()` call. For example, use `search('error AND timeout')`.

OR operator limit

The `search()` function cannot be combined with the OR operator at the SQL level. The OR operator is supported inside the search function. For example, `search('error OR warning')` is allowed.

Scan mode limit

The search function is not supported in scan mode.

Query syntax input conflict

The `search()` function is not supported when the query syntax input contains actual filter conditions. The function is allowed only when the query syntax input is empty or is `*`.

Parameter type

The parameter of the search function must be a string literal. Dynamic values such as column references, variables, or function expressions are not supported.

### **Combination usage limits**

**Scenario**

**Supported**

**Example**

Single search function

Supported

`WHERE search('error AND timeout')`

search + AND + SQL condition

Supported

`WHERE search('error') AND status = 500`

search + AND + (c1 OR c2)

Supported

`WHERE search('error') AND (status = 500 OR status = 502)`

OR operator used inside search

Supported

`WHERE search('error OR warning')`

search in each subquery of a multi-table JOIN

Supported

Each subquery operates independently, without affecting other subqueries.

Multiple search functions in the same subquery

Not supported

Not supported`WHERE search('error') AND search('timeout')`

Instead, use `WHERE search('error AND timeout')`.

search + OR + SQL condition

Not supported

Not supported`WHERE search('error') OR status = 500`

## Best practices

-   **Merge query conditions**: Merge all full-text search conditions into a single `search()` call. Do not use multiple `search()` functions in the same subquery.
    
-   **Use field-specific queries**: Use the `field: value` format instead of a general full-text search to improve query precision and performance.
    
-   **Use numeric types**: For fields of the long or double type, use range queries (`field in [min max]`) instead of text matching.
    
-   **Use subfield paths for JSON fields**: For JSON-type fields, specify a precise subfield path such as `content.status` to avoid fuzzy matching at the parent field level.
    
-   **Combine SQL predicates effectively**: The search function is ideal for full-text search and index pushdown filtering. SQL predicates are suitable for precise numeric comparisons and conditional checks. Combine them with the AND operator to balance performance and flexibility.
    

## FAQ

### **Error:** `**key (xxx) is not config as key value config**`

The queried field does not have a field index. Check the index configuration and confirm that a field index is created for the field.

### **Error:** `**Multiple search() functions in a single query are not supported**`

Multiple search functions are used in the same subquery. Merge the query conditions into a single search call. For example, change `search('error') AND search('timeout')` to `search('error AND timeout')`.

### **Error:** `**The search() function cannot be combined with OR operator**`

The `search()` function is connected to other conditions with the OR operator. Move the OR logic inside the search function. For example, change `search('error') OR status = 500` to `search('error OR status: 500')`.

### **Error:** `**The search() function is not supported in scan mode**`

The current mode is scan mode, which does not support the `search()` function. Switch to index mode to use this function.
