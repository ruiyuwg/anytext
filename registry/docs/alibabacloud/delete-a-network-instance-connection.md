You can delete network instance connections created in a transit router, such as virtual private cloud (VPC), Express Connect Router (ECR), VPN, and Cloud Connect Network (CCN) connections. Once deleted, the associated network will lose connectivity to other networks through the transit router.

## **VPC connections managed by cloud services**

For VPC connections that are automatically created by cloud services, such as [WUYING Workspace](/help/en/wuying-workspace/user-guide/attach-to-or-detach-from-cen), and [Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-vpc-firewall-for-an-enterprise-edition-transit-router), you cannot delete them in the Cloud Enterprise Network (CEN) console. Log on to the corresponding service console to delete them.![0553E677-B7E6-445b-834B-A7F199185E11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5748669471/p964944.png)

## Delete a network instance connection

Before deleting a VPC connection, ensure there are no routes associated with the VPC under the **PrivateZone** and **Cloud Services** tabs of the transit router details page. For details, see [Disable access to PrivateZone](/help/en/cen/user-guide/configure-privatezone-2#p-1yz-sz8-05m) and [Disable access to a cloud service](/help/en/cen/user-guide/access-to-cloud-services).

**Note**

Skip the above step if you have added configurations for accessing PrivateZone and cloud services in the route table of an Enterprise Edition transit router.

### **Console**

-   **Delete a connection from an Enterprise Edition transit router**
    
    Go to the details page of the transit router. On the **Intra-region Connections** tab, find the target connection. In the **Actions** column, click **Detach**.
    
    **Warning**
    
    Batch deletion helps you quickly remove instance connections. To avoid compromising your service stability, check the configurations in the dialog box before performing the delete operation.
    
-   **Delete a connection from a Basic Edition transit router**
    
    Go to the details page of the transit router. On the **Intra-region Connections** tab, find the target connection. In the **Actions** column, click **Detach**.
    

### **API**

-   Call the following operations to delete VPC, ECR, VPN, and VBR connections from an Enterprise Edition transit router:
    
    -   [DeleteTransitRouterVpcAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitroutervpcattachment#main-107864)
        
    -   [DeleteTransitRouterEcrAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterecrattachment)
        
    -   [DeleteTransitRouterVpnAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitroutervpnattachment#main-107864)
        
    -   [DeleteTransitRouterVbrAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitroutervbrattachment#main-107864)
        
-   Call the following operation to delete VPC, VBR, and CCN connections from a Basic Edition transit router:
    
    -   [DetachCenChildInstance](/help/en/cen/developer-reference/api-cbn-2017-09-12-detachcenchildinstance#main-107864)
