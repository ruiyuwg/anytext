This topic provides answers to some frequently asked questions about the management of Key Management Service (KMS) instances.

## Questions

-   [Why is a KMS instance always in the Enabling state when I enable the instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-o4s-ba5-svc)
    
-   [Why does the "Failed to Connect" error message appear when I enable a hardware key management instance?](#title-ofa-i18-90d)
    
-   [What do I do if an error occurs when I enable a software key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#84f0955010484)
    
-   [What do I do if an error occurs when I enable a hardware key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#a42dd6a01003e)
    
-   [How do I configure an HSM cluster for a KMS instance of the hardware key management type?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-98n-rnp-3eo)
    
-   [How do I configure the HSM cluster to which I want to connect a hardware key management instance?](#title-8xv-shb-poi)
    
-   [How do I release a KMS instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-6vo-z3j-5w1)
    

## Why is a KMS instance always in the Enabling state after I enable it?

The system requires approximately 30 minutes to enable an instance. You can refresh the page that displays the status of the instance 30 minutes after you enable the instance. If the status of the instance changes to Enabled, the instance is enabled. If the instance is still not enabled, contact technical support. For more information, see [Contact us](/help/en/kms/key-management-service/support/contact-us-1).

For more information, see [Enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#section-4nu-js1-nus).

## Why does the "Failed to Connect" error message appear when I enable a hardware key management instance?

Check the validity of the access credential of the hardware security module (HSM) to which the instance is connected. For more information about the access credential, see [Enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#section-4nu-js1-nus) [Create and activate a cluster](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#10e80480e3soq).

## **What do I do if an error occurs when I enable a software key management instance?**

**Error message**

**Possible cause**

**Solution**

Your VSwitches don't have enough ip address create dedicate kms instance.

The number of available IP addresses of the vSwitch that is associated with the KMS instance is insufficient.

When you establish a private connection between a KMS instance and a cloud service or application, one IP address of the associated vSwitch is used. However, the number of available IP addresses of the vSwitch is 0.

**Note**

To view the number of available IP addresses of a vSwitch, log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc). In the left-side navigation pane, click **vSwitch**. On the page that appears, click the ID of the vSwitch.

Change the associated vSwitch and make sure that the number of available IP addresses of the new vSwitch is greater than or equal to 1.

500:Internal Failure

Alibaba Cloud DNS PrivateZone is not activated.

In most cases, KMS automatically activates Alibaba Cloud DNS PrivateZone. You must manually activate Alibaba Cloud DNS PrivateZone in the following scenarios:

-   You use an Alibaba Cloud account on the China site (aliyun.com) to purchase a KMS instance of the software key management type outside the Chinese mainland.
    
-   You use an Alibaba Cloud account on the International site (alibabacloud.com) to purchase a KMS instance of the software key management type in the Chinese mainland.
    

Manually activate Alibaba Cloud DNS PrivateZone. For more information, see [Activate Alibaba Cloud DNS PrivateZone](/help/en/privatezone/latest/subscribe-service).

**Note**

The fees for domain name resolution are billed to KMS. You do not need to complete payments on the Alibaba Cloud DNS PrivateZone side.

## What do I do if an error occurs when I enable a hardware key management instance?

**Error message**

**Possible cause**

**Solution**

Your VSwitches don't have enough ip address create dedicate kms instance.

The number of available IP addresses of the vSwitch that is associated with the KMS instance is insufficient.

-   When you establish a private connection between a KMS instance and a cloud service or application, one IP address of the associated vSwitch is used.
    
-   KMS creates two to four elastic network interfaces (ENIs) to communicate with an HSM cluster. Each ENI uses one IP address of the vSwitch.
    

**Note**

To view the number of available IP addresses of a vSwitch, log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc). In the left-side navigation pane, click **vSwitch**. On the page that appears, click the ID of the vSwitch.

Change the associated vSwitch and make sure that the number of available IP addresses of the new vSwitch is greater than or equal to 5.

500:Internal Failure

Alibaba Cloud DNS PrivateZone is not activated.

In most cases, KMS automatically activates Alibaba Cloud DNS PrivateZone. You must manually activate Alibaba Cloud DNS PrivateZone in the following scenarios:

-   You use an Alibaba Cloud account on the China site (aliyun.com) to purchase a KMS instance of the hardware key management type outside the Chinese mainland.
    
-   You use an Alibaba Cloud account on the International site (alibabacloud.com) to purchase a KMS instance of the hardware key management type in the Chinese mainland.
    

Manually activate Alibaba Cloud DNS PrivateZone. For more information, see [Activate Alibaba Cloud DNS PrivateZone](/help/en/privatezone/latest/subscribe-service).

**Note**

The fees for domain name resolution are billed to KMS. You do not need to complete payments on the Alibaba Cloud DNS PrivateZone side.

## How do I configure the HSM cluster to which I want to connect a hardware key management instance?

KMS instances of the hardware key management type are connected to HSM clusters to store keys. In this case, you can manage keys and perform cryptographic operations in a centralized manner. Before you use a KMS instance of the hardware key management type, you must configure an HSM cluster. For more information, see [Configure an HSM cluster for a KMS instance of the hardware key management type](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#task-2267046).

## How do I release a KMS instance?

KMS supports refunds for KMS instances. If a KMS instance is refunded, the instance is released. For more information, see [Refunds](/help/en/kms/key-management-service/product-overview/kms-billing#section-0e1-y0z-fle).

If you want to use the keys or secrets in the instance later, we recommend that you back up the instance. For more information, see [Backups](/help/en/kms/key-management-service/user-guide/backups).
