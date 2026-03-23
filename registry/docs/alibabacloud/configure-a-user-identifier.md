After you install LoongCollector on a server, you must create a machine group to manage the server as a resource in Simple Log Service (SLS). Next, create a LoongCollector collection configuration to define data collection rules. To apply these rules to a server, you must apply the collection configuration to the server's machine group.

## **Core concepts and their relationships**

### **What is a machine group**

A machine group is a logical grouping of servers managed as a single resource within an SLS project. SLS uses machine groups to manage servers. A server is associated with a machine group through heartbeats.

SLS provides the following two types of machine groups:

#### **IP address-based machine group**

To use an IP address-based machine group, you must add the IP addresses of your servers to the machine group.

-   This type of machine group is easier to create and configure.
    
-   If an IP address conflict occurs or an IP address changes, the heartbeat may fail, which affects data collection.
    

#### **Custom identifier-based machine group**

Create an association by configuring a custom string as an identifier in the machine group and adding this string to an identifier file on the server. You can add multiple custom identifiers to the identifier file on a server. Each identifier must be on a new line.

-   The configuration process is more complex than that of an IP address-based machine group. However, this method prevents data collection failures caused by IP address conflicts, which can occur in custom network environments such as a **VPC**.
    
-   This type of machine group supports automatic scaling. If you configure new servers with the same custom identifier, SLS automatically detects and adds them to the machine group. Conversely, if you no longer need to collect logs from a server, delete its identifier file, and the machine group automatically removes the server.
    
-   A business system often consists of multiple modules, and you can horizontally scale each module by adding servers. To efficiently collect and classify log data, we recommend that you create a separate machine group for each module. For example, a website may consist of an HTTP request module, a logic module, and a storage module. Define their custom identifiers as `http_module`, `logic_module`, and `store_module`.
    

#### **How to create a machine group**

To establish a heartbeat-based association between a machine group and a server, you must first install the LoongCollector agent on the server. We recommend that you create a machine group when you install the agent. For more information, see [LoongCollector installation (Linux)](/help/en/sls/loongcollector-installation-linux) or [Install LoongCollector (Kubernetes)](/help/en/sls/loongcollector-installation-kubernetes-1).

### **What is a LoongCollector collection configuration**

A collection configuration is a set of core rules that define how to collect and process data. It lets you configure settings to efficiently collect, parse, filter, and process data. A collection configuration is attached to a machine group to apply the collection rules to all servers in that group. Processing occurs on the server itself, consuming local resources. A collection configuration consists of the following three parts:

-   Global configuration: Includes the collection configuration name, log topic, and tags. Use topics and tags to mark and classify collected logs.
    
-   Input configuration: Defines the type of data to collect, such as file input, standard cluster output, SQL query results, or HTTP input. It also defines specific information for each data type, such as the collection path and source.
    
-   Processing configuration: Defines the rules for parsing data using a combination of [plugins](/help/en/sls/logtail-plug-in-list). This lets you format the data as needed by performing actions such as filtering, desensitizing, matching with regular expressions, or parsing JSON-formatted data.
    

#### **How to create a collection configuration**

A collection configuration must be attached to a machine group to apply its rules to the servers in that group. Therefore, we recommend that you create the collection configuration based on the data source type and follow the complete data collection process. For more information, see [Log data collection](/help/en/sls/sls-log-collection/).

### **Relationship between machine groups and collection configurations**

SLS supports a many-to-many relationship between collection configurations and machine groups: A single collection configuration can be applied to multiple machine groups, and a single machine group can use multiple collection configurations. Because collection configurations are attached to machine groups, if you add or remove a server from a machine group, the corresponding collection configurations are automatically applied to or removed from that server. This design decouples servers from collection configurations. Note that all servers within a single machine group must use the same operating system.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7578590671/CAEQThiBgMDvne2A0BkiIGM0YTM4YTczMGFjMjQ5MzFiZDk1MWFkZjJhMjM2M2Jl4326364_20240329092820.630.svg)

## **Use cases for associating machine groups with collection configurations**

### **Collect logs from multiple directories**

**Requirement**: You need to collect logs from `/var/log/messages` and `/opt/app/logs/*.log` and send them to the same logstore.

**Solution**:

1.  Create two collection configurations in the destination logstore. Set the path for one configuration to `/var/log/messages` and the path for the other to `/opt/app/logs/*.log`.
    
2.  Apply the two collection configurations to the same machine group.
    
3.  SLS collects data from the `/var/log/messages` and `/opt/app/logs/*.log` paths on all servers in the machine group and sends the data to the destination logstore.
    

### **Upload logs from the same server to multiple logstores**

**Requirement**: You need to send multiple types of logs from different directories on a single server to different logstores.

**Solution**:

1.  Create different collection configurations in different logstores.
    
    > If multiple configurations collect data from the same file, you must enable **Allow a file to be collected multiple times** in the input configuration. For more information, see [Multiple log collections](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#72bb41c552wqn).
    
2.  Apply these collection configurations to the same machine group.
    
3.  SLS uploads the different logs from the servers in the machine group to the corresponding logstores based on the collection configurations.
    

### **Centralize logs from different servers**

**Requirement**: You need to collect a specific type of log from multiple servers that are in different machine groups and save the logs to the same logstore.

**Solution**:

1.  Create a collection configuration in the destination logstore.
    
2.  Apply this collection configuration to the multiple machine groups that contain the servers.
    
3.  SLS collects logs from the servers in the specified machine groups and sends them to the destination logstore.
    

### **Change the collection rules on a server**

**Requirement 1**: The rules in an applied collection configuration are outdated or no longer meet your needs, and you want to use a different collection configuration.

**Solution**:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** list, click the target project. In the navigation pane on the left, choose **Resources** > **Machine Groups**. On the **Machine Groups** page, select the machine group that you want to modify. Then, on the **Machine Group Configurations** page, click **Modify**.
    
2.  In the **Manage Configuration** panel, view the list of available collection configurations on the left. Select the required configurations and move them to the applied list on the right.
    

**Requirement 2**: You need to apply an existing collection configuration when you add a new server, or you need to stop collecting logs from an existing server.

**Solution**:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** list, click the target project. In the navigation pane on the left, choose **Resources** > **Machine Groups**. On the **Machine Groups** page, select the machine group that you want to modify, and then modify its settings on the **Machine Group Configurations** page.
    
2.  Modify the servers in the machine group to apply or remove the collection configuration:
    
    1.  For an IP address-based machine group, add or delete IP addresses in the IP Address field. Separate multiple IP addresses with new lines.
        
        > The IP address must match the value of the `ip` field in the /usr/local/ilogtail/app\_info.json file on the server.
        
    2.  For a custom identifier-based machine group, configure the same **Custom Identifier** on the new server. This method enables automatic scaling. New servers with the identifier are automatically added, while servers with the identifier file removed are automatically deregistered.
        
    
    **Note**
    
    Adding a server to a machine group does not automatically install LoongCollector. You must first install LoongCollector on the new server.
