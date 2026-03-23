This topic describes how to dynamically construct fields, package existing logs as a whole, and add these logs to the new fields.

Example: The first function in the following transformation rule renames the content field in the following raw log entry to k1\_content\_copy, the name field to k2\_name\_copy, and the School field to k3\_school\_copy. The second function constructs a field named \_\_extract\_others\_\_, adds the field to the transformed log entry, and drops the k1\_content\_copy and k3\_school\_copy fields.

-   Transformation rule:
    
    ```
    e_set("k1_content_copy", v("content"), "k2_name_copy", v("name"), "k3_school_copy", v("School"))
    e_set("__extract_others__", dct_delete(KEEP,"k1_content_copy","k3_school_copy"))
    ```
    
-   Raw log entry:
    
    ```
    School: CMU
    __source__: 192.168.1.1
    __tag__:__client_ip__: 192.168.1.2
    _tag__:__receive_time__:1591755799
    __topic__:
    content:test concent
    name: Twish
    ```
    
-   Result:
    
    ```
    School:CMU
    __extract_others__:{"__time__": "1591755799", "__topic__": "", "__source__": "192.168.1.1", "__tag__:__client_ip__": "192.168.1.2", "__tag__:__receive_time__": "1591755799", "content": "test content", "name": "Twish", "School": "CMU", "k2_name_copy": "Twish"}
    __source__:192.168.1.1
    __tag__:__client_ip__:192.168.1.2
    __tag__:__receive_time__:1591755799
    __topic__:
    content:test content
    k2_name_copy:Twish
    name:Twish
    ```
