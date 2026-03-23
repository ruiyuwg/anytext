-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Google Cloud Memorystore for Redis V1BETA1 API - Module Google::Cloud::Redis::Cluster::V1beta1::ClusterPersistenceConfig::AOFConfig::AppendFsync (v0.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.4.0keyboard\_arrow\_down

-   [0.7.1 (latest)](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/latest/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.7.0](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.7.0/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.6.0](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.6.0/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.5.0](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.5.0/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.4.1](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.4.1/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.3.0](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.3.0/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.2.0](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.2.0/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)
-   [0.1.2](/ruby/docs/reference/google-cloud-redis-cluster-v1beta1/0.1.2/Google-Cloud-Redis-Cluster-V1beta1-ClusterPersistenceConfig-AOFConfig-AppendFsync)

Reference documentation and code samples for the Google Cloud Memorystore for Redis V1BETA1 API module Google::Cloud::Redis::Cluster::V1beta1::ClusterPersistenceConfig::AOFConfig::AppendFsync.

Available fsync modes.

## Constants

### APPEND\_FSYNC\_UNSPECIFIED

**value:** 0  
Not set. Default: EVERYSEC

### NO

**value:** 1  
Never fsync. Normally Linux will flush data every 30 seconds with this configuration, but it's up to the kernel's exact tuning.

### EVERYSEC

**value:** 2  
fsync every second. Fast enough, and you may lose 1 second of data if there is a disaster

### ALWAYS

**value:** 3  
fsync every time new write commands are appended to the AOF. It has the best data loss protection at the cost of performance

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
