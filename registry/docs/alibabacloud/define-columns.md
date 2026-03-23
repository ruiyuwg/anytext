PyODPS lets you create, read, write, and delete MaxCompute tables programmatically. You can also manage schemas, partitions, and bulk data transfers through MaxCompute Tunnel.

## Prerequisites

Before you begin, make sure that you have:

-   A MaxCompute project
    
-   PyODPS installed and configured
    
-   An AccessKey ID and AccessKey secret
    
-   An initialized MaxCompute entry object (`o`)
    

## Quick start

Create a table, write data, and read it back:

```
from odps.models import Schema

# Define columns
schema = Schema.from_lists(['id', 'name'], ['bigint', 'string'])

# Create the table
table = o.create_table('my_table', schema, if_not_exists=True)

# Write records
o.write_table('my_table', [[1, 'Alice'], [2, 'Bob']])

# Read records
for record in o.read_table('my_table'):
    print(record)
```

## API method summary

**Operation**

**Method**

**Description**

List tables

`o.list_tables()`

List all tables in a project

Check existence

`o.exist_table()`

Check whether a table exists

Get table

`o.get_table()`

Get a table object

Create table

`o.create_table()`

Create a table

Write data

`o.write_table()`

Write records to a table

Read data

`o.read_table()`

Read records from a table

Delete table

`o.delete_table()`

Delete a table

Convert to DataFrame

`table.to_df()`

Convert a table to a DataFrame

Sync updates

`table.reload()`

Synchronize table metadata

For the full PyODPS method reference, see [Method descriptions](/help/en/maxcompute/user-guide/overview-32).

## List tables

List all tables in a project:

```
for table in o.list_tables():
    print(table)
```

Filter by name prefix:

```
for table in o.list_tables(prefix="table_prefix"):
    print(table.name)
```

By default, `list_tables()` returns only table names. Accessing properties like `table_schema` or `creation_time` triggers additional requests and increases latency.

In PyODPS 0.11.5 and later, pass `extended=True` to retrieve these properties in a single call:

```
for table in o.list_tables(extended=True):
    print(table.name, table.creation_time)
```

Filter by table type:

```
# Valid types: managed_table, external_table, virtual_view, materialized_view
managed_tables = list(o.list_tables(type="managed_table"))
external_tables = list(o.list_tables(type="external_table"))
virtual_views = list(o.list_tables(type="virtual_view"))
materialized_views = list(o.list_tables(type="materialized_view"))
```

## Check whether a table exists

```
print(o.exist_table('pyodps_iris'))
# Returns True if the table exists
```

## Get table information

Get a table object with `get_table()`:

```
t = o.get_table('pyodps_iris')
```

Print the table schema:

```
print(t.schema)
```

Output:

```
odps.Schema {
  sepallength           double      # Sepal length (cm)
  sepalwidth            double      # Sepal width (cm)
  petallength           double      # Petal length (cm)
  petalwidth            double      # Petal width (cm)
  name                  string      # Type
}
```

Access column details:

```
# All columns
print(t.schema.columns)

# A specific column
print(t.schema['sepallength'])

# Column comment
print(t.schema['sepallength'].comment)
```

Access table properties:

```
print(t.lifecycle)        # Table lifecycle
print(t.creation_time)    # Creation time
print(t.is_virtual_view)  # Whether the table is a view
print(t.size)             # Table size in bytes
print(t.comment)          # Table comment
```

### Access tables across projects

Pass the `project` parameter to get a table from another project:

```
t = o.get_table('table_name', project='other_project')
```

## Create a table schema

Two methods are available for creating schemas.

### Method 1: Column and Partition objects

Use `Column` and `Partition` objects from `odps.models` for full control, including column comments:

```
from odps.models import Schema, Column, Partition

columns = [
    Column(name='num', type='bigint', comment='the column'),
    Column(name='num2', type='double', comment='the column2'),
]
partitions = [Partition(name='pt', type='string', comment='the partition')]
schema = Schema(columns=columns, partitions=partitions)
```

