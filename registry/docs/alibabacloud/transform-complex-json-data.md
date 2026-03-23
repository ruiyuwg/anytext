This document describes how to use the data transformation feature of Simple Log Service (SLS) to transform complex JSON data.

## Transform complex JSON data that has multiple subkeys as arrays

Logs from programs are often written in a statistical JSON format. These logs typically include basic information and multiple subkeys that are arrays. For example, a server writes a log every minute. The log contains the current status and statistical information about related server and client nodes.

-   Sample log
    
    ```
    __source__:  192.0.2.1
    __topic__:  
    content:{
         "service": "search_service",
         "overal_status": "yellow",
         "servers": [
             {
                 "host": "192.0.2.1",
                 "status": "green"
             },
             {
                 "host": "192.0.2.2",
                 "status": "green"
             }
         ],
         "clients": [
             {
                 "host": "192.0.2.3",
                 "status": "green"
             },
             {
                 "host": "192.0.2.4",
                 "status": "red"
             }
         ]
    }
    ```
    
-   Data transformation requirements
    
    1.  Split the raw log into three logs based on the `topic` field: `overall_type`, `client_status`, and `server_status`.
        
    2.  Store different information for different `topic` values.
        
        -   `overall_type`: Retain the server count, client count, overall\_status color, and service information.
            
        -   `client_status`: Retain the host address, status, and service information.
            
        -   `server_status`: Retain the host address, status, and service information.
            
-   Expected result
    
    ```
    __source__:  192.0.2.1
    __topic__:  overall_type
    client_count:  2
    overal_status:  yellow
    server_count:  2
    service:  search_service
    
    
    __source__:  192.0.2.1
    __topic__:  client_status
    host:  192.0.2.4
    status:  red
    service:  search_service
    
    
    __source__:  192.0.2.1
    __topic__:  client_status
    host:  192.0.2.3
    status:  green
    service:  search_service
    
    
    __source__:  192.0.2.1
    __topic__:  server_status
    host:  192.0.2.1
    status:  green
    service:  search_service
    
    
    __source__:  192.0.2.1
    __topic__:  server_status
    host:  192.0.2.2
    status:  green
    service:  search_service
    ```
    
-   Solution
    
    1.  Split the log into three separate logs. To do this, assign three different values to the topic field. After splitting, you will have three logs that are identical except for the `topic` field.
        
        ```
        e_set("__topic__", "server_status,client_status,overall_type")
        e_split("__topic__")
        ```
        
        The log format after processing is as follows:
        
        ```
        __source__:  192.0.2.1
        __topic__:  server_status         // The other two logs have `client_status` and `overall_type` as topics. The rest of the fields are the same.
        content:  {
            ...As before...
        }
        ```
        
    2.  Expand the first-layer JSON content of the `content` field, and then delete the `content` field.
        
        ```
        e_json('content',depth=1)
        e_drop_fields("content")
        ```
        
        The log format after processing is as follows:
        
        ```
        __source__:  192.0.2.1
        __topic__:  overall_type              // The other two logs have `client_status` and `overall_type` as topics. The rest of the fields are the same.
        clients:  [{"host": "192.0.2.3", "status": "green"}, {"host": "192.0.2.4", "status": "red"}]
        overal_status:  yellow
        servers:  [{"host": "192.0.2.1", "status": "green"}, {"host": "192.0.2.2", "status": "green"}]
        service:  search_service
        ```
        
    3.  For the log with the topic `overall_type`, calculate the values for `client_count` and `server_count`.
        
        ```
        e_if(e_search("__topic__==overall_type"), 
             e_compose(
                e_set("client_count", json_select(v("clients"), "length([*])", default=0)), 
                e_set("server_count", json_select(v("servers"), "length([*])", default=0))
          ))
        ```
        
        The processed log is:
        
        ```
        __topic__:  overall_type
        server_count:  2
        client_count:  2
        ```
        
    4.  Delete the unnecessary fields.
        
        ```
        e_if(e_search("__topic__==overall_type"), e_drop_fields("clients", "servers"))
        ```
        
    5.  Further split the log with the topic `server_status`.
        
        ```
        e_if(e_search("__topic__==server_status"), 
             e_compose(
                e_split("servers"), 
                e_json("servers", depth=1)
          ))
        ```
        
        The log is split into the following two logs:
        
        ```
        __topic__:  server_status
        servers:  {"host": "192.0.2.1", "status": "green"}
        host: 192.0.2.1
        status: green
        ```
        
        ```
        __topic__:  server_status
        servers:  {"host": "192.0.2.2", "status": "green"}
        host: 192.0.2.2
        status: green
        ```
        
    6.  Relevant fields to retain:
        
        ```
        e_if(e_search("__topic__==overall_type"), e_drop_fields("servers"))
        ```
        
    7.  Further split the log with the topic `client_status` and then delete the `clients` field.
        
        ```
        e_if(e_search("__topic__==client_status"), 
             e_compose(
                e_split("clients"), 
                e_json("clients", depth=1),
                e_drop_fields("clients")
          ))
        ```
        
        The log is split into the following two logs:
        
        ```
        __topic__:  client_status
        host: 192.0.2.3
        status: green
        ```
        
        ```
        __topic__:  clients
        host: 192.0.2.4
        status: red
        ```
        
    8.  The complete LOG domain-specific language (DSL) rules are as follows:
        
        ```
        # Split the log.
        e_set("__topic__", "server_status,client_status,overall_type")
        e_split("__topic__")
        e_json('content',depth=1)
        e_drop_fields("content")
        
        # Process the overall_type log.
        e_if(e_search("__topic__==overall_type"), 
             e_compose(
                e_set("client_count", json_select(v("clients"), "length([*])", default=0)),
        				e_set("server_count", json_select(v("servers"), "length([*])", default=0))
        ))
        
        # Process the server_status log.
        e_if(e_search("__topic__==server_status"), 
             e_compose(
                e_split("servers"), 
                e_json("servers", depth=1)
          ))
        e_if(e_search("__topic__==overall_type"), e_drop_fields("servers"))
        
        
        # Process the client_status log.
        e_if(e_search("__topic__==client_status"), 
             e_compose(
                e_split("clients"), 
                e_json("clients", depth=1),
                e_drop_fields("clients")
          ))
        ```
        

