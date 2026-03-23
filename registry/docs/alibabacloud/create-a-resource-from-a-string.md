PyODPS supports two types of resources: file resources and table resources. Use resources to package Python scripts, JAR files, data files, and table references for MaxCompute jobs such as UDFs and MapReduce tasks.

## Quick start

Create a file resource and read its content:

```
# Create a resource from a string
resource = o.create_resource('test_py_resource.py', 'py', file_obj='import this')

# Read the resource
with resource.open('r') as fp:
    content = fp.read()
    print(content)
```

## Method reference

The following table lists all resource operations available through the MaxCompute entry object (`o`).

**Method**

**Description**

**Return type**

`o.list_resources()`

List all resources in a project

Iterator

`o.exist_resource(name)`

Check whether a resource exists

`bool`

`o.create_resource(name, type, ...)`

Create a resource

`Resource`

`o.open_resource(name, mode)`

Open a resource for reading or writing

File-like object

`o.get_resource(name)`

Get a resource object by name

`Resource`

`o.delete_resource(name)`

Delete a resource

`None`

`resource.drop()`

Delete a resource (alias)

`None`

## File resources

File resources include common files, `.py` files, `.jar` files, and archive files.

### Create a file resource

Call `create_resource()` with the resource name, file type, and either a file-like object or a string.

```
# Create from a file on disk
# Open compressed packages and binary files in binary mode ('rb')
resource = o.create_resource('test_file_resource', 'file', file_obj=open('/to/path/file', 'rb'))

# Create from a string
resource = o.create_resource('test_py_resource.py', 'py', file_obj='import this')
```

> Open compressed packages and binary files in binary mode (`'rb'`). Text files and Python scripts can use string input directly. For `.py`, `.jar`, and archive resources, the resource name must include the corresponding file extension.

### Read and modify a file resource

Open a file resource using one of two approaches:

-   Call `resource.open(mode)` on a resource object.
    
-   Call `o.open_resource(name, mode)` on the MaxCompute entry object.
    

Both return a file-like object with the same interface as Python's built-in `open()`.

**Read a resource:**

```
with resource.open('r') as fp:
    content = fp.read()       # Read all content
    fp.seek(0)                # Return to the beginning
    lines = fp.readlines()    # Read multiple lines
```

**Read and write a resource:**

```
with o.open_resource('test_file_resource', mode='r+') as fp:
    fp.read()
    fp.tell()                              # Get the current position
    fp.seek(10)
    fp.truncate()                          # Truncate at the current position
    fp.writelines(['Hello\n', 'World\n'])  # Write multiple lines
    fp.write('Hello World')
    fp.flush()                             # Submit the update to MaxCompute
```

### Open modes

**Text modes:**

**Mode**

**Description**

`r`

Read-only. Cannot write.

`w`

Write-only. Cannot read. Clears existing content first.

`a`

Append. Writes to the end of the file.

`r+`

Read and write.

`w+`

Read and write. Clears existing content first.

`a+`

Read and write. Writes only to the end of the file.

**Binary modes** (for compressed files and other binary data):

**Mode**

**Description**

`rb`

Binary read-only.

`r+b`

Binary read and write.

### File-like object methods

**Method**

**Description**

`read()`

Read all content

`readlines()`

Read all lines into a list

`write(data)`

Write a string

`writelines(lines)`

Write a list of strings

`seek(pos)`

Move to a specific position

`tell()`

Get the current position

`truncate()`

Truncate the file at the current position. Pass a length argument to truncate to a specific size.

`flush()`

Submit the update to MaxCompute immediately

## Table resources

Table resources reference an existing MaxCompute table (and optionally a partition) as a resource.

### Create a table resource

```
o.create_resource('test_table_resource', 'table', table_name='my_table', partition='pt=test')
```

### Update a table resource

Change the referenced partition or project:

```
table_resource = o.get_resource('test_table_resource')
table_resource.update(partition='pt=test2', project_name='my_project2')
```

### Get table and partition metadata

```
table_resource = o.get_resource('test_table_resource')

table = table_resource.table
print(table.name)            # Table name

partition = table_resource.partition
print(partition.spec)        # Partition spec, e.g. 'pt=test'
```

### Read and write table data

Write records to a table resource, then read them back:

```
table_resource = o.get_resource('test_table_resource')

# Write records
with table_resource.open_writer() as writer:
    writer.write([0, 'aaaa'])
    writer.write([1, 'bbbbb'])

# Read records
with table_resource.open_reader() as reader:
    for rec in reader:
        print(rec)
```
