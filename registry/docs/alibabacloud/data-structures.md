This topic describes the data structures that are related to the data transformation syntax.

## Basic data structures

The following table describes the different types of basic data structures.

**Type**

**Description**

Integer

You can use integers as field values. You can also pass integers as values of parameters to functions.

For example, `e_set("f1", 100)` indicates that the value of the `f1` field is set to 100.

Float

You can use float values as field values. You can also pass float values as values of parameters to functions.

For example, `e_set("f1", 1.5)` indicates that the value of the `f1` field is set to 1.5.

String

Strings can be specified in multiple formats. Examples:

-   `"abc"` is equivalent to `'abc'` . If a string contains a double quotation mark ("), you can specify the string in the `'abc"xyz'` format. You can also use a backslash (\\) to escape the double quotation mark in the `"abc\"xyz"` format.
    
    Backslashes (\\) are used to escape special characters. For example, `"\\abc\\xyz"` indicates the `\abc\xyz` string.
    
-   Both `r"\\10.64.1.1\share\folder"` and `"\\\\10.64.1.1\\share\\folder"` indicate the `\\10.64.1.1\share\folder` string.
    
-   Multibyte character strings are encoded in Unicode. For example, the length of a string consisting of two Chinese characters is 2.
    
-   Regular expressions are represented as strings.
    

**Note**

You can only enclose search values in double quotation marks (""). Use single quotation marks ('') to enclose the outer string and double quotation marks ("") to enclose the inner search value. For example, `e_search("domain: '/url/test.jsp'")` is incorrect. The correct format is `e_search('domain: "/url/test.jsp"')`.

Byte

Example: `b'abc'`. Bytes are encoded in memory by using a format that is different from the format of strings. Bytes are received and returned by special functions.

None

Both `None` and `null` indicate a null value. Some named parameters of functions use `None` as the default value to indicate a specific default behavior.

**Note**

None or null is different from an empty string.

List

An array. Example: \[1,2,3,4\].

-   Some functions accept lists as parameters. Example: `e_dict_map("dict data", ["f1", "f2", "f3"], ...)`
    
-   Some functions return lists. For example, if you call the `json_select` function to extract an array, a list is returned.
    

Tuple

Tuples and lists function in the same manner. Example: `(1,2,3,4)`.

Dictionary

A dictionary is a collection of key-value pairs in the `{"key": "value", "k2": "v2", ...}` format. Keys are strings in most cases and cannot be repeated. The values of keys can be of the preceding data types. The key-value pairs are stored in a hash table in an unordered manner.

-   An event is a special dictionary.
    
-   Some functions accept dictionaries in specific formats. Example: `{"key": [1,2,3], "key2": {"k3": "v3"}}`
    
-   The dictionary structure is used as the input data to map fields to a dictionary.
    

Boolean

Examples: `True`, `False`, `true`, and `false`.

Table

Each table consists of multiple columns. You can construct a table by loading multi-row CSV-formatted data from an external resource. You can also construct a table by loading multiple columns of data from ApsaraDB RDS instances and Logstores. Tables are suitable for advanced operations such as data mapping and enrichment.

Datetime object

A datetime object is a memory object that indicates date and time information. A datetime object can be converted to a UNIX timestamp or a formatted time string. A datetime object can be passed to `dt_`\-like functions for further conversion.

## Event types

The following list describes event types:

-   Basic types
    
    Log data is processed into the dictionary structure during the data transformation process. Example: `{"__topic__": "access_log", "content": "....."}`.
    
    The keys and values of a dictionary correspond to the fields and values in a log.
    
    **Note**
    
    The keys and values of an event are strings, and the keys must be unique.
    
-   Meta-fields
    
    The following meta-fields are supported:
    
    -   `__time__`: the log time that is specified when log data is written. The value is a string that represents an integer and follows the UNIX time format. It is the number of seconds that have elapsed since 00:00:00 Thursday, January 1, 1970.
        
    -   `__topic__`: the topic of a log. Topics are used to group logs in a Logstore. You can specify a topic for logs when the logs are written to a Logstore. You can specify a topic when you query logs.
        
    -   `__source__`: the source of a log. For example, the value of this field can be the IP address of the server on which the log is generated.
        
    
-   Modification of the \_\_time\_\_ field
    
    You can change the value of the \_\_time\_\_ field to modify the event time of a log. You can use date and time functions to perform more operations on the \_\_time\_\_ field.
    
    **Note**
    
    If the \_\_time\_\_ field is deleted, the system time at which a log is processed is used as the event time at which the log is written to a destination Logstore.
    
-   Tags
    
    Tags are used to differentiate fields in logs. Tags are in the `__tag__:Name` format.
    
    -   If the source Logstore is configured to record public IP addresses, logs contain `tag: __tag__:__receive_time__`.
        
    -   Container logs contain many container-related tags. Example: `__tag__:__container_name__`.
        
    -   You can add and modify tags. For example, you can add a tag named type:`e_set("__tag__:type", "access_log")`.
        
    
-   Automatic conversion during value assignment
    
    The keys and values of an event are strings. When you assign a value to a key or when you specify a new value for a key in an event, the key and the value of the key are automatically converted to strings. Examples:
    
    ```
    e_set("v1", 12.3)
    e_set("v2", True)
    ```
    
    Set `v1` to the 12.3 string and set `v2` to the true string.
    
    The following table provides examples on the conversion of different data types to strings.
    
    **Original type**
    
    **Example**
    
    **New type**
    
    **Example**
    
    Integer
    
    `1`
    
    String
    
    `"1"`
    
    Float
    
    `1.2`
    
    String
    
    `"1.2"`
    
    Boolean
    
    `True`
    
    String
    
    `"true"`
    
    Byte
    
    `b"123"`
    
    String that is encoded in UTF-8
    
    `"123"`
    
    Tuple
    
    -   Example 1: `(1, 2, 3)`
        
    -   Example 2: `("a", 1)`
        
    
    String that represents a list
    
    -   Example 1: `"[1, 2, 3]"`
        
    -   Example 2: `"[\"a\", 1]"`
        
    
    List
    
    -   Example 1: `[1,2,3]`
        
    -   Example 2: `["a", 1]`
        
    
    String
    
    -   Example 1: `"[1, 2, 3]"`
        
    -   Example 2: `"[\"a\", 1]"`
        
    
    Dictionary
    
    `{"1":2, "3":4}`
    
    String
    
    `"{\"1\": 2, \"3\": 4}"`
    
    Datetime
    
    `datetime(2018, 10, 10, 10, 10, 10)`
    
    String that represents time in the ISO format
    
    `2018-10-10 10:10:10`
    

## Fixed identifiers

The data transformation feature provides fixed identifiers. You can use the identifiers to simplify code.

**Identifier**

**Type**

**Description**

true

Boolean

Equivalent to `True`.

false

Boolean

Equivalent to `False`.

null

None

Equivalent to `None`.

F\_TAGS

String

The regular expression that represents the `TAG` field. It is equivalent to `"__tag__:.+"`.

F\_META

String

The regular expression that represents the combination of the `TAG`, `__topic__`, and `__source__` fields. It is equivalent to `__tag__:.+|__topic__|__source__`.

F\_TIME

String

The name of the `__time__` field. It is equivalent to `__time__`.

F\_PACK\_META

String

The regular expression that represents the `pack meta` field. It is equivalent to `"__pack_meta__|__tag__:__pack_id__"`.

F\_RECEIVE\_TIME

String

The `tag` field of the time at which a server receives a log. It is equivalent to `"__tag__:__receive_time__"`.

C\_JOB\_REGION

String

The region ID of a data transformation job. Example: `cn-hangzhou`. For example, `e_set("job_region", C_JOB_REGION)` assigns the region ID of a data transformation job to the job\_region field.

C\_JOB\_PROJECT

String

The name of the project to which a data transformation job belongs. Example: `my-sls-project`. For example, `e_set("job_project", C_JOB_PROJECT)` assigns the name of the project to which a data transformation job belongs to the job\_project field.

C\_JOB\_NAME

String

The configuration name of a data transformation job. Example: `etl-1649227848-642277`. For example, `e_set("job_name", C_JOB_NAME)` assigns the configuration name of a data transformation job to the job\_name field.

C\_JOB\_ID

String

The running ID of a data transformation job. Example: `73b96061b8c1c2101d558139bf641ea9`. For example, `e_set("job_id", C_JOB_ID)` assigns the running ID of a data transformation job to the job\_id field.

## JSON objects

A JSON object is an object that you obtain after the JSON expression function `json_select` or `json_parse` is used to parse data. A JSON object consists of data in basic data structures. The following table provides examples on the conversion of strings to JSON objects.

**String**

**JSON object**

**Type**

`1`

`1`

Integer

`1.2`

`1.2`

Float

`true`

`True`

Boolean

`false`

`False`

Boolean

`"abc"`

`"abc"`

String

`null`

`None`

None

`["v1", "v2", "v3"]`

`["v1", "v2", "v3"]`

List

`["v1", 3, 4.0]`

`["v1", 3, 4.0]`

List

`{"v1": 100, "v2": "good"}`

`{"v1": 100, "v2": "good"}`

Dictionary

`{"v1": {"v11": 100, "v2": 200}, "v3": "good"}`

`{"v1": {"v11": 100, "v2": 200}, "v3": "good"}`

Dictionary
