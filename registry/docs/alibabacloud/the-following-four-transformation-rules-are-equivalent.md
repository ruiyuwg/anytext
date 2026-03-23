The syntax, parameters, and examples of event processing functions.

## Functions

**Category**

**Function**

**Description**

Event operations

[e\_drop](#section-sn7-4pm-kly)

Discards a log based on a condition.

This function can be used with other functions. For more information, see [Replicate and distribute data](/help/en/sls/replicate-and-distribute-data#task-2036225).

[e\_keep](#section-yq7-h7k-wgh)

Retains a log based on a condition.

Both the e\_keep and e\_drop functions discard logs. The e\_keep function discards a log if a condition is not met. The e\_drop function discards a log if a condition is met.

```
# The following four transformation rules are equivalent.
e_if_else(e_search("f1==v1"), KEEP, DROP)
e_if_else(e_search("not f1==v1"), DROP) 
e_keep(e_search("f1==v1"))
e_drop(e_search("not f1==v1"))

# The following transformation rules are meaningless.
The following transformation rules have no effect and serve no purpose:   
e_keep()
```

This function can be used with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).

Event splitting

[e\_split](#section-urg-dob-o79)

Splits a log into multiple logs based on a log field value. It also supports extracting fields using JMESPath before splitting.

This function can be used with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).

Event output

[e\_output and e\_coutput](#section-zi7-wtp-30c)

Outputs a log to a specified Logstore. Configure the topic, source, tags, and shard hash information for the output log.

-   e\_output: When this function is executed, it outputs the log to the specified Logstore. Subsequent transformation rules are not executed on this log.
    
-   e\_coutput: When this function is executed, it outputs the log to the specified Logstore. Subsequent transformation rules continue to be executed on this log.
    

This function can be used with other functions. For more information, see [Aggregate log data from different Logstores into one Logstore](/help/en/sls/aggregate-data-from-multiple-source-logstores#concept-2022795).

Transforming events into time series data

[e\_to\_metric](#section-u7i-ymg-jzp)

Converts a log to the time series storage (Metricstore) format.

**Note**

After processing data into time series format, select a Metricstore as the destination when saving the transformation results.

The following is an example of typical time series data:

```
__labels__:host#$#myhost
__name__:rt
__time_nano__:1614739608000000000
__value__:123.0
```

For more information, see [Time series data (Metric)](/help/en/sls/metric#concept-2539048).

This function can be used with other functions. For more information, see [Convert log fields in a Logstore to metric measures in a Metricstore](/help/en/sls/convert-logs-to-metrics#task-2103433).

## e\_drop

Discards a log based on a condition.

-   ### Syntax
    
    ```
    e_drop(condition=True)
    ```
    
    The fixed identifier DROP is supported, which is equivalent to e\_drop().
    
-   ### Parameters
    
    **Parameter Name**
    
    **Type**
    
    **Required**
    
    **Description**
    
    condition
    
    Bool
    
    No
    
    The default value is True. The result of a conditional function is typically passed to this parameter.
    
-   ### Response
    
    Discards the log and returns None if the condition is met. Otherwise, returns the original log.
    
-   ### Examples
    
    -   Example 1: Discard the log if the value of the \_\_programe\_\_ field is access. Otherwise, retain the log.
        
        -   Raw Logs
            
            ```
            __programe__: access
            age:  18
            content:  123
            name:  maki
            
            __programe__: error
            age:  18
            content:  123
            name:  maki
            ```
            
        -   Transformation rule
            
            ```
            e_if(e_search("__programe__==access"), DROP)
            ```
            
        -   Result
            
            The log with the \_\_programe\_\_ field set to access is discarded. The log with the \_\_programe\_\_ field set to error is retained.
            
            ```
            __programe__: error
            age:  18
            content:  123
            name:  maki
            ```
            
    -   Example 2: The condition evaluates to True. The log is discarded.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_drop(e_search("k1==v1"))
            ```
            
        -   Result
            
            The log is discarded because the condition k1==v1 is True.
            
    -   Example 3: The condition evaluates to False. The log is retained.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_drop(e_search("not k1==v1"))
            ```
            
        -   Result
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
    -   Example 4: No condition is set. The default value True is used, and the log is discarded.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_drop()
            ```
            
        -   Result
            
            The log is discarded.
            
-   ### References
    
    This function can be used with other functions. For more information, see [Replicate and distribute data](/help/en/sls/replicate-and-distribute-data#task-2036225).
    

## e\_keep

Retains a log based on a condition.

-   ### Syntax
    
    ```
    e_keep(condition=True)
    ```
    
    The fixed identifier KEEP is supported, which is equivalent to e\_keep().
    
-   ### Parameters
    
    **Parameter Name**
    
    **Type**
    
    **Required**
    
    **Description**
    
    condition
    
    Bool
    
    No
    
    The default value is True. The result of a conditional function is typically passed to this parameter.
    
-   ### Response
    
    If the condition is met, the function returns the original log. If the condition is not met, the function discards the log.
    
-   ### Examples
    
    -   Example 1: Retain the log if the value of the `__programe__` field is access. Otherwise, discard the log.
        
        -   Raw Logs
            
            ```
            __programe__: access
            age:  18
            content:  123
            name:  maki
            __programe__: error
            age:  18
            content:  123
            name:  maki
            ```
            
        -   Transformation rule
            
            ```
            e_keep(e_search("__programe__==access"))
            # Equivalent to
            e_if(e_search("not __programe__==access"), DROP)
            # Equivalent to
            e_if_else(e_search("__programe__==access"), KEEP, DROP)  
            ```
            
        -   Result
            
            The log with the \_\_programe\_\_ field set to access is retained.
            
            ```
            __programe__: access
            age:  18
            content:  123
            name:  maki
            ```
            
    -   Example 2: The condition evaluates to True. The log is retained.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_keep(e_search("k1==v1"))
            ```
            
        -   Result
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
    -   Example 3: The condition evaluates to False. The log is discarded.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_keep(e_search("not k1==v1"))
            ```
            
        -   Result
            
            The log is discarded.
            
    -   Example 4: The condition is False. The log is discarded.
        
        -   Raw log
            
            ```
            k1: v1
            k2: v2
            k3: k1
            ```
            
        -   Transformation rule
            
            ```
            e_keep(False)
            ```
            
        -   Result
            
            The log is discarded.
            
-   ### References
    
    This function can be used with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).
    

## e\_split

Splits a log into multiple logs based on a log field value. It also supports extracting fields using JMESPath before splitting.

-   ### Syntax
    
    ```
    e_split(field_name, sep=',', quote='"', lstrip=True, jmes=None, output=None)
    ```
    
    Splitting rules:
    
    1.  If you specify the jmes parameter, the log field value is converted to a JSON list, and JMES is used to extract values for the next step. If you do not specify the jmes parameter, the field value is used directly in the next step.
        
    2.  If the value from the previous step is a list or a string in a JSON list format, the log is split based on this list. Otherwise, the value is parsed as a CSV file using the sep, quote, and lstrip parameters. The log is then split based on the parsed values.
        
    
-   ### Parameters
    
    **Parameter Name**
    
    **Type**
    
    **Required**
    
    **Description**
    
    field\_name
    
    String
    
    Yes
    
    The name of the field to split. For information about how to set special field names, see [Event types](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    sep
    
    String
    
    No
    
    The separator used to split multiple values.
    
    quote
    
    String
    
    No
    
    The quote character used to enclose values.
    
    lstrip
    
    String
    
    No
    
    Specifies whether to remove the spaces from the left of a value. The default value is True.
    
    jmes
    
    String
    
    No
    
    Converts the field value to a JSON object, uses JMES to extract a specific value, and then performs the split operation.
    
    output
    
    String
    
    No
    
    Sets a new field name. By default, the old field name is overwritten.
    
-   ### Response
    
    Returns a list of logs. The field values in the returned logs are the values from the source list.
    
-   ### Examples
    
    -   Raw Logs
        
        ```
        __topic__:
        age:  18
        content:  123
        name:  maki
        
        __topic__:
        age:  18
        content:  123
        name:  maki
        ```
        
    -   Transformation rule
        
        ```
        e_set("__topic__", "V_SENT,V_RECV,A_SENT,A_RECV")
        e_split("__topic__")
        ```
        
    -   Result
        
        ```
        __topic__:  A_SENT
        age:  18
        content:  123
        name:  maki
        
        __topic__:  V_RECV
        age:  18
        content:  123
        name:  maki
        
        ...
        ```
        
-   ### References
    
    This function can be used with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).
    

## Output Logstore

Outputs a log to a specified Logstore. Configure the topic, source, and tags for the output log.

-   ### Syntax
    
    ```
    e_output(name=None, project=None, logstore=None, topic=None, source=None, tags=None, hash_key_field=None, hash_key=None)
    e_coutput(name=None, project=None, logstore=None, topic=None, source=None, tags=None, hash_key_field=None, hash_key=None)
    ```
    
    In preview mode, logs are not sent to the destination Logstore. Instead, they are sent to the internal-etl-log Logstore. The internal-etl-log Logstore is a dedicated Logstore that is automatically created in the current project when you preview a data transformation job for the first time. You cannot modify the configuration of or write other data to this Logstore. This Logstore is free of charge.
    
-   ### Parameters
    
    **Note**
    
    If you specify the name, project, and Logstore parameters in the e\_output or e\_coutput function and also configure the destination project and database in the **Create Data Transformation Job** panel, the settings in the e\_output or e\_coutput function take precedence. The following describes the details:
    
    -   If you configure only the name parameter in the e\_output or e\_coutput function, the transformation results are distributed and stored in the destination Logstore that corresponds to the specified name.
        
    -   If you configure only the project and Logstore parameters in the e\_output function, the transformation results are distributed and stored in the destination Logstore that you specified in the e\_output function.
        
        If you use an AccessKey pair for authorization, the AccessKey pair of the current logon account is used during the transformation process.
        
    -   If you configure the name, project, and Logstore parameters in the e\_output function, the transformation results are distributed and stored in the destination Logstore that you specified in the e\_output function.
        
        If you use an AccessKey pair for authorization, the AccessKey pair specified for the destination name is used during the transformation process.
        
    
    **Parameter Name**
    
    **Type**
    
    **Required**
    
    **Description**
    
    name
    
    String
    
    No
    
    The name of the storage destination. The default value is None.
    
    project
    
    String
    
    No
    
    Outputs logs to an existing project.
    
    Logstore
    
    String
    
    No
    
    Outputs logs to an existing Logstore.
    
    topic
    
    String
    
    No
    
    Sets a new topic for the log.
    
    source
    
    String
    
    No
    
    Sets a new source for the log.
    
    tags
    
    Dict
    
    No
    
    Sets new tags for the log. Pass the tags in a dictionary format.
    
    **Note**
    
    You do not need to add the `__tag__:` prefix to keywords.
    
    hash\_key\_field
    
    String
    
    No
    
    Specifies a field name in the log. The data transformation job outputs the log to a specific shard of the storage destination based on the hash value of this field.
    
    **Note**
    
    If the specified field does not exist in the log, the system automatically switches to load balancing mode and randomly writes the log to a shard of the storage destination.
    
    hash\_key
    
    String
    
    No
    
    Specifies a hash value. The data transformation job outputs the log to a specific shard of the storage destination.
    
    **Note**
    
    The hash\_key\_field parameter has a higher priority than this parameter. If the hash\_key\_field parameter is already configured in the transformation syntax, this parameter does not take effect.
    
    -   Set the default storage destination
        
        When you use the e\_output or e\_coutput function, you must configure a default storage destination in the **Create Data Transformation Job** panel. Simple Log Service uses the storage destination with the label '1' as the default. For example, in the figure below, data that matches the e\_output transformation rule is delivered to the destination Logstores named target\_01, target\_02, and target\_03. Any other data that is not discarded during the transformation is stored in the default destination Logstore (target\_00).![默认存储目标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7444836061/p133427.png)
        
    -   Advanced parameter settings
        
        When you use the e\_output or e\_coutput function and the destination project or Logstore does not exist, go to the **Create Data Transformation Job** panel. In the **Advanced Parameter Settings** section, set key to config.sls\_output.failure\_strategy and value to {"drop\_when\_not\_exists":"true"} to skip the log. The skipped log is discarded and reported as a warning-level log. If you do not configure **Advanced Parameter Settings**, the data transformation job waits for the destination project and Logstore to be created before executing.
        
        **Warning**
        
        When you use **Advanced Parameter Settings**, logs are discarded if the destination project or Logstore does not exist. Use this feature with caution.
        
        ![高级参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2181813061/p133645.png)
        
    -   Results
        
        -   e\_output: Outputs the log to the specified Logstore. Subsequent transformation rules are not executed on this log.
            
        -   e\_coutput: Outputs the log to the specified Logstore. Subsequent transformation rules continue to be executed on this log.
            
-   ### Examples
    
    -   Example 1: If the value of the k2 field matches a regular expression, output the log to target2 and set the topic to topic1.
        
        -   Raw log
            
            ```
            __topic__:
            k1: v1
            k2: v2
            x1: v3
            x5: v4
            ```
            
        -   Transformation rule
            
            The `e_drop()` function is used here to discard data that is filtered by the `e_if()` function. If you do not add this function, the data that is filtered out is delivered to the default storage destination.
            
            ```
            e_if(e_match("k2", r"\w+"), e_output(name="target2", source="source1", topic="topic1"))
            e_drop()
            ```
            
        -   Result
            
            ```
            __topic__:  topic1
            k1: v1
            k2: v2
            x1: v3
            x5: v4
            ```
            
    -   Example 2: Calculate a hash based on the value of the db\_version field in the log. Output the log to a specific shard of the storage destination based on this hash value.
        
        -   Raw Logs
            
            ```
            __topic__:
            db_name: db-01
            db_version:5.6
            
            __topic__:
            db_name: db-02
            db_version:5.7
            ```
            
        -   Transformation rule
            
            ```
            e_output(name="target1", hash_key_field="db_version")
            ```
            
        -   Result
            
            ```
            # Assume the storage destination target1 has 2 shards.
            # The range of Shard 0 is [00000000000000000000000000000000,80000000000000000000000000000000).
            # The range of Shard 1 is [80000000000000000000000000000000,ffffffffffffffffffffffffffffffff).
            # The hash values for db_version values 5.6 and 5.7 are 0ebe1a34e990772a2bad83ce076e0766 and f1867131d82f2256b4521fe34aec2405, respectively.
            
            # Shard 0:
            __topic__:
            db_name: db-01
            db_version:5.6
            
            # Shard 1:
            __topic__:
            db_name: db-02
            db_version:5.7
            ```
            
    -   Example 3: Directly specify a hash value to output the log to a specific shard of the storage destination.
        
        -   Raw Logs
            
            ```
            __topic__:
            db_name: db-01
            db_version:5.6
            
            __topic__:
            db_name: db-02
            db_version:5.7
            ```
            
        -   Transformation rule
            
            ```
            e_output(name="target1", hash_key="00000000000000000000000000000000")
            ```
            
        -   Result
            
            ```
            # Assume the storage destination has 2 shards.
            # The range of Shard 0 is [00000000000000000000000000000000,80000000000000000000000000000000).
            # The range of Shard 1 is [80000000000000000000000000000000,ffffffffffffffffffffffffffffffff).
            
            # Shard 0:
            __topic__:
            db_name: db-01
            db_version:5.6
            
            __topic__:
            db_name: db-02
            db_version:5.7
            
            # Shard 1:
            None
            ```
            
-   ### References
    
    This function can be used with other functions. For more information, see [Aggregate log data from different Logstores into one Logstore](/help/en/sls/aggregate-data-from-multiple-source-logstores#concept-2022795).
    

## e\_to\_metric

Converts a log to the time series storage format.

-   ### Syntax
    
    ```
    e_to_metric(names=None, labels=None, time_field='__time__', time_precision='s', ignore_none_names=True, ignore_none_labels=True)
    ```
    
-   ### Parameters
    
    **Parameter Name**
    
    **Type**
    
    **Required**
    
    **Description**
    
    names
    
    String, StringList, or Tuple List
    
    Yes
    
    The metric name for the time series data. It can be a single string, a list of strings, or a list of tuples. Its value is the corresponding log field name.
    
    -   String: Converts a log field to a metric name for time series data. It contains a single string, such as rt. A time series data record containing `__name__:rt` is returned.
        
    -   StringList: Converts log fields to metric names for time series data. It contains multiple strings, such as \["rt", "qps"\]. Two time series data records are returned, containing `__name__:rt` and `__name__:qps` respectively.
        
    -   Tuple List: Converts multiple log fields to metric names for time series data and renames them. It contains multiple tuples, such as \[("rt","max\_rt"),("qps", "total\_qps")\]. The first element of the tuple is the original log field, and the second is the metric name field for the transformed time series data. Two time series data records are returned, containing `__name__:max_rt` and `__name__:total_qps` respectively.
        
    
    labels
    
    String, StringList, or Tuple List
    
    No
    
    The labels field for the time series data. It can be a single string, a list of strings, or a list of tuples. Its value is the corresponding log field name.
    
    **Note**
    
    In the following descriptions, host and app are log field names, and hostvalue and appvalue are log field values.
    
    -   String: Converts a log field to labels for time series data. It contains a single string, such as host. A time series data record containing `__label__:host#$#hostvalue` is returned.
        
    -   StringList: Converts log fields to labels for time series data. It contains multiple strings, such as \["host", "app"\]. Two time series data records are returned, containing `__label__:host#$#hostvalue` and `__label__:app#$#appvalue` respectively.
        
    -   Tuple List: Converts multiple log fields to labels for time series data and renames them. It contains multiple tuples, such as \[("host","hostname"),("app", "appname")\]. The first element of the tuple is the original log field, and the second is the labels field for the transformed time series data. Two time series data records are returned, containing `__label__:hostname#$#hostvalue` and `__label__:appname#$#appvalue` respectively.
        
    
    time\_field
    
    String
    
    No
    
    The time field for the time series data. By default, the `__time__` field in the log is used as the time field for the time series data.
    
    time\_precision
    
    Int
    
    No
    
    The time unit for the data timestamp field in raw logs can be seconds, milliseconds, microseconds, or nanoseconds. The default is seconds. For example, `time_field="ms"` specifies that the time unit of the raw log data is milliseconds.
    
    ignore\_none\_names
    
    Boolean
    
    No
    
    Specifies whether to ignore the conversion to time series data if the log field does not exist.
    
    -   True (default): Ignores the conversion. The data is not converted to time series data.
        
    -   False: Does not ignore the conversion. An error is reported if the field does not exist.
        
    
    ignore\_none\_labels
    
    Boolean
    
    No
    
    Specifies whether to ignore the conversion to time series data if the log field does not exist.
    
    -   True (default): Ignores the conversion. The data is not converted to time series data.
        
    -   False: Does not ignore the conversion. An error is reported if the field does not exist.
        
    
-   ### Response
    
    Returns time series data.
    
-   ### Examples
    
    -   Example 1: Convert a log that contains the rt field to the time series data format.
        
        -   Raw log
            
            ```
            __time__: 1614739608
            rt: 123
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(names="rt")
            ```
            
        -   Result
            
            ```
            __labels__:
            __name__:rt
            __time_nano__:1614739608000000000
            __value__:123.0
            ```
            
    -   Example 2: Convert a log that contains the rt field to the time series data format, and use the host field as a new label.
        
        -   Raw log
            
            ```
            __time__: 1614739608
            rt: 123
            host: myhost
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(names="rt", labels="host")
            ```
            
        -   Result
            
            ```
            __labels__:host#$#myhost
            __name__:rt
            __time_nano__:1614739608000000000
            __value__:123.0
            ```
            
    -   Example 3: Convert a log that contains the rt and qps fields to the time series data format, and use the host field as a new label.
        
        -   Raw log
            
            ```
            __time__: 1614739608
            rt: 123
            qps: 10
            host: myhost
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(names=["rt","qps"], labels="host")
            ```
            
        -   Result
            
            ```
            __labels__:host#$#myhost
            __name__:rt
            __time_nano__:1614739608000000000
            __value__:123.0
            
            __labels__:host#$#myhost
            __name__:qps
            __time_nano__:1614739608000000000
            __value__:10.0
            ```
            
    -   Example 4: Convert a log that contains the rt and qps fields to the time series data format, replace the field names with max\_rt and total\_qps, and use the host field as a new label.
        
        -   Raw log
            
            ```
            __time__: 1614739608
            rt: 123
            qps: 10
            host: myhost
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(names=[("rt","max_rt"),("qps","total_qps")], labels="host")
            ```
            
        -   Result
            
            ```
            __labels__:host#$#myhost
            __name__:max_rt
            __time_nano__:1614739608000000000
            __value__:123.0
            
            __labels__:host#$#myhost
            __name__:total_qps
            __time_nano__:1614739608000000000
            __value__:10.0
            ```
            
    -   Example 5: Convert a log that contains the rt and qps fields to the time series data format, replace the field names with max\_rt and total\_qps, and rename the host field to hostname to use as a new label.
        
        -   Raw log
            
            ```
            __time__: 1614739608
            rt: 123
            qps: 10
            host: myhost
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(names=[("rt","max_rt"),("qps","total_qps")], labels=[("host","hostname")])
            ```
            
        -   Result
            
            ```
            __labels__:hostname#$#myhost
            __name__:max_rt
            __time_nano__:1614739608000000000
            __value__:123.0
            
            __labels__:hostname#$#myhost
            __name__:total_qps
            __time_nano__:1614739608000000000
            __value__:10.0
            ```
            
    -   Example 6: Convert a log that contains the remote\_user1 and request\_length fields to the time series data format, replace the field names with remote\_user2 and request\_length1, and use the status1 field as a new label.
        
        -   Raw log
            
            ```
            __time__:1652943594
            remote_user:89
            request_length:4264
            request_method:GET
            status:200
            ```
            
        -   Transformation rule
            
            ```
            # The remote_user1 and status1 fields do not exist, so they are ignored and not converted.
            e_to_metric(
                names=[("remote_user1", "remote_user2"), ("request_length", "request_length1")],
                labels="status1",
                ignore_none_names=True,
                ignore_none_labels=True,
            )
            ```
            
        -   Result
            
            ```
            __labels__:
            __name__:request_length1
            __time_nano__:1652943594000000000
            __value__:4264.0
            ```
            
    -   Example 7: Convert a log that contains the remote\_user field to the time series data format, use the status field as a new label, and specify the time unit of the source log data as milliseconds.
        
        -   Raw log
            
            ```
            __time__:1652943594
            remote_user:89
            request_length:4264
            request_method:GET
            status:200
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(
                names="remote_user",
                labels="status",
                time_precision="ms",
                ignore_none_names=True,
                ignore_none_labels=True,
            )
            ```
            
        -   Result
            
            ```
            __labels__:status#$#200
            __name__:remote_user
            __time_nano__:1652943594000000
            __value__:89.0
            ```
            
    -   Example 8: Convert a log that contains the remote\_user field to the time series data format, use the status field as a new label, use the time field as the time field for the time series data, and specify the time unit of the source log data as nanoseconds.
        
        -   Raw log
            
            ```
            time:1652943594
            remote_user:89
            request_length:4264
            request_method:GET
            status:200
            ```
            
        -   Transformation rule
            
            ```
            e_to_metric(
                names="remote_user",
                labels="status",
                time_field="time",
                time_precision="ns",
                ignore_none_names=True,
                ignore_none_labels=True,
            )
            ```
            
        -   Result
            
            ```
            __labels__:status#$#200
            __name__:remote_user
            __time_nano__:1652943594
            __value__:89.0
            ```
            
-   ### References
    
    This function can be used with other functions. For more information, see [Convert log fields in a Logstore to metric measures in a Metricstore](/help/en/sls/convert-logs-to-metrics#task-2103433).
