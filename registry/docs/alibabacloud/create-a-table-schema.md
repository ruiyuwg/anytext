PyODPS provides methods for creating, reading, writing, and managing MaxCompute tables and partitions. This page covers common table operations with runnable code examples.

## List all tables

Call `list_tables()` on the entry object to iterate over all tables in a project.

```
for table in odps.list_tables():
    # Query all tables in a project.
```

## Check whether a table exists

Call `exist_table()` on the entry object to check whether a table exists, and `get_table()` to retrieve table metadata.

```
t = odps.get_table('table_name')
t.schema
odps.Schema {
  c_int_a                 bigint
  c_int_b                 bigint
  c_double_a              double
  c_double_b              double
  c_string_a              string
  c_string_b              string
  c_bool_a                boolean
  c_bool_b                boolean
  c_datetime_a            datetime
  c_datetime_b            datetime
}
t.lifecycle
-1
print(t.creation_time)
2014-05-15 14:58:43
t.is_virtual_view
False
t.size
1408
t.schema.columns
[<column c_int_a, type bigint>,
 <column c_int_b, type bigint>,
 <column c_double_a, type double>,
 <column c_double_b, type double>,
 <column c_string_a, type string>,
 <column c_string_b, type string>,
 <column c_bool_a, type boolean>,
 <column c_bool_b, type boolean>,
 <column c_datetime_a, type datetime>,
 <column c_datetime_b, type datetime>]
```

The table object exposes these properties:

**Property**

**Description**

`t.schema`

The `Schema` object with column definitions

`t.lifecycle`

The lifecycle value (`-1` means no lifecycle is set)

`t.creation_time`

The table creation timestamp

`t.is_virtual_view`

Whether the table is a virtual view

`t.size`

The table size in bytes

`t.schema.columns`

A list of all column objects

## Create a table schema

Two approaches are available for creating a table schema.

### Define columns and partitions explicitly

Import `Schema`, `Column`, and `Partition` from `odps.models`, then pass column and partition lists to the `Schema` constructor. This approach supports the `comment` parameter on each column and partition.

```
from odps.models import Schema, Column, Partition
columns = [
    Column(name='num', type='bigint', comment='the column'),
    Column(name='num2', type='double', comment='the column2'),
]
partitions = [Partition(name='pt', type='string', comment='the partition')]
schema = Schema(columns=columns, partitions=partitions)
```

After creating a schema, inspect its contents with these properties:

-   **All columns** (including partition key columns): Output:
    
    ```
      print(schema.columns)
    ```
    
    ```
      [<column num, type bigint>,
       <column num2, type double>,
       <partition pt, type string>]
    ```
    
-   **Partition key columns only**: Output:
    
    ```
      print(schema.partitions)
    ```
    
    ```
      [<partition pt, type string>]
    ```
    
-   **Non-partition column names**: Output:
    
    ```
      print(schema.names)
    ```
    
    ```
      ['num', 'num2']
    ```
    
-   **Non-partition column data types**: Output:
    
    ```
      print(schema.types)
    ```
    
    ```
      [bigint, double]
    ```
    

### Use `Schema.from_lists()`

`Schema.from_lists()` is a shorthand that accepts lists of names and types. This method is simpler but does not support column or partition comments directly.

```
from odps.models import Schema
schema = Schema.from_lists(['num', 'num2'], ['bigint', 'double'], ['pt'], ['string'])
print(schema.columns)
```

Output:

```
[<column num, type bigint>,
 <column num2, type double>,
 <partition pt, type string>]
```

## Create a table

Call `o.create_table()` to create a table. Make sure all column data types are valid. Two approaches are available: pass a `Schema` object, or pass column definitions as strings.

### Create a table from a schema

Build a `Schema` first, then pass it to `create_table()`.

```
# Create a table schema.
from odps.models import Schema
schema = Schema.from_lists(['num', 'num2'], ['bigint', 'double'], ['pt'], ['string'])

# Create a table by using the schema that you created.
table = o.create_table('my_new_table', schema)

# Create a table only if no table with the same name exists.
table = o.create_table('my_new_table', schema, if_not_exists=True)

# Configure the lifecycle of the table.
table = o.create_table('my_new_table', schema, lifecycle=7)
```

Verify the table was created:

```
print(o.exist_table('my_new_table'))
```

If `True` is returned, the table was created successfully.

### Create a table from column definitions

Pass the column names and data types as a string or tuple to `create_table()`.

```
# Create a partitioned table named my_new_table with specified common columns and partition key columns.
table = o.create_table('my_new_table', ('num bigint, num2 double', 'pt string'), if_not_exists=True)

# Create a non-partitioned table named my_new_table02.
table = o.create_table('my_new_table02', 'num bigint, num2 double', if_not_exists=True)
```

Verify the table was created:

```
print(o.exist_table('my_new_table'))
```

If `True` is returned, the table was created successfully.

### Enable MaxCompute V2.0 extended data types

By default, `create_table()` only supports BIGINT, DOUBLE, DECIMAL, STRING, DATETIME, BOOLEAN, MAP, and ARRAY data types. To use additional data types such as TINYINT and STRUCT, set `options.sql.use_odps2_extension` to `True`.

