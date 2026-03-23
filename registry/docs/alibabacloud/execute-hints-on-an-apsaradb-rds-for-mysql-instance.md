This topic describes how to execute hints on an ApsaraDB RDS for MySQL instance that is connected by using a read/write splitting routing endpoint.

## Limits

You can execute hints only on an RDS instance that is connected by using a read/write splitting routing endpoint. For more information, see [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting#concept-2021010)

## Usage

-   If you use the MySQL CLI to connect to your RDS instance, you must add the `-c` option to the hints that you want to execute. Otherwise, the MySQL CLI filters out the hints.
    
-   You can use the `/*FORCE_MASTER*/` hint to specify that data is queried from the primary RDS instance. You can also use the `/*FORCE_SLAVE*/` hint to specify that data is queried from the secondary RDS instance. Example: `/*FORCE_MASTER*/ SELECT * from <table_name>`.
    
    **Note**
    
    -   Hints are not subject to consistency or transaction limits. Therefore, hints have the highest route priorities. Before you execute hints, you must evaluate whether the hints are suitable for your workloads.
        
    -   Hints cannot contain statements that are used to reconfigure environment variables. For example, the `/*FORCE_SLAVE*/ set names utf8;` statement is not allowed. If you include these statements in hints, errors may occur in your workloads.
        
    -   If you set the weight of a read-only RDS instance to 0 but use a hint to forcefully forward requests to the read-only RDS instance, the client is disconnected from the read-only RDS instance.
        
    
-   You can run the `/*force_node='<Instance ID>'*/` command to query data from a specified RDS instance. For example, if you specify `/*force_node='rr-bpxxxxx'*/ show processlist;`, the `SHOW PROCESSLIST` statement is executed only on the RDS instance named rr-bpxxxxx. If the RDS instance is faulty, the `force hint server node is not found, please check.` error message is returned.
    
-   You can use `/*force_proxy_internal*/set force_node = '<Instance ID>';` to always query data from the specified RDS instance. For example, after you run `/*force_proxy_internal*/set force_node = 'rr-bpxxxxx';`, all subsequent commands are routed to the RDS instance named rr-bpxxxxx. If the RDS instance is faulty, the `set force node 'rr-bpxxxxx' is not found, please check.` error message is returned.
    
    **Note**
    
    In most cases, we recommend that you do not use the `/*force_proxy_internal*/` syntax. The syntax specifies that all the subsequent requests are forwarded to the specified RDS instance. As a result, the read/write splitting feature becomes invalid.
