Search Shell is a database management tool provided by Lindorm. You can install Search Shell on your local machine or Elastic Compute Service (ECS) instance, and then use Search Shell to connect to your Lindorm instance. This topic describes how to connect to a Lindorm instance using Search Shell installed on an ECS instance.

## Prerequisites

-   Java Development Kit (JDK) is installed. We recommend that you install JDK 1.8 or later.
    
-   [LindormSearch is activated](/help/en/lindorm/user-guide/activate-the-lindormsearch-service#concept-2411851).
    
-   The IP address of the client is added to the [Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## Usage notes

Single-node Lindorm instances cannot be connected using Search Shell. If you have a single-node Lindorm instance, [use SQL to connect to and use LindormSearch](/help/en/lindorm/user-guide/use-sql-to-connect-to-and-use-lindormsearch#concept-1987740).

## Procedure

You must use the credential of a non-root user of the ECS instance on which you want to install Search Shell to perform the following operations.

1.  Install Search Shell. If Search Shell is installed, skip to the next step.
    
    1.  Log on to the ECS instance and run the following command to download the package of Search Shell:
        
        ```
        wget https://hbaseuepublic.oss-cn-beijing.aliyuncs.com/lindorm-search-cli.tar.gz
        ```
        
    2.  Run the following command to extract the files of Search Shell:
        
        ```
        tar -xzvf lindorm-search-cli.tar.gz
        ```
        
2.  Open the `bin/search.in.sh` file and set the value of the `ZK_HOST` parameter to the LindormSearch endpoint for Solr displayed in the **Solr Compatibility Address** section. For more information about how to obtain the endpoint, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    
    ```
    ZK_HOST="host:port"   // Set host:port to the LindormSearch endpoint for Solr.
    ```
    

## Sample commands

You can run the following command to navigate to the `lindorm-search-cli/bin` directory:

```
cd lindorm-search-cli/bin
```

You can run the following command to view the commands that are supported by Search Shell:

```
./search-cli       
```

Example.

-   You can run the following command to create a collection:
    
    ```
    ./search-cli create_collection -c testIndex -n _indexer_default -shards 2            
    ```
    
    **Note**
    
    `testIndex` is the name of the index, `_indexer_default` specifies the default configuration set, and `2` is the number of shards.
    
-   You can run the following command to view information about collections:
    
    ```
    ./search-cli list_collections                
    ```
    
-   You can run the following command to download the configuration set:
    
    ```
    ./search-cli zk downconfig -d . -n _indexer_default                
    ```
    
    **Note**
    
    `_indexer_default` specifies the default configuration set provided by Search Shell. After you run the preceding command, a subfolder named `conf` is automatically created in the `bin` directory. This subfolder stores configuration files in the `_indexer_default` configuration set.
    
-   You can run the following command to upload a configuration set:
    
    ```
    ./search-cli zk upconfig -d conf -n myConf                  
    ```
    
    **Note**
    
    You can change the name of the configuration set to the name of your custom configuration set such as `myConf`.
    
-   You can run the following command to view information about the configuration set:
    
    ```
    ./search-cli zk ls /configs                   
    ```
    
-   Create an index table based on a custom configuration set.
    
    ```
    ./search-cli create_collection -c myIndex -n myConf -shards 2                  
    ```
