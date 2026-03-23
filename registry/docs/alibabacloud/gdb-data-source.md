A Graph Database data source lets you read data from and write data to Graph Database. This topic describes the data synchronization capabilities for Graph Database in DataWorks.

## Limits

**Offline read**

**Offline write**

-   To export data from GDB, configure point tasks and edge tasks to export point data and edge data respectively.
    
-   Export tasks traverse data based on the type names of points or edges. Ensure the type names of the data to be exported are correct.
    
-   The primary key ID fields for points and edges in GDB are of the string type. Configure the export type as STRING. If you configure a numeric type such as LONG, the GDB Reader attempts to convert the data to the target type. If the conversion fails, the record is lost.
    
-   Configure the property values for GDB export to match the storage class. If the storage class and the configured type are inconsistent, the GDB Reader attempts to convert the data to the target type. A failed conversion may cause the record to be lost.
    
-   When you export a value from a SET property of a point, the same value is not guaranteed to be exported each time.
    
-   When all properties are exported in JSON format, a SET property that contains only one value is output as a regular property.
    
-   Unless otherwise specified, field names and enumeration values in the examples are case-sensitive.
    
-   The GDB server-side only supports the UTF-8 encoding format. All exported data is in UTF-8 format.
    
-   GDB must be upgraded to version 1.0.20 or later to support SET properties. When you use SET properties, confirm the instance version.
    

-   Run the sync task for points first. Upon successful execution, you can run the sync task for edges.
    
-   Points have the following constraints:
    
    -   A point must have a type name (point name), which corresponds to the label.
        
    -   The primary key ID of a point is required. It must be unique among all points and must be of the STRING type. If it is not a STRING type, the GDB Writer plugin performs a forced conversion.
        
    -   Choose the mapping rule idTransRule for the primary key of a point with caution. If you select none, the point ID must be unique among all points globally.
        
-   Edges have the following constraints:
    
    -   An edge must have a type name (edge name), which corresponds to the label.
        
    -   The primary key ID of an edge is optional.
        
        -   If specified, it must be unique among all edges globally.
            
        -   If not specified, the GDB server-side generates a UUID by default. The type must be STRING. If it is not a STRING type, the GDB Writer plugin performs a forced conversion.
            
    -   Choose the mapping rule idTransRule for the primary key of an edge with caution. If you select none, the edge ID must be unique among all points and edges globally.
        
    -   For an edge, you must select srcIdTransRule and dstIdTransRule. These rules must be consistent with the idTransRule selected when importing points.
        
-   Unless otherwise specified, field names and enumeration values in the examples are case-sensitive.
    
-   Currently, the GDB server-side only supports the UTF-8 encoding format. The source data must also be in UTF-8 format.
    