Solution optimization

The preceding solution has issues when `content.servers` and `content.servers` are empty. For example, consider the following raw log:

```
__source__:  192.0.2.1
__topic__:  
content:{
            "service": "search_service",
            "overal_status": "yellow",
            "servers": [ ],
            "clients": [ ]
}
```

If you use the preceding solution to split this raw log into three logs, the logs with the topics `client_status` and `server_status` are empty.

```
__source__:  192.0.2.1
__topic__:  overall_type
client_count:  0
overal_status:  yellow
server_count:  0
service:  search_service


__source__:  192.0.2.1
__topic__:  client_status
service:  search_service
__source__:  192.0.2.1


__topic__:  server_status
host:  192.0.2.1
status:  green
service:  search_service
```

-   Solution 1
    
    After the initial split, check whether the logs with the topics `server_status` and `client_status` are empty. If so, discard them.
    
    ```
    # For server_status: discard if empty, retain if not.
    e_keep(op_and(e_search("__topic__==server_status"), json_select(v("servers"), "length([*])")))
    
    # For client_status: discard if empty, retain if not.
    e_keep(op_and(e_search("__topic__==client_status"), json_select(v("clients"), "length([*])")))
    ```
    
    The complete LOG DSL rules are as follows:
    
    ```
    # Split the log.
    e_set("__topic__", "server_status,client_status,overall_type")
    e_split("__topic__")
    e_json('content',depth=1)
    e_drop_fields("content")
    
    # Process the overall_type log.
    e_if(e_search("__topic__==overall_type"), 
         e_compose(
           e_set("client_count", json_select(v("clients"), "length([*])", default=0)),
    			 e_set("server_count", json_select(v("servers"), "length([*])", default=0))
    ))
    
    # New: Pre-process server_status: discard if empty, retain if not.
    e_keep(op_and(e_search("__topic__==server_status"), json_select(v("servers"), "length([*])")))
    
    # Process the server_status log.
    e_if(e_search("__topic__==server_status"), 
         e_compose(
            e_split("servers"), 
            e_json("servers", depth=1)
      ))
    e_if(e_search("__topic__==overall_type"), e_drop_fields("servers"))
    
    
    # New: Pre-process client_status: discard if empty, retain if not.
    e_keep(op_and(e_search("__topic__==client_status"), json_select(v("clients"), "length([*])")))
    
    # Process the client_status log.
    e_if(e_search("__topic__==client_status"), 
         e_compose(
            e_split("clients"), 
            e_json("clients", depth=1),
            e_drop_fields("clients")
      ))
    ```
    
