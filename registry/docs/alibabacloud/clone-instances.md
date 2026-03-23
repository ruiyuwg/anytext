When you need identical or near-identical Elastic Compute Service (ECS) instances for testing, scaling, disaster recovery, or migration, clone an existing instance instead of configuring a new one from scratch. Cloning copies the instance type and configuration, and optionally copies disk data.

## Cloning modes

**Mode**

**Contain Instance Data**

**What is created**

**Data copied**

Configuration only

Not selected

New instance with the same instance type and configuration

No

Configuration and data

Selected

New instance with the same instance type, configuration, and disk data

Yes (via intermediate custom images)

**Note**

To migrate data between two existing instances, use a different workflow: [Create a custom image from the source instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance) > [Copy the image](/help/en/ecs/user-guide/copy-an-image) (cross-region only) > [Replace the target instance's operating system](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).

## Limitations

-   Only VPC-based instances support cloning. Classic network instances are not supported.
    
-   A single cloning task supports up to 20 instances.
    
-   Cloning is only available in the ECS console. No API operation is available.
    

## Prerequisites

Before you begin, make sure that:

-   The source instance's image is visible on the [Images page in the ECS console](/help/en/ecs/user-guide/find-an-image#687ab5f2d9lcg) or returned by the [DescribeImages](/help/en/ecs/api-describeimages#doc-api-Ecs-DescribeImages) operation
    
-   (RAM users) The AliyunECSFullAccess, AliyunVPCFullAccess, and AliyunROSFullAccess system policies are attached to the RAM user. See [Create a RAM user and grant permissions](/help/en/ram/product-overview/create-and-authorize-a-ram-user)
    

## Clone an instance

1.  Go to the [ECS console Instances page](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the source instance.
    
3.  Click the target **Instance ID** to open the instance details page. Click **All Actions** in the upper-right corner, then search for and click **Clone Instance**.
    
4.  In the **Clone Instance** dialog box, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Destination Region**
    
    Region for the clone instance.
    
    **Destination Zone**
    
    Zone for the clone instance.
    
    **Destination VPC**
    
    VPC for the clone instance. If not specified, the system creates a vSwitch based on the source vSwitch configuration and assigns a private IP address from the new CIDR block. If a destination vSwitch is specified, the system assigns a private IP address from that vSwitch's CIDR block. If not specified during cross-region cloning, the system creates a VPC based on the source VPC configuration and selects a zone to create a vSwitch based on the source vSwitch. When a different VPC or region is specified, the system creates security groups in the destination. When the source VPC or region is specified, the source security groups are reused.
    
    **Destination vSwitch**
    
    vSwitch for the clone instance.
    
    **Destination Instance Quantity**
    
    Number of clone instances to create. Maximum: 100. If the number exceeds the remaining instance quota, only the number allowed by the quota are created.
    
    **Contain Instance Data**
    
    When not selected, the system creates a clone instance with the same instance type as the source instance. When selected, the system creates a clone instance with the same instance type and data as the source instance. We recommend that you stop the source instance before cloning to ensure data consistency. If the source instance type is out of stock, the system selects a similar instance type.
    
5.  In the **Configuration Preview** step, confirm the configuration and click **Start**.
    
    **Note**
    
    The first time you clone an instance, read the **ECS Terms of Service** and select **I have read and agreed to ECS Terms of Service**.
    
6.  Monitor the cloning progress. Cloning is implemented by Resource Orchestration Service (ROS). View progress in the [ROS console](https://ros-intl.console.alibabacloud.com/cn-hangzhou/stacks). After cloning completes, the ROS stack is automatically deleted, but all created resources (VPC, vSwitch, security groups, custom image, and instance) are retained.
    
7.  In the **Clone Result** step, the message "The instance is cloned" confirms that cloning is complete.
    

## Verify the clone instance

After cloning, verify that the clone instance works as expected:

1.  Go to the [Instances page](https://ecs.console.alibabacloud.com/server/region) in the destination region. Confirm the clone instance is in the **Running** state.
    
2.  Click the clone instance ID and confirm the instance type, VPC, vSwitch, and security group assignments match expectations.
    
3.  Verify the private IP address and public IP address. Reassociate an Elastic IP Address (EIP) if needed.
    
4.  If **Contain Instance Data** was selected, log in to the clone instance and verify that data disks are mounted and data is intact.
    
5.  Start applications and verify network connectivity. Check inbound and outbound security group rules, especially if the instance was cloned to a different VPC or region.
    
6.  Configure CloudMonitor alert rules for the clone instance. Monitoring settings are not cloned from the source instance.
    

## What gets cloned

**Attribute**

**Clone behavior**

Instance name

Same as the source instance.

Instance type

Same as the source instance. If the source instance type is out of stock in the destination zone, the system selects a similar instance type.

User data (cloud-init)

Cloned with the instance configuration.

Private IP address

Different. If no destination vSwitch is specified, the system creates a vSwitch based on the source vSwitch configuration and assigns a private IP address from the new CIDR block. If a destination vSwitch is specified, the system assigns a private IP address from that vSwitch's CIDR block.

Public IP address

Different. Automatically assigned and unique.

EIP

Not cloned. If an EIP is associated with the source instance, the system does not automatically create and associate an EIP with the clone instance. Associate an EIP manually after cloning.

Security groups

If the source VPC is used, the clone instance inherits the source security groups. If a different VPC or region is specified, the system clones one security group from the source instance. Security group rules remain the same.

Monitoring settings

Not cloned. CloudMonitor alert rules targeting the source instance are not applied to the clone instance. Configure monitoring after cloning.

## Billing

The clone instance uses the same billing method as the source instance.

When **Contain Instance Data** is selected, the system creates intermediate custom images named with the prefix `TemplateScratch-`. These images incur storage charges. For image pricing, see [Images](/help/en/ecs/images).

**Scenario**

**Contain Instance Data**

**How it works**

In-region cloning

Selected

Creates a custom image from the source instance, then creates the clone instance from that image.

In-region cloning

Not selected

Creates the clone instance from the source instance's existing image.

Cross-region cloning

Selected

Creates a custom image from the source instance, copies the image to the destination region, then creates the clone instance from the image copy.

Cross-region cloning

Not selected

Creates the clone instance from the source instance's image in the destination region. The image must be a public image or Alibaba Cloud Marketplace image available in the destination region.

**Important**

-   If the source instance does not have an associated image, select **Contain Instance Data**.
    
-   You are charged for the custom image and the image copy. If you no longer require them, delete them in the source or destination region after cloning.
    

## FAQ

### Why did my clone instance get a different instance type?

If the source instance type is out of stock in the destination zone, the system automatically selects a similar instance type. Check the clone instance details page to confirm the assigned instance type.

### Can I clone to a different region without selecting Contain Instance Data?

Yes, but only if the source instance's image is a public image or Alibaba Cloud Marketplace image available in the destination region. If the source instance uses a custom image, select **Contain Instance Data** to copy the image to the destination region.

### Why do I see a TemplateScratch- image after cloning?

When **Contain Instance Data** is selected, the system creates a custom image with the prefix `TemplateScratch-` as part of the cloning process. Delete this image after cloning if it is no longer needed to avoid storage charges.

### What resources are retained after cloning?

The ROS stack used for cloning is automatically deleted, but all created resources are retained: VPC, vSwitch, security groups, custom images, and the clone instance. Manage or delete these resources as needed.