Access schema properties:

```
# All columns including partition columns
print(schema.columns)

# Partition columns only
print(schema.partitions)

# Non-partition column names
print(schema.names)

# Non-partition column types
print(schema.types)
```

### Method 2: Schema.from\_lists()

`Schema.from_lists()` is simpler but does not support setting comments directly:

```
from odps.models import Schema

schema = Schema.from_lists(
    ['num', 'num2'],           # Column names
    ['bigint', 'double'],      # Column types
    ['pt'],                    # Partition names
    ['string']                 # Partition types
)
print(schema.columns)
```

## Create a table

### From a schema object

```
from odps.models import Schema

schema = Schema.from_lists(['num', 'num2'], ['bigint', 'double'], ['pt'], ['string'])

# Create a table
table = o.create_table('my_new_table', schema)

# Skip creation if the table already exists
table = o.create_table('my_new_table', schema, if_not_exists=True)

# Set a lifecycle in days
table = o.create_table('my_new_table', schema, lifecycle=7)
```

### From column definitions as strings

```
# Partitioned table (columns, partition columns)
table = o.create_table('my_new_table', ('num bigint, num2 double', 'pt string'), if_not_exists=True)

# Non-partitioned table
table = o.create_table('my_new_table02', 'num bigint, num2 double', if_not_exists=True)
```

### Enable extended data types

By default, only these data types are supported: BIGINT, DOUBLE, DECIMAL, STRING, DATETIME, BOOLEAN, MAP, and ARRAY.

To use extended types such as TINYINT and STRUCT, enable the MaxCompute V2.0 data type extension:

```
from odps import options

options.sql.use_odps2_extension = True
table = o.create_table('my_new_table', 'cat smallint, content struct<title:varchar(100), body:string>')
```

## Synchronize table updates

When another program changes a table, call `reload()` to refresh the local object:

```
from odps.models import Schema

schema = Schema.from_lists(['num', 'num2'], ['bigint', 'double'], ['pt'], ['string'])
table = o.create_table('my_new_table', schema)

# Fetch the latest table metadata from the server
table.reload()
```

## Write data to a table

### write\_table()

```
records = [
    [111, 1.0],
    [222, 2.0],
    [333, 3.0],
    [444, 4.0]
]

# Write to a partition; create the partition if it does not exist
o.write_table('my_new_table', records, partition='pt=test', create_partition=True)
```

**Important**

Each call to `write_table()` creates a file on the server. This operation is time-consuming, and too many small files degrade query performance. Write multiple records per call, or pass a generator object.

`write_table()` always appends data. To replace existing data:

-   **Non-partitioned tables:** Call `table.truncate()`.
    
-   **Partitioned tables:** Delete and recreate the partition.
    

### open\_writer()

```
t = o.get_table('my_new_table')

with t.open_writer(partition='pt=test02', create_partition=True) as writer:
    records = [
        [1, 1.0],
        [2, 2.0],
        [3, 3.0],
        [4, 4.0]
    ]
    writer.write(records)  # Accepts any iterable
```

Write to multi-level partitions:

```
t = o.get_table('test_table')

with t.open_writer(partition='pt1=test1,pt2=test2') as writer:
    records = [
        t.new_record([111, 'aaa', True]),
        t.new_record([222, 'bbb', False]),
        t.new_record([333, 'ccc', True]),
        t.new_record([444, 'Chinese', False])
    ]
    writer.write(records)
```

### Multi-process parallel writing

Multiple processes can write to the same table concurrently by sharing a session ID and writing to separate blocks. Each block maps to a file on the server. The main process commits after all workers finish.

