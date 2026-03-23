In addition to native Redis commands, Tair (Redis OSS-compatible) supports multiple commands developed in-house by Alibaba Cloud. You can use these commands in cluster or read/write splitting instances to manage your instances more efficiently.

## Prerequisites

The instance is connected in [proxy mode](/help/en/redis/product-overview/features-of-proxy-nodes#concept-2334147).

## Description of in-house commands

**Note**

The following list describes the conventions for the command syntax used in this topic:

-   `Uppercase keyword`: indicates the command keyword.
    
-   `_Italic text_`: indicates variables.
    
-   `[options]`: indicates that the enclosed parameters are optional. Parameters that are not enclosed by brackets must be specified.
    
-   `A|B`: indicates that the parameters separated by the vertical bars (|) are mutually exclusive. Only one of the parameters can be specified.
    
-   `...`: indicates that the parameter preceding this symbol can be repeatedly specified.
    

### **INFO KEY**

Command syntax: `INFO KEY _Key_`.

Command description: This command queries the slot and data shard to which a specified key belongs. In Tair cluster instances, some commands require all keys to be in the same slot. You can use this command to check whether certain keys are in the same slot or DB.

**Note**

The Node returned by this command refers to the data shard node in a cluster instance, which is different from the DB concept in the **SELECT** command.

Command example:

```
INFO KEY foo
```

Sample response:

```
slot:12182 node_index:0
```

### **IINFO**

Command syntax: `IINFO _db_idx_ [_section_] ...`.

Command description: Similar to the native Redis **INFO** command, this command is used to query various statistics information of data shard nodes.

`_db_idx_` refers to the data shard node, with values ranging from \[0, total number of cluster shards\]. The usage of other parameters and the returned results are similar to the native **INFO** command. For more information, see [INFO](https://valkey.io/commands/info/).

Command example:

```
IINFO 1 Server
```

Sample response:

```
"# Server\r\nredis_version:5.0.13\r\nos:Linux\r\ntcp_port:6379\r\nuptime_in_seconds:547026\r\nuptime_in_days:6\r\nhz:10\r\nlru_clock:4869333\r\n"
```

### **RIINFO**

Command syntax: `RIINFO _db_idx_ _ro_slave_idx_`

`...`

.

Command description: Similar to the native Redis **INFO** command, this command is used only to query various statistics information of read-only data shard nodes in a read/write splitting architecture.

`_db_idx_` refers to the data shard node (Master), with a default value of 0. `_ro_slave_idx_` refers to the index of the read-only data shard node, with values ranging from \[0, 5\]. The usage of other parameters and the returned results are similar to the native **INFO** command. For more information, see [INFO](https://valkey.io/commands/info/).

Command example:

```
RIINFO 0 0 Server
```

Sample response:

```
"# Server\r\nredis_version:5.0.13\r\nos:Linux\r\ntcp_port:6379\r\nuptime_in_seconds:322575\r\nuptime_in_days:3\r\nhz:10\r\nlru_clock:4926418\r\n"
```

### **ISCAN**

Command syntax: `ISCAN _db_idx cursor_ [MATCH _pattern_] [COUNT _count_]`.

Command description: Similar to the native Redis **SCAN** command, this command is used to execute the **SCAN** command on a specified data shard node in a cluster architecture.

`_db_idx_` refers to the data shard node, with values ranging from \[0, total number of cluster shards\]. The usage of other parameters and the returned results are similar to the native **SCAN** command. For more information, see [SCAN](https://valkey.io/commands/scan/).

Command example:

```
ISCAN 0 0 COUNT 3
```

Sample response:

```
1) "0"
2) 1) "dkjfd"
   2) "k"
   3) "9z9"
```

### **IMONITOR**

Command syntax: `IMONITOR _db_idx_`.

Command description: Similar to the native Redis **MONITOR** command, this command is used to execute the **MONITOR** command on a specified data shard node in a cluster architecture.

`_db_idx_` refers to the data shard node (Master), with values ranging from \[0, total number of cluster shards\]. For more information, see [Monitor](https://valkey.io/commands/monitor/).

Command example:

**Note**

You should execute the **IMONITOR** and **RIMONITOR** commands through Telnet. To exit the **IMONITOR** or **RIMONITOR** command, you can use the **QUIT** command.

```
IMONITOR 0
```

Sample response:

```
+OK
+1682652565.538228 [0 127.0.0.1:38618] "info" "all"
+1682652566.538231 [0 127.0.0.1:38618] "info" "all"
```

### **RIMONITOR**

Command syntax: `RIMONITOR _db_idx_ _ro_slave_idx_`.

Command description: Similar to the native Redis **MONITOR** command, this command is used to execute the **MONITOR** command on a read-only data shard node in a read/write splitting architecture.

`_db_idx_` refers to the data shard node (Master), with a default value of 0. `_ro_slave_idx_` refers to the index of the read-only data shard node, with values ranging from \[0, 5\]. The usage of other parameters and the returned results are similar to the native **MONITOR** command. For more information, see [Monitor](https://valkey.io/commands/monitor/).

Command example:

```
RIMONITOR 0 1
```

Sample response:

```
+OK
+1682653310.571527 [0 127.0.0.1:59492] "info" "all"
+1682653311.571573 [0 127.0.0.1:59492] "info" "all"
```
