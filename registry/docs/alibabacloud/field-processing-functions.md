This topic describes the syntax and parameters of field processing functions. This topic also provides examples on how to use the functions.

## Functions

**Function**

**Description**

[v](#section-la8-1do-osn)

Extracts the value of a field from a log. If you specify the names of multiple fields for the function, the function returns the value of the first field that exists in the log.

This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).

[e\_set](#section-w06-8wp-cx1)

Adds a field or specifies a new value for an existing field.

This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).

[e\_drop\_fields](#section-q8m-zn8-uvj)

Deletes the log fields that meet a specified condition.

This function can be used together with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).

[e\_keep\_fields](#section-e3g-856-vs6)

Retains the log fields that meet a specified condition.

[e\_pack\_fields](#section-ltd-fi1-pj9)

Packs log fields and assigns the log fields as a value to a new field.

[e\_rename](#section-dg9-67q-cjh)

Renames the log fields that meet a specified condition.

This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).

## v

The v function extracts the value of a field from a log. If you specify the names of multiple fields for the function, the function returns the value of the first field that exists in the log.

-   ### Syntax
    
    ```
    v(key, ..., default=None)
    ```
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    key
    
    String
    
    Yes
    
    The name of the field.
    
    default
    
    Arbitrary
    
    No
    
    If the field does not exist, the function returns the value of this parameter. Default value: None.
    
-   ### Response
    
    The value of the first field that exists in the log is returned. If the field does not exist, the value of the default parameter is returned.
    
-   ### Examples
    
    Assign the value of the content field to the test\_content field.
    
    -   Raw log:
        
        ```
        content: hello
        ```
        
    -   Transformation rule:
        
        ```
        e_set("test_content", v("content"))
        ```
        
    -   Result:
        
        ```
        content: hello
        test_content: hello
        ```
        
    
-   ### References
    
    This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).
    

## e\_set

The e\_set function adds a field or specifies a new value for an existing field.

-   ### Syntax
    
    ```
    e_set(key1, value1, key2, value2, mode="overwrite")
    ```
    
    **Important**
    
    -   You must specify the _key1_ and _value1_ parameters in pairs.
        
    -   If you use the e\_set function to specify a value for a time field, such as F\_TIME or \_\_time\_\_, the value must be a numeric string.
        
        ```
        e_set(F_TIME, "abc")   # Invalid syntax.
        e_set(F_TIME, "12345678")   # Valid syntax.
        ```
        
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    key
    
    String
    
    Yes
    
    The name of the new field that you want to add or the name of the existing field for which you want to specify a new value. You can obtain a name based on a string expression. For more information about how to specify special field names, see [Event types](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    value
    
    Arbitrary
    
    Yes
    
    The value of the new field or the new value of the existing field. If the value of this parameter is not a string, the function automatically converts the value to a string. For example, if you set this parameter to a value of the tuple, list, or dictionary type, the function automatically converts the value to a JSON string. For more information about the conversion rules of strings, see [Automatic type conversion during assignment](/help/en/sls/data-structures#section-3s2-2dw-stt).
    
    **Note**
    
    If you set this parameter to None, the function returns the raw log.
    
    mode
    
    String
    
    No
    
    The overwrite mode of fields. Default value: overwrite. For more information, see [Field extraction check and overwrite modes](/help/en/sls/field-extraction-modes#section-3o9-je6-ypx).
    
-   ### Response
    
    The updated log is returned.
    
-   ### Examples
    
    -   Example 1: Specify a fixed value for a field.
        
        Add a new field named city and set the value to Shanghai.
        
        ```
        e_set("city", "Shanghai")
        ```
        
    -   Example 2: Extract the value of an existing field and assign the value to a new field.
        
        Call an expression function to extract the value of an existing field named ret and assign the value to a new field named result.
        
        ```
        e_set("result", v("ret"))
        ```
        
    -   Example 3: Specify a dynamic value for a field.
        
        Call multiple expression functions in sequence to obtain the lowercase value of the first field that exists and assign the value to the result field.
        
        ```
        e_set("result", str_lower(v("ret", "return")))
        ```
        
    -   Example 4: Specify different values for a field.
        
        1.  Specify a value for the event\_type field.
            
            ```
            e_set("event_type", "login event", "event_info", "login host")
            ```
            
        2.  If the value of the ret field is fail, set the event\_type field to login failed event.
            
            ```
            e_if(e_search('ret==fail'), e_set("event_type", "login failed event" ))
            ```
            
    -   ### References
        
        This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).
        

## e\_drop\_fields

The e\_drop\_fields function deletes the log fields that meet a specified condition.

-   ### Syntax
    
    ```
    e_drop_fields(key1, key2, ....,regex=False)
    ```
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    key
    
    String
    
    Yes
    
    The name of the log field. The value of this parameter can be a regular expression. If the field name completely meets the specified condition, the field is deleted. Otherwise, the field is retained. For more information about regular expressions, see [Regular expressions](/help/en/sls/regular-expressions#concept-1597614).
    
    You must specify at least one log field.
    
    regex
    
    Boolean
    
    No
    
    If you set this parameter to False, regular expressions are not used for matching. Default value: True.
    
-   ### Response
    
    The log from which the field is deleted is returned.
    
-   ### Examples
    
    If the value of the content field is 123, delete the content and age fields.
    
    -   Raw log:
        
        ```
        age: 18
        content: 123
        name: twiss
        ```
        
    -   Transformation rule:
        
        ```
        e_if(e_search("content==123"), e_drop_fields("content", "age",regex=True))
        ```
        
    -   Result:
        
        ```
        name: twiss
        ```
        
-   ### References
    
    This function can be used together with other functions. For more information, see [Transform complex JSON data](/help/en/sls/transform-complex-json-data#concept-2038996).
    

## e\_keep\_fields

The e\_keep\_fields function retains the log fields that meet a specified condition.

**Note**

Simple Log Service provides built-in meta fields, such as \_\_time\_\_ and \_\_topic\_\_. If you do not retain the \_\_time\_\_ field when you call the e\_keep\_fields function, the log time is reset to the current system time. If you do not want to reset the value of a meta field, you must add the meta field to a list in the F\_TIME, F\_META, F\_TAGS, "f1", "f2" format. For more information, see [Fixed identifiers](/help/en/sls/data-structures#section-rcr-ajb-u0g).

-   ### Syntax
    
    ```
    e_keep_fields(key1, key2, ....,regex=False)
    ```
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    key
    
    String
    
    Yes
    
    The name of the log field. The value of this parameter can be a regular expression. If the field name completely meets the specified condition, the field is retained. Otherwise, the field is deleted.
    
    You must specify at least one log field.
    
    regex
    
    Boolean
    
    No
    
    If you set this parameter to False, regular expressions are not used for matching. Default value: True.
    
-   ### Response
    
    The log in which the field is retained is returned.
    
-   ### Examples
    
    If the value of the content field is 123, retain the content and age fields.
    
    -   Raw log:
        
        ```
        age: 18
        content: 123
        name: twiss
        ```
        
    -   Transformation rule:
        
        ```
        e_if(e_search("content==123"), e_keep_fields("content", "age"))
        ```
        
    -   Result:
        
        ```
        age: 18
        content: 123
        ```
        
    

## e\_pack\_fields

The e\_pack\_fields function packs log fields and assigns the log fields as a value to a new field.

-   ### Syntax
    
    ```
    e_pack_fields(output_fields,include=".*",exclude=None,drop_packed=True)
    ```
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    output\_field
    
    String
    
    Yes
    
    The name of the output field. The value of the output field is in the JSON format.
    
    include
    
    String
    
    No
    
    The whitelist. Fields that match the regular expression specified in the whitelist are packed. Default value: ".\*", which indicates that all fields in a log are matched and packed. For more information, see [Regular expressions](/help/en/sls/regular-expressions#concept-1597614).
    
    exclude
    
    String
    
    No
    
    The blacklist. Fields that match the regular expression specified in the blacklist are not packed. Default value: None, which indicates that all fields in a log are not evaluated. For more information, see [Regular expressions](/help/en/sls/regular-expressions#concept-1597614).
    
    drop\_packed
    
    Boolean
    
    No
    
    Specifies whether to delete raw fields after the fields are packed. Valid values:
    
    -   True: The raw fields that are packed are deleted in the result. This is the default value.
        
    -   False: The raw fields that are packed are not deleted in the result.
        
    
-   ### Response
    
    The log in which the fields are packed is returned.
    
-   ### Examples
    
    -   Example 1: Pack all log fields into the test field. By default, the raw fields that are packed are deleted in the result.
        
        -   Raw log:
            
            ```
            test1:123
            test2:456
            test3:789
            ```
            
        -   Transformation rule:
            
            ```
            e_pack_fields("test")
            ```
            
        -   Result:
            
            ```
            test:{"test1": "123", "test2": "456", "test3": "789"}
            ```
            
    -   Example 2: Pack all log fields into the test field. The raw fields that are packed are not deleted in the result.
        
        -   Raw log:
            
            ```
            test1:123
            test2:456
            test3:789
            ```
            
        -   Transformation rule:
            
            ```
            e_pack_fields("test",drop_packed=False)
            ```
            
        -   Result:
            
            ```
            test:{"test1": "123", "test2": "456", "test3": "789"}
            test1:123
            test2:456
            test3:789
            ```
            
    -   Example 3: Pack the test and abcd fields into the content field. The raw fields that are packed are not deleted in the result.
        
        -   Raw log:
            
            ```
            abcd@#%:123
            test:456
            abcd:789
            ```
            
        -   Transformation rule:
            
            ```
            e_pack_fields("content", include="\w+", drop_packed=False)
            ```
            
        -   Result:
            
            ```
            abcd:789
            abcd@#%:123
            content:{"test": "456", "abcd": "789"}
            test:456
            ```
            
    -   Example 4: Pack raw log fields that exclude the test and abcd fields into the content field. The raw fields that are packed are deleted in the result.
        
        -   Raw log:
            
            ```
            abcd@#%:123
            test:456
            abcd:789
            ```
            
        -   Transformation rule:
            
            ```
            e_pack_fields("content", exclude="\w+", drop_packed=True)
            ```
            
        -   Result:
            
            ```
            abcd:789
            content:{"abcd@#%": "123"}
            test:456
            ```
            

## e\_rename

The e\_rename function renames the log fields that meet a specified condition.

-   ### Syntax
    
    ```
    e_rename("key1", "new key1", "key2", "new key2", ..., regex=False)
    ```
    
    **Note**
    
    You must specify the key and new key parameters in pairs. If the new key already exists in the raw log, no operations are performed.
    
-   ### Parameters
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    key
    
    String
    
    Yes
    
    The name of the log field. The value of this parameter can be a regular expression. If the field name completely meets the specified condition, the field is renamed. For more information about regular expressions, see [Regular expressions](/help/en/sls/regular-expressions#concept-1597614).
    
    You must specify at least one log field.
    
    new key
    
    String
    
    Yes
    
    The new name of the field.
    
    regex
    
    Boolean
    
    No
    
    If you set this parameter to False, regular expressions are not used for matching. Default value: True.
    
-   ### Response
    
    The renamed field is returned.
    
-   ### Examples
    
    -   Example 1: Rename the field host to client\_host.
        
        -   Raw log:
            
            ```
            host: 1006
            ```
            
        -   Transformation rule:
            
            ```
            e_rename("host","client_host")
            ```
            
        -   Result:
            
            ```
            client_host: 1006
            ```
            
    -   Example 2: Do not rename a log field if no fields meet the specified condition.
        
        -   Raw log:
            
            ```
            host: 1006
            ```
            
        -   Transformation rule:
            
            ```
            e_rename("url","rename_url")
            ```
            
        -   Result:
            
            ```
            host: 1006
            ```
            
    -   ### References
        
        This function can be used together with other functions. For more information, see [Cleanse data by using functions](/help/en/sls/cleanse-data-by-using-functions#concept-2006328).
