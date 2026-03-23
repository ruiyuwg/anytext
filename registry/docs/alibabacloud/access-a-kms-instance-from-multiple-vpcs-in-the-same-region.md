If your self-managed applications are distributed across multiple virtual private clouds (VPCs) within the same region, you can purchase a Key Management Service (KMS) instance in one of the VPCs and associate other VPCs with the instance. This allows applications in different VPCs to share the same instance, simplifying key management. This topic describes how to configure this multi-VPC access.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3579342471/CAEQORiBgICF64W2rBkiIDRjNTU1OWZlNmM3NTQ3NDA4NDg5NDFhMzkxZThkNTIz4965713_20250313103514.793.svg)

## **VPC q**uantity **limits**

Each VPC associated with a KMS instance reduces the **Access Management Quantity** by one. This quantity is set when you purchase the instance. To increase it, see [Modify instance specifications](/help/en/kms/key-management-service/user-guide/manage-kms-instances#6c6e73b014d8y).

**Access Management Quantity**: Covers both the number of VPCs that you can associate with KMS instances and the number of principals you can share the instance with. For example, to associate three VPCs and share with two principals, set this value to at least 5.

## **Prerequisites**

-   A KMS instance is purchased and enabled. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).
    
-   The VPC and the KMS instance must be in the same region.
    
-   If the VPC and the KMS instance are owned by different Alibaba Cloud accounts, ensure that a vSwitch within the VPC is shared with the account owning the KMS instance. See [Resource owner enables VPC sharing](/help/en/vpc/user-guide/resource-owner-enables-vpc-sharing) for instructions.
    

## **Procedure**

## **Console**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click the tab of the instance type based on your business requirements.
    
3.  On the Instances page, find the KMS instance that you want to manage and click **Details** in the **Actions** column. On the page that appears, click the **VPCs** tab.
    
4.  Click **Configure VPC**. In the **Configure VPC** panel, select the VPCs in the **Available VPCs** section and click the ![左箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1702186861/p460507.png) icon.
    
5.  In the **Select vSwitch to Associate with VPC** dialog box, select a vSwitch for each VPC and click **OK**.
    
    You can select a vSwitch regardless of whether it's associated with your application. Make sure that the vSwitch has at least one available IP address. KMS requires this IP to access your network.
    
6.  In the **Configure VPC** panel, click **OK**.
    

## **API**

Call the [UpdateKmsInstanceBindVpc](/help/en/kms/key-management-service/developer-reference/api-updatekmsinstancebindvpc) operation.

## **Terraform**

For instructions, see [Purchase and enable a KMS instance of the software key management type](/help/en/kms/key-management-service/developer-reference/purchase-and-enable-an-instance-of-software-key-management).

## **What to do next**

Select the appropriate integration approach to access KMS instances. KMS provides the Alibaba Cloud SDK, secret SDK, KMS Agent, and KMS instance SDK (not recommended) to integrate keys or secrets from your instances. See [Application access](/help/en/kms/key-management-service/user-guide/application-access/) for further details on KMS integration.