```
import random
from multiprocessing import Pool
from odps.tunnel import TableTunnel

def write_records(tunnel, table, session_id, block_id):
    # Reuse the existing session
    local_session = tunnel.create_upload_session(table.name, upload_id=session_id)
    # Write to this process's block
    with local_session.open_record_writer(block_id) as writer:
        for i in range(5):
            record = table.new_record([random.randint(1, 100), random.random()])
            writer.write(record)

if __name__ == '__main__':
    N_WORKERS = 3

    table = o.create_table('my_new_table', 'num bigint, num2 double', if_not_exists=True)
    tunnel = TableTunnel(o)
    upload_session = tunnel.create_upload_session(table.name)

    # Share the session ID across processes
    session_id = upload_session.id

    pool = Pool(processes=N_WORKERS)
    futures = []
    block_ids = []
    for i in range(N_WORKERS):
        futures.append(pool.apply_async(write_records, (tunnel, table, session_id, i)))
        block_ids.append(i)
    [f.get() for f in futures]

    # Commit all blocks
    upload_session.commit(block_ids)
```

## Read data from a table

### read\_table()

```
for record in o.read_table('my_new_table', partition='pt=test'):
    print(record)
```

### head()

Preview up to 10,000 records without a full table scan:

```
t = o.get_table('my_new_table')

for record in t.head(3):
    print(record)
```

### open\_reader()

`open_reader()` supports slicing and exposes a `count` attribute:

```
t = o.get_table('my_new_table')

with t.open_reader(partition='pt=test') as reader:
    count = reader.count
    for record in reader[5:10]:  # Read a slice of records
        print(record)
```

Without a `with` block:

```
reader = t.open_reader(partition='pt=test')
count = reader.count
for record in reader[5:10]:
    print(record)
```

## Delete a table

```
# Delete only if the table exists
o.delete_table('my_table_name', if_exists=True)

# Or call drop() on a table object
t.drop()
```

## Convert a table to a DataFrame

`to_df()` converts a table to a PyODPS DataFrame. For details, see [DataFrame (not recommended)](/help/en/maxcompute/user-guide/dataframe-13/).

```
table = o.get_table('my_table_name')
df = table.to_df()
```

## Manage partitions

### Check whether a table is partitioned

```
table = o.get_table('my_new_table')
if table.schema.partitions:
    print('Table %s is partitioned.' % table.name)
```

### Iterate over partitions

```
table = o.get_table('my_new_table')

# All partitions
for partition in table.partitions:
    print(partition.name)

# Sub-partitions under pt=test
for partition in table.iterate_partitions(spec='pt=test'):
    print(partition.name)

# Partitions matching a condition (PyODPS 0.11.3 and later)
for partition in table.iterate_partitions(spec='dt>20230119'):
    print(partition.name)
```

Starting from PyODPS 0.11.3, `iterate_partitions()` accepts logical expressions such as `dt>20230119`.

### Check whether a partition exists

```
table = o.get_table('my_new_table')
table.exist_partition('pt=test,sub=2015')
```

### Get partition information

```
table = o.get_table('my_new_table')
partition = table.get_partition('pt=test')
print(partition.creation_time)
print(partition.size)
```

### Create a partition

```
t = o.get_table('my_new_table')
t.create_partition('pt=test', if_not_exists=True)
```

### Delete a partition

```
t = o.get_table('my_new_table')
t.delete_partition('pt=test', if_exists=True)

# Or call drop() on a partition object
partition.drop()
```

## Records and data type mappings

A record represents a single row in a MaxCompute table. The `open_reader()`, `open_writer()`, `open_record_reader()`, and `open_record_writer()` methods all use records.

Create a record by calling `new_record()` on a table object.

Given this table schema:

```
odps.Schema {
  c_int_a                 bigint
  c_string_a              string
  c_bool_a                boolean
  c_datetime_a            datetime
  c_array_a               array<string>
  c_map_a                 map<bigint,string>
  c_struct_a              struct<a:bigint,b:string>
}
```

Create and manipulate records:

```
import datetime

t = o.get_table('mytable')  # o is the MaxCompute entry object

# Create a record with initial values
# The number of values must match the number of fields in the schema
r = t.new_record([1024, 'val1', False, datetime.datetime.now(), None, None])

# Create an empty record
r2 = t.new_record()

# Set values by index
r2[0] = 1024

# Set values by field name
r2['c_string_a'] = 'val1'

# Set values by attribute
r2.c_string_a = 'val1'

# Set ARRAY value
r2.c_array_a = ['val1', 'val2']

# Set MAP value
r2.c_map_a = {1: 'val1'}

# Set STRUCT value (PyODPS 0.11.5 and later)
r2.c_struct_a = (1, 'val1')             # tuple
r2.c_struct_a = {"a": 1, "b": 'val1'}   # dict

# Get values
print(r[0])                          # By index
print(r['c_string_a'])               # By field name
print(r.c_string_a)                  # By attribute
print(r[0: 3])                       # Slice
print(r[0, 2, 3])                    # Multiple indices
print(r['c_int_a', 'c_double_a'])    # Multiple field names
```

### Data type mappings

**MaxCompute type**

**Python type**

TINYINT, SMALLINT, INT, BIGINT

int

FLOAT, DOUBLE

float

STRING

str

BINARY

bytes

DATETIME

datetime.datetime

DATE

datetime.date

BOOLEAN

bool

DECIMAL

decimal.Decimal

MAP

dict

ARRAY

list

STRUCT

tuple / namedtuple

TIMESTAMP

pandas.Timestamp

TIMESTAMP\_NTZ

pandas.Timestamp

INTERVAL\_DAY\_TIME

pandas.Timedelta

### STRING handling

By default, STRING maps to Unicode strings (str in Python 3, unicode in Python 2). To store binary data in a STRING column, set `options.tunnel.string_as_binary = True`.

### Time zone behavior

PyODPS uses the local time zone by default. MaxCompute does not store time zone values -- it converts time information to a UNIX timestamp for storage.

To use UTC:

```
options.local_timezone = False
```

To use a specific time zone:

```
options.local_timezone = 'Asia/Shanghai'
```

### DECIMAL in Python 2

When the cdecimal package is installed, PyODPS uses `cdecimal.Decimal` instead of `decimal.Decimal` in Python 2.

### STRUCT type behavior

Before PyODPS 0.11.5, STRUCT maps to dict. Starting from PyODPS 0.11.5, STRUCT maps to namedtuple by default.

To restore the old behavior:

```
options.struct_as_dict = True
```

> In DataWorks environments, `struct_as_dict` defaults to False for historical compatibility. PyODPS 0.11.5 and later accept both dict and tuple for STRUCT values. Earlier versions accept only dict.

## MaxCompute Tunnel

MaxCompute Tunnel is the data channel for uploading and downloading data. For most use cases, `write_table()` and `read_table()` are simpler. Use Tunnel when you need multi-process writes or fine-grained session control.

> PyODPS does not support uploading data through external tables (for example, tables backed by OSS or Tablestore).

If CPython is installed, PyODPS compiles C code during installation to accelerate Tunnel-based transfers.

### Upload data

```
from odps.tunnel import TableTunnel

table = o.get_table('my_table')

tunnel = TableTunnel(o)
upload_session = tunnel.create_upload_session(table.name, partition_spec='pt=test')

with upload_session.open_record_writer(0) as writer:
    record = table.new_record()
    record[0] = 'test1'
    record[1] = 'id1'
    writer.write(record)

    record = table.new_record(['test2', 'id2'])
    writer.write(record)

# Commit outside the with block. Committing before all data is written causes an error.
upload_session.commit([0])
```

### Download data

```
from odps.tunnel import TableTunnel

tunnel = TableTunnel(o)
download_session = tunnel.create_download_session('my_table', partition_spec='pt=test')

with download_session.open_record_reader(0, download_session.count) as reader:
    for record in reader:
        print(record)
```