-   Solution 2
    
    Check whether a field is empty before splitting the log. If the field is not empty, split the log based on the field.
    
    ```
    # Set the initial topic.
    e_set("__topic__", "server_status")
    
    # If the content.servers field is not empty, split the log to create a log with the topic server_status.
    e_if(json_select(v("content"), "length(servers[*])"),
       e_compose(
          e_set("__topic__", "server_status,overall_type"),
          e_split("__topic__")
       ))
    
    # If the content.clients field is not empty, further split the log to create a log with the topic client_status.
    e_if(op_and(e_search("__topic__==overall_type"), json_select(v("content"), "length(clients[*])")),
       e_compose(
          e_set("__topic__", "client_status,overall_type"),
          e_split("__topic__")
       ))
    ```
    
    The complete LOG DSL rules are as follows:
    
    ```
    # Split the log.
    e_set("__topic__", "server_status")
    
    # If the content.servers field is not empty, split the log to create a log with the topic server_status.
    e_if(json_select(v("content"), "length(servers[*])"),
       e_compose(
          e_set("__topic__", "server_status,overall_type"),
          e_split("__topic__")
       ))
    
    # If the content.clients field is not empty, further split the log to create a log with the topic client_status.
    e_if(op_and(e_search("__topic__==overall_type"), json_select(v("content"), "length(clients[*])")),
       e_compose(
          e_set("__topic__", "client_status,overall_type"),
          e_split("__topic__")
       ))
    
    # Process the overall_type log.
    e_if(e_search("__topic__==overall_type"), 
         e_compose(
            e_set("client_count", json_select(v("clients"), "length([*])", default=0)),
    				e_set("server_count", json_select(v("servers"), "length([*])", default=0))
    ))
    
    # Process the server_status log.
    e_if(e_search("__topic__==server_status"), 
         e_compose(
            e_split("servers"), 
            e_json("servers", depth=1)
      ))
    e_if(e_search("__topic__==overall_type"), e_drop_fields("servers"))
    
    
    # Process the client_status log.
    e_if(e_search("__topic__==client_status"), 
         e_compose(
            e_split("clients"), 
            e_json("clients", depth=1),
            e_drop_fields("clients")
      ))
    ```
    

Solution comparison

-   Solution 1 is logically redundant because it creates empty logs from the raw log and then deletes them. However, the rules are simple and easy to maintain. This solution is the recommended default.
    
-   Solution 2 is more efficient because it checks for empty fields before splitting. However, the rules are slightly more complex. This solution is recommended only for specific scenarios, such as when the initial split might generate many extra events.
    

## Transform complex JSON data with multilayer nested array objects

This example shows how to process a complex object that contains multi-layer nested arrays. The goal is to split each logon event in the `login_histories` array for each object in the `users` array into a separate logon event.

-   Raw log
    
    ```
    __source__:  192.0.2.1
    __topic__:  
    content:{
      "users": [
        {
            "name": "user1",
            "login_histories": [
              {
                "date": "2019-10-10 0:0:0",
                "login_ip": "192.0.2.6"
              },
              {
                "date": "2019-10-10 1:0:0",
                "login_ip": "192.0.2.6"
              },
          {
          ...More logon information...
          }
            ]
        },
        {
            "name": "user2",
            "login_histories": [
              {
                "date": "2019-10-11 0:0:0",
                "login_ip": "192.0.2.7"
              },
              {
                "date": "2019-10-11 1:0:0",
                "login_ip": "192.0.2.9"
              },
          {
          ...More logon information...
          }     
            ]
        },
      {
        ...More users...
      }
      ]
    }
    ```
    
-   Expected logs after splitting
    
    ```
    __source__:  192.0.2.1
    name:  user1
    date:  2019-10-11 1:0:0
    login_ip:  192.0.2.6
    
    __source__: 192.0.2.1
    name:  user1
    date:  2019-10-11 0:0:0
    login_ip:  192.0.2.6
    
    __source__:  192.0.2.1
    name:  user2
    date:  2019-10-11 0:0:0
    login_ip:  192.0.2.7
    
    __source__: 192.0.2.1
    name:  user2
    date:  2019-10-11 1:0:0
    login_ip:  192.0.2.9  
    
    ...More logs...
    ```
    