-   Due to network restrictions, you can only use a [serverless resource group (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828) to run data integration tasks. Purchase and attach the virtual private cloud (VPC) where your GDB instance resides in advance.
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configuration guide for an offline sync task for a single table

-   For more information, see [Codeless UI configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Code editor configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For the parameters and a script demo for the code editor, see [Appendix: Script demo and parameter description](#section-mgh-31y-8eq).
    

## Appendix: Script demo and parameter description

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

When configuring a data synchronization job to write data to GDB, you must configure the points and edges separately:

-   Point configuration example
    
    ```
    {
        "order":{
            "hops":[
                {
                    "from":"Reader",
                    "to":"Writer"
                }
            ]
        },
        "setting":{
            "errorLimit":{
                "record":"100"  // The number of error records. This indicates the maximum number of dirty data records that are tolerated.
            },
            "jvmOption":"",
            "speed":{
                "concurrent":3,
                "throttle":true,/// If throttle is set to false, the mbps parameter does not take effect, which means that the rate is not limited. If throttle is set to true, the rate is limited.
                "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
            }
        },
        "steps":[
            {
                "category":"reader",
                "name":"Reader",
                "parameter":{
                    "host": "gdb-xxxxxx.aliyuncs.com", // The endpoint of the GDB instance.
                    "port": 8182, // The port of the GDB instance.
                    "username": "gdb", // The username for the GDB instance.
                    "password": "gdb", // The password that corresponds to the username for the GDB instance.
                    "labelType": "VERTEX", // The label type. VERTEX indicates a point.
                    "labels": ["label1", "label2"],  // A list of label names. An empty list indicates that all points are exported.
                    "column": [
                        {
                            "name": "id",               // The field name.
                            "type": "string",           // The field type.
                            "columnType": "primaryKey"  // The field categorization. This indicates the primary key ID of the point. In GDB, the type is STRING.
                        },
                        {
                            "name": "label",              // The field name.
                            "type": "string",             // The field type.
                            "columnType": "primaryLabel"  // The field categorization. This indicates the label name of the point. In GDB, the type is STRING.
                        },
                        {
                            "name": "age",                   // The property field name.
                            "type": "int",                   // The property field type.
                            "columnType": "vertexProperty"   // The field categorization. This indicates a property of the point. In GDB, this is a basic type property.
                        }
                    ]
                },
                "stepType":"gdb"
            },
            {
                "category":"writer",
                "name":"Writer",
                "parameter":{
                    "print": true
                },
                "stepType":"stream"
            }
        ]
    }
    ```
    
-   Edge configuration example
    
    ```
    {
        "order":{
            "hops":[
                {
                    "from":"Reader",
                    "to":"Writer"
                }
            ]
        },
        "setting":{
            "errorLimit":{
                "record":"100"  // The number of error records. This indicates the maximum number of dirty data records that are tolerated.
            },
            "jvmOption":"",
            "speed":{
                "concurrent":3,
                "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means that the rate is not limited. If throttle is set to true, the rate is limited.
                "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
            }
        },
        "steps":[
            {
                "category":"reader",
                "name":"Reader",
                "parameter":{
                    "host": "gdb-xxxxxx.aliyuncs.com", // The endpoint of the GDB instance.
                    "port": 8182, // The port of the GDB instance.
                    "username": "gdb", // The username for the GDB instance.
                    "password": "gdb", // The password that corresponds to the username for the GDB instance.
                    "labelType": "EDGE", // The label type. EDGE indicates an edge.
                    "labels": ["label1", "label2"],  // A list of label names. An empty list indicates that all edges are exported.
                    "column": [
                        {
                            "name": "id",               // The field name.
                            "type": "string",           // The field type.
                            "columnType": "primaryKey"  // The field categorization. This indicates the primary key ID of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "label",              // The field name.
                            "type": "string",             // The field type.
                            "columnType": "primaryLabel"  // The field categorization. This indicates the label name of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "srcId",               // The field name.
                            "type": "string",              // The field type.
                            "columnType": "srcPrimaryKey"  // The field categorization. This indicates the ID of the source point of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "srcLabel",               // The field name.
                            "type": "string",                 // The field type.
                            "columnType": "srcPrimaryLabel"   // The field categorization. This indicates the label name of the source point of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "dstId",                    // The field name.
                            "type": "string",                   // The field type.
                            "columnType": "dstPrimaryKey"       // The field categorization. This indicates the ID of the destination point of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "dstLabel",                 // The field name.
                            "type": "string",                   // The field type.
                            "columnType": "dstPrimaryLabel"     // The field categorization. This indicates the label name of the destination point of the edge. In GDB, the type is STRING.
                        },
                        {
                            "name": "weight",               // The property field name.
                            "type": "double",               // The property field type.
                            "columnType": "edgeProperty"    // The field categorization. This indicates a property of the edge.
                        }
                    ]
                },
                "stepType":"gdb"
            },
            {
                "category":"writer",
                "name":"Writer",
                "parameter":{
                    "print": true
                },
                "stepType":"stream"
            }
        ]
    }
    ```
    

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

host

The domain name used to connect to the GDB instance. In the Graph Database console, click **Manage** next to the instance to view the **Internal Endpoint** (host).

Yes

None

port

The port used to connect to the GDB instance.

Yes

8182

username

The account name for the GDB instance.

Yes

None

password

The password for the GDB instance account.

Yes

None

labels

The type name, which is the name of the point or edge. You can read data with multiple names. Use an array, such as \`\["label1", "label2"\]\`.

Yes

None

labelType

The label type of the data:

-   The enumeration value VERTEX indicates a point.
    
-   The enumeration value EDGE indicates an edge.
    

Yes

None

column

The field mapping configuration for points or edges.

Yes

None

column -> name

The field name for the point or edge mapping. This is required when you read properties. Provide the property name.

Yes

None

column -> type

The type of the field value for the point or edge mapping:

-   The transformation will fail if you configure the primary key ID and the Label as the STRING type, because they are already STRING types in GDB.
    
-   Regular properties support types such as INT, LONG, FLOAT, DOUBLE, BOOLEAN, and STRING.
    
-   The GDB Reader attempts to convert the read data to the configured type. If the conversion fails, the record is marked as an error.
    

Yes

None

column -> columnType

The mapping field for GDB point or edge data. It includes the following enumeration values:

-   Common enumeration values:
    
    -   primaryKey: Indicates that this field is the primary key ID.
        
    -   primaryLabel: Indicates that this field is the name label.
        
-   Enumeration values for points:
    
    -   vertexProperty: When labelType is point, this indicates that the field is a property of the point.
        
    -   vertexJsonProperty: When labelType is point, this indicates that the field is a collection of point properties encapsulated in JSON format. When this type is configured, all properties are packaged into this column. The column cannot contain other property types.
        
        The format of vertexJsonProperty is as follows.
        
        ```
        {
            "properties":[
                {"k":"name","t":"string","v":"tom","c":"set"},
                {"k":"name","t":"string","v":"jack","c":"set"},
                {"k":"sex","t":"string","v":"male","c":"single"}
            ]
        }
                                                            
        ```
        
        The exported properties above include the multi-valued property name, which has two property values, and one single-valued property. If a multi-valued property in GDB contains only one value, it is exported as a single-valued property.
        
-   Enumeration values for edges when labelType is set to edge:
    
    -   srcPrimaryKey: Indicates that this field is the primary key ID of the source point.
        
    -   dstPrimaryKey: Indicates that this field is the primary key ID of the destination point.
        
    -   srcPrimaryLabel: Indicates that this field is the name label of the source point.
        
    -   dstPrimaryLabel: Indicates that this field is the name label of the destination point.
        
    -   edgeProperty: Indicates that this field is a property of the edge.
        
    -   edgeJsonProperty: Indicates that this field is a collection of edge properties encapsulated in JSON format. When this type is configured, all properties are packaged into this column. The column cannot contain other property types.
        
        The format of edgeJsonProperty is as follows.
        
        ```
        {
            "properties":[
                {"k":"name","t":"string","v":"tom"},
                {"k":"sex","t":"string","v":"male"}
        ]
        }
                                                            
        ```
        
        Edges do not support multi-valued properties. There is no c field.
        

Yes

None

### Writer script demo

-   Point configuration example
    
    ```
    {
        "order":{
            "hops":[
                {
                    "from":"Reader",
                    "to":"Writer"
                }
            ]
        },
        "setting":{
            "errorLimit":{
                "record":"100"  // The number of error records. This indicates the maximum number of dirty data records that are tolerated.
            },
            "speed":{
                 "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means that the rate is not limited. If throttle is set to true, the rate is limited.
                "concurrent":3, // The concurrency of the job.
                "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
            }
        },
        "steps":[
            {
                "category":"reader",
                "name":"Reader",
                "parameter":{
                    "column":[
                        "*"
                    ],
                    "datasource":"_ODPS",
                    "emptyAsNull":true,
                    "guid":"",
                    "isCompress":false,
                    "partition":[],
                    "table":""
                },
                "stepType":"odps"
            },
            {
                "category":"writer",
                "name":"Writer",
                "parameter": {
                    "datasource": "testGDB", // The name of the data source.
                    "label": "person", // The label name, which is the point name.
                    "srcLabel": "", // This field can be ignored for point types.
                    "dstLabel": "", // This field can be ignored for point types.
                    "labelType": "VERTEX", // The label type. "VERTEX" indicates a point.
                    "writeMode": "INSERT", // The method for handling duplicate IDs during import.
                    "idTransRule": "labelPrefix", // The transform rule for the primary key of the point.
                    "srcIdTransRule": "none", // This field can be ignored for point types.
                    "dstIdTransRule": "none", // This field can be ignored for point types.
                    "column": [
                        {
                            "name": "id", // The field name.
                            "value": "#{0}", // #{0} indicates the value of the first field from the source. Concatenation is supported. 0 is the index of the source column.
                            "type": "string", // The field type.
                            "columnType": "primaryKey" // The field categorization. primaryKey indicates the primary key.
                        }, // The primary key of the point. The field name must be id and the type must be STRING. This record must exist.
                        {
                            "name": "person_age",
                            "value": "#{1}", // #{1} indicates the value of the second field from the source. Concatenation is also supported.
                            "type": "int",
                            "columnType": "vertexProperty" // The field categorization. vertexProperty indicates a property of the point.
                        }, // A property of the point. It supports INT, LONG, FLOAT, DOUBLE, BOOLEAN, and STRING types.
                        {
                            "name": "person_credit",
                            "value": "#{2}", // #{2} indicates the value of the third field from the source. Concatenation is also supported.
                            "type": "string",
                            "columnType": "vertexProperty"
                        }, // A property of the point.
                    ]
                }
                "stepType":"gdb"
            }
        ],
        "type":"job",
        "version":"2.0"
    }
    ```
    
-   Edge configuration example
    
    ```
    {
        "order":{
            "hops":[
                {
                    "from":"Reader",
                    "to":"Writer"
                }
            ]
        },
        "setting":{
            "errorLimit":{
                "record":"100" // The number of error records. This indicates the maximum number of dirty data records that are tolerated.
            },
            "jvmOption":"",
            "speed":{
                "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means that the rate is not limited. If throttle is set to true, the rate is limited.
                "concurrent":3, // The concurrency of the job.
                "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
            }
        },
        "steps":[
            {
                "category":"reader",
                "name":"Reader",
                "parameter":{
                    "column":[
                        "*"
                    ],
                    "datasource":"_ODPS",
                    "emptyAsNull":true,
                    "guid":"",
                    "isCompress":false,
                    "partition":[],
                    "table":""
                },
                "stepType":"odps"
            },
            {
                "category":"writer",
                "name":"Writer",
                "parameter": {
                    "datasource": "testGDB", // The name of the data source.
                    "label": "use", // The label name, which is the edge name.
                    "labelType": "EDGE", // The label type. EDGE indicates an edge.
                    "srcLabel": "person", // The name of the source point.
                    "dstLabel": "software", // The name of the destination point.
                    "writeMode": "INSERT", // The method for handling duplicate IDs during import.
                    "idTransRule": "labelPrefix", // The transform rule for the primary key of the edge.
                    "srcIdTransRule": "labelPrefix", // The transform rule for the primary key of the source point.
                    "dstIdTransRule": "labelPrefix", // The transform rule for the primary key of the destination point.
                    "column": [
                        {
                            "name": "id", // The field name.
                            "value": "#{0}", // #{0} indicates the value of the first field from the source. Concatenation is supported.
                            "type": "string", // The field type.
                            "columnType": "primaryKey" // The field categorization. primaryKey indicates that this field is the primary key.
                        }, // The primary key of the edge. The field name must be id and the type must be STRING. This record is optional.
                        {
                            "name": "id",
                            "value": "#{1}", // Concatenation is supported. The mapping rule must be consistent with the one used when the point was entered.
                            "type": "string",
                            "columnType": "srcPrimaryKey" // The field categorization. srcPrimaryKey indicates the primary key of the source point.
                        }, // The primary key of the source point. The field name must be id and the type must be STRING. This record must exist.
                        {
                            "name": "id",
                            "value": "#{2}", // Concatenation is supported. The mapping rule must be consistent with the one used when the point was entered.
                            "type": "string",
                            "columnType": "dstPrimaryKey" // The field categorization. dstPrimaryKey indicates the primary key of the destination point.
                        }, // The primary key of the destination point. The field name must be id and the type must be STRING. This record must exist.
                        {
                            "name": "person_use_software_time",
                            "value": "#{3}", // Concatenation is supported.
                            "type": "long",
                            "columnType": "edgeProperty" // The field categorization. edgeProperty indicates a property of the edge.
                        }, // A property of the edge. It supports INT, LONG, FLOAT, DOUBLE, BOOLEAN, and STRING types.
                        {
                            "name": "person_regist_software_name",
                            "value": "#{4}", // Concatenation is supported.
                            "type": "string",
                            "columnType": "edgeProperty"
                        }, // An edge property.
                        {
                            "name": "id",
                            "value": "#{5}", // Concatenation is supported.
                            "type": "long",
                            "columnType": "edgeProperty"
                        }, // A property of the edge. The field name is id. Unlike the primary key ID, this field is a regular property and is optional.
                    ]
                }
                "stepType":"gdb"
            }
        ],
        "type":"job",
        "version":"2.0"
    }
    ```
    

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The code editor supports adding data sources. The value of this configuration item must be the same as the name of the added data source.

Yes

None

label

The type name, which is the name of the point or edge.

The label can be read from a source column. For example, \`#{0}\` indicates that the first column is used as the label name. The source column index starts from 0.

Yes

None

labelType

The type of the label:

-   The enumeration value VERTEX indicates a point.
    
-   The enumeration value EDGE indicates an edge.
    

Yes

None

srcLabel

-   If the label is an edge, this parameter specifies the name of the source point.
    
    If the label is an edge and srcIdTransRule is none, this parameter is optional. Otherwise, it is required.
    
-   If the label is a point, do not specify this parameter.
    

No

None

dstLabel

-   If the label is an edge, this parameter specifies the name of the destination point.
    
    If the label is an edge and dstIdTransRule is none, this parameter is optional. Otherwise, it is required.
    
-   If the label is a point, do not specify this parameter.
    

No

None

writeMode

The processing mode for duplicate IDs during import.

-   The enumeration value INSERT reports an error and increments the error record count by 1.
    
-   The enumeration value MERGE overwrites the old value with the new value.
    

Yes

INSERT

idTransRule

The transform rule for the primary key ID.

-   The enumeration value labelPrefix transforms the mapped value to `{label_name}-{source_field}`.
    
-   The enumeration value none indicates that the mapped value is not transformed.
    

Yes

none

srcIdTransRule

If the label is an edge, this parameter specifies the transform rule for the primary key ID of the source point.

-   The enumeration value labelPrefix transforms the mapped value to `{label_name}-{source_field}`.
    
-   The enumeration value none indicates that the mapped value is not transformed. In this case, you do not need to specify srcLabel.
    

Required if label is an edge

none

dstIdTransRule

If the label is an edge, this parameter specifies the transform rule for the primary key ID of the destination point.

-   The enumeration value labelPrefix transforms the mapped value to `{label_name}-{source_field}`.
    
-   The enumeration value none indicates that the mapped value is not transformed. In this case, you do not need to specify dstLabel.
    

Required if label is an edge

none

column

The field mapping configuration for points or edges.

-   name: The field name of the point or edge.
    
-   value: The mapped value of the point or edge field. Only the code editor supports custom string concatenation.
    
    -   #{N} directly maps the source value. N is the index of the source column, starting from 0.
        
    -   #{0} maps the first field of the source column.
        
    -   test-#{0} concatenates and transforms the source value. You can add fixed strings before or after the #{0} value.
        
    -   #{0}-#{1} concatenates multiple fields. You can also add fixed strings at any position, such as `test-#{0}-test1-#{1}-test2`.
        
-   type: The type of the mapped value for the point or edge field.
    
    The primary key ID only supports the STRING type. The GDB Writer performs a forced conversion. The source ID must be convertible to the STRING type.
    
    Regular properties support the following types: INT, LONG, FLOAT, DOUBLE, BOOLEAN, and STRING.
    
-   columnType: The categorization of the mapped field for the point or edge. The supported enumeration values are as follows.
    
    -   Common enumeration values
        
        primaryKey: If the label is a point or an edge, this indicates that the field is the primary key ID.
        
    -   Enumeration values for points
        
        -   vertexProperty: If the label is a point, this indicates that the field is a regular property of the point.
            
        -   vertexJsonProperty: If the label is a point, this indicates a JSON property of the point. For the structure of the value, see the properties example.
            
    -   Enumeration values for edges
        
        -   srcPrimaryKey: If the label is an edge, this indicates that the field is the primary key ID of the source point.
            
        -   dstPrimaryKey: If the label is an edge, this indicates that the field is the primary key ID of the destination point.
            
        -   edgeProperty: If the label is an edge, this indicates that the field is a regular property of the edge.
            
        -   edgeJsonProperty: If the label is an edge, this indicates a JSON property of the edge. For the structure of the value, see the properties example.
            

properties example

```
{"properties":[
    {"k":"name","t":"string","v":"tom"},
    {"k":"age","t":"int","v":"20"},
    {"k":"sex","t":"string","v":"male"}
]}
```

Yes

None
