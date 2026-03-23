This topic describes the syntax and parameters of value extraction functions. This topic also provides examples on how to use the functions.

## Functions

  

Category

Function

Description

Extraction based on regular expressions

[e\_regex](#section-1rn-crw-ur9)

Extracts the value of a field based on a regular expression and assigns the value to other fields.

This function can be used together with other functions. For more information, see [Parse Java error logs](/help/en/sls/parse-java-error-logs#task-2103247 "In big data scenarios that require high concurrency, effective analysis of Java error logs can reduce the O&M costs of Java applications. You can use Log Service to collect Java error logs from Alibaba Cloud services and use the data transformation feature to parse the collected logs.").

Extraction based on JSON objects

[e\_json](#section-o7x-7rl-2qh)

Performs operations on JSON objects in a specified field. You can configure the parameters to expand JSON data, extract JSON data by using the JMESPath expression, or expand the extracted JSON data.

This function can be used together with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996 "This topic describes how to use the data transformation feature of Log Service to transform complex JSON data.").

Extraction by using delimiters

[e\_csv, e\_psv, and e\_tsv](#section-ffl-ywn-her)

Extracts multiple fields from a specified field by using a specified delimiter and predefined field names.

-   e\_csv: uses a comma (,) as the default delimiter.
-   e\_psv: uses a vertical bar (|) as the default delimiter.
-   e\_tsv: uses a tab (\\t) as the default delimiter.

This function can be used together with other functions. For more information, see [Parse log entries in a CSV-format log file](/help/en/sls/parse-log-entries-in-a-csv-format-log-file#concept-2038737 "This topic describes how to parse log entries in a CSV-format log file, for example, a syslog file.").

Extraction of key-value pairs

[e\_kv](#section-n3z-qjb-xpp)

Extracts key-value pairs from multiple input fields by using a specified quote.

This function can be used together with other functions. For more information, see [Extract dynamic key-value pairs from a string](/help/en/sls/extract-dynamic-key-value-pairs-from-a-string#concept-2038408 "This topic describes how to extract dynamic key-value pairs from a string by using different functions.").

[e\_kv\_delimit](#section-1xc-xaw-0ph)

Extracts key-value pairs from input fields by using a specified delimiter.

Extraction based on the syslog protocol

[e\_syslogrfc](#section-fsa-oy2-ye3)

Calculates the values of the facility and severity fields and returns the value of the facilitylabel field that indicates level information. The function calculates the values based on the value of the priority field and the specified syslog protocol.

This function can be used together with other functions. For more information, see [Parse Syslog messages in standard formats](/help/en/sls/parse-syslog-messages-in-standard-formats#concept-2022810 "Syslog is an industry-standard protocol that can be used to record device logs. Syslog is commonly used in network management tools, security management systems, and log audit systems. This topic describes how to use the Grok function in the Domain Specific Language (DSL) of Log Service to parse Syslog messages in different formats.").

Extraction based on specified rules

[e\_anchor](#section-ud8-v7y-3rt)

Extracts strings by using the rules specified by anchor\_rules.

## e\_regex

The e\_regex function extracts the value of a field based on a regular expression and assigns the value to other fields.

-   ### Syntax
    
    ```
    e_regex(key,Regular expression,fields_info,mode="fill-auto",pack_json=None)
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    key
    
    Arbitrary
    
    Yes
    
    The name of the input field. If the field that you specify does not exist, no operations are performed. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    Regular expression
    
    String
    
    Yes
    
    The regular expression that is used to extract the value of the field. Regular expressions that contain capturing groups and non-capturing groups are supported.
    
    **Note** Regular expressions that contain non-capturing groups are used in some scenarios. A non-capturing group uses a prefix that consists of a question mark and a colon (`?:`). Example: `\w+@\w+\.\w(?:\.\cn)?`. For more information about non-capturing groups, see [Non-capturing group](/help/en/sls/regular-expressions#section-5n0-k98-uys).
    
    fields\_info
    
    String/ List/ Dict
    
    No
    
    The names of the fields to which the extracted value is assigned. If you do not specify named capturing groups in the regular expression, you must configure this parameter.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: fill-auto. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
    pack\_json
    
    String
    
    No
    
    The field into which the fields specified by fields\_info are packed. Default value: None, which indicates that no fields are packed.
    
-   ### Response
    
    A log that contains new field values is returned.
    
-   ### Examples
    
    -   Example 1: Extract a value that matches the specified regular expression from a field.
        -   Raw log:
            
            ```
            msg: 192.168.0.1 http://... 127.0.0.0
            ```
            
        -   Transformation rule:
            
            ```
            # Extract the first IP address from the msg field.  
            e_regex("msg",r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}","ip")
            ```
            
        -   Result:
            
            ```
            msg: 192.168.0.1 http://... 127.0.0.0
            ip: 192.168.0.1
            ```
            
    -   Example 2: Extract multiple values that match the specified regular expression from a field.
        -   Raw log:
            
            ```
            msg: 192.168.0.1 http://... 127.0.0.0
            ```
            
        -   Transformation rule:
            
            ```
            # Extract two IP addresses from the msg field and assign one IP address to server_ip and the other IP address to client_ip. 
            e_regex("msg",r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}",["server_ip","client_ip"])
            ```
            
        -   Result:
            
            ```
            msg: 192.168.0.1 http://... 127.0.0.0
            server_ip: 192.168.0.1
            client_ip: 127.0.0.0
            ```
            
    -   Example 3: Use a capturing group to extract multiple values that match the specified regular expression from a field.
        -   Raw log:
            
            ```
            content: start sys version: deficience, err: 2
            ```
            
        -   Transformation rule:
            
            ```
            # Extract the values for version and error from the content field by including a capturing group in the regular expression. 
            e_regex("content",r"start sys version: (\w+),\s*err: (\d+)",["version","error"])
            ```
            
        -   Result:
            
            ```
            content: start sys version: deficience, err: 2
            error: 2
            version: deficience
            ```
            
    -   Example 4: Use a named capturing group to extract multiple values from a field.
        -   Raw log:
            
            ```
            content:  start sys version: deficience, err: 2
            ```
            
        -   Transformation rule:
            
            ```
            e_regex("content",r"start sys version: (?P<version>\w+),\s*err: (?P<error>\d+)")
            ```
            
        -   Result:
            
            ```
            content:  start sys version: deficience, err: 2
            error:  2
            version:  deficience
            ```
            
    -   Example 5: Use a capturing group in the specified regular expression to extract the value of the dict field and dynamically generate a field name for the value and reformat the value.
        -   Raw log:
            
            ```
            dict: verify:123
            ```
            
        -   Transformation rule:
            
            ```
            e_regex("dict",r"(\w+):(\d+)",{r"k_\1": r"v_\2"})
            ```
            
        -   Result:
            
            ```
            dict: verify:123
            k_verify: v_123
            ```
            
    -   Example 6: Extract a value that matches the specified regular expression from a field and pack the result into the name field.
        -   Raw log:
            
            ```
            msg: 192.168.0.1 http://... 127.0.0.0
            ```
            
        -   Transformation rule:
            
            ```
            e_regex("msg", r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}", "ip", pack_json="name")
            ```
            
        -   Result:
            
            ```
            msg:192.168.0.1 http://... 127.0.0.0
            name:{"ip": "192.168.0.1"}
            ```
            
    -   Example 7: Use the specified regular expression to extract the value of the dict field, dynamically generate a field name for the value and reformat the value, and then pack the result into the name field.
        -   Raw log:
            
            ```
            dict: x:123, y:456, z:789
            ```
            
        -   Transformation rule:
            
            ```
            e_regex("dict", r"(\w+):(\d+)", {r"k_\1": r"v_\2"}, pack_json="name")
            ```
            
        -   Result:
            
            ```
            dict:x:123, y:456, z:789
            name:{"k_x": "v_123", "k_y": "v_456", "k_z": "v_789"}
            ```
            
    -   Example 8: Use a capturing group to extract multiple values that match the specified regular expression and pack the result into the name field.
        -   Raw log:
            
            ```
            content: start sys version: deficience, err: 2
            ```
            
        -   Transformation rule:
            
            ```
            e_regex( "content", r"start sys version: (\w+),\s*err: (\d+)", ["version", "error"],pack_json="name")
            ```
            
        -   Result:
            
            ```
            content:start sys version: deficience, err: 2
            name:{"version": "deficience", "error": "2"}
            ```
            
-   ### References
    
    This function can be used together with other functions. For more information, see [Parse Java error logs](/help/en/sls/parse-java-error-logs#task-2103247 "In big data scenarios that require high concurrency, effective analysis of Java error logs can reduce the O&M costs of Java applications. You can use Log Service to collect Java error logs from Alibaba Cloud services and use the data transformation feature to parse the collected logs.").
    

## e\_json

The e\_json function performs operations on JSON objects in a specified field. You can configure the parameters to expand JSON data, extract JSON data by using the JMESPath expression, or expand the extracted JSON data.

-   ### Syntax
    
    ```
    e_json(key, expand=None, depth=100, prefix="__", suffix="__", fmt="simple", sep=".", 
         expand_array=True, fmt_array="{parent}_{index}", 
         include_node=r"[\u4e00-\u9fa5\u0800-\u4e00a-zA-Z][\w\-\.]*",  
         exclude_node="", include_path="", exclude_path="",
         jmes="", output="", jmes_ignore_none=False, mode='fill-auto'
    )
    ```
    
    **Note** If you use the e\_json function to parse a string that does not follow the JSON syntax, the function does not parse the string and returns the original string.
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    key
    
    String
    
    Yes
    
    The name of the input field. If the field that you specify does not exist, no operations are performed. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    expand
    
    Boolean
    
    No
    
    Specifies whether to expand the input field.
    
    -   If you do not configure the jmes parameter, the value True is used for the expand parameter by default. The value True indicates that the input field is expanded.
    -   If you configure the jmes parameter, the value False is used for the expand parameter by default. The value False indicates that the input field is not expanded.
    
    depth
    
    Number
    
    No
    
    The depth to which the function expands the input field. Valid values: 1 to 2000. Default value: 100. The value 1 indicates that only the first level of the field is expanded.
    
    prefix
    
    String
    
    No
    
    The prefix that you want to add to an expanded field.
    
    suffix
    
    String
    
    No
    
    The suffix that you want to add to an expanded field.
    
    fmt
    
    String
    
    No
    
    The formatting method of an expanded field. Valid values:
    
    -   simple: The name of the current node is used as the field name. This is the default value. The format is `{prefix}{current}{suffix}`.
    -   full: The name of the current node and the names of all parent nodes are combined and used as the field name. The format is `{parent_list_str}{sep}{prefix}{current}{suffix}`. The delimiter is specified by the `sep` parameter. The default delimiter is a period (`.`).
    -   parent: The name of the current node and the name of the nearest parent node are combined and used as the field name. The format is `{parent}{sep}{prefix}{current}{suffix}`. The delimiter is specified by the `sep` parameter. The default delimiter is a period (`.`).
    -   root: The name of the current node and the name of the root node are combined and used as the field name. The format is `{parent_list[0]}{sep}{prefix}{current}{suffix}`. The delimiter is specified by the `sep` parameter. The default delimiter is a period (`.`).
    
    sep
    
    String
    
    No
    
    The delimiter that is used to separate parent and child nodes when the function formats data. If you set the `fmt` parameter to full, parent, or root, you must configure this parameter. Default value: `.`.
    
    expand\_array
    
    Boolean
    
    No
    
    Specifies whether to expand the input field into an array. Default value: `True`, which indicates that the input field is expanded into an array.
    
    fmt\_array
    
    String
    
    No
    
    The formatting method that is used to expand the input field into an array. The format is `{parent_rlist[0]}_{index}`. You can also use up to five of the following placeholders to expand the input field: `parent_list`, `current`, `sep`, `prefix`, and `suffix`.
    
    include\_node
    
    String/ Number
    
    No
    
    The whitelist of node names based on which filtering is performed. By default, node names that contain digits, letters, `underscores (_), periods (.), and hyphens (-)` are automatically expanded.
    
    exclude\_node
    
    String
    
    No
    
    The blacklist of node names based on which filtering is performed.
    
    include\_path
    
    String
    
    No
    
    The whitelist of node paths based on which filtering is performed.
    
    exclude\_path
    
    String
    
    No
    
    The blacklist of node paths based on which filtering is performed.
    
    jmes
    
    String
    
    No
    
    The JMESPath expression that is used to convert field values to JSON objects and extract a specific value.
    
    output
    
    String
    
    No
    
    The field name that is returned for the value extracted by using the JMESPath expression.
    
    jmes\_ignore\_none
    
    Boolean
    
    No
    
    Specifies whether to skip a field if the value of the field cannot be extracted by using the JMESPath expression. Default value: True, which indicates that a field is skipped if the value of the field cannot be extracted by using the JMESPath expression. If you specify False for the jmes\_ignore\_none parameter, an empty string is returned in the same situation.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: fill-auto. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
    -   JSON field expanding and filtering
        -   If a whitelist of node names is specified, only the node names included in the whitelist are returned. For example, `e_json("json_data_filed", ...., include_node=r'key\d+')` specifies a whitelist of node names in the regular expression.
        -   If a blacklist of node names is specified, only the node names included in the blacklist are not returned. For example, `e_json("json_data_filed", ...., exclude_node=r'key\d+')` specifies a blacklist of node names in the regular expression.
        -   The regular expressions `include_path` and `exclue_path` are used to match node paths from the beginning. Periods (`.`) are used to separate the paths that match the regular expressions.
    -   JMESPath-based filtering
        
        JMESPath expressions are used to select and compute data.
        
        -   Select a list of element attributes from a specified JSON path: `e_json(..., jmes="cve.vendors[*].product",output="product")`.
        -   Concatenate element attributes from a specified JSON path by using commas (,): `e_json(..., jmes="join(',', cve.vendors[*].name)",output="vendors")`.
        -   Calculate the maximum value of each attribute for each element in a specified JSON path: `e_json(..., jmes="max(words[*].score)",output="hot_word")`.
        -   Return an empty string if a specified JSON path does not exist or is empty: `e_json(..., jmes="max(words[*].score)",output="hot_word", jmes_ignore_none=False)`.
        
    -   parent\_list and parent\_rlist
        
        The following examples show how to use parent\_list and parent\_rlist:
        
        Raw log:
        
        ```
        data: { "k1": 100,"k2": {"k3": 200,"k4": {"k5": 300}}}
        ```
        
        -   parent\_list sorts the parent nodes from left to right.
            
            ```
            e_json("data", fmt='{parent_list[0]}-{parent_list[1]}#{current}')
            ```
            
            Result:
            
            ```
            data:{ "k1": 100,"k2": {"k3": 200,"k4": {"k5": 300}}}
            data-k2#k3:200
            data-k2#k5:300
            ```
            
        -   parent\_rlist sorts the parent nodes from right to left.
            
            ```
            e_json("data", fmt='{parent_rlist[0]}-{parent_rlist[1]}#{current}')
            ```
            
            Result:
            
            ```
            data:{ "k1": 100,"k2": {"k3": 200,"k4": {"k5": 300}}}
            k2-data#k3:200
            k4-k2#k5:300
            ```
            
        
-   ### Response
    
    A log that contains new field values is returned.
    
-   ### Examples
    
    -   Example 1: Expand a field.
        -   Raw log:
            
            ```
            data: {"k1": 100, "k2": 200}
            ```
            
        -   Transformation rule:
            
            ```
            e_json("data",depth=1)
            ```
            
        -   Result:
            
            ```
            data: {"k1": 100, "k2": 200}
            k1: 100
            k2: 200
            ```
            
    -   Example 2: Add a prefix and a suffix to an expanded field.
        -   Raw log:
            
            ```
            data: {"k1": 100, "k2": 200}
            ```
            
        -   Transformation rule:
            
            ```
            e_json("data", prefix="data_", suffix="_end")
            ```
            
        -   Result:
            
            ```
            data: {"k1": 100, "k2": 200}
            data_k1_end: 100
            data_k2_end: 200
            ```
            
    -   Example 3: Expand a field in different formats.
        -   Raw log:
            
            ```
            data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
            ```
            
        -   Expand a field in the full format.
            
            ```
            e_json("data", fmt='full')
            ```
            
            ```
             data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
             data.k1: 100
             data.k2.k3: 200
             data.k2.k4.k5: 300
            ```
            
        -   Expand a field in the parent format.
            
            ```
            e_json("data", fmt='parent')
            ```
            
            ```
             data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
             data.k1: 100
             k2.k3: 200
             k4.k5: 3000
            ```
            
        -   Expand a field in the root format.
            
            ```
            e_json("data", fmt='root')
            ```
            
            ```
             data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
             data.k1: 100
             data.k3: 200
             data.k5: 300
            ```
            
    -   Example 4: Configure the sep parameter, prefix parameter, and suffix parameter to extract JSON data.
        -   Raw log:
            
            ```
            data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
            ```
            
        -   Transformation rule:
            
            ```
            e_json("data", fmt='parent', sep="@", prefix="__", suffix="__")
            ```
            
        -   Result:
            
            ```
            data: {"k1": 100, "k2": {"k3": 200, "k4": {"k5": 300} } }
            data@__k1__: 100
            k2@__k3__: 200
            k4@__k5__: 300
            ```
            
    -   Example 5: Configure the fmt\_array parameter to extract JSON data as an array.
        -   Raw log:
            
            ```
            people: [{"name": "xm", "sex": "boy"}, {"name": "xz", "sex": "boy"}, {"name": "xt", "sex": "girl"}]
            ```
            
        -   Transformation rule:
            
            ```
            e_json("people", fmt='parent', fmt_array="{parent_rlist[0]}-{index}")
            ```
            
        -   Result:
            
            ```
            people: [{"name": "xm", "sex": "boy"}, {"name": "xz", "sex": "boy"}, {"name": "xt", "sex": "girl"}]
            people-0.name: xm
            people-0.sex: boy
            people-1.name: xz
            people-1.sex: boy
            people-2.name: xt
            people-2.sex: girl
            ```
            
    -   Example 6: Extract a JSON object by using the JMESPath expression.
        -   Raw log:
            
            ```
            data: { "people": [{"first": "James", "last": "d"},{"first": "Jacob", "last": "e"}],"foo": {"bar": "baz"}}
            ```
            
        -   Transformation rule:
            
            ```
            e_json("data", jmes='foo', output='jmes_output0')
            e_json("data", jmes='foo.bar', output='jmes_output1')
            e_json("data", jmes='people[0].last', output='jmes_output2')
            e_json("data", jmes='people[*].first', output='jmes_output3')
            ```
            
        -   Result:
            
            ```
            data: { "people": [{"first": "James", "last": "d"},{"first": "Jacob", "last": "e"}],"foo": {"bar": "baz"}}
            jmes_output0: {"bar": "baz"}
            jmes_output1: baz
            jmes_output2: d
            jmes_output3: ["james", "jacob"]
            ```
            
-   ### References
    
    This function can be used together with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996 "This topic describes how to use the data transformation feature of Log Service to transform complex JSON data.").
    

## e\_csv, e\_psv, and e\_tsv

The e\_csv function, e\_psv function, and e\_tsv function extract multiple fields from a specified input field by using a specified delimiter and predefined field names.

-   e\_csv: uses a comma (,) as the default delimiter.
-   e\_psv: uses a vertical bar (|) as the default delimiter.
-   e\_tsv: uses a tab (`\t`) as the default delimiter.

-   ### Syntax
    
    ```
    e_csv(Input field name, Output field list, sep=",", quote='"', restrict=True, mode="fill-auto")
    e_psv(Input field name, Output field list, sep="|", quote='"', restrict=True, mode="fill-auto")
    e_tsv(Input field name, Output field list, sep="\t", quote='"', restrict=True, mode="fill-auto")
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    Input field name
    
    Arbitrary
    
    Yes
    
    The name of the input field. If the field that you specify does not exist, no operations are performed. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    Output field list
    
    Arbitrary
    
    Yes
    
    The names of fields that are returned after the value of the input field is separated by using the specified delimiter.
    
    The field names can be in a string list. Example: `["error", "message", "result"]`.
    
    If the field names do not contain commas (,), you can use commas (,) as delimiters to separate the string. Example: `"error, message, result"`.
    
    For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    sep
    
    String
    
    No
    
    The delimiter that is used to separate the value of the input field. You must specify a single character as a delimiter.
    
    quote
    
    String
    
    No
    
    The quote that is used to enclose a value. If a value contains a delimiter, you must configure this parameter.
    
    restrict
    
    Boolean
    
    No
    
    Specifies whether to enable the restricted mode. Default value: False, which indicates that the restricted mode is disabled. If the number of values that are separated with the delimiter in the value of the input field differs from the number of output field names, the operation that is performed by the function varies based on the mode.
    
    -   If the restricted mode is enabled, the function does not perform operations.
    -   If the restricted mode is disabled, the function matches the specified fields to the values and assigns specific values to the fields.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: fill-auto. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    A log that contains new field values is returned.
    
-   ### Examples
    
    In this example, the `e_csv` function is used. The `e_psv` function and `e_tsv` function work in a similar manner to the e\_csv function.
    
    -   Raw log:
        
        ```
        content: 192.168.0.100,10/Jun/2019:11:32:16 +0800,example.aliyundoc.com,GET /zf/11874.html HTTP/1.1,200,0.077,6404,192.168.0.100:8001,200,0.060,https://image.developer.aliyundoc.com/s?q=%E8%9B%8B%E8%8A%B1%E9%BE%99%E9%A1%BB%E9%9D%A2%E7%9A%84%E5%81%9A%E6%B3%95&from=wy878378&uc_param_str=dnntnwvepffrgibijbprsvdsei,-,Mozilla/5.0 (Linux; Android 9; HWI-AL00 Build/HUAWEIHWI-AL00) AppleWebKit/537.36,-,-
        ```
        
    -   Transformation rule:
        
        ```
        e_csv("content", "remote_addr, time_local,host,request,status,request_time,body_bytes_sent,upstream_addr,upstream_status, upstream_response_time,http_referer,http_x_forwarded_for,http_user_agent,session_id,guid")
        ```
        
    -   Result:
        
        ```
        content:  192.168.0.100,10/Jun/2019:11:32:16 +0800,example.aliyundoc.com,GET /zf/11874.html HTTP/1.1,200,0.077,6404,192.168.0.100:8001,200,0.060,https://image.developer.aliyundoc.com/s?q=%E8%9B%8B%E8%8A%B1%E9%BE%99%E9%A1%BB%E9%9D%A2%E7%9A%84%E5%81%9A%E6%B3%95&from=wy878378&uc_param_str=dnntnwvepffrgibijbprsvdsei,-,Mozilla/5.0 (Linux; Android 9; HWI-AL00 Build/HUAWEIHWI-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36,-,-
          body_bytes_sent:  6404
        guid:  -
        host:  example.aliyundoc.com
        http_referer:  https://image.developer.aliyundoc.com/s?q=%E8%9B%8B%E8%8A%B1%E9%BE%99%E9%A1%BB%E9%9D%A2%E7%9A%84%E5%81%9A%E6%B3%95&from=wy878378&uc_param_str=dnntnwvepffrgibijbprsvdsei
        http_user_agent:  Mozilla/5.0 (Linux; Android 9; HWI-AL00 Build/HUAWEIHWI-AL00) AppleWebKit/537.36
        http_x_forwarded_for:  -
        remote_addr:  192.168.0.100
        request:  GET /zf/11874.html HTTP/1.1
        request_time:  0.077
        session_id:  -
        status:  200
        time_local:  10/Jun/2019:11:32:16 +0800
        topic:  syslog-forwarder
        upstream_addr:  192.168.0.100:8001
        upstream_response_time:  0.060
        upstream_status:  200
        ```
        
-   ### References
    
    This function can be used together with other functions. For more information, see [Parse log entries in a CSV-format log file](/help/en/sls/parse-log-entries-in-a-csv-format-log-file#concept-2038737 "This topic describes how to parse log entries in a CSV-format log file, for example, a syslog file.").
    

## e\_kv

The e\_kv function extracts key-value pairs from multiple input fields by using a specified quote.

-   ### Syntax
    
    ```
    e_kv(Input field name or input field list, sep="=", quote='"', escape=False, prefix="", suffix="", mode="fill-auto")
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    Input field name or input field list
    
    String or string list
    
    Yes
    
    The name of the input field or the names of multiple input fields. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    sep
    
    String
    
    No
    
    The delimiter that is used to separate a key and the value of the key in a regular expression. Default value: `=`. You can specify one or more characters as a delimiter.
    
    **Note** You can use non-capturing groups in a regular expression, but you cannot use capturing groups in a regular expression. For more information about grouping, see [Group](/help/en/sls/regular-expressions#section-r6z-2z2-97g).
    
    quote
    
    String
    
    No
    
    The quote that is used to enclose a value. Default value: `"`.
    
    **Note** We recommend that you configure the quote parameter to enclose a value extracted from a dynamic key-value pair. Examples: `a="abc"` and `b="xyz"`. If you do not configure the quote parameter, the extracted values can contain only the following characters: `letters, digits, underscores (_), hyphens (-), periods (.), percent signs (%), and tildes (~)`. For example, you can extract `a: ab12_-.%~` and `b: 123` from `a=ab12_-.%~|abc b=123`.
    
    escape
    
    Boolean
    
    No
    
    Specifies whether to extract escape characters in the value of the input field. Default value: `False`, which indicates that escape characters in the value of the input field are not extracted. For example, the value `abc\` of the `key` field is extracted from the expression `key="abc\"xyz"` by default. If the `escape` parameter is set to True, the extracted value is `abc"xyz`.
    
    prefix
    
    String
    
    No
    
    The prefix that is added to an extracted field.
    
    suffix
    
    String
    
    No
    
    The suffix that is added to an extracted field.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: fill-auto. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    A log that contains new field values is returned.
    
-   ### Examples
    
    -   Example 1: Extract key-value pairs by using the default delimiter \=.
        -   Raw log:
            
            ```
            http_refer: https://video.developer.aliyundoc.com/s?q=asd&a=1&b=2
            ```
            
            **Note** If the raw log is `request_uri: a1=1&a2=&a3=3` and the value of a2 is empty, the e\_kv() function cannot extract the value of a2. You can use the e\_regex() function to extract the value of a2. Example: e\_regex("request\_uri",r'(\\w+)=(\[^=&\]\*)',{r"\\1":r"\\2"},mode="overwrite").
            
        -   Transformation rule:
            
            ```
            e_kv("http_refer")
            ```
            
        -   Result:
            
            ```
            http_refer: https://video.developer.aliyundoc.com/s?q=asd&a=1&b=2
            q: asd
            a: 1
            b: 2
            ```
            
    -   Example 2: Add a prefix and a suffix to extracted fields.
        -   Raw log:
            
            ```
            http_refer: https://video.developer.aliyundoc.com/s?q=asd&a=1&b=2
            ```
            
        -   Transformation rule:
            
            ```
            e_kv(
                "http_refer",
                sep="=",
                quote='"',
                escape=False,
                prefix="data_",
                suffix="_end",
                mode="fill-auto",
            )
            ```
            
        -   Result:
            
            ```
            http_refer: https://video.developer.aliyundoc.com/s?q=asd&a=1&b=2
            data_q_end: asd
            data_a_end: 1
            data_b_end: 2
            ```
            
    -   Example 3: Extract key-value pairs from the content2 field and extract escape characters by using the escape parameter.
        -   Raw log:
            
            ```
            content2: k1:"v1\"abc", k2:"v2", k3: "v3"
            ```
            
        -   Transformation rule:
            
            ```
            e_kv("content2", sep=":", escape=True)
            ```
            
        -   Result:
            
            ```
            content2:  k1:"v1\"abc", k2:"v2", k3: "v3"
            k1: v1"abc
            k2: v2
            k3: v3
            ```
            
-   ### References
    
    This function can be used together with other functions. For more information, see [Extract dynamic key-value pairs from a string](/help/en/sls/extract-dynamic-key-value-pairs-from-a-string#concept-2038408 "This topic describes how to extract dynamic key-value pairs from a string by using different functions.").
    

## e\_kv\_delimit

The e\_kv\_delimit function extracts key-value pairs from input fields by using a specified delimiter.

-   ### Syntax
    
    ```
    e_kv_delimit(Input field name or input field list, pair_sep=r"\s", kv_sep="=", prefix="", suffix="", mode="fill-auto")
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    Input field name or input field list
    
    String or string list
    
    Yes
    
    The name of the input field or the names of multiple input fields. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    pair\_sep
    
    String
    
    No
    
    The regular expression that is used to separate key-value pairs. Default value: `\s`. You can also specify `\s\w` or `abc\s`.
    
    **Note** If you want to use a string to separate key-value pairs, we recommend that you use [str\_replace](/help/en/sls/string-functions#section-vjs-f3r-7dm) or [regex\_replace](/help/en/sls/regular-expression-functions#section-itd-2qz-jc2) to convert the string into characters. Then, you can use the e\_kv\_delimit function by specifying the characters as the value of the pair\_sep parameter to separate the key-value pairs.
    
    kv\_sep
    
    String
    
    No
    
    The regular expression that is used to separate key-value pairs. Default value: `=`. The regular expression can contain one or more characters.
    
    **Note** You can use non-capturing groups in a regular expression, but you cannot use capturing groups in a regular expression. For more information about grouping, see [Group](/help/en/sls/regular-expressions#section-r6z-2z2-97g).
    
    prefix
    
    String
    
    No
    
    The prefix that is added to an extracted field.
    
    suffix
    
    String
    
    No
    
    The suffix that is added to an extracted field.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: fill-auto. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    A log that contains new field values is returned.
    
-   ### Examples
    
    -   Example 1: Extract key-value pairs by using the default delimiter `=`.
        -   Raw log:
            
            ```
            data: i=c1 k1=v1 k2=v2 k3=v3
            ```
            
            **Note** If the raw log is `request_uri: a1=1&a2=&a3=3` and the value of a2 is empty, the e\_kv\_delimit() function cannot extract the value of a2. You can use the e\_regex() function to extract the value of a2. Example: e\_regex("request\_uri",r'(\\w+)=(\[^=&\]\*)',{r"\\1":r"\\2"}, mode="overwrite").
            
        -   Transformation rule:
            
            ```
            e_kv_delimit("data")
            ```
            
        -   Result:
            
            ```
            data: i=c1 k1=v1 k2=v2 k3=v3
            i: c1
            k2: v2
            k1: v1
            k3: v3
            ```
            
    -   Example 2: Extract key-value pairs by using the delimiters `&?`.
        -   Raw log:
            
            ```
            data: k1=v1&k2=v2?k3=v3
            ```
            
        -   Transformation rule:
            
            ```
            e_kv_delimit("data",pair_sep=r"&?")
            ```
            
        -   Result:
            
            ```
            data: k1=v1&k2=v2?k3=v3
            k2: v2
            k1: v1
            k3: v3
            ```
            
    -   Example 3: Extract key-value pairs by using a regular expression.
        -   Raw log:
            
            ```
            data: k1=v1 k2:v2 k3=v3
            ```
            
        -   Transformation rule:
            
            ```
            e_kv_delimit("data", kv_sep=r"(?:=|:)")
            ```
            
        -   Result:
            
            ```
            data: k1=v1 k2:v2 k3=v3
            k2: v2
            k1: v1
            k3: v3
            ```
            

## e\_syslogrfc

The e\_syslogrfc function calculates the values of the facility and severity fields and returns the value of the facilitylabel field that indicates level information. The function calculates the values based on the value of the priority field and the specified syslog protocol.

-   ### Syntax
    
    ```
    e_syslogrfc(key, rfc, fields_info=None, mode='overwrite')
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    key
    
    Arbitrary
    
    Yes
    
    The name of the input field. You must enter a field that indicates a `priority`.
    
    rfc
    
    String
    
    Yes
    
    The syslog protocol that is used. The syslog protocols are defined in RFC. Valid values: [SYSLOGRFC3164](https://tools.ietf.org/html/rfc3164) and [SYSLOGRFC5424](https://tools.ietf.org/html/rfc5424).
    
    fields\_info
    
    Dict
    
    No
    
    key indicates the name of the input field, and value indicates the name of the new field. The following fields can be renamed. The new names can be modified. `{"_severity_":"sev","_facility_":"fac","_severitylabel_":"sevlabel","_facilitylabel_":"faclabel"}`
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: overwrite. For more information about other values of this parameter, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    A log that contains new fields and values is returned.
    
-   ### Examples
    
    -   Example 1: Extract the values of the facility field and severity field and return level information based on the syslog protocol defined in RFC 5424.
        -   Raw log:
            
            ```
            receive_time: 1558663265
            _priority_: 13
            _version_: 1
            _log_time_: 2019-05-06 11:50:16.015554+08:00
            _hostname_: iZbp1a65********i2qZ
            _program_: root
            _procid_: -
            _msgid_: -
            _extradata_: -
            _content_: twish
            ```
            
        -   Transformation rule:
            
            ```
            e_syslogrfc("_priority_","SYSLOGRFC5424")
            ```
            
        -   Result:
            
            ```
            receive_time: 1558663265
            _priority_: 13
            _version_: 1
            _log_time_: 2019-05-06 11:50:16.015554+08:00
            _hostname_: iZbp1a65********i2qZ
            _program_: root
            _procid_: -
            _msgid_: -
            _extradata_: -
            _content_: twish
            _facility_: 1
            _severity_: 5
            _severitylabel_: Notice: normal but significant condition
            _facilitylabel_: user-level messages
            ```
            
    -   Example 2: Extract the values of the facility field and severity field and return level information based on the syslog protocol defined in RFC 5424. Then, rename the fields by configuring the fields\_info parameter.
        -   Raw log:
            
            ```
            receive_time: 1558663265
            _priority_: 13
            _version_: 1
            _log_time_: 2019-05-06 11:50:16.015554+08:00
            _hostname_: iZbp1a65********i2qZ
            _program_: root
            _procid_: -
            _msgid_: -
            _extradata_: -
            _content_: twish
            ```
            
        -   Transformation rule:
            
            ```
            e_syslogrfc(
                "_priority_",
                "SYSLOGRFC5424",
                {
                    "_facility_": "fac",
                    "_severity_": "sev",
                    "_facilitylabel_": "_facility_label_",
                    "_severitylabel_": "_severity_label_",
                },
            )
            ```
            
        -   Result:
            
            ```
            receive_time: 1558663265
            _priority_: 13
            _version_: 1
            _log_time_: 2019-05-06 11:50:16.015554+08:00
            _hostname_: iZbp1a65********i2qZ
            _program_: root
            _procid_: -
            _msgid_: -
            _extradata_: -
            _content_: twish
            _facility_: 1
            _severity_: 5
            _severity_label_: Notice: normal but significant condition
            _facility_label_: user-level messages
            ```
            
-   ### References
    
    This function can be used together with other functions. For more information, see [Parse Syslog messages in standard formats](/help/en/sls/parse-syslog-messages-in-standard-formats#concept-2022810 "Syslog is an industry-standard protocol that can be used to record device logs. Syslog is commonly used in network management tools, security management systems, and log audit systems. This topic describes how to use the Grok function in the Domain Specific Language (DSL) of Log Service to parse Syslog messages in different formats.").
    

## e\_anchor

The e\_anchor function extracts strings by using the rules specified by anchor\_rules.

-   ### Syntax
    
    ```
    e_anchor(key,anchor_rules,fields,restrict=False,mode="overwrite")
    ```
    
-   ### Parameters
    
       
    
    Parameter
    
    Type
    
    Required
    
    Description
    
    key
    
    Arbitrary
    
    Yes
    
    The name of the field.
    
    anchor\_rules
    
    String
    
    Yes
    
    The rules that are used to extract strings. Examples: `User = *; Severity = *;,`. Asterisks (\*) indicate the content that you want to extract.
    
    By default, a space is specified before Value in the logs that are displayed in the Key : Value format in the Log Service console. When you configure the anchor\_rules parameter, remove the default space. ![e_anchor](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3952836161/p86457.png)
    
    **Note** When you specify the input field, you cannot use asterisks (\*) as prefixes or suffixes.
    
    fields
    
    Arbitrary
    
    Yes
    
    The names of the output fields whose values are extracted from the value of input field. The field names can be in a string list. Example: `["user", "job", "result"]`. If the field names do not contain commas (,), you can use commas (,) to separate the string. Example: `"user, job, result"`. For more information about how to specify special field names, see [Event structure and fields](/help/en/sls/data-structures#section-3s2-2dw-stt). Special field names can contain special characters except asterisks (\*).
    
    You can use an asterisk (\*) to skip a field. For example, only user and result are extracted from `"user,*,result"`. For more information, see Example 10.
    
    restrict
    
    Boolean
    
    No
    
    Specifies whether to enable the restricted mode. Default value: False, which indicates that the restricted mode is disabled. If the number of values that are extracted from the value of the input field differs from the number of output field names, the operation that is performed by the function varies based on the mode.
    
    -   If the restricted mode is enabled, the function does not perform operations.
    -   If the restricted mode is disabled, the function matches the specified fields to the values and assigns specific values to the fields.
    
    mode
    
    String
    
    No
    
    Default value: overwrite. For more information, see [Field check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    The extracted data is returned.
    
-   ### Examples
    
    -   Example 1: Extract the values for specified fields from a log.
        -   Raw log:
            
            ```
            content : "Aug 2 04:06:08: host=192.168.0.10: local/ssl2 notice mcpd[3772]: User=jsmith@example.com: severity=warning: 01070638:5: Pool member 172.31.51.22:0 monitor status down."
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","User=*: severity=*:",["user_field","severity_field"])
            ```
            
        -   Result:
            
            ```
            content : "Aug 2 04:06:08: host=192.168.0.10: local/ssl2 notice mcpd[3772]: User=jsmith@example.com: severity=warning: 01070638:5: Pool member 172.31.51.22:0 monitor status down."
            user_field : jsmith@example.com
            severity_field : warning
            ```
            
    -   Example 2: Extract multiple values in the JSON array format.
        -   Raw log:
            
            ```
            content : '"information":{"name_list":["Twiss","Evan","Wind","like"],"university":["UCL","Stanford University","CMU"]},"other":"graduate"'
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content",'name_list":*,"university":*},', ["name_list","universities"])
            ```
            
        -   Result:
            
            ```
            content : '"information":{"name_list":["Twiss","Evan","Wind","like"],"university":["UCL","Stanford University","CMU"]},"other":"graduate"'
            name_list : ["Twiss","Evan","Wind","like"]
            universities : ["UCL","Stanford University","CMU"]
            ```
            
    -   Example 3: Extract a log that contains special characters.
        -   Raw log:
            
            ```
            content : (+2019) June 24 "I am iron man"
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content", "(+*) * \"*\"",["Year","Date","Msg"])
            ```
            
        -   Result:
            
            ```
            content : (+2019) June 24 "I am iron man"
            Year : 2019
            Date : June 24
            Msg : I am iron man
            ```
            
    -   Example 4: Extract a log that contains the control character `\x09`.
        -   Raw log:
            
            ```
            content : \x09\x09\x09Chrome/55.0 Safari/537.36
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content", "\x09\x09\x09*/55.0 */537.36",["Google", "Apple"])
            ```
            
        -   Result:
            
            ```
            content : \x09\x09\x09Chrome/55.0 Safari/537.36
            Google : Chrome
            Apple : Safari
            ```
            
    -   Example 5: Extract the field content that contains special characters. `To...Subject` that comes after `MESSAGE:` is the actual content of the content field.
        -   Raw log:
            
            ```
            content : 12:08:10,651 INFO sample_server ReportEmailer:178 - DEBUG SENDING MESSAGE: 
            To: example@aliyun.com
            Subject: New line Breaks in Message
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","* INFO *: \n    To: *\n    Subject: *",["time","message","email","subject"])
            ```
            
        -   Result:
            
            ```
            content : 12:08:10,651 INFO sample_server ReportEmailer:178 - DEBUG SENDING MESSAGE: 
            To: example@aliyun.com
            Subject: New line Breaks in Message
            
            time : 12:08:10,651
            message : sample_server ReportEmailer:178 - DEBUG SENDING MESSAGE
            email : example@aliyun.com
            subject : New line Breaks in Message
            ```
            
    -   Example 6: Extract the field content that contains special characters and return the value that does not display the control character`\t`.
        -   Raw log:
            
            ```
            content :   I'm tabbed in
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","\tI'm * in","word")
            # You can also use the following transformation rule to copy the value of the content field. Remove the default space from the value.
            e_anchor("content","    I'm * in","word")
            ```
            
        -   Result:
            
            ```
            content :   I'm tabbed in
            word : tabbed
            ```
            
    -   Example 7: Extract the field content that contains special characters and return the value that displays the control character `\t`.
        -   Raw log:
            
            ```
            content : \tI'm tabbed in
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","\tI'm * in","word")
            # You can also use the following transformation rule:
            e_anchor("content","    I'm * in","word")
            ```
            
        -   Result:
            
            ```
            content : \tI'm tabbed in
            word : tabbed
            ```
            
    -   Example 8: Extract logs in restricted mode.
        -   Raw log:
            
            ```
            content :  I used to love having snowball fight with my friends and building snowmen on the streets around our neighborhood
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","I * to * having",["v_word", "n_word","asd"],restrict=True)
            ```
            
        -   Result:
            
            ```
            content : I used to love having snowball fight with my friends and building snowmen on the streets around our neighborhood
            ```
            
    -   Example 9: Extract logs in non-restricted mode.
        -   Raw log:
            
            ```
            content :  I used to love having snowball fight with my friends and building snowmen on the streets around our neighborhood
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor("content","love * fight with my * and",["test1","test2","test13"],restrict=False)
            ```
            
        -   Result:
            
            ```
            content : I used to love having snowball fight with my friends and building snowmen on the streets around our neighborhood
            test1 : having snowball
            test2 : friends
            ```
            
    -   Example 10: Extract the value of a field and assign the extracted value to another field.
        -   Raw log:
            
            ```
            content: Could you compare the severity of natural disasters to man-made disasters
            ```
            
        -   Transformation rule:
            
            ```
            e_anchor('content', 'compare the * of natural disasters to man-made *', 'n-word,*')
            ```
            
        -   Result:
            
            ```
            content : Could you compare the severity of natural disasters to man-made disasters
            n-word : severity                             
            ```
