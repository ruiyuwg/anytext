This topic describes how to connect to an Alibaba Cloud Elasticsearch (ES) cluster using the curl command-line tool.

## Preparations

### Get cluster endpoints

You can connect to an ES cluster using either a private endpoint over a Virtual Private Cloud (VPC) or a public endpoint.

-   VPC private endpoint: Access the ES cluster over a private network for low latency and high stability. This endpoint is enabled by default after the cluster is created.
    
-   Public endpoint: Access the ES cluster over the internet. You must enable this endpoint manually.
    

**Enable public network access**

1.  Log on to the ES console and go to the **Basic Information** page of the instance.
    
2.  In the navigation pane on the left, choose **Configuration and Management** > **Security Settings**, and then enable public network access. When the cluster status changes from **Initializing** to **Valid**, public network access is enabled.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9837422771/p991481.png)
    
    **Important**
    
    A public endpoint reduces the security of your ES cluster. If you use a public endpoint, configure an IP address whitelist and disable public network access promptly after use.
    

### Set an IP address whitelist

To ensure cluster security, add the IP address of the device that you want to use for access to the VPC private whitelist or public access whitelist of the ES cluster. Only devices whose IP addresses are in the whitelist can access the ES cluster.

1.  Obtain the IP address of the device.
    
    Obtain the IP address of the device based on the following scenarios.
    
    **Scenario**
    
    **IP address to obtain**
    
    **Method**
    
    Connect to the ES cluster from an on-premises device
    
    The public IP address of the on-premises device.
    
    If the device is in a local area network (LAN), such as a home or corporate network, add the public egress IP address of the LAN to the public access whitelist of the ES cluster.
    
    Run the `curl ipinfo.io/ip` command to query the public IP address of the on-premises device.
    
    Connect to the ES cluster from an ECS instance in a different VPC
    
    The public IP address of the ECS instance
    
    Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-hangzhou#/) and view it in the instance list.
    
    Connect to the ES cluster from an ECS instance in the same VPC
    
    The private IP address of the ECS instance
    
    Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-hangzhou#/) and view it in the instance list.
    
2.  Add the obtained IP address to a whitelist group.
    
    1.  Log on to the [ES console](https://elasticsearch.console.alibabacloud.com/), go to the **Basic Information** page of the instance. In the navigation pane on the left, choose **Configuration and Management** > **Security Settings**. Click **Modify** to set the VPC private whitelist or public access whitelist in the dialog box that appears.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6413052771/p1047926.png)
        
    2.  Click **Configure** to the right of the default group. In the dialog box that appears, add IP addresses to the VPC private whitelist or public access whitelist. You can configure a maximum of 300 IP addresses or CIDR blocks for a single cluster. Separate multiple IP addresses or CIDR blocks with commas (,). Do not add spaces before or after the commas.
        
        -   You can also click **Add IP Whitelist Group** to create a custom group.
            
        -   Whitelist groups are used only for IP address management and do not affect access permissions. All IP addresses within the groups have the same permissions.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9837422771/p1000313.png)
        
        **Configuration type**
        
        **Format and example**
        
        **Important notes**
        
        IPv4 address format
        
        -   Single IP address: `192.168.0.1`
            
        -   CIDR block: `192.168.0.0/24`
            
        
        -   To deny access: `127.0.0.1`
            
        -   To allow access from all IP addresses: `0.0.0.0/0`
            
            **Important**
            
            This configuration is high-risk. We strongly recommend that you do not set the whitelist to `0.0.0.0/0`.
            
            Some cluster versions, such as 7.16 and 8.5, and regions do not support `0.0.0.0/0`. The console interface or error messages prevail.
            
        
        IPv6 address format
        
        (Supported only by clusters that use the v2 deployment architecture and are in the China (Hangzhou) region)
        
        -   Single IP address: `2401:XXXX:1000:24::5`
            
        -   CIDR block: `2401:XXXX:1000::/48`
            
        
        -   Deny all access: `::1`
            
        -   To allow access from all IP addresses: `::/0`
            
            **Important**
            
            We strongly recommend that you do not configure `::/0` because it poses a high security risk.
            
            Some cluster versions do not support `::/0`. The console interface or configuration prompts prevail.
            
        
    3.  After the configuration is complete, click **Confirm**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9837422771/p1000623.png)
        

## Connect to the cluster

### Command format

```
curl -u '<UserName>:<YourPassword>' 'https://<YourEsHost>:<port>'
```

**Parameter**

**Description**

UserName

The default username is elastic. This user has the highest permissions on the cluster and can be considered the administrator account.

For security reasons, do not use this default administrator account in a production environment. Use the role-based access control (RBAC) mechanism of Elasticsearch X-Pack to create custom roles, assign permissions, and then assign the roles to users for fine-grained access control. For more information, see [Use the RBAC mechanism of Elasticsearch X-Pack to implement access control](/help/en/es/user-guide/use-the-rbac-mechanism-provided-by-elasticsearch-x-pack-to-implement-access-control#task-2008398).

YourPassword

The password for the specified UserName.

https

The access protocol. The HTTP protocol is enabled by default.

We recommend that you enable and use the HTTPS protocol to ensure the confidentiality, security, and integrity of data during transmission. To enable the HTTPS protocol, log on to the [ES console](https://elasticsearch.console.alibabacloud.com/), go to the **Basic Information** page of the instance. In the navigation pane on the left, choose **Configuration and Management** > **Security Settings**.

**Important**

Before you enable the HTTPS protocol, update your application code to support HTTPS connections. Otherwise, existing code that uses the HTTP protocol cannot establish a secure connection, which causes connection failures.

YourEsHost

The cluster endpoint obtained in the Preparations section:

-   VPC private endpoint
    
-   Public endpoint
    

port

The access port of the cluster. The default port number for both private and public access is 9200.

### Connection example

```
# Public access example
curl -u 'user123:Passw0rd!' 'https://es-xx-xxxxxxxxxxxxxxxxx.public.elasticsearch.aliyuncs.com:9200'
# Private access example
curl -u 'user123:Passw0rd!' 'https://es-cn-0pp1****.vpc.elasticsearch.aliyuncs.com:9200'
```

If the connection is successful, the following cluster information is returned. You can then manage the cluster or perform index operations. For more information, see [Elasticsearch REST APIs](https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html).

```
{
  "name" : "es-cn-aic**************-master-i-2",
  "cluster_name" : "es-cn-aic**************",
  "cluster_uuid" : "InmpfI1oQB2ijtdZ******",
  "version" : {
    "number" : "8.17.0",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "0bdf7********************************50279ae7c",
    "build_date" : "2025-03-05T02:31:55.853663566Z",
    "build_snapshot" : false,
    "lucene_version" : "10.0.0",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```