```
from odps import options
options.sql.use_odps2_extension = True
table = o.create_table('my_new_table', 'cat smallint, content struct<title:varchar(100), body:string>')
```

## Delete a table

Call `delete_table()` on the entry object, or call `drop()` on a table object.

```
o.delete_table('my_table_name', if_exists=True)  # Delete a table only if the table exists.
t.drop() # Call the drop() method to drop a table if the table exists.
```

## Manage table partitions

### Check whether a table is partitioned

```
table = o.get_table('my_new_table')
if table.schema.partitions:
    print('Table %s is partitioned.' % table.name)
```

### Iterate over partitions

```
table = o.get_table('my_new_table')
for partition in table.partitions:  # Iterate over all partitions.
    print(partition.name)  # An iteration step. In this step, the partition name is displayed.
for partition in table.iterate_partitions(spec='pt=test'):  # Iterate over level-2 partitions in the partition named test.
    print(partition.name)  # An iteration step. In this step, the partition name is displayed.
for partition in table.iterate_partitions(spec='dt>20230119'):  # Iterate over level-2 partitions in the partitions that meet the dt>20230119 condition.
    print(partition.name)  # An iteration step. In this step, the partition name is displayed.
```

**Important**

Logical expressions in `iterate_partitions` (such as `dt>20230119`) require PyODPS 0.11.3 or later.

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
partition.size
```

### Create a partition

```
t = o.get_table('my_new_table')
t.create_partition('pt=test', if_not_exists=True)  # Create a partition only if no partition with the same name exists.
```

### Delete a partition

```
t = o.get_table('my_new_table')
t.delete_partition('pt=test', if_exists=True)  # Set the if_exists parameter to True. This ensures that a partition is deleted only if the partition exists.
partition.drop()  # Call the drop() method to drop a partition if the partition exists.
```

## Read data from a table

### Read the first N records with `head()`

The `head()` method retrieves the first 10,000 or fewer records from a table.

```
from odps import ODPS
t = o.get_table('dual')
for record in t.head(3):
    # Process each record.
```

### Read with `open_reader()` using a `with` statement

```
with t.open_reader(partition='pt=test') as reader:
count = reader.count
for record in reader[5:10]  # You can execute the statement multiple times until all records are read. The number of records is specified by count. You can change the code to parallel-operation code.
    # Process one record.
```

### Read with `open_reader()` without a `with` statement

```
reader = t.open_reader(partition='pt=test')
count = reader.count
for record in reader[5:10]  # You can execute the statement multiple times until all records are read. The number of records is specified by count. You can change the code to parallel-operation code.
    # Process one record.
```

### Read directly into a pandas DataFrame

```
with t.open_reader(partition='pt=test') as reader:
pd_df = reader.to_pandas()
```

## Write data to a table

### Write with `open_writer()` using a `with` statement

```
with t.open_writer(partition='pt=test') as writer:
	  records = [[111, 'aaa', True],                 # A list can be used.
	             [222, 'bbb', False],
	             [333, 'ccc', True],
	             [444, 'Chinese', False]]
    writer.write(records)  # Records can be iterable objects.

records = [t.new_record([111, 'aaa', True]),   # Record objects can be used.
           t.new_record([222, 'bbb', False]),
           t.new_record([333, 'ccc', True]),
           t.new_record([444, 'Chinese', False])]
writer.write(records)
```

Pass either plain lists or `Record` objects (created with `t.new_record()`) to `writer.write()`.

### Auto-create a partition on write

Set `create_partition=True` to automatically create the partition if it does not exist.

```
with t.open_writer(partition='pt=test', create_partition=True) as writer:
    records = [[111, 'aaa', True],                 # A list can be used.
               [222, 'bbb', False],
               [333, 'ccc', True],
               [444, 'Chinese', False]]
    writer.write(records)  # Records can be iterable objects.
```

### Write with `write_table()`

The `write_table()` method on the MaxCompute entry object provides a simpler interface for writing data.

```
records = [[111, 'aaa', True],                 # A list can be used.
           [222, 'bbb', False],
           [333, 'ccc', True],
           [444, 'Chinese', False]]
o.write_table('test_table', records, partition='pt=test', create_partition=True)
```

## Read and write data in Apache Arrow format

Apache Arrow is a cross-language format for data exchange between different platforms. MaxCompute has supported table data reading in the Arrow format since 2021. PyODPS 0.11.2 and later versions support this feature.

After installing pyarrow in your Python environment, add `arrow=True` when calling `open_reader()` or `open_writer()` to read or write Arrow `RecordBatch` objects.

```
import pandas as pd
import pyarrow as pa
with t.open_writer(partition='pt=test', create_partition=True, arrow=True) as writer:
    records = [[111, 'aaa', True],
               [222, 'bbb', False],
               [333, 'ccc', True],
               [444, 'Chinese', False]]
    df = pd.DataFrame(records, columns=["int_val", "str_val", "bool_val"])
    # Write a RecordBatch.
    batch = pa.RecordBatch.from_pandas(df)
    writer.write(batch)
    # You can also use Pandas DataFrame directly.
    writer.write(df)
```
