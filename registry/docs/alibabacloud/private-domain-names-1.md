Assume that you use domain names to connect to databases and you want to retain the original domain names of the databases after the databases are migrated to the cloud. In this case, you can bind the private domain names by using the private domain name feature.

## Scenarios

You can bind a private domain name to each VPC-facing endpoint of PolarDB. Private domain names take effect in only the VPC that you specify in the current region. Private domain names have a higher priority for resolution than the domain names that take effect in the globe.

For example, the original domain name of a database is developer.aliyundoc.com, and the database is migrated to the PolarDB cluster. The endpoint of the PolarDB cluster is image.developer.aliyundoc.com. To allow the original domain name to remain unchanged, you can create a private domain name to bind developer.aliyundoc.com that is a CNAME record to image.developer.aliyundoc.com. After the domain name is bound to the endpoint, you can access the PolarDB cluster by visiting developer.aliyundoc.com in the specified VPC, as shown in the following figure.

![Scenario of the private domain name](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4742659361/p99506.png)

## Billing description

The private domain name feature of PolarDB is realized by mapping the private domain names that are managed by PrivateZone to the VPC-facing endpoints of PolarDB. PrivateZone charges a small amount of fee. For more information about pricing, see [Pricing](/help/en/privatezone/latest/pricing).

## Bind a private domain name

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the upper-right corner of the **Endpoints** section on the **Basic Information** page, click the ![Switch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0526572061/p132024.png) icon to switch the view.
    
5.  On the right side of the VPC-facing endpoint, click **Bind Private Domain Name**.
    
    ![PG/O: Bind the private domain name](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5115732271/p183826.png)
    
6.  In the **Bind Private Domain Name** dialog box, enter the prefix and the suffix of the private domain name.
    
    ![Prefix of a domain name and a zone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6846748561/p98462.png)
    
    The format of private domain names is`<prefix>.<suffix>`. The following table describes the format of the private domain names.
    
    **Configuration**
    
    **Description**
    
    Prefix of a private domain name
    
    The prefix of the private domain name must be 6 to 40 characters in length and can contain at least one of the following types of characters: lowercase letters, digits, and hyphens (-). The prefix must start with a letter and end with a digit or a letter.
    
    Suffix of the private domain name (zone)
    
    You can select an existing zone from the drop-down list or enter a new zone. For more information about zones, see [PrivateZone](/help/en/privatezone/latest/what-is-privatezone).
    
    **Note**
    
    -   If the VPC where your PolarDB cluster resides is not in the configured zone, the system automatically binds the VPC to the zone.
        
    -   You canview and manage zones in the [PrivateZone console](https://dnsnext.console.alibabacloud.com/#/privateZone/list).
        
    
    **Note**
    
    When you bind a private domain name, the system automatically creates an AliyunServiceRoleForPolarDB role. For more information, see [Service-linked roles for PolarDB](/help/en/polardb/polardb-for-postgresql/ram-role-linked-to-apsara-polardb-1#concept-2469063).
    
7.  Click **OK**.
    
8.  In the **Bind Private Domain Name** dialog box, confirm the information about the domain name again and click **OK**.
    

## Related API operations

**API**

**Description**

[ModifyDBEndpointAddress](/help/en/polardb/polardb-for-postgresql/api-modifydbendpointaddress-1#doc-api-polardb-ModifyDBEndpointAddress)

Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
