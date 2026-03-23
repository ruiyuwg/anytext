PyODPS provides methods to execute MaxCompute SQL statements and read results from Python.

**Method**

**Purpose**

`execute_sql()`

Execute SQL synchronously (blocks until complete)

`run_sql()`

Execute SQL asynchronously (returns an instance immediately)

`open_reader()`

Read SQL execution results

> Not all SQL statements can run through `execute_sql()` and `run_sql()`. These methods support Data Definition Language (DDL) and Data Manipulation Language (DML) statements. Use `run_security_query` for GRANT or REVOKE statements, and `run_xflow` or `execute_xflow` for XFlow API calls.

## Run SQL statements

### Parameters

**Parameter**

**Type**

**Description**

`statement`

string

The SQL statement to execute

`hints`

dict

Runtime parameters

### Return values

Both `execute_sql()` and `run_sql()` return [task instance](/help/en/maxcompute/user-guide/task-instances) information.

### Examples

**Synchronous vs. asynchronous execution**

```
# Synchronous: blocks until the statement finishes
o.execute_sql('select * from table_name')

# Asynchronous: returns immediately
instance = o.run_sql('select * from table_name')
print(instance.get_logview_address())  # Get the LogView URL
instance.wait_for_success()  # Block until the statement finishes
```

**Pass runtime hints**

```
o.execute_sql('select * from pyodps_iris', hints={'odps.stage.mapper.split.size': 16})
```

### Global settings

Set `options.sql.settings` to apply runtime parameters to every subsequent `execute_sql()` call. See [Flag parameters](/help/en/maxcompute/user-guide/flag-parameters) for available parameters.

```
from odps import options
options.sql.settings = {'odps.stage.mapper.split.size': 16}
o.execute_sql('select * from pyodps_iris')  # Hints apply automatically
```

## Read query results

Call `open_reader()` on a completed instance to read results. The return type depends on the statement.

### Structured data (SELECT)

SELECT queries return structured records. Use a `for` loop to iterate over each record.

```
with o.execute_sql('select * from table_name').open_reader() as reader:
    for record in reader:
        print(record)
```

### Unstructured data (DESC and other commands)

Commands like `desc` return raw text. Access it through `reader.raw`.

```
with o.execute_sql('desc table_name').open_reader() as reader:
    print(reader.raw)
```

### `InstanceTunnel` vs. `Result` interface

By default, `open_reader()` uses the old `Result` interface, which may cause timeouts or limit the number of records returned. Enable `InstanceTunnel` for full data reads with either approach:

**Option 1: Global setting**

```
from odps import options
options.tunnel.use_instance_tunnel = True
```

**Option 2: Per-call parameter**

```
with o.execute_sql('select * from table_name').open_reader(tunnel=True) as reader:
    for record in reader:
        print(record)
```

For PyODPS V0.7.7.1 and later, `open_reader()` supports reading full data this way.

-   If your MaxCompute version is older or `InstanceTunnel` encounters an error, PyODPS generates an alert and automatically falls back to the old `Result` interface. Check the alert message to identify the cause.
    
-   If your MaxCompute version only supports the old `Result` interface and you need all results, write them to another table first, then read from that table with `open_reader()`. This approach is subject to the [data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection) of your project.
    
-   For more information about `InstanceTunnel`, see [InstanceTunnel](/help/en/maxcompute/user-guide/instancetunnel).
    

### Read-limit mode

By default, PyODPS does not limit data read from an instance. However, the project owner may configure protection settings that restrict data reads. When restrictions are detected and `options.tunnel.limit_instance_tunnel` is not set, PyODPS automatically enables read-limit mode. In most cases, this mode caps reads at 10,000 rows.

**Enable read-limit mode manually** (protected projects):

```
# Option A: per-call
reader = instance.open_reader(limit=True)

# Option B: global
options.tunnel.limit_instance_tunnel = True
```

**Disable read-limit mode** (read all data):

```
with o.execute_sql('select * from table_name').open_reader(tunnel=True, limit=False) as reader:
    for record in reader:
        print(record)
```

> In environments like DataWorks, `options.tunnel.limit_instance_tunnel` may default to `True`. To read all data, pass both `tunnel=True` and `limit=False` to `open_reader()`.

### Protected projects

If your project is protected and `tunnel=True, limit=False` does not remove the restriction, contact the project owner to grant read permissions. See [Project data protection](/help/en/maxcompute/security-and-compliance/project-data-protection) for details.

## Use resource aliases

When a user-defined function (UDF) references resources that change dynamically, configure an alias to map the old resource name to a new one. This avoids deleting or recreating the UDF.

Pass aliases through the `aliases` parameter in `execute_sql()`:

```
from odps.models import Schema

myfunc = '''\
from odps.udf import annotate
from odps.distcache import get_cache_file

@annotate('bigint->bigint')
class Example(object):
    def __init__(self):
        self.n = int(get_cache_file('test_alias_res1').read())

    def evaluate(self, arg):
        return arg + self.n
'''
res1 = o.create_resource('test_alias_res1', 'file', file_obj='1')
o.create_resource('test_alias.py', 'py', file_obj=myfunc)
o.create_function('test_alias_func',
                  class_type='test_alias.Example',
                  resources=['test_alias.py', 'test_alias_res1'])

table = o.create_table(
    'test_table',
    schema=Schema.from_lists(['size'], ['bigint']),
    if_not_exists=True
)

data = [[1, ], ]
# Write one row of data with value 1
o.write_table(table, 0, [table.new_record(it) for it in data])

with o.execute_sql(
    'select test_alias_func(size) from test_table').open_reader() as reader:
    print(reader[0][0])

res2 = o.create_resource('test_alias_res2', 'file', file_obj='2')
# Map res1 alias to res2 without modifying the UDF or resource
with o.execute_sql(
    'select test_alias_func(size) from test_table',
    aliases={'test_alias_res1': 'test_alias_res2'}).open_reader() as reader:
    print(reader[0][0])
```

## Configure `biz_id`

Some scenarios require a business ID (`biz_id`) for SQL execution. If an error occurs due to a missing `biz_id`, set it globally:

```
from odps import options
options.biz_id = 'my_biz_id'
o.execute_sql('select * from pyodps_iris')
```
