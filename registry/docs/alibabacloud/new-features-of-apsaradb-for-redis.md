Tair (Redis OSS-compatible) lets you create instances with different engine versions. This topic describes the new features and compatibility changes for each major version.

**Note**

Each section covers features and compatibility changes from the open-source community and Alibaba Cloud. You can also refer to the [Redis Major Version Compatibility Report](https://github.com/tair-opensource/resp-compatibility/blob/main/compatibility_report_en_US.md), a joint effort by the Tair team and the community.

## Tair (Enterprise Edition)

### New features

-   **Extended data structures**: Tair (Enterprise Edition) versions 5.0 and later support Tair extended data structures, offering richer data models and enterprise-grade features. For more information, see [Overview of Tair extended data structures](/help/en/redis/developer-reference/extended-data-structures-of-apsaradb-for-redis-enhanced-edition/).
    

### Compatibility changes

Upgrading Tair extended data structures from version 5.0 to 6.0 introduces minor behavioral changes. There are no compatibility changes between versions 6.0 and 7.0. For information about native command support in each major version, see [Command support and limitations for Tair (Enterprise Edition)](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).

**Extended data structure**

**Version differences (5.0 vs. 6.0)**

**Impact**

**TairHash** ([exHash](/help/en/redis/developer-reference/the-tairhash-command))

When using the `pattern` parameter with the `EXHSCAN` command:  
• **Version 5.0**: Performs expiration checks only on fields that match the `pattern`.  
• **Version 6.0**: Performs expiration checks on all scanned fields, regardless of whether they match the pattern.  
  
  
  
  
  
  
  
  
  
  

Scanning with a large `count` value when many fields have expired may increase the response time (RT) in version 6.0.  

**TairBloom** ([Bloom](/help/en/redis/developer-reference/tairbloom-command))

The underlying hash algorithm is updated.

This may slightly increase the false positive rate.

**TairTS** ([TS](/help/en/redis/developer-reference/the-tickets-command))

-   **EXTS.S.ALTER**: In version 6.0, some invalid attributes, such as `CHUNK_SIZE`, are silently ignored, whereas in version 5.0, they trigger an error.
    
-   **EXTS.S.INFO**: In version 6.0, the return value no longer includes the `maxDataPoints` field.
    
-   **EXTS.S.RANGE / EXTS.P.RANGE**: In version 6.0, the unsupported `withLabels` parameter is ignored, whereas in version 5.0, it triggers an error.
    
-   **Queries**: In version 6.0, query buckets can be smaller than 1 second, which is not allowed in version 5.0.
    

  
• Check if your application code relies on the error-triggering logic of commands like `EXTS.S.ALTER` and `EXTS.S.RANGE`.  
• Adjust any client code that depends on the `maxDataPoints` field in the return value of `EXTS.S.INFO`.  
  
  
  
  
  
  
  
  
  
  

## Redis open-source edition 7.0

### **New features**

-   See the [Redis 7.0 release notes](https://raw.githubusercontent.com/redis/redis/7.0/00-RELEASENOTES) for new features in Redis 7.0.
    
    -   For example, for module commands that use background threads, the slow log feature records the entire pending time. For standard blocking commands, such as **BLPOP**, the slow log feature records only the execution time, not the pending time.
        

### **Compatibility**

-   See the [Redis 7.0 release notes](https://raw.githubusercontent.com/redis/redis/7.0/00-RELEASENOTES) for breaking changes.
    
    -   For example, the **LCS** command replaces the **STRALGO** command, which is no longer supported.
        
-   The `allow-oom` flag in Lua scripts is no longer supported. For more information, see [redis/redis#10699](https://github.com/redis/redis/pull/10699).
    
-   For information about other command support changes, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    

## Redis open-source edition 6.0

### **New features**

-   See the [6.0 release note](https://raw.githubusercontent.com/redis/redis/6.0/00-RELEASENOTES) for new features in Redis 6.0.
    
-   In a cluster architecture instance that uses direct connection mode, the **PUBLISH** command broadcasts across the cluster.
    

### **Compatibility**

-   See the [6.0 release note](https://raw.githubusercontent.com/redis/redis/6.0/00-RELEASENOTES) for breaking changes.
    
-   Account management differs from the community's Access Control List (ACL) feature. The following describes account management in Tair (Redis OSS-compatible):
    
    -   The default account is `default`. The account named after the instance ID (for example, `r-bp1857n194kiuv****`) is a separate account.
        
    -   If you use the **AUTH** command without specifying an account, authentication uses the `default` account.
        
-   For information about other command support changes, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    

## Redis open-source edition 5.0

### **New features**

-   See the [5.0 release note](https://raw.githubusercontent.com/redis/redis/5.0/00-RELEASENOTES) for new features in Redis 5.0.
    
-   Supports [latency insights](/help/en/redis/user-guide/latency-insights).
    
-   Supports [real-time key statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature).
    
-   Supports [TLS encryption](/help/en/redis/user-guide/enable-tls-encryption).
    
-   Optimized wake-up time precision for blocking connections.
    
-   Cluster architecture instances in direct connection mode support seamless scaling.
    

### **Compatibility**

-   See the [5.0 release note](https://raw.githubusercontent.com/redis/redis/5.0/00-RELEASENOTES) for breaking changes.
    
    -   For example, commands executed in Lua scripts no longer sort the results.
        
-   Account names are case-sensitive.
    
-   After enabling password-free access, you can still use the **AUTH** command to switch between accounts.
    
    **Note**
    
    If you have configured different permissions for different accounts, make sure your application executes commands within the permitted scope. Otherwise, your application will encounter insufficient permission errors.
    
-   The **READONLY** and **READWRITE** commands are available.
    
-   The Cloud-native Edition and the Classic Edition have some differences: After you enable VPC password-free access for a Cloud-native Edition instance, all connections still require whitelist verification, and you cannot set the `#no_loose_check-whitelist-always` parameter.
    
-   For information about other command support changes, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    

## Redis open-source edition 4.0 (retired)

**View details**

**New features**

-   See the [4.0 release note](https://raw.githubusercontent.com/redis/redis/4.0/00-RELEASENOTES) for new features in Redis 4.0.
    
-   Supports [audit logs](/help/en/redis/user-guide/enable-the-new-audit-log-feature/).
    
-   Supports [real-time hotkey statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature).
    
-   After you enable password-free access, you can set the `#no_loose_check-whitelist-always` parameter to determine whether to perform allowlist verification for network connections from the same VPC. For more information, see [Supported parameters](/help/en/redis/user-guide/supported-parameters).
    
-   Supports [Sentinel-compatible mode](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance). This mode requires password-free access to be enabled and supports only the **SENTINEL** and **get-master-addr-by-name** subcommands.
    
-   Supports creating multiple accounts (account names are case-insensitive) and setting read/write or read-only permissions. You can switch accounts by using the `AUTH user:password` command.
    
    -   The default account is the instance ID (for example, `r-bp1857n194kiuv****`).
        
    -   If you do not specify an account or the specified account does not exist, authentication automatically falls back to the default account (instance ID).
        
    -   When password-free access is enabled, connections do not require authentication. They use the default account, and you cannot switch accounts.
        
-   The cluster architecture supports enabling a [direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode) address.
    
-   The cluster architecture allows you to set the `ptod_enabled` parameter to pass client IP addresses to database nodes. For more information, see [Supported parameters](/help/en/redis/user-guide/supported-parameters).
    

**Compatibility**

-   See the [4.0 release note](https://raw.githubusercontent.com/redis/redis/4.0/00-RELEASENOTES) for breaking changes.
    
    -   For example, a cluster architecture must record slot-to-key mappings, resulting in higher memory usage for the same amount of data compared to a standard architecture.
        
    -   For example, in a cluster architecture, the **SORT** command does not support the BY and GET parameters.
        
-   [SSL encryption](/help/en/redis/user-guide/configure-ssl-encryption) is no longer supported.
    
-   The direct connection mode for cluster architecture instances does not support some **CLUSTER** commands. For more information, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    
-   The direct connection mode for cluster architecture instances supports the **SELECT** command.
    
    **Note**
    
    You can no longer use the **SELECT** command to determine if the current connection is in cluster mode, as this can cause your application to misidentify the connection mode.
    
-   In the direct connection mode for cluster architecture instances, the **PUBLISH** command does not broadcast to other nodes.
    
-   For information about other command support changes, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    

## Redis open-source edition 2.8 (retired)

**View details**

**New features**

-   See the [2.8 release note](https://raw.githubusercontent.com/redis/redis/2.8/00-RELEASENOTES) for new features in Redis 2.8.
    
-   Supports [configuring an allowlist](/help/en/redis/getting-started/step-2-configure-whitelists).
    
-   Supports [password-free access](/help/en/redis/user-guide/enable-password-free-access). After this feature is enabled:
    
    -   Network connections from within the VPC do not require IP allowlist verification.
        
    -   When a network connection from within the VPC runs the **AUTH** command, it returns **OK** directly without password verification.
        
-   Supports [SSL encryption](/help/en/redis/user-guide/configure-ssl-encryption).
    
-   Supports [disabling high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands).
    
-   Supports the cluster architecture in proxy mode.
    

**Compatibility**

-   See the [2.8 release note](https://raw.githubusercontent.com/redis/redis/2.8/00-RELEASENOTES) for breaking changes.
    
-   Does not support some debugging and management commands. For more information, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition).
    
-   Support for the **CONFIG SET/GET** commands is limited:
    
    -   **CONFIG GET:** Returns only some configuration items and does not return security-related ones.
        
    -   **CONFIG SET:** Always returns OK without modifying any parameters.
        
-   Support for the **INFO** command is limited. For example, security-related information such as Persistence and Replication is not returned.
    
-   The cluster architecture in proxy mode does not support some commands. For more information, see [Command limitations for cluster and read/write splitting instances](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances).
