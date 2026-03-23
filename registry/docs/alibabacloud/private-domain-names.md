If you migrate a database to the cloud and want to continue using its original domain name, you can use the private domain name feature to bind the domain name.

## Scenarios

You can bind a private domain name to each private endpoint of PolarDB. The private domain name is effective only in the specified VPC within the current region. Private domain names have a higher priority than global domain names and are parsed first.

For example, the original domain name of your database is developer.aliyundoc.com. You migrate the database to a PolarDB cluster. The endpoint of the PolarDB cluster is image.developer.aliyundoc.com. To continue using the original domain name, you can create a private domain name to bind developer.aliyundoc.com to image.developer.aliyundoc.com using a canonical name (CNAME) record. After the binding is successful, you can access the PolarDB cluster by accessing developer.aliyundoc.com in the specified VPC, as shown in the following figure.

![Private domain name scenario](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4742659361/p99506.png)

## Billing

The private domain name feature of PolarDB works by mapping a private domain name managed by PrivateZone to a private endpoint of PolarDB. PrivateZone charges a small fee. For more information, see [Billing](/help/en/dns/product-price-dns2-0).

## Bind a private domain name

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**, select the region of the cluster, and then click the ID of the destination cluster to go to its product page.
    
2.  On the **Basic Information** page, in the **Database Connections** section, click the ![Switch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0526572061/p132024.png) icon in the upper-right corner to switch the view.
    
3.  Click **Bind Private Domain Name** to the right of the destination private endpoint.
    
4.  In the **Bind Private Domain Name** dialog box, enter the prefix and suffix of the private domain name. The format of a private domain name is `<Prefix>.<Suffix>`. For more information, see the following table:
    
    ![Private domain name prefix and zone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6846748561/p98462.png)
    
    **Configuration**
    
    **Description**
    
    Private domain name prefix
    
    The prefix must be 6 to 40 characters in length. It must start with a letter and end with a digit or letter. It can contain lowercase letters, digits, and hyphens (-).
    
    Private domain name suffix (Zone)
    
    You can select an existing zone from the drop-down list or enter a new zone. For more information about zones, see [PrivateZone](/help/en/dns/introduction-to-intranet-analysis).
    
    **Note**
    
    -   If the VPC that contains the PolarDB cluster is not in the configured zone, the system automatically attaches the VPC to the zone.
        
    -   You can view and manage zones in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/overview).
        
    
    **Note**
    
    When you bind a private domain name, the system automatically creates a service-linked role (AliyunServiceRoleForPolarDB). For more information, see [Service-linked role for PolarDB](/help/en/polardb/polardb-for-oracle/ram-role-linked-to-apsara-polardb#concept-2469063).
    
5.  Click **OK**.
    
6.  In the **Bind Private Domain Name** dialog box, confirm that the domain name information is correct, and then click **OK**.
    

## Related API operations

**API**

**Description**

[ModifyDBEndpointAddress](/help/en/polardb/polardb-for-oracle/api-modifydbendpointaddress-2#doc-api-polardb-ModifyDBEndpointAddress)

This API operation is used to modify the endpoints of a PolarDB cluster. These endpoints include the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
