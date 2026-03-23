Resource Center is activated by default for new Alibaba Cloud accounts. If you are a long-standing user or have previously deactivated Resource Center, you can follow this topic to manually activate it.

**Note**

Resource Center is an upgrade of Resource Meta Center (RMC). If you have activated RMC, you can use Resource Center without the need to activate it.

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center).
    
2.  On the **Resource Center** page, click **Enable**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4661713571/p987876.png)
    
    The system typically takes a few minutes to build the resource center and collect resource data. This process may take longer if you have a large number of resources.
    

## Result

Resource Center collects data by calling the list or query API operations of various cloud services. By activating Resource Center, you grant it permission to create a service-linked role named AliyunServiceRoleForResourceMetaCenter. Resource Center then assumes this role to collect your resource data and build your resource center. For more information, see [Service-linked role for Resource Center](/help/en/resource-management/security-and-compliance/service-linked-role-for-resource-center#concept-2281154).

Every resource discovery action performed by Resource Center generates an event that is logged in ActionTrail. For example, when Resource Center assumes the AliyunServiceRoleForResourceMetaCenter role to discover your virtual private clouds (VPCs), an event is logged. The following figure shows an example of such an event.

![操作审计记录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7379480861/p611514.jpg)