-   Solution
    
    1.  Split and expand the log based on `users` in the `content` field.
        
        ```
        e_split("content", jmes='users[*]', output='item')
        e_json("item",depth=1)
        ```
        
        The processed logs are:
        
        ```
        __source__:  192.0.2.1
        __topic__:  
        content:{...Same as that in the raw log...}
        item:  {"name": "user1", "login_histories": [{"date": "2019-10-10 0:0:0", "login_ip": "192.0.2.6"}, {"date": "2019-10-10 1:0:0", "login_ip": "192.0.2.6"}]}
        login_histories:  [{"date": "2019-10-10 0:0:0", "login_ip": "192.0.2.6"}, {"date": "2019-10-10 1:0:0", "login_ip": "192.0.2.6"}]
        name:  user1
        
        __source__:  192.0.2.1
        __topic__:  
        content:{...Same as that in the raw log...}
        item:  {"name": "user2", "login_histories": [{"date": "2019-10-11 0:0:0", "login_ip": "192.0.2.7"}, {"date": "2019-10-11 1:0:0", "login_ip": "192.0.2.9"}]}
        login_histories:  [{"date": "2019-10-11 0:0:0", "login_ip": "192.0.2.7"}, {"date": "2019-10-11 1:0:0", "login_ip": "192.0.2.9"}]
        name:  user2
        ```
        
    2.  Next, split and then expand the data based on `login_histories`.
        
        ```
        e_split("login_histories")
        e_json("login_histories", depth=1)
        ```
        
        The processed logs are:
        
        ```
        __source__:  192.0.2.1
        __topic__: 
        content: {...Same as that in the raw log...}
        date:  2019-10-11 0:0:0
        item:  {"name": "user2", "login_histories": [{"date": "2019-10-11 0:0:0", "login_ip": "192.0.2.7"}, {"date": "2019-10-11 1:0:0", "login_ip": "192.0.2.9"}]}
        login_histories:  {"date": "2019-10-11 0:0:0", "login_ip": "192.0.2.7"}
        login_ip:  192.0.2.7
        name:  user2
        
        __source__:  192.0.2.1
        __topic__: 
        content: {...Same as that in the raw log...}
        date:  2019-10-11 1:0:0
        item:  {"name": "user2", "login_histories": [{"date": "2019-10-11 0:0:0", "login_ip": "192.0.2.7"}, {"date": "2019-10-11 1:0:0", "login_ip": "192.0.2.9"}]}
        login_histories:  {"date": "2019-10-11 1:0:0", "login_ip": "192.0.2.9"}
        login_ip:  192.0.2.9
        name:  user2
        
        __source__: 192.0.2.1
        __topic__:  
        content: {...Same as that in the raw log...}
        date:  2019-10-10 1:0:0
        item:  {"name": "user1", "login_histories": [{"date": "2019-10-10 0:0:0", "login_ip": "192.0.2.6"}, {"date": "2019-10-10 1:0:0", "login_ip": "192.0.2.6"}]}
        login_histories:  {"date": "2019-10-10 1:0:0", "login_ip": "192.0.2.6"}
        login_ip:  192.0.2.6
        name:  user1
        
        __source__: 192.0.2.1
        __topic__:  
        content: {...Same as that in the raw log...}
        date:  2019-10-10 0:0:0
        item:  {"name": "user1", "login_histories": [{"date": "2019-10-10 0:0:0", "login_ip": "192.0.2.6"}, {"date": "2019-10-10 1:0:0", "login_ip": "192.0.2.6"}]}
        login_histories:  {"date": "2019-10-10 0:0:0", "login_ip": "192.0.2.6"}
        login_ip:  192.0.2.6
        name:  user1
        ```
        
    3.  Finally, delete the irrelevant fields.
        
        ```
        e_drop_fields("content", "item", "login_histories")
        ```
        
        The processed logs are:
        
        ```
        __source__: 192.0.2.1
        __topic__:
        name:  user1
        date:  2019-10-11 1:0:0
        login_ip:  192.0.2.6
        
        __source__:  192.0.2.1
        __topic__:
        name:  user1
        date:  2019-10-11 0:0:0
        login_ip:  192.0.2.6
        
        __source__:  192.0.2.1
        __topic__:
        name:  user2
        date:  2019-10-11 0:0:0
        login_ip:  192.0.2.7
        
        __source__: 192.0.2.1
        __topic__:
        name:  user2
        date:  2019-10-11 1:0:0
        login_ip:  192.0.2.9
        ```
        
    4.  The complete LOG DSL rules can be written as follows:
        
        ```
        e_split("content", jmes='users[*]', output='item')
        e_json("item",depth=1)
        e_split("login_histories")
        e_json("login_histories", depth=1)
        e_drop_fields("content", "item", "login_histories")
        ```
        

Summary: For similar requirements, first split the log, then expand the data, and finally delete the irrelevant fields.
