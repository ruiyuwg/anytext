Simple Log Service provides the command-line interface (CLI) to meet the requirements for automated configurations in Simple Log Service.

## Features

Simple Log Service CLI provides the following features:

-   Supports most RESTful API operations of Simple Log Service. For example, you can use the CLI to manage projects, Logstores, machine groups, consumer groups, and Logtail configurations.
    
-   Allows you to manage logs across multiple accounts and regions.
    
-   Allows you to query and pull logs.
    
-   Allows you to migrate data from Elasticsearch to Simple Log Service.
    
-   Supports flexible time configurations.
    
-   Allows you to replicate logs across regions at a high speed, reindex historical logs, and ship logs to data warehouses.
    

## Commands

Simple Log Service CLI supports most features of Simple Log Service API. The following table describes the commonly used commands that are supported by Simple Log Service CLI.

**Category**

**Command**

**Description**

Project management

[create\_project](/help/en/sls/developer-reference/create-project#task-2083422)

Creates a project.

[delete\_project](/help/en/sls/developer-reference/delete-project#task-2083422)

Deletes a project.

[get\_project](/help/en/sls/developer-reference/get-project#task-2083422)

Queries a specified project.

[list\_project](/help/en/sls/developer-reference/list-project#task-2083422)

Queries all projects.

[copy\_project](/help/en/sls/developer-reference/copy-project#task-2083422)

Replicates all Logstores, Logtail configurations, machine groups, and index configurations from a source project to a destination project.

Logstore management

[create\_logstore](/help/en/sls/developer-reference/create-logstore#task-2083422)

Creates a Logstore.

[delete\_logstore](/help/en/sls/developer-reference/delete-logstore#task-2083422)

Deletes a Logstore.

[get\_logstore](/help/en/sls/developer-reference/get-logstore#task-2083422)

Queries a specified Logstore.

[list\_logstore](/help/en/sls/developer-reference/list-logstore#task-2083422)

Queries all Logstores.

[update\_logstore](/help/en/sls/developer-reference/update-logstore#task-2083422)

Updates a Logstore.

Shard management

[list\_shards](/help/en/sls/developer-reference/list-shards#task-2083422)

Queries shards.

[split\_shard](/help/en/sls/developer-reference/split-shard#task-2083422)

Splits a shard.

[merge\_shard](/help/en/sls/developer-reference/merge-shard#task-2083422)

Merges shards.

Machine group management

[create\_machine\_group](/help/en/sls/developer-reference/create-machine-group#task-2083422)

Creates a machine group.

[delete\_machine\_group](/help/en/sls/developer-reference/delete-machine-group#task-2083422)

Deletes a machine group.

[update\_machine\_group](/help/en/sls/developer-reference/update-machine-group#task-2083422)

Updates a machine group.

[get\_machine\_group](/help/en/sls/developer-reference/get-machine-group#task-2083422)

Queries a specified machine group.

[list\_machine\_group](/help/en/sls/developer-reference/list-machine-group#task-2083422)

Queries all machine groups.

[list\_machines](/help/en/sls/developer-reference/list-machines#task-2083422)

Queries the servers in a specified machine group.

Logtail configuration management

[create\_logtail\_config](/help/en/sls/developer-reference/create-logtail-config#task-2083422)

Creates a Logtail configuration.

[update\_logtail\_config](/help/en/sls/developer-reference/update-logtail-config#task-2083422)

Updates a Logtail configuration.

[delete\_logtail\_config](/help/en/sls/developer-reference/delete-logtail-config#task-2083422)

Deletes a Logtail configuration.

[get\_logtail\_config](/help/en/sls/developer-reference/get-logtail-config#task-2083422)

Queries a specified Logtail configuration.

[list\_logtail\_config](/help/en/sls/developer-reference/list-logtail-config#task-2083422)

Queries all Logtail configurations.

Mappings between machine groups and Logtail configurations

[apply\_config\_to\_machine\_group](/help/en/sls/developer-reference/apply-config-to-machine-group#task-2083422)

Applies a Logtail configuration to a machine group.

[remove\_config\_to\_machine\_group](/help/en/sls/developer-reference/remove-config-to-machine-group#task-2083422)

Removes a Logtail configuration from a machine group.

[get\_machine\_group\_applied\_configs](/help/en/sls/developer-reference/get-machine-group-applied-configs#task-2083422)

Queries the Logtail configurations that are applied to a specified machine group.

[get\_config\_applied\_machine\_groups](/help/en/sls/developer-reference/get-config-applied-machine-groups#task-2083422)

Queries the machine groups to which a Logtail configuration is applied.

Index management

[create\_index](/help/en/sls/developer-reference/create-index#task-2083422)

Creates indexes for a specified Logstore.

[delete\_index](/help/en/sls/developer-reference/delete-index#task-2083765)

Deletes indexes from a specified Logstore.

[update\_index](/help/en/sls/developer-reference/update-index#task-2083766)

Updates the indexes of a Logstore.

[get\_index\_config](/help/en/sls/developer-reference/get-index-config#task-2083767)

Queries the indexes of a Logstore.

Cursor management

[get\_cursor](/help/en/sls/developer-reference/get-cursor#task-2083769)

Queries a cursor based on a specified point in time.

[get\_cursor\_time](/help/en/sls/developer-reference/get-cursor-time#task-2083770)

Queries the server-side time based on a cursor.

[get\_previous\_cursor\_time](/help/en/sls/developer-reference/get-previous-cursor-time#task-2083771)

Queries the server-side time based on the previous cursor of a specified cursor.

[get\_begin\_cursor](/help/en/sls/developer-reference/get-begin-cursor#task-2083772)

Queries a start cursor.

[get\_end\_cursor](/help/en/sls/developer-reference/get-end-cursor#task-2083773)

Queries an end cursor.

Log management

[get\_logs](/help/en/sls/developer-reference/get-logs#task-2083775)

Queries logs. You can configure a query request by using a JSON file. This command is suitable for exact match scenarios.

[get\_log](/help/en/sls/developer-reference/get-log#task-2083776)

Queries a specified number of logs.

[get\_log\_all](/help/en/sls/developer-reference/get-log-all#task-2083776)

Queries a large number of logs.

[get\_histograms](/help/en/sls/developer-reference/get-histograms#task-2083777)

Queries the distribution of logs.

[pull\_log](/help/en/sls/developer-reference/pull-log#task-2083780)

Pulls logs.

[pull\_logs](/help/en/sls/developer-reference/pull-logs#task-2083779)

Pulls a large number of logs.

[pull\_log\_dump](/help/en/sls/developer-reference/pull-log-dump#task-2083781)

Downloads a large number of logs to local files in a concurrent manner.

Consumer group management

[create\_consumer\_group](/help/en/sls/developer-reference/create-consumer-group#task-2083792)

Creates a consumer group in a specified Logstore.

[delete\_consumer\_group](/help/en/sls/developer-reference/delete-consumer-group#task-2083793)

Deletes a consumer group.

[update\_consumer\_group](/help/en/sls/developer-reference/update-consumer-group#task-2083794)

Updates a specified consumer group.

[list\_consumer\_group](/help/en/sls/developer-reference/list-consumer-group#task-2083795)

Queries all consumer groups in a specified Logstore.

[update\_check\_point](/help/en/sls/developer-reference/update-check-point#task-2083796)

Updates the checkpoint of a shard from which a specified consumer group consumes data.

[get\_check\_point](/help/en/sls/developer-reference/get-check-point#task-2083797)

Queries the checkpoints of shards from which a specified consumer group consumes data.

## Cloud Shell

Cloud Shell is a web-based CLI tool. Simple Log Service CLI is built in to Cloud Shell. You can access Cloud Shell from a browser and manage the resources of Simple Log Service by using Simple Log Service CLI. For more information, see [Use Cloud Shell](/help/en/cloud-shell/using-the-cloud-command-line#task-1958468).

## References

For more information, see [Simple Log Service CLI](https://aliyun-log-cli.readthedocs.io/en/latest/README_CN.html).
