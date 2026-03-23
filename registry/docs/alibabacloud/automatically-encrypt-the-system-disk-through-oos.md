## **Background information**

As more and more enterprises embrace digital transformation, protecting the security of sensitive information has become a key part of business operations. System disks store the operating system, applications, and important configuration files. Therefore, data security of system disks is particularly important in cloud environments. CloudOps Orchestration Service (OOS) provides an automatic solution for system disk encryption to ensure higher data security from the following perspectives:

-   Data protection: uses advanced encryption standards such as Advanced Encryption Standard 256-bit (AES-256) to effectively prevent data breaches. Unauthorized users cannot decrypt data even if the data is stolen or lost.
    
-   Compliance: complies with multiple data protection regulations, such as General Data Protection Regulation (GDPR) and Sarbanes-Oxley (SOX) Act, to help enterprises meet industry security standards and regulatory requirements.
    
-   Easy key management: integrates with Alibaba Cloud Key Management Service (KMS) to provide enterprise-class key lifecycle management. This simplifies the compliance audit process and improves security management efficiency.
    
-   Business continuity: ensures that daily operations and performance of Elastic Compute Service (ECS) instances are not affected by encryption. For example, you can restart, reset, take snapshots of, and create images of an instance as expected after data is encrypted. This ensures business continuity.
    
-   Lower costs: eliminates cumbersome operations and potential errors caused by manual encryption. This reduces labor costs because no additional human resources are required for management and maintenance.
    

## **Prerequisites**

**Important**

During the encryption process, the system disk of an ECS instance is replaced and the instance is restarted. Exercise caution when you perform this operation.

A KMS service key or customer master key (CMK) is available. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/cn-hangzhou/template/public). In the left-side navigation pane, choose Automated Task > Public Template. On the Public Template page, search for the public template **ACS-ECS-BulkyEncryptSystemDisk** and click **Create Execution**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4007392271/p817835.png)
    
2.  On the **Create Task** page, configure the following parameters to create an execution:
    
    -   **RegionId**: the region in which the ECS instances reside.
        
    -   **TargetInstance**: the ECS instances whose system disks you want to encrypt.
        
    -   **KMSKeyId**: the KMS key that you want to use to encrypt the system disks.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4007392271/p817841.png)
    
3.  After the execution is successful, verify that the system disks of the selected ECS instances are encrypted.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4007392271/p817875.png)
    

## **Execution process**

Create a snapshot for the system disk > Create an image from the snapshot > Copy and encrypt the image > Use the encrypted image to replace the system disk

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4007392271/p817805.png)
