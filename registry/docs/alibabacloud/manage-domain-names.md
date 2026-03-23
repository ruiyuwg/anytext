Global Accelerator (GA) provides the ICP filing-free service for accelerated domain names. After you associate an accelerated domain name that has an Internet Content Provider (ICP) number with a GA instance, you do not need to complete further ICP filing for the domain name or its subdomains on Alibaba Cloud.

## Background information

According to Administrative Measures on Internet Information Services and Registration Administration Measures for Non-Commercial Internet Information Services, services that are deployed in the Chinese mainland or services that are resolved to servers in the Chinese mainland must have an ICP number.

-   If you do not obtain an ICP number for a website domain name from Alibaba Cloud and you resolve the domain name to Alibaba Cloud servers in the Chinese mainland, Alibaba Cloud suspends the website and requires you to obtain an ICP number for the domain name.
-   If you obtained an ICP number for a website domain name from another service provider and you want to resolve the domain name to Alibaba Cloud servers in the Chinese mainland, you must add Alibaba Cloud to your ICP filing information as a service provider. If the preceding requirement is not met, Alibaba Cloud suspends your website and requires you to add Alibaba Cloud to your ICP filing information as a service provider.

For more information about the procedures and precautions for applying for an ICP number in the Alibaba Cloud ICP Filing system, see [ICP filing application overview](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview#task-2038407).

If you use GA and the service that you want to accelerate is deployed in the Chinese mainland, you can use the domain name management feature of GA. You do not need to check whether the ICP filing information of the accelerated domain name contains Alibaba Cloud as a service provider. After you associate the accelerated domain name with a GA instance, you do not need to complete further ICP filing for the domain name or its subdomains on Alibaba Cloud.

## Limits

-   If an accelerated domain name is deployed in the Chinese mainland or the acceleration region is in the Chinese mainland, you must obtain an ICP number for the domain name.
    
    If you do not obtain an ICP number in the preceding scenarios, Alibaba Cloud suspends your website and the domain name management feature does not take effect. In this case, ICP filing is required for the accelerated domain name and its subdomains.
    
-   The same accelerated domain name cannot be repeatedly associated with the same GA instance.
-   To remove an accelerated domain name from the ICP filing center of Alibaba Cloud, perform the following operations:
    -   Disassociate the domain name from all associated GA instances.
    -   Delete the domain name on the Domain Name Management page.
    -   Release all associated GA instances when the GA instances expire.

## Add a domain name

Add an accelerated domain name and associate the domain name with a GA instance.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
2.  Use one of the following methods to go to the Domain Name Management dialog box.
    -   Method 1: On the Instances page
        
        On the Instances page, click Domain Name Management.
        
    -   Method 2: On the Domain Name Management page
        1.  In the left-side navigation pane, choose Standard Instance > Domain Name Management.
        2.  On the Domain Name Management page, click Domain Name Management.
3.  In the Domain Name Management dialog box, set the following parameters and click OK.
    
    Parameter
    
    Description
    
    Accelerated Domain Name
    
    Enter a primary domain name. Example: example.com.
    
    Associated Instance
    
    Select the GA instance with which you want to associate the accelerated domain name.
    
4.  In the message that appears, check whether the domain name is added and associated with the GA instance, and whether an ICP number is obtained for the domain name. Then, click OK.
    
    -   If the domain name has an ICP number, you do not need to complete further ICP filing for all subdomain names that are associated with the GA instance.
    -   If the domain name does not have an ICP number, you may violate regulations. Obtain an ICP number for the domain name at the earliest opportunity.
    

## View and update the ICP filing status of a domain name

The ICP filing status includes the following types:

-   ICP Filed: The domain name has an ICP number.
-   Illegal: The domain name is included in the blacklist of the Ministry of Industry and Information Technology (MIIT). You must obtain an ICP number for the domain name at the earliest opportunity.
-   ICP Not Filed: The domain name does not have an ICP number and may violate regulations. The domain name will be restricted if you do not obtain an ICP number for the domain name in the specified period of time.
-   Unknown: An unknown error is returned from the ICP filing center.

If the status of your domain name is abnormal, the system sends a notification. This reduces the risk of domain name restriction.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
2.  In the left-side navigation pane, choose Standard Instance > Domain Name Management.
3.  On the Domain Name Management page, find the accelerated domain name that you want to manage, and check the ICP filing status of the domain name in the ICP Filing Status column.
    
    You can click ![Filter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4308621861/p582502.png) next to ICP Filing Status to filter all domain names in a specific state.
    
4.  In the Actions column, click Update ICP Filing Status to obtain the latest ICP filing status of an accelerated domain name.

## Manage associated instances

If your service changes and you need to associate your domain name with more GA instances, perform the following steps:

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
2.  In the left-side navigation pane, choose Standard Instance > Domain Name Management.
3.  On the Domain Name Management page, find the domain name that you want to associate with GA instances and click Associated Instance in the Actions column.
4.  In the Associate Instance panel, you can add or remove GA instances based on the following information.
    -   Add a GA instance
        1.  Click Add Instance.
        2.  In the Add Instance panel, select the GA instance with which you want to associate the domain name and click OK.
    -   Remove a GA instance
        
        **Warning** If you remove a GA instance, the GA instance is disassociated from the domain name. This does not affect the ICP filing status of the domain name. However, the ICP filing-free service provided by Alibaba Cloud for the domain name may become invalid.
        
        1.  In the Actions column of the GA instance to be removed, click Remove.
            
            You can also select multiple GA instances and click Batch Remove.
            
        2.  In the Are you sure that you want to remove the selected instances message, click OK.

## Delete a domain name

**Warning** After the domain name is deleted, GA instances are disassociated from the domain name. This does not affect the ICP filing status of the domain name. However, the ICP filing-free service provided by Alibaba Cloud for the domain name may become invalid.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
2.  In the left-side navigation pane, choose Standard Instance > Domain Name Management.
3.  On the Domain Name Management page, find the domain name that you want to delete and click Delete in the Actions column.
4.  In the message that appears, confirm the domain name to be deleted and the associated GA instances, and then click OK.

## References

-   [CreateDomain](/help/en/ga/api-createdomain#doc-api-Ga-CreateDomain): adds an accelerated domain name and associates the accelerated domain name with GA instances.
-   [UpdateDomainState](/help/en/ga/api-updatedomainstate#doc-api-Ga-UpdateDomainState): updates the ICP filing status of an accelerated domain name.
-   [UpdateDomain](/help/en/ga/api-updatedomain#doc-api-Ga-UpdateDomain): modifies an accelerated domain name.
-   [ListDomains](/help/en/ga/api-listdomains#doc-api-Ga-ListDomains): queries accelerated domain names.
-   [DeleteDomainAcceleratorRelation](/help/en/ga/api-deletedomainacceleratorrelation#doc-api-Ga-DeleteDomainAcceleratorRelation): disassociates an accelerated domain name from GA instances.
-   [GetInvalidDomainCount](/help/en/ga/api-471168#doc-api-Ga-GetInvalidDomainCount): queries the number of invalid domain names.
